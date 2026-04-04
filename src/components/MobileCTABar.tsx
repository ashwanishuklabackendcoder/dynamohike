import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { PHONE_NUMBER } from "@/lib/whatsapp";

export default function MobileCTABar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden glass border-t border-border p-3 flex items-center justify-between gap-3 animate-fade-in">
      <a href={`tel:${PHONE_NUMBER}`} className="flex-1 flex items-center justify-center gap-2 bg-foreground text-primary-foreground rounded-lg py-2.5 text-sm font-semibold">
        <Phone className="h-4 w-4" /> Call Now
      </a>
      <Link to="/contact" className="flex-1 text-center gradient-bg text-primary-foreground rounded-lg py-2.5 text-sm font-semibold">
        Free Quote
      </Link>
    </div>
  );
}
