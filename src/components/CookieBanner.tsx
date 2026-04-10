import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { BlurFade } from "@/components/ui/blur-fade";
import { Link } from "@tanstack/react-router";
import { Cookie, X } from "lucide-react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4"
      role="dialog"
      aria-label="Cookie consent"
    >
      <BlurFade inView>
        <Alert className="max-w-3xl mx-auto bg-card border border-border rounded-xl shadow-lg p-6">
          <div className="flex items-start gap-4">
            <Cookie className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <div className="flex-1">
              <AlertTitle className="text-base font-heading font-semibold text-card-foreground mb-1">
                We use cookies
              </AlertTitle>
              <AlertDescription className="text-sm text-muted-foreground leading-relaxed mb-4">
                We use essential cookies to make our site work. These cookies are necessary for the
                website to function and cannot be switched off.{" "}
                <Link to="/privacy" className="text-primary underline underline-offset-2">
                  Learn more
                </Link>
              </AlertDescription>
              <div className="flex gap-3">
                <Button size="default" onClick={accept}>
                  Accept
                </Button>
                <Button size="default" variant="outline" onClick={decline}>
                  Decline
                </Button>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={decline}
              aria-label="Close cookie banner"
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </Alert>
      </BlurFade>
    </div>
  );
}
