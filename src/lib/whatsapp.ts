const WHATSAPP_NUMBER = "919378060134";

export function openWhatsApp(message = "Hello, I want to know more about your services.") {
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
}

export function buildFormWhatsAppMessage(data: { name: string; phone: string; email: string; service: string; message: string }) {
  return `Hello, I have an enquiry:\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nService: ${data.service}\nMessage: ${data.message}`;
}

export const PHONE_NUMBER = "+919378060134";
export const PHONE_DISPLAY = "937 806 0134";
