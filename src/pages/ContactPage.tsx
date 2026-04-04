import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { openWhatsApp, buildFormWhatsAppMessage, PHONE_NUMBER, PHONE_DISPLAY } from "@/lib/whatsapp";
import { toast } from "@/hooks/use-toast";

const serviceOptions = [
  "Web Development",
  "Software Development",
  "App Development",
  "Digital Marketing",
  "SEO Services",
  "Social Media Marketing",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.phone.trim() || !/^\d{10,15}$/.test(form.phone.trim())) errs.phone = "Valid phone number required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errs.email = "Valid email required";
    if (!form.service) errs.service = "Please select a service";
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const msg = buildFormWhatsAppMessage(form);
    openWhatsApp(msg);
    toast({ title: "Redirecting to WhatsApp", description: "Your enquiry has been prepared. If WhatsApp didn't open, please try again." });
  };

  return (
    <>
      <section className="gradient-bg pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground animate-fade-up">Contact Us</h1>
          <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto animate-fade-up delay-100">
            Have a project in mind? Get in touch and let's discuss how we can help you grow.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              {[
                { icon: Phone, title: "Call Us", info: PHONE_DISPLAY, href: `tel:${PHONE_NUMBER}` },
                { icon: Mail, title: "Email Us", info: "info@dynamohike.com", href: "mailto:info@dynamohike.com" },
                { icon: MapPin, title: "Visit Us", info: "India", href: "#" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.title} href={item.href} className="glass-card rounded-xl p-6 flex items-start gap-4 block">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.info}</p>
                    </div>
                  </a>
                );
              })}

              {/* Google Map */}
              <div className="glass-card rounded-xl overflow-hidden h-48">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9!2d72.55!3d23.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAxJzEyLjAiTiA3MsKwMzMnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Dynamo Hike Location"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8">
                <h2 className="font-heading font-bold text-2xl mb-6">Send Us a Message</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-secondary rounded-lg px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      maxLength={100}
                    />
                    {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-secondary rounded-lg px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      maxLength={15}
                    />
                    {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-secondary rounded-lg px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      maxLength={255}
                    />
                    {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-secondary rounded-lg px-4 py-3 text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select Service</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-destructive text-xs mt-1">{errors.service}</p>}
                  </div>
                </div>
                <div className="mb-6">
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-secondary rounded-lg px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    maxLength={1000}
                  />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                </div>
                <button type="submit" className="gradient-bg text-primary-foreground px-8 py-3 rounded-lg font-semibold hover-scale flex items-center gap-2">
                  <Send className="h-4 w-4" /> Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
