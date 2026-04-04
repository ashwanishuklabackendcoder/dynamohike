import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  { q: "What services does Dynamo Hike offer?", a: "We offer a comprehensive range of IT and digital marketing services including web development, software development, mobile app development, SEO, social media marketing, Google Ads management, and more." },
  { q: "How much does a website cost?", a: "Website costs vary based on complexity and requirements. A basic business website starts from ₹15,000, while e-commerce and custom web applications can range from ₹50,000 to ₹5,00,000+. Contact us for a free quote tailored to your needs." },
  { q: "How long does it take to build a website?", a: "A standard business website typically takes 2-4 weeks, while complex web applications and e-commerce platforms may take 4-12 weeks depending on features and functionality required." },
  { q: "Do you provide ongoing support after project delivery?", a: "Yes! We provide post-delivery support and maintenance for all our projects. We offer flexible maintenance packages to keep your website or application updated, secure, and performing optimally." },
  { q: "What is SEO and why does my business need it?", a: "SEO (Search Engine Optimization) is the process of improving your website's visibility in search engine results. It helps your business get found by potential customers who are actively searching for your products or services online." },
  { q: "How long does SEO take to show results?", a: "SEO is a long-term strategy. You can typically start seeing initial improvements within 2-3 months, with significant results appearing within 4-6 months. We provide monthly reports to track your progress." },
  { q: "Can you help with social media marketing?", a: "Absolutely! We manage social media accounts across all major platforms including Facebook, Instagram, LinkedIn, and YouTube. We create engaging content, run targeted ad campaigns, and grow your social media presence." },
  { q: "Do you develop mobile apps for both Android and iOS?", a: "Yes, we develop native Android and iOS apps as well as cross-platform applications using React Native and Flutter. We help you choose the best approach based on your requirements and budget." },
  { q: "What is the process to start a project with Dynamo Hike?", a: "Simply contact us through our website, WhatsApp, or phone. We'll schedule a free consultation to understand your requirements, provide a detailed proposal, and once approved, we begin the development process with regular updates." },
  { q: "Do you offer free consultations?", a: "Yes! We offer free initial consultations for all our services. This helps us understand your requirements and allows you to evaluate our expertise before making any commitment." },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <section className="gradient-bg pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground animate-fade-up">Frequently Asked Questions</h1>
          <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto animate-fade-up delay-100">
            Find answers to common questions about our services, pricing, and process.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-3">
            {faqData.map((faq, i) => (
              <div key={i} className="glass-card rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-heading font-semibold pr-4">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-primary flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && (
                  <div className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
