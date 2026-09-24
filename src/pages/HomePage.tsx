import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Sparkles, TrendingUp, ShieldCheck, Zap, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { servicesData } from "@/lib/services";
import { openWhatsApp } from "@/lib/whatsapp";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { label: "Projects Delivered", value: 500, suffix: "+", icon: Zap, gradient: "from-blue-500 to-cyan-400" },
  { label: "Happy Clients", value: 300, suffix: "+", icon: TrendingUp, gradient: "from-purple-500 to-pink-500" },
  { label: "Success Rate", value: 98, suffix: "%", icon: ShieldCheck, gradient: "from-emerald-400 to-teal-500" },
  { label: "Years Experience", value: 8, suffix: "+", icon: Award, gradient: "from-amber-400 to-orange-500" },
];

const whyChooseUs = [
  { title: "Expert Team", desc: "Skilled developers, designers, and marketers with years of industry experience.", icon: Sparkles },
  { title: "Result Driven", desc: "We focus on measurable outcomes that directly impact your business growth.", icon: TrendingUp },
  { title: "24/7 Support", desc: "Round-the-clock technical support and dedicated project managers.", icon: ShieldCheck },
  { title: "Affordable Pricing", desc: "Premium quality solutions at competitive prices without hidden costs.", icon: Zap },
  { title: "On-Time Delivery", desc: "We respect deadlines and deliver projects on schedule, every time.", icon: Award },
  { title: "Cutting-Edge Tech", desc: "We use the latest technologies and frameworks for future-proof solutions.", icon: CheckCircle },
];

const testimonials = [
  { name: "Rajesh Kumar", company: "TechVision India", text: "Dynamo Hike transformed our online presence completely. Our website traffic increased by 300% within 3 months of their SEO services.", rating: 5, avatarBg: "from-blue-500 to-indigo-600" },
  { name: "Priya Sharma", company: "GreenLeaf Organics", text: "The e-commerce website they built for us is stunning and converts really well. Their team is professional and responsive.", rating: 5, avatarBg: "from-purple-500 to-pink-500" },
  { name: "Amit Patel", company: "BuildRight Construction", text: "Their digital marketing strategy helped us generate 50+ qualified leads per month. Highly recommended for any business.", rating: 5, avatarBg: "from-emerald-400 to-teal-600" },
];

