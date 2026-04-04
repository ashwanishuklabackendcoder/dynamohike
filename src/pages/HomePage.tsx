import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { servicesData } from "@/lib/services";
import { openWhatsApp, buildFormWhatsAppMessage } from "@/lib/whatsapp";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { label: "Projects Delivered", value: 500, suffix: "+" },
  { label: "Happy Clients", value: 300, suffix: "+" },
  { label: "Success Rate", value: 98, suffix: "%" },
  { label: "Years Experience", value: 8, suffix: "+" },
];

const whyChooseUs = [
  { title: "Expert Team", desc: "Skilled developers, designers, and marketers with years of industry experience." },
  { title: "Result Driven", desc: "We focus on measurable outcomes that directly impact your business growth." },
  { title: "24/7 Support", desc: "Round-the-clock technical support and dedicated project managers." },
  { title: "Affordable Pricing", desc: "Premium quality solutions at competitive prices without hidden costs." },
  { title: "On-Time Delivery", desc: "We respect deadlines and deliver projects on schedule, every time." },
  { title: "Cutting-Edge Tech", desc: "We use the latest technologies and frameworks for future-proof solutions." },
];

const testimonials = [
  { name: "Rajesh Kumar", company: "TechVision India", text: "Dynamo Hike transformed our online presence completely. Our website traffic increased by 300% within 3 months of their SEO services.", rating: 5 },
  { name: "Priya Sharma", company: "GreenLeaf Organics", text: "The e-commerce website they built for us is stunning and converts really well. Their team is professional and responsive.", rating: 5 },
  { name: "Amit Patel", company: "BuildRight Construction", text: "Their digital marketing strategy helped us generate 50+ qualified leads per month. Highly recommended for any business.", rating: 5 },
];

function StatCounter({ value, suffix, label, isActive }: { value: number; suffix: string; label: string; isActive: boolean }) {
  const count = useAnimatedCounter(value, 2000, 0, isActive);
  return (
    <div className="text-center">
      <div className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground">
        {count}{suffix}
      </div>
      <div className="text-primary-foreground/70 text-sm mt-1">{label}</div>
    </div>
  );
}

export default function HomePage() {
  const statsAnim = useScrollAnimation(0.3);
  const servicesAnim = useScrollAnimation();
  const whyAnim = useScrollAnimation();
  const testimonialAnim = useScrollAnimation();
  const ctaAnim = useScrollAnimation();

  const mainServices = [
    servicesData.webDevelopment,
    servicesData.softwareDevelopment,
    servicesData.appDevelopment,
    servicesData.digitalMarketing,
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-4 animate-fade-up">🚀 #1 IT & Digital Marketing Agency</p>
            <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight animate-fade-up delay-100">
              Grow Your Business <span className="gradient-text">Digitally</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg md:text-xl mt-6 max-w-xl animate-fade-up delay-200">
              We build high-performance websites, apps, and marketing strategies that drive real business growth and measurable results.
            </p>
            <div className="flex flex-wrap gap-4 mt-8 animate-fade-up delay-300">
              <Link to="/contact" className="gradient-bg text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover-scale shadow-lg">
                Get Free Consultation
              </Link>
              <Link to="/portfolio" className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-foreground/10 transition-colors">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsAnim.ref} className="gradient-bg section-padding">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} isActive={statsAnim.isVisible} />
          ))}
        </div>
      </section>

      {/* Services */}
      <section ref={servicesAnim.ref} className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary font-medium mb-2">What We Offer</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl">Our Core Services</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">End-to-end digital solutions to help your business thrive in the online world.</p>
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${servicesAnim.isVisible ? "animate-fade-up" : "opacity-0"}`}>
            {mainServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <Link to={`/services/${service.slug}`} key={service.slug} className={`glass-card rounded-xl p-6 group ${servicesAnim.isVisible ? `animate-fade-up delay-${(i + 1) * 100}` : "opacity-0"}`}>
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={whyAnim.ref} className="section-padding bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary font-medium mb-2">Why Dynamo Hike?</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl">Why Choose Us</h2>
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${whyAnim.isVisible ? "" : "opacity-0"}`}>
            {whyChooseUs.map((item, i) => (
              <div key={item.title} className={`glass-card rounded-xl p-6 flex gap-4 ${whyAnim.isVisible ? `animate-fade-up delay-${(i % 3 + 1) * 100}` : "opacity-0"}`}>
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-heading font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialAnim.ref} className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary font-medium mb-2">Client Testimonials</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl">What Our Clients Say</h2>
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${testimonialAnim.isVisible ? "" : "opacity-0"}`}>
            {testimonials.map((t, i) => (
              <div key={t.name} className={`glass-card rounded-xl p-6 ${testimonialAnim.isVisible ? `animate-fade-up delay-${(i + 1) * 100}` : "opacity-0"}`}>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <p className="font-heading font-semibold text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaAnim.ref} className="gradient-bg section-padding">
        <div className={`container mx-auto text-center ${ctaAnim.isVisible ? "animate-scale-in" : "opacity-0"}`}>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-4">Ready to Take Your Business to the Next Level?</h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
            Get a free consultation today and discover how Dynamo Hike can help you achieve your digital goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-primary-foreground text-primary px-8 py-4 rounded-xl font-semibold text-lg hover-scale">
              Start Your Project
            </Link>
            <button onClick={() => openWhatsApp()} className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-foreground/10 transition-colors">
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
