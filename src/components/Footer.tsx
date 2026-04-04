import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { servicesData } from "@/lib/services";
import { PHONE_NUMBER, PHONE_DISPLAY } from "@/lib/whatsapp";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="Dynamo Hike" className="h-12 mb-4 brightness-0 invert" />
            <p className="text-sm opacity-70 mb-4 leading-relaxed">
              Dynamo Hike is a leading IT & Digital Marketing agency delivering innovative digital solutions to help businesses grow online.
            </p>
            <div className="flex items-center gap-2 text-sm opacity-80">
              <Phone className="h-4 w-4" />
              <a href={`tel:${PHONE_NUMBER}`}>{PHONE_DISPLAY}</a>
            </div>
            <div className="flex items-center gap-2 text-sm opacity-80 mt-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:info@dynamohike.com">info@dynamohike.com</a>
            </div>
            <div className="flex items-center gap-2 text-sm opacity-80 mt-2">
              <MapPin className="h-4 w-4" />
              <span>India</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {[servicesData.webDevelopment, servicesData.softwareDevelopment, servicesData.appDevelopment, servicesData.digitalMarketing].map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-sm opacity-70 hover:opacity-100 transition-opacity">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/portfolio", label: "Portfolio" },
                { to: "/blog", label: "Blog" },
                { to: "/faq", label: "FAQ" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm opacity-70 hover:opacity-100 transition-opacity">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-sm opacity-70 mb-4">Subscribe for the latest digital marketing tips and insights.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
              <input type="email" placeholder="Your email" className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg px-4 py-2.5 text-sm placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-primary" />
              <button type="submit" className="gradient-bg text-primary-foreground rounded-lg px-4 py-2.5 text-sm font-semibold hover-scale">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm opacity-60">
          © {new Date().getFullYear()} Dynamo Hike. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
