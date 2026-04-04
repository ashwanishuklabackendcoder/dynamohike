import { MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  return (
    <button
      onClick={() => openWhatsApp()}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-primary-foreground p-4 rounded-full shadow-lg hover-scale animate-pulse-glow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
}
