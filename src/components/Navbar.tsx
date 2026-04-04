import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-lg py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Dynamo Hike" className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          <Link to="/" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">Home</Link>
          <Link to="/about" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">About</Link>

          {/* Services Mega Menu */}
          <div className="relative" onMouseEnter={() => setMegaOpen("services")} onMouseLeave={() => setMegaOpen(null)}>
            <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              Services <ChevronDown className={`h-4 w-4 transition-transform ${megaOpen === "services" ? "rotate-180" : ""}`} />
            </button>
            {megaOpen === "services" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] glass-card rounded-xl p-6 grid grid-cols-4 gap-6 animate-fade-in">
                {mainServices.map((service) => {
                  const Icon = service.icon;
                  const subs = "subServices" in service ? service.subServices : service.categories?.flatMap((c) => c.subServices) || [];
                  return (
                    <div key={service.slug}>
                      <Link to={`/services/${service.slug}`} className="flex items-center gap-2 font-heading font-semibold text-primary mb-3 hover:underline">
                        <Icon className="h-4 w-4" /> {service.title}
                      </Link>
                      <ul className="space-y-1.5">
                        {subs.slice(0, 6).map((sub) => (
                          <li key={sub.slug}>
                            <Link to={`/services/${service.slug}/${sub.slug}`} className="text-xs text-muted-foreground hover:text-primary transition-colors">
                              {sub.title}
                            </Link>
                          </li>
                        ))}
                        {subs.length > 6 && (
                          <li>
                            <Link to={`/services/${service.slug}`} className="text-xs text-primary font-medium">View All →</Link>
                          </li>
                        )}
                      </ul>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <Link to="/portfolio" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">Portfolio</Link>
          <Link to="/blog" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">Blog</Link>
          <Link to="/faq" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">FAQ</Link>
          <Link to="/contact" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">Contact</Link>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 text-sm font-medium text-primary hover-scale">
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <Link to="/contact" className="gradient-bg text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover-scale shadow-md">
            Get Free Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden glass mt-2 mx-4 rounded-xl p-4 animate-fade-in max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col gap-1">
            <Link to="/" className="px-4 py-3 text-sm font-medium rounded-lg hover:bg-muted">Home</Link>
            <Link to="/about" className="px-4 py-3 text-sm font-medium rounded-lg hover:bg-muted">About</Link>
            {mainServices.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.slug}>
                  <button onClick={() => setMegaOpen(megaOpen === service.slug ? null : service.slug)} className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium rounded-lg hover:bg-muted">
                    <span className="flex items-center gap-2"><Icon className="h-4 w-4" /> {service.title}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${megaOpen === service.slug ? "rotate-180" : ""}`} />
                  </button>
                  {megaOpen === service.slug && (
                    <div className="pl-8 py-2 space-y-1">
                      {"subServices" in service ? service.subServices.map((sub) => (
                        <Link key={sub.slug} to={`/services/${service.slug}/${sub.slug}`} className="block py-1.5 text-xs text-muted-foreground hover:text-primary">
                          {sub.title}
                        </Link>
                      )) : service.categories?.map((cat) => (
                        <div key={cat.title} className="mb-2">
                          <p className="text-xs font-semibold text-primary mb-1">{cat.title}</p>
                          {cat.subServices.map((sub) => (
                            <Link key={sub.slug} to={`/services/${service.slug}/${sub.slug}`} className="block py-1 text-xs text-muted-foreground hover:text-primary pl-2">
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
            <Link to="/portfolio" className="px-4 py-3 text-sm font-medium rounded-lg hover:bg-muted">Portfolio</Link>
            <Link to="/blog" className="px-4 py-3 text-sm font-medium rounded-lg hover:bg-muted">Blog</Link>
            <Link to="/faq" className="px-4 py-3 text-sm font-medium rounded-lg hover:bg-muted">FAQ</Link>
            <Link to="/contact" className="px-4 py-3 text-sm font-medium rounded-lg hover:bg-muted">Contact</Link>
            <Link to="/contact" className="gradient-bg text-primary-foreground px-5 py-3 rounded-lg text-sm font-semibold text-center mt-2">
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
