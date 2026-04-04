import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Share2 } from "lucide-react";

const blogData: Record<string, { title: string; category: string; date: string; readTime: string; content: string[] }> = {
  "1": {
    title: "10 Web Design Trends to Watch in 2025",
    category: "Web Development",
    date: "March 15, 2025",
    readTime: "5 min",
    content: [
      "Web design continues to evolve at a rapid pace, and staying ahead of the curve is essential for businesses that want to make a lasting impression online. In 2025, several exciting trends are reshaping how websites look, feel, and function.",
      "Glassmorphism and frosted glass effects continue to dominate, creating depth and visual hierarchy in modern interfaces. This trend combines transparency, blur effects, and vivid colors to create a sophisticated, layered look that users love.",
      "AI-powered personalization is becoming standard, with websites adapting in real-time to individual user preferences, browsing history, and behavior patterns. This creates a more engaging and relevant experience for every visitor.",
      "Micro-animations and interactive elements are being used more strategically to guide users through the website journey, highlight important information, and create delightful moments that increase engagement and conversion rates.",
      "Dark mode is no longer just an option—it's an expectation. Websites are being designed with both light and dark themes from the ground up, ensuring a comfortable viewing experience in any environment.",
      "Performance-first design is a major focus, with designers and developers working together to create beautiful websites that load in under 2 seconds. This not only improves user experience but also boosts SEO rankings significantly.",
    ],
  },
  "2": {
    title: "Complete Guide to Local SEO for Small Business",
    category: "SEO",
    date: "March 10, 2025",
    readTime: "8 min",
    content: [
      "Local SEO is one of the most powerful marketing strategies for small businesses looking to attract customers in their area. With more people using mobile devices to search for nearby services, optimizing for local search has never been more important.",
      "Start by claiming and optimizing your Google Business Profile. This free tool from Google is the foundation of local SEO. Ensure your business name, address, phone number, and hours are accurate and consistent across all platforms.",
      "Build local citations by listing your business in relevant online directories such as Yelp, Yellow Pages, and industry-specific directories. Consistency in your NAP (Name, Address, Phone) information across all listings is crucial.",
      "Encourage customer reviews on Google and other platforms. Positive reviews not only improve your local search rankings but also build trust with potential customers who are comparing businesses in your area.",
      "Create location-specific content on your website. This includes local landing pages, blog posts about local events or news related to your industry, and case studies featuring local clients.",
      "Optimize your website for mobile users. Most local searches happen on mobile devices, so your website must load quickly and provide an excellent mobile experience to convert local searchers into customers.",
    ],
  },
  "3": {
    title: "How Digital Marketing Can 10X Your Revenue",
    category: "Digital Marketing",
    date: "March 5, 2025",
    readTime: "6 min",
    content: [
      "Digital marketing has transformed the way businesses reach and engage with their target audience. When executed strategically, it has the potential to multiply your revenue many times over.",
      "Start with a comprehensive digital marketing strategy that aligns with your business goals. This should include a mix of SEO, content marketing, social media, paid advertising, and email marketing—all working together to create a powerful growth engine.",
      "Invest in content marketing that provides genuine value to your audience. High-quality blog posts, videos, and infographics not only attract organic traffic but also establish your brand as an authority in your industry.",
      "Leverage the power of social media advertising with precise targeting. Platforms like Facebook, Instagram, and LinkedIn allow you to reach your ideal customers based on demographics, interests, and behaviors.",
      "Implement marketing automation to nurture leads through the sales funnel. Email sequences, retargeting ads, and personalized content can significantly increase your conversion rates without requiring additional manual effort.",
      "Track and analyze every aspect of your digital marketing campaigns. Use data-driven insights to continuously optimize your strategies, allocate budget to the highest-performing channels, and maximize your return on investment.",
    ],
  },
};

export default function BlogDetailPage() {
  const { blogId } = useParams<{ blogId: string }>();
  const blog = blogData[blogId || ""];

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-heading font-bold text-3xl mb-4">Blog Post Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="gradient-bg pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-4 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <span className="inline-block text-xs font-medium text-primary-foreground bg-primary-foreground/10 px-3 py-1 rounded-full mb-4">{blog.category}</span>
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground animate-fade-up">{blog.title}</h1>
          <div className="flex items-center gap-4 mt-4 text-primary-foreground/60 text-sm">
            <span>{blog.date}</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {blog.readTime} read</span>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl">
          <div className="prose prose-lg max-w-none">
            {blog.content.map((para, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-6">{para}</p>
            ))}
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center">
            <p className="text-muted-foreground mb-4">Found this helpful? Share it with others.</p>
            <Link to="/contact" className="gradient-bg text-primary-foreground px-8 py-3 rounded-lg font-semibold hover-scale inline-block">
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
