import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const categories = ["All", "Web", "App", "Marketing"];

const projects = [
  { title: "E-Commerce Platform", category: "Web", desc: "Modern online store with payment integration for a fashion brand.", tech: "React, Node.js, Stripe" },
  { title: "Restaurant POS System", category: "App", desc: "Complete point-of-sale solution for a chain of restaurants.", tech: "React Native, Firebase" },
  { title: "SEO Campaign - HealthCare", category: "Marketing", desc: "300% traffic increase for a healthcare provider in 6 months.", tech: "SEO, Content Marketing" },
  { title: "Corporate Website", category: "Web", desc: "Professional corporate website for a manufacturing company.", tech: "Next.js, Tailwind CSS" },
  { title: "Fitness Tracking App", category: "App", desc: "Cross-platform fitness app with workout tracking and social features.", tech: "Flutter, Node.js" },
  { title: "Social Media Campaign", category: "Marketing", desc: "Brand awareness campaign generating 1M+ impressions for a startup.", tech: "Facebook Ads, Instagram" },
  { title: "Real Estate Portal", category: "Web", desc: "Property listing portal with advanced search and virtual tours.", tech: "React, PostgreSQL" },
  { title: "Delivery Management App", category: "App", desc: "Last-mile delivery management system with real-time tracking.", tech: "React Native, Google Maps" },
  { title: "Google Ads Campaign", category: "Marketing", desc: "PPC campaign with 5X ROAS for an education platform.", tech: "Google Ads, Analytics" },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const anim = useScrollAnimation();
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <section className="gradient-bg pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground animate-fade-up">Our Portfolio</h1>
          <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto animate-fade-up delay-100">
            Explore our latest projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>
      </section>

      <section ref={anim.ref} className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="flex justify-center gap-3 mb-10 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat ? "gradient-bg text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <div key={project.title} className={`glass-card rounded-xl overflow-hidden ${anim.isVisible ? `animate-fade-up delay-${((i % 3) + 1) * 100}` : "opacity-0"}`}>
                <div className="h-48 gradient-bg flex items-center justify-center">
                  <span className="text-primary-foreground/30 font-heading font-bold text-4xl">{project.category}</span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{project.category}</span>
                  <h3 className="font-heading font-semibold text-lg mt-3 mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{project.desc}</p>
                  <p className="text-xs text-muted-foreground">Tech: {project.tech}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
