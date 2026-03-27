import http from "node:http";
import { handleContact } from "./contact.js";

const PORT = Number(process.env.PORT || 3000);
const HOST = process.env.HOST ?? "0.0.0.0";

const server = http.createServer(async (req, res) => {
  const path = req.url?.split("?")[0] ?? "";

  if (req.method === "GET" && path === "/health") {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ ok: true }));
    return;
  }

  if (req.method === "POST" && path === "/api/contact") {
    await handleContact(req, res);
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify({ ok: false, message: "Not found" }));
});

server.listen(PORT, HOST, () => {
  console.log(`[api] http://${HOST}:${PORT}/api/contact (health: /health)`);
});
