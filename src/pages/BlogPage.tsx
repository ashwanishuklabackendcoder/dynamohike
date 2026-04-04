import { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";

const blogCategories = ["All", "Web Development", "SEO", "Digital Marketing"];

const blogs = [
  { id: "1", title: "10 Web Design Trends to Watch in 2025", category: "Web Development", excerpt: "Discover the latest web design trends that are shaping the digital landscape and how you can leverage them for your business.", date: "March 15, 2025", readTime: "5 min" },
  { id: "2", title: "Complete Guide to Local SEO for Small Business", category: "SEO", excerpt: "Learn how to optimize your business for local search results and attract more customers from your area.", date: "March 10, 2025", readTime: "8 min" },
  { id: "3", title: "How Digital Marketing Can 10X Your Revenue", category: "Digital Marketing", excerpt: "A comprehensive guide on leveraging digital marketing strategies to significantly grow your business revenue.", date: "March 5, 2025", readTime: "6 min" },
  { id: "4", title: "Why Every Business Needs a Mobile App in 2025", category: "Web Development", excerpt: "Mobile apps are no longer optional. Here's why your business needs one and how to get started.", date: "February 28, 2025", readTime: "4 min" },
  { id: "5", title: "Backlink Building Strategies That Actually Work", category: "SEO", excerpt: "Stop wasting time on outdated link building tactics. Here are proven strategies that deliver results.", date: "February 20, 2025", readTime: "7 min" },
  { id: "6", title: "Facebook Ads vs Google Ads: Which is Better?", category: "Digital Marketing", excerpt: "A detailed comparison of Facebook and Google advertising to help you choose the right platform for your business.", date: "February 15, 2025", readTime: "6 min" },
];

export default function BlogPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? blogs : blogs.filter((b) => b.category === filter);

  return (
    <>
      <section className="gradient-bg pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground animate-fade-up">Blog & Insights</h1>
          <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto animate-fade-up delay-100">
            Stay updated with the latest trends, tips, and strategies in web development, SEO, and digital marketing.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="flex justify-center gap-3 mb-10 flex-wrap">
            {blogCategories.map((cat) => (
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
            {filtered.map((blog) => (
              <Link to={`/blog/${blog.id}`} key={blog.id} className="glass-card rounded-xl overflow-hidden group">
                <div className="h-48 gradient-bg flex items-center justify-center">
                  <span className="text-primary-foreground/20 font-heading font-bold text-2xl">{blog.category}</span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{blog.category}</span>
                  <h3 className="font-heading font-semibold mt-3 mb-2 group-hover:text-primary transition-colors">{blog.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{blog.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{blog.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {blog.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
