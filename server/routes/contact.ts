import { RequestHandler } from "express";
import { z } from "zod";

const ContactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  company: z.string().optional().default(""),
  phone: z.string().optional().default(""),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof ContactFormSchema>;

export const handleContact: RequestHandler = async (req, res) => {
  try {
    // Validate request data
    const validatedData = ContactFormSchema.parse(req.body);

    // Get visitor info
    const clientIp =
      (req.headers["x-forwarded-for"] as string)?.split(",")[0].trim() ||
      req.socket.remoteAddress ||
      "unknown";

    // Store in database/log (for now, just log it)
    const leadData = {
      timestamp: new Date().toISOString(),
      name: validatedData.name,
      email: validatedData.email,
      company: validatedData.company,
      phone: validatedData.phone,
      message: validatedData.message,
      clientIp,
      userAgent: req.headers["user-agent"] || "unknown",
    };

    console.log("New lead submitted:", leadData);

    // In a production app, you would:
    // 1. Send email notification
    // 2. Store in database
    // 3. Track user location/analytics
    // For now, we'll just acknowledge receipt

    res.status(200).json({
      success: true,
      message: "Contact form submitted successfully",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        errors: error.errors.map((e) => ({
          field: e.path.join("."),
          message: e.message,
        })),
      });
    }

    console.error("Contact form error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to process contact form",
    });
  }
};
