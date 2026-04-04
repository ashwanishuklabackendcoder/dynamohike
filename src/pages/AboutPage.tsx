import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Users, Target, Eye, Award } from "lucide-react";

const team = [
  { name: "Vikram Singh", role: "Founder & CEO", bio: "10+ years in digital strategy and business transformation." },
  { name: "Neha Patel", role: "Head of Development", bio: "Full-stack architect specializing in scalable web applications." },
  { name: "Arjun Mehta", role: "Marketing Director", bio: "SEO and performance marketing expert with proven track record." },
  { name: "Kavita Rao", role: "Design Lead", bio: "UI/UX designer creating beautiful, user-centered digital experiences." },
];

export default function AboutPage() {
  const missionAnim = useScrollAnimation();
  const teamAnim = useScrollAnimation();

  return (
    <>
      <section className="gradient-bg pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground animate-fade-up">About Dynamo Hike</h1>
          <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto animate-fade-up delay-100">
            We are a passionate team of developers, designers, and marketers dedicated to helping businesses succeed in the digital world.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Dynamo Hike is a full-service IT and digital marketing agency based in India. Since our inception, we have been committed to delivering cutting-edge technology solutions and data-driven marketing strategies that help businesses of all sizes achieve their goals.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team combines technical expertise with creative thinking to deliver solutions that not only look great but also perform exceptionally. From custom web development to comprehensive digital marketing campaigns, we handle every aspect of your digital presence.
            </p>
          </div>
        </div>
      </section>

      <section ref={missionAnim.ref} className="section-padding bg-secondary">
        <div className="container mx-auto">
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${missionAnim.isVisible ? "" : "opacity-0"}`}>
            {[
              { icon: Target, title: "Our Mission", text: "To empower businesses with innovative digital solutions that drive growth, enhance efficiency, and create lasting impact in the digital landscape." },
              { icon: Eye, title: "Our Vision", text: "To be the most trusted and results-driven digital agency, recognized globally for transforming businesses through technology and marketing excellence." },
              { icon: Award, title: "Our Values", text: "Innovation, transparency, client-first approach, continuous learning, and delivering measurable results that exceed expectations." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className={`glass-card rounded-xl p-8 text-center ${missionAnim.isVisible ? `animate-fade-up delay-${(i + 1) * 100}` : "opacity-0"}`}>
                  <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section ref={teamAnim.ref} className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary font-medium mb-2">Our Team</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl">Meet the Experts</h2>
          </div>
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${teamAnim.isVisible ? "" : "opacity-0"}`}>
            {team.map((member, i) => (
              <div key={member.name} className={`glass-card rounded-xl p-6 text-center ${teamAnim.isVisible ? `animate-fade-up delay-${(i + 1) * 100}` : "opacity-0"}`}>
                <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold">{member.name}</h3>
                <p className="text-primary text-sm font-medium">{member.role}</p>
                <p className="text-muted-foreground text-xs mt-2">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
