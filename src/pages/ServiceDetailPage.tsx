import { useParams, Link } from "react-router-dom";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { getAllServices } from "@/lib/services";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ServiceDetailPage() {
  const { categorySlug, serviceSlug } = useParams<{ categorySlug: string; serviceSlug: string }>();
  const allServices = getAllServices();
  const service = allServices.find((s) => s.slug === serviceSlug && s.parentSlug === categorySlug);
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

  const relatedServices = allServices.filter((s) => s.parentSlug === categorySlug && s.slug !== serviceSlug).slice(0, 3);

  const benefits = [
    "Dedicated project manager assigned to your project",
    "Regular progress updates and transparent communication",
    "100% customized solutions tailored to your needs",
    "Post-delivery support and maintenance included",
    "Competitive pricing with no hidden charges",
    "On-time delivery guaranteed",
  ];

  return (
    <>
      <section className="gradient-bg pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <Link to={`/services/${categorySlug}`} className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-4 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to {service.parentTitle}
          </Link>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground animate-fade-up">{service.title}</h1>
          <p className="text-primary-foreground/70 mt-4 max-w-2xl animate-fade-up delay-100">{service.description}</p>
        </div>
      </section>

      <section ref={anim.ref} className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="glass-card rounded-2xl p-8">
                <h2 className="font-heading font-bold text-2xl mb-4">About This Service</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  At Dynamo Hike, we deliver high-quality {service.title.toLowerCase()} solutions that are designed to meet your specific business requirements. Our experienced team uses the latest technologies and best practices to ensure your project is delivered on time and exceeds expectations.
                </p>
                <h3 className="font-heading font-semibold text-xl mb-4">What You Get</h3>
                <ul className="space-y-3">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-heading font-semibold text-lg mb-4">Get a Free Quote</h3>
                <p className="text-muted-foreground text-sm mb-4">Interested in {service.title}? Let's discuss your project.</p>
                <Link to="/contact" className="block text-center gradient-bg text-primary-foreground rounded-lg py-3 font-semibold hover-scale">
                  Contact Us Now
                </Link>
              </div>

              {relatedServices.length > 0 && (
                <div className="glass-card rounded-xl p-6">
                  <h3 className="font-heading font-semibold text-lg mb-4">Related Services</h3>
                  <ul className="space-y-3">
                    {relatedServices.map((rs) => (
                      <li key={rs.slug}>
                        <Link to={`/services/${rs.parentSlug}/${rs.slug}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          → {rs.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="gradient-bg section-padding">
        <div className="container mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl text-primary-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">Contact us today for a free consultation about your {service.title.toLowerCase()} project.</p>
          <Link to="/contact" className="bg-primary-foreground text-primary px-8 py-4 rounded-xl font-semibold text-lg hover-scale inline-block">
            Get Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
