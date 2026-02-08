import { useEffect } from "react";

interface VisitorData {
  eventType: string;
  page: string;
  timestamp: string;
  userAgent: string;
  referrer?: string;
  language?: string;
}

export function useVisitorTracking() {
  useEffect(() => {
    // Check if user has accepted cookies
    const cookieConsent = localStorage.getItem("master_analytica_cookie_consent");

    if (cookieConsent === "accepted") {
      // Track page view
      const visitorData: VisitorData = {
        eventType: "page_view",
        page: window.location.pathname,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer || undefined,
        language: navigator.language,
      };

      // Send tracking data
      fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(visitorData),
      }).catch((err) => console.log("Tracking error:", err));
    }
  }, []);
}
