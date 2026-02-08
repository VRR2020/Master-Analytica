import { RequestHandler } from "express";

interface TrackingData {
  eventType: string;
  page: string;
  timestamp: string;
  userAgent: string;
  referrer?: string;
  language?: string;
}

export const handleTrack: RequestHandler = async (req, res) => {
  try {
    const trackingData: TrackingData = req.body;

    // Get client IP
    const clientIp =
      (req.headers["x-forwarded-for"] as string)?.split(",")[0].trim() ||
      req.socket.remoteAddress ||
      "unknown";

    // Log visitor data (in production, store in database)
    const enrichedData = {
      ...trackingData,
      clientIp,
      timestamp: new Date().toISOString(),
    };

    console.log("Visitor tracked:", enrichedData);

    // In production, you would:
    // 1. Validate data with Zod
    // 2. Store in database (PostgreSQL, MongoDB, etc.)
    // 3. Generate analytics reports
    // 4. Track location based on IP
    // 5. Store marketing-related data for later analysis

    res.status(200).json({
      success: true,
      message: "Tracking data received",
    });
  } catch (error) {
    console.error("Tracking error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to process tracking data",
    });
  }
};
