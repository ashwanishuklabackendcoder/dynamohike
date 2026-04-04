import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

export default function LeadPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem("lead-popup-dismissed");
      if (!dismissed) setShow(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setShow(false);
    sessionStorage.setItem("lead-popup-dismissed", "1");
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-foreground/50 animate-fade-in" onClick={dismiss}>
      <div className="glass-card rounded-2xl p-8 max-w-md w-full relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={dismiss} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
          <X className="h-5 w-5" />
        </button>
        <h3 className="font-heading font-bold text-2xl gradient-text mb-2">Get a Free Quote!</h3>
        <p className="text-muted-foreground text-sm mb-6">Tell us about your project and we'll get back to you within 24 hours.</p>
        <Link to="/contact" onClick={dismiss} className="block text-center gradient-bg text-primary-foreground rounded-lg py-3 font-semibold hover-scale">
          Request Free Consultation
        </Link>
      </div>
    </div>
  );
}
