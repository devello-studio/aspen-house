import { useState, useRef, useCallback } from "react";
import { Link } from "react-router";
import { Phone, Send, Loader2, HeartHandshake } from "lucide-react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { TurnstileSetupAlert } from "../TurnstileSetupAlert";
import { TURNSTILE_SITE_KEY } from "../../../constants/env";

export function Contact() {
  const turnstileRef = useRef<TurnstileInstance>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ variant: "success" | "destructive"; message: string } | null>(
    null,
  );

  const handleTurnstileSuccess = useCallback((token: string) => {
    setTurnstileToken(token);
    setFeedback(null);
  }, []);

  const handleTurnstileExpire = useCallback(() => {
    setTurnstileToken(null);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);

    if (!TURNSTILE_SITE_KEY) {
      setFeedback({
        variant: "destructive",
        message: "Contact form is not configured (missing VITE_TURNSTILE_SITE_KEY).",
      });
      return;
    }

    if (!turnstileToken) {
      setFeedback({
        variant: "destructive",
        message: "Please complete the verification challenge before sending.",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          turnstileToken,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; message?: string };

      if (!res.ok) {
        setFeedback({
          variant: "destructive",
          message: data.message ?? "Could not send your message. Please try again.",
        });
        turnstileRef.current?.reset();
        setTurnstileToken(null);
        return;
      }

      setFeedback({
        variant: "success",
        message: data.message ?? "Thank you for your message! We will get back to you soon.",
      });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      turnstileRef.current?.reset();
      setTurnstileToken(null);
    } catch {
      setFeedback({
        variant: "destructive",
        message: "Network error. Is the API running? Try: npm run dev:all",
      });
      turnstileRef.current?.reset();
      setTurnstileToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-muted to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-primary mb-6">Contact Us</h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Our current priority is creating a strong foundation for our roots to take hold and flourish.
            Please send us a message if you would like to be involved in supporting Aspen House in its
            development, or sign up below if you&apos;d like to keep up with our progress once we open our
            home.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Support resources (aligned with aspenhouseslc.org/contact/) */}
            <div className="lg:col-span-1">
              <Card className="border-2 border-primary/10 h-full">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4">
                    <HeartHandshake size={24} className="text-primary" aria-hidden />
                  </div>
                  <h2 className="text-lg font-semibold text-primary mb-3 leading-snug">
                    We are not yet operational. If you are in need of support now, please explore these great
                    resources:
                  </h2>
                  <ul className="space-y-3 text-sm text-foreground/90 list-none pl-0">
                    <li>
                      <span className="text-foreground/70">National Human Trafficking Hotline: </span>
                      <a
                        href="tel:18883737888"
                        className="text-primary font-medium underline underline-offset-2 hover:text-primary/80"
                      >
                        1-888-3737-888
                      </a>
                    </li>
                    <li>
                      <span className="text-foreground/70">Text </span>
                      <span className="font-medium">&quot;Help&quot;</span>
                      <span className="text-foreground/70"> or </span>
                      <span className="font-medium">&quot;Info&quot;</span>
                      <span className="text-foreground/70"> to </span>
                      <span className="font-medium">233733</span>
                    </li>
                    <li>
                      <span className="text-foreground/70">Utah Human Trafficking Tip line: </span>
                      <a
                        href="tel:8012003443"
                        className="text-primary font-medium underline underline-offset-2 hover:text-primary/80"
                      >
                        801-200-3443
                      </a>
                    </li>
                    <li>
                      <span className="text-foreground/70">Utah Domestic Violence 24-hr Hotline: </span>
                      <a
                        href="tel:18008975465"
                        className="text-primary font-medium underline underline-offset-2 hover:text-primary/80"
                      >
                        1-800-897-5465
                      </a>
                    </li>
                    <li>
                      <span className="text-foreground/70">Utah Sexual Violence 24-hr Hotline: </span>
                      <a
                        href="tel:18884211100"
                        className="text-primary font-medium underline underline-offset-2 hover:text-primary/80"
                      >
                        1-888-421-1100
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-primary/10">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-primary mb-6">Get in touch</h2>

                  {feedback && (
                    <Alert
                      variant={feedback.variant === "destructive" ? "destructive" : "default"}
                      className={
                        feedback.variant === "success"
                          ? "border-green-600/50 bg-green-50 text-green-900 dark:bg-green-950/30 dark:text-green-100"
                          : undefined
                      }
                    >
                      <AlertTitle>{feedback.variant === "success" ? "Sent" : "Could not send"}</AlertTitle>
                      <AlertDescription>{feedback.message}</AlertDescription>
                    </Alert>
                  )}

                  <TurnstileSetupAlert />

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="(801) 555-0100"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="How can we help?"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full min-h-[150px]"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    {TURNSTILE_SITE_KEY ? (
                      <div className="flex justify-start">
                        <Turnstile
                          ref={turnstileRef}
                          siteKey={TURNSTILE_SITE_KEY}
                          onSuccess={handleTurnstileSuccess}
                          onExpire={handleTurnstileExpire}
                          options={{ theme: "light" }}
                        />
                      </div>
                    ) : null}

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting || !TURNSTILE_SITE_KEY}
                      className="bg-primary hover:bg-primary/90 w-full md:w-auto"
                    >
                      {isSubmitting ? (
                        <Loader2 size={18} className="mr-2 animate-spin" />
                      ) : (
                        <Send size={18} className="mr-2" />
                      )}
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
            Quick answers to common questions about our programs and services.
          </p>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="border-2 border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-primary">
                  How do I apply for the residential program?
                </h3>
                <p className="text-foreground/80">
                  Contact our admissions team at (801) 555-0100 or email admissions@aspenhouseslc.org to
                  schedule an initial consultation. We'll discuss your needs and walk you through the
                  application process.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-primary">Is there a cost for your services?</h3>
                <p className="text-foreground/80">
                  Our residential program is provided at no cost to participants. We're funded through
                  donations, grants, and community support to ensure financial barriers don't prevent women
                  from accessing our services.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-primary">
                  Can I tour the facility before applying?
                </h3>
                <p className="text-foreground/80">
                  Yes! We offer tours by appointment. Please call us to schedule a visit and learn more about
                  our facilities and programs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-primary">
                  How can I support your organization?
                </h3>
                <p className="text-foreground/80">
                  There are many ways to help! You can make a financial donation, volunteer your time, donate
                  items from our wish list, or help spread awareness about our mission. Visit our{" "}
                  <Link to="/get-involved" className="text-primary font-medium underline underline-offset-2 hover:text-primary/80">
                    Get Involved
                  </Link>{" "}
                  page to learn more.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="border-2 border-destructive/30 bg-destructive/5">
            <CardContent className="p-8 text-center">
                  <h2 className="text-3xl font-bold text-destructive mb-4">Need Immediate Help?</h2>
              <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
                If you&apos;re in crisis or need immediate assistance, please reach out to a trained advocate
                through one of these national or Utah resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-destructive hover:bg-destructive/90" asChild>
                  <a href="tel:18883737888">
                    <Phone className="mr-2" size={20} />
                    National Human Trafficking Hotline: 1-888-3737-888
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-destructive text-destructive hover:bg-destructive hover:text-white" asChild>
                  <a href="tel:18008975465">Utah Domestic Violence 24-hr: 1-800-897-5465</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
