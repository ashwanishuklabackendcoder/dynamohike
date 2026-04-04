import { useParams, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/lib/services";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const serviceMap: Record<string, typeof servicesData.webDevelopment | typeof servicesData.digitalMarketing> = {
  "web-development": servicesData.webDevelopment,
  "software-development": servicesData.softwareDevelopment,
  "app-development": servicesData.appDevelopment,
  "digital-marketing": servicesData.digitalMarketing,
};

export default function ServiceCategoryPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const service = serviceMap[categorySlug || ""];
  const anim = useScrollAnimation();

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-heading font-bold text-3xl mb-4">Service Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Go Home</Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;
  const allSubs = "subServices" in service
    ? service.subServices
    : service.categories?.flatMap((c) => c.subServices) || [];

  return (
    <>
      <section className="gradient-bg pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4 animate-fade-up">
            <Icon className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground animate-fade-up delay-100">{service.title}</h1>
          <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto animate-fade-up delay-200">{service.description}</p>
        </div>
      </section>

      <section ref={anim.ref} className="section-padding bg-background">
        <div className="container mx-auto">
          {"categories" in service && service.categories ? (
            service.categories.map((cat, ci) => (
              <div key={cat.title} className="mb-12">
                <h2 className="font-heading font-bold text-2xl mb-6 flex items-center gap-2">
                  {cat.icon && <cat.icon className="h-6 w-6 text-primary" />}
                  {cat.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.subServices.map((sub, i) => (
                    <Link
                      key={sub.slug}
                      to={`/services/${categorySlug}/${sub.slug}`}
                      className={`glass-card rounded-xl p-6 group ${anim.isVisible ? `animate-fade-up delay-${((i % 3) + 1) * 100}` : "opacity-0"}`}
                    >
                      <h3 className="font-heading font-semibold mb-2">{sub.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{sub.description}</p>
                      <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                        Learn More <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allSubs.map((sub, i) => (
                <Link
                  key={sub.slug}
                  to={`/services/${categorySlug}/${sub.slug}`}
                  className={`glass-card rounded-xl p-6 group ${anim.isVisible ? `animate-fade-up delay-${((i % 3) + 1) * 100}` : "opacity-0"}`}
                >
                  <h3 className="font-heading font-semibold mb-2">{sub.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{sub.description}</p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-bg section-padding">
        <div className="container mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl text-primary-foreground mb-4">Need {service.title} Services?</h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">Let our experts help you build the perfect solution for your business.</p>
          <Link to="/contact" className="bg-primary-foreground text-primary px-8 py-4 rounded-xl font-semibold text-lg hover-scale inline-block">
            Get Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
