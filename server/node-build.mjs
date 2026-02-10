import path from "path";
import "dotenv/config";
import * as express from "express";
import express__default from "express";
import cors from "cors";
import { z } from "zod";
const handleDemo = (req, res) => {
  const response = {
    message: "Hello from Express server"
  };
  res.status(200).json(response);
};
const ContactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  company: z.string().optional().default(""),
  phone: z.string().optional().default(""),
  message: z.string().min(1, "Message is required")
});
const handleContact = async (req, res) => {
  try {
    const validatedData = ContactFormSchema.parse(req.body);
    const clientIp = req.headers["x-forwarded-for"]?.split(",")[0].trim() || req.socket.remoteAddress || "unknown";
    const leadData = {
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      name: validatedData.name,
      email: validatedData.email,
      company: validatedData.company,
      phone: validatedData.phone,
      message: validatedData.message,
      clientIp,
      userAgent: req.headers["user-agent"] || "unknown"
    };
    console.log("New lead submitted:", leadData);
    res.status(200).json({
      success: true,
      message: "Contact form submitted successfully"
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        errors: error.errors.map((e) => ({
          field: e.path.join("."),
          message: e.message
        }))
      });
    }
    console.error("Contact form error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to process contact form"
    });
  }
};
const handleTrack = async (req, res) => {
  try {
    const trackingData = req.body;
    const clientIp = req.headers["x-forwarded-for"]?.split(",")[0].trim() || req.socket.remoteAddress || "unknown";
    const enrichedData = {
      ...trackingData,
      clientIp,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    console.log("Visitor tracked:", enrichedData);
    res.status(200).json({
      success: true,
      message: "Tracking data received"
    });
  } catch (error) {
    console.error("Tracking error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to process tracking data"
    });
  }
};
function createServer() {
  const app2 = express__default();
  app2.use(cors());
  app2.use(express__default.json());
  app2.use(express__default.urlencoded({ extended: true }));
  app2.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });
  app2.get("/api/demo", handleDemo);
  app2.post("/api/contact", handleContact);
  app2.post("/api/track", handleTrack);
  return app2;
}
const app = createServer();
const port = process.env.PORT || 3e3;
const __dirname = import.meta.dirname;
const distPath = path.join(__dirname, "../spa");
app.use(express.static(distPath));
app.get("*", (req, res) => {
  if (req.path.startsWith("/api/") || req.path.startsWith("/health")) {
    return res.status(404).json({ error: "API endpoint not found" });
  }
  res.sendFile(path.join(distPath, "index.html"));
});
app.listen(port, () => {
  console.log(`🚀 Fusion Starter server running on port ${port}`);
  console.log(`📱 Frontend: http://localhost:${port}`);
  console.log(`🔧 API: http://localhost:${port}/api`);
});
process.on("SIGTERM", () => {
  console.log("🛑 Received SIGTERM, shutting down gracefully");
  process.exit(0);
});
process.on("SIGINT", () => {
  console.log("🛑 Received SIGINT, shutting down gracefully");
  process.exit(0);
});
//# sourceMappingURL=node-build.mjs.map
