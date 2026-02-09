import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem(
      "master_analytica_cookie_consent",
    );
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("master_analytica_cookie_consent", "accepted");
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem("master_analytica_cookie_consent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-card p-4 md:p-6 shadow-2xl">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-2">
              Política de Cookies
            </h3>
            <p className="text-sm text-foreground/70">
              Utilizamos cookies para melhorar sua experiência no site.
            </p>
          </div>

          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={handleReject}
              className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground border border-border rounded-lg transition-colors"
            >
              Rejeitar
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm font-medium text-accent-foreground bg-accent rounded-lg hover:opacity-90 transition-opacity"
            >
              Aceitar
            </button>
          </div>

          <button
            onClick={handleReject}
            className="absolute top-4 right-4 text-foreground/40 hover:text-foreground"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