function StatCounter({ value, suffix, label, icon: Icon, gradient, isActive }: { value: number; suffix: string; label: string; icon: any; gradient: string; isActive: boolean }) {
  const count = useAnimatedCounter(value, 2000, 0, isActive);
  return (
    <div className="glass-card glossy-shine rounded-2xl p-6 text-center group relative overflow-hidden">
      <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r ${gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="h-6 w-6" />
      </div>
      <div className={`font-heading font-extrabold text-4xl md:text-5xl bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
        {count}{suffix}
      </div>
      <div className="text-foreground/80 font-medium text-sm mt-2">{label}</div>
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
      {/* Hero Section with Ambient Glow Blobs & High Gloss UI */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden py-24">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20 scale-105 filter blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/75 to-background" />
        </div>

        {/* Floating Glowing Aura Blobs */}
        <div className="glow-blob-purple top-10 left-[-100px]" />
        <div className="glow-blob-blue top-1/3 right-[-100px]" />
        <div className="glow-blob-pink bottom-10 left-1/3" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              {/* Glossy Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/50 shadow-md mb-6 animate-fade-up">
                <Sparkles className="h-4 w-4 text-purple-500 animate-spin-slow" />
                <span className="text-xs md:text-sm font-semibold gradient-text">🚀 #1 IT & Digital Marketing Agency</span>
              </div>

              <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-foreground leading-[1.1] tracking-tight animate-fade-up delay-100">
                Grow Your Business <br />
                <span className="gradient-text">Digitally & Smartly</span>
              </h1>

              <p className="text-muted-foreground text-lg md:text-xl mt-6 max-w-xl leading-relaxed animate-fade-up delay-200">
                We design high-converting websites, dynamic mobile applications, and ROI-driven marketing strategies framed in modern aesthetics.
              </p>

              <div className="flex flex-wrap gap-4 mt-8 animate-fade-up delay-300">
                <Link to="/contact" className="glossy-btn glossy-shine px-8 py-4 rounded-2xl text-lg font-semibold flex items-center gap-2">
                  Get Free Consultation <ArrowRight className="h-5 w-5" />
                </Link>
                <Link to="/portfolio" className="glossy-btn-outline px-8 py-4 rounded-2xl text-lg font-semibold text-foreground">
                  Explore Work
                </Link>
              </div>
            </div>

            {/* Hero Right Interactive Glossy Glass Widget */}
            <div className="lg:col-span-5 hidden lg:block animate-fade-in delay-200">
              <div className="relative">
                <div className="glass-card glossy-shine rounded-3xl p-8 border border-white/60 shadow-2xl relative z-10 backdrop-blur-2xl bg-white/40">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg animate-float">
                        <TrendingUp className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-lg">Digital Hike Stats</h3>
                        <p className="text-xs text-muted-foreground">Real-time Growth Score</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-bold border border-emerald-500/30">
                      +340% ROI
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 shadow-sm flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">Conversion Rate</span>
                      <span className="font-bold text-indigo-600">98.4%</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 shadow-sm flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">SEO Organic Traffic</span>
                      <span className="font-bold text-purple-600">120K+ / mo</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 shadow-sm flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">Client Satisfaction</span>
                      <span className="font-bold text-pink-600">5.0 ★★★★★</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Cards Section */}
      <section ref={statsAnim.ref} className="section-padding relative">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <StatCounter key={s.label} {...s} isActive={statsAnim.isVisible} />
          ))}
        </div>
      </section>

      {/* Core Services Section */}
      <section ref={servicesAnim.ref} className="section-padding relative bg-secondary/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="px-4 py-1.5 rounded-full glass border border-purple-300 text-purple-600 text-xs font-bold uppercase tracking-wider mb-3 inline-block">
              What We Offer
            </span>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground">
              Our Core <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base md:text-lg">
              End-to-end glossy digital solutions engineered to scale your brand to new peaks.
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${servicesAnim.isVisible ? "animate-fade-up" : "opacity-0"}`}>
            {mainServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <Link
                  to={`/services/${service.slug}`}
                  key={service.slug}
                  className={`glass-card glossy-shine rounded-3xl p-8 group border border-white/70 shadow-lg hover:-translate-y-2 transition-all duration-300 ${
                    servicesAnim.isVisible ? `animate-fade-up delay-${(i + 1) * 100}` : "opacity-0"
                  }`}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-pink-500 flex items-center justify-center mb-6 text-white shadow-xl shadow-indigo-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:translate-x-2 transition-transform">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyAnim.ref} className="section-padding relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="px-4 py-1.5 rounded-full glass border border-blue-300 text-blue-600 text-xs font-bold uppercase tracking-wider mb-3 inline-block">
              Why Dynamo Hike?
            </span>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl">
              Why Partner With <span className="gradient-text">Us</span>
            </h2>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${whyAnim.isVisible ? "" : "opacity-0"}`}>
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`glass-card glossy-shine rounded-3xl p-8 flex items-start gap-5 border border-white/80 shadow-md ${
                    whyAnim.isVisible ? `animate-fade-up delay-${((i % 3) + 1) * 100}` : "opacity-0"
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white flex-shrink-0 shadow-md">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialAnim.ref} className="section-padding relative bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="px-4 py-1.5 rounded-full glass border border-pink-300 text-pink-600 text-xs font-bold uppercase tracking-wider mb-3 inline-block">
              Client Feedback
            </span>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl">
              What Our Clients <span className="gradient-text">Say</span>
            </h2>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${testimonialAnim.isVisible ? "" : "opacity-0"}`}>
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`glass-card glossy-shine rounded-3xl p-8 border border-white/80 shadow-lg flex flex-col justify-between ${
                  testimonialAnim.isVisible ? `animate-fade-up delay-${(i + 1) * 100}` : "opacity-0"
                }`}
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span key={j} className="text-amber-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                </div>
                <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${t.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-md`}>
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm text-foreground">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Glossy Vibrant Call To Action Section */}
      <section ref={ctaAnim.ref} className="section-padding relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className={`glass-card glossy-shine rounded-3xl p-12 md:p-16 text-center border border-white/60 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-pink-600/90 backdrop-blur-2xl text-white shadow-2xl ${
            ctaAnim.isVisible ? "animate-scale-in" : "opacity-0"
          }`}>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-white mb-6 leading-tight">
              Ready to Hike Your Business Growth?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-base md:text-lg mb-10">
              Get a free consultation today and discover how our glossy, high-impact digital solutions empower your brand.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link to="/contact" className="bg-white text-purple-600 hover:bg-white/90 px-9 py-4 rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition-all">
                Start Your Project
              </Link>
              <button
                onClick={() => openWhatsApp()}
                className="glossy-btn-outline px-9 py-4 rounded-2xl font-bold text-lg text-white hover:scale-105 transition-all"
              >
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

