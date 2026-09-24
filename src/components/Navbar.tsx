import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Sparkles } from "lucide-react";
import { servicesData } from "@/lib/services";
import { PHONE_NUMBER } from "@/lib/whatsapp";
import logo from "@/assets/logo.png";

const mainServices = [
  servicesData.webDevelopment,
  servicesData.softwareDevelopment,
  servicesData.appDevelopment,
  servicesData.digitalMarketing,
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(null);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass border-b border-white/50 shadow-xl py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="Dynamo Hike" className="h-10 w-auto group-hover:scale-105 transition-transform" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-xl border border-white/80 px-4 py-1.5 rounded-2xl shadow-sm">
          <Link to="/" className="px-3.5 py-2 text-sm font-semibold text-slate-800 hover:text-primary hover:bg-white/80 rounded-xl transition-all">Home</Link>
          <Link to="/about" className="px-3.5 py-2 text-sm font-semibold text-slate-800 hover:text-primary hover:bg-white/80 rounded-xl transition-all">About</Link>

          {/* Services Mega Menu */}
          <div className="relative" onMouseEnter={() => setMegaOpen("services")} onMouseLeave={() => setMegaOpen(null)}>
            <button className="flex items-center gap-1 px-3.5 py-2 text-sm font-semibold text-slate-800 hover:text-primary hover:bg-white/80 rounded-xl transition-all">
              Services <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${megaOpen === "services" ? "rotate-180" : ""}`} />
            </button>
            {megaOpen === "services" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[920px] bg-white rounded-2xl animate-fade-in border border-slate-200/90 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.25)] mt-3 z-[100] overflow-hidden text-left">
                {/* 4 Column Grid */}
                <div className="p-6 grid grid-cols-4 gap-6 bg-white">
                  {mainServices.map((service) => {
                    const Icon = service.icon;
                    const subs = "subServices" in service ? service.subServices : service.categories?.flatMap((c) => c.subServices) || [];
                    return (
                      <div key={service.slug} className="flex flex-col justify-between">
                        <div>
                          {/* Column Header */}
                          <Link
                            to={`/services/${service.slug}`}
                            className="flex items-center gap-2.5 font-heading font-extrabold text-slate-900 pb-3 border-b border-slate-100 hover:text-blue-600 transition-colors group/head mb-3"
                          >
                            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover/head:bg-blue-600 group-hover/head:text-white transition-all shadow-sm">
                              <Icon className="h-4 w-4" />
                            </div>
                            <span className="text-sm font-extrabold tracking-tight">{service.title}</span>
                          </Link>

                          {/* Sub Services List */}
                          <ul className="space-y-0.5">
                            {subs.slice(0, 6).map((sub) => (
                              <li key={sub.slug}>
                                <Link
                                  to={`/services/${service.slug}/${sub.slug}`}
                                  className="text-xs text-slate-600 hover:text-blue-600 hover:bg-slate-50 px-2.5 py-1.5 rounded-lg transition-all block font-medium"
                                >
                                  {sub.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {subs.length > 6 && (
                          <div className="pt-2 mt-2 border-t border-slate-100">
                            <Link
                              to={`/services/${service.slug}`}
                              className="text-xs text-blue-600 font-bold flex items-center gap-1 hover:gap-2 px-2.5 py-1 transition-all"
                            >
                              Explore All ({subs.length}) →
                            </Link>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Callout Banner */}
                <div className="bg-slate-50/90 px-6 py-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-medium">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Need a custom enterprise solution or tailored digital strategy?</span>
                  </div>
                  <Link to="/contact" className="text-blue-600 font-bold hover:underline flex items-center gap-1">
                    Book Free Consultation →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/portfolio" className="px-3.5 py-2 text-sm font-semibold text-slate-800 hover:text-primary hover:bg-white/80 rounded-xl transition-all">Portfolio</Link>
          <Link to="/blog" className="px-3.5 py-2 text-sm font-semibold text-slate-800 hover:text-primary hover:bg-white/80 rounded-xl transition-all">Blog</Link>
          <Link to="/faq" className="px-3.5 py-2 text-sm font-semibold text-slate-800 hover:text-primary hover:bg-white/80 rounded-xl transition-all">FAQ</Link>
          <Link to="/contact" className="px-3.5 py-2 text-sm font-semibold text-slate-800 hover:text-primary hover:bg-white/80 rounded-xl transition-all">Contact</Link>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 text-sm font-bold text-primary hover:scale-105 transition-transform">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Phone className="h-4 w-4" />
            </div>
            <span>Call Now</span>
          </a>
          <Link to="/contact" className="glossy-btn glossy-shine px-6 py-2.5 rounded-2xl text-sm font-bold flex items-center gap-2 shadow-lg">
            <Sparkles className="h-4 w-4" /> Get Free Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 text-foreground rounded-xl glass border border-white/50" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-3xl border border-slate-200/90 mt-3 mx-4 rounded-3xl p-5 animate-fade-in max-h-[80vh] overflow-y-auto shadow-2xl z-[100]">
          <div className="flex flex-col gap-1.5">
            <Link to="/" className="px-4 py-3 text-sm font-bold text-slate-900 rounded-2xl hover:bg-slate-100">Home</Link>
            <Link to="/about" className="px-4 py-3 text-sm font-bold text-slate-900 rounded-2xl hover:bg-slate-100">About</Link>
            {mainServices.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.slug}>
                  <button onClick={() => setMegaOpen(megaOpen === service.slug ? null : service.slug)} className="flex items-center justify-between w-full px-4 py-3 text-sm font-bold text-slate-900 rounded-2xl hover:bg-slate-100">
                    <span className="flex items-center gap-2"><Icon className="h-4 w-4 text-primary" /> {service.title}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${megaOpen === service.slug ? "rotate-180" : ""}`} />
                  </button>
                  {megaOpen === service.slug && (
                    <div className="pl-8 py-2 space-y-1.5">
                      {"subServices" in service ? service.subServices.map((sub) => (
                        <Link key={sub.slug} to={`/services/${service.slug}/${sub.slug}`} className="block py-1 text-xs text-slate-600 hover:text-primary font-medium">
                          {sub.title}
                        </Link>
                      )) : service.categories?.map((cat) => (
                        <div key={cat.title} className="mb-2">
                          <p className="text-xs font-bold text-primary mb-1">{cat.title}</p>
                          {cat.subServices.map((sub) => (
                            <Link key={sub.slug} to={`/services/${service.slug}/${sub.slug}`} className="block py-1 text-xs text-slate-600 hover:text-primary pl-2 font-medium">
                              {sub.title}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link to="/portfolio" className="px-4 py-3 text-sm font-bold text-slate-900 rounded-2xl hover:bg-slate-100">Portfolio</Link>
            <Link to="/blog" className="px-4 py-3 text-sm font-bold text-slate-900 rounded-2xl hover:bg-slate-100">Blog</Link>
            <Link to="/faq" className="px-4 py-3 text-sm font-bold text-slate-900 rounded-2xl hover:bg-slate-100">FAQ</Link>
            <Link to="/contact" className="px-4 py-3 text-sm font-bold text-slate-900 rounded-2xl hover:bg-slate-100">Contact</Link>
            <Link to="/contact" className="glossy-btn glossy-shine px-5 py-3 rounded-2xl text-sm font-bold text-center mt-3 shadow-lg">
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

