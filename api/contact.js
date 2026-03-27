/**
 * POST /api/contact — validates Cloudflare Turnstile, sends mail via Resend.
 * Supports formType: "contact" (default) | "volunteer"
 */

function json(res, status, body) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(body));
}

async function readBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString("utf8");
}

async function verifyTurnstile(token, secret) {
  if (!secret || !token) return false;
  const params = new URLSearchParams();
  params.set("secret", secret);
  params.set("response", token);
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });
  const data = await res.json();
  return data.success === true;
}

async function sendResendEmail({ from, to, replyTo, subject, text }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not configured");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: replyTo,
      subject,
      text,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Resend ${res.status}: ${errText}`);
  }
  return res.json();
}

function isValidISODate(s) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
  const d = new Date(s + "T12:00:00");
  return !Number.isNaN(d.getTime());
}

export async function handleContact(req, res) {
  let raw;
  try {
    raw = await readBody(req);
  } catch (e) {
    console.error(e);
    return json(res, 400, { ok: false, message: "Could not read request body." });
  }

  if (raw.length > 100_000) {
    return json(res, 413, { ok: false, message: "Request too large." });
  }

  let body;
  try {
    body = JSON.parse(raw || "{}");
  } catch {
    return json(res, 400, { ok: false, message: "Invalid JSON." });
  }

  const formType = String(body.formType || "contact").trim();
  const turnstileToken = String(body.turnstileToken || "").trim();

  if (!turnstileToken) {
    return json(res, 400, {
      ok: false,
      message: "Please complete the verification challenge.",
    });
  }

  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    return json(res, 500, { ok: false, message: "Server verification is not configured." });
  }

  const turnstileOk = await verifyTurnstile(turnstileToken, secret);
  if (!turnstileOk) {
    return json(res, 400, {
      ok: false,
      message: "Verification failed. Please try again.",
      code: "turnstile_failed",
    });
  }

  const from = process.env.RESEND_FROM;
  const to = process.env.FORM_NOTIFICATION_EMAIL;
  if (!from || !to) {
    return json(res, 500, { ok: false, message: "Email delivery is not configured." });
  }

  if (formType === "volunteer") {
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const consultationDate = String(body.consultationDate || "").trim();

    if (!name || !email || !phone || !consultationDate) {
      return json(res, 400, {
        ok: false,
        message: "Please fill in name, email, phone, and consultation date.",
      });
    }

    if (!isValidISODate(consultationDate)) {
      return json(res, 400, {
        ok: false,
        message: "Please choose a valid date.",
      });
    }

    const subject = "Volunteer consultation request — Aspen Magdalene House";
    const text = [
      "Volunteer / consultation signup",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Preferred consultation date: ${consultationDate}`,
    ].join("\n");

    try {
      await sendResendEmail({
        from,
        to,
        replyTo: email,
        subject,
        text,
      });
    } catch (e) {
      console.error(e);
      return json(res, 500, {
        ok: false,
        message: "Could not send your request. Please try again later.",
      });
    }

    return json(res, 200, {
      ok: true,
      message: "Thank you! We will reach out about your consultation.",
    });
  }

  // --- default: contact form ---
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const message = String(body.message || "").trim();
  const phone = String(body.phone || "").trim();
  const subjectLine = String(body.subject || "").trim();

  if (!name || !email || !message) {
    return json(res, 400, {
      ok: false,
      message: "Please fill in name, email, message, and complete the verification.",
    });
  }

  const emailSubject = subjectLine
    ? `Contact: ${subjectLine}`
    : "Contact form — Aspen Magdalene House";

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    subjectLine ? `Subject: ${subjectLine}` : null,
    "",
    "Message:",
    message,
  ]
    .filter((line) => line !== null)
    .join("\n");

  try {
    await sendResendEmail({
      from,
      to,
      replyTo: email,
      subject: emailSubject,
      text,
    });
  } catch (e) {
    console.error(e);
    return json(res, 500, {
      ok: false,
      message: "Could not send your message. Please try again later.",
    });
  }

  return json(res, 200, { ok: true, message: "Thank you! Your message has been sent." });
}
