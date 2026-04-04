import { Globe, Code, Smartphone, TrendingUp, Search, Share2 } from "lucide-react";

export const servicesData = {
  webDevelopment: {
    title: "Web Development",
    slug: "web-development",
    icon: Globe,
    description: "Custom-built websites that drive results and elevate your brand presence online.",
    subServices: [
      { title: "Customized Web Designing", slug: "customized-web-designing", description: "Tailor-made websites designed specifically for your business needs and brand identity." },
      { title: "Dynamic Web Designing", slug: "dynamic-web-designing", description: "Interactive and database-driven websites with real-time content management capabilities." },
      { title: "E-Commerce Web Designing", slug: "ecommerce-web-designing", description: "Feature-rich online stores with secure payment gateways and inventory management." },
      { title: "Landing Page Designing", slug: "landing-page-designing", description: "High-converting landing pages optimized for lead generation and campaign performance." },
      { title: "Website Redesigning", slug: "website-redesigning", description: "Transform your outdated website into a modern, fast, and conversion-optimized platform." },
      { title: "SEO Web Designing", slug: "seo-web-designing", description: "Search engine optimized websites built from the ground up for maximum visibility." },
      { title: "Static Web Designing", slug: "static-web-designing", description: "Fast-loading, secure static websites perfect for portfolios and business profiles." },
    ],
  },
  softwareDevelopment: {
    title: "Software Development",
    slug: "software-development",
    icon: Code,
    description: "Enterprise-grade software solutions to automate and scale your business operations.",
    subServices: [
      { title: "Custom Software Development", slug: "custom-software-development", description: "Bespoke software solutions tailored to your unique business processes and workflows." },
      { title: "ERP Solutions", slug: "erp-solutions", description: "Comprehensive Enterprise Resource Planning systems to streamline your operations." },
      { title: "CRM Development", slug: "crm-development", description: "Customer Relationship Management systems to manage leads, sales, and customer interactions." },
      { title: "POS Systems", slug: "pos-systems", description: "Modern Point of Sale systems for retail, restaurants, and service businesses." },
      { title: "Enterprise Applications", slug: "enterprise-applications", description: "Large-scale enterprise applications built for performance, security, and scalability." },
    ],
  },
  appDevelopment: {
    title: "App Development",
    slug: "app-development",
    icon: Smartphone,
    description: "Native and cross-platform mobile applications that users love.",
    subServices: [
      { title: "Android App Development", slug: "android-app-development", description: "Native Android applications built with Kotlin and Java for optimal performance." },
      { title: "iOS App Development", slug: "ios-app-development", description: "Premium iOS applications designed for iPhone and iPad using Swift." },
      { title: "Cross-Platform Apps", slug: "cross-platform-apps", description: "Build once, deploy everywhere with React Native and Flutter solutions." },
      { title: "UI/UX Design", slug: "ui-ux-design", description: "User-centered design that creates intuitive, engaging, and delightful app experiences." },
    ],
  },
  digitalMarketing: {
    title: "Digital Marketing",
    slug: "digital-marketing",
    icon: TrendingUp,
    description: "Data-driven marketing strategies to grow your online presence and revenue.",
    categories: [
      {
        title: "Digital Marketing",
        subServices: [
          { title: "City Wise Promotion", slug: "city-wise-promotion", description: "Targeted digital marketing campaigns focused on specific cities for maximum local impact." },
          { title: "Country Wise Promotion", slug: "country-wise-promotion", description: "Expand your reach with country-level digital marketing campaigns." },
          { title: "Email Marketing", slug: "email-marketing", description: "Strategic email campaigns that nurture leads and drive conversions." },
          { title: "Google Map Listing", slug: "google-map-listing", description: "Optimize your Google Business Profile for local search visibility." },
          { title: "Google Promotion Services", slug: "google-promotion-services", description: "Google Ads management for maximum ROI on your advertising spend." },
          { title: "State Wise Promotion", slug: "state-wise-promotion", description: "Regional marketing campaigns tailored to state-level audiences." },
          { title: "Mobile App Marketing", slug: "mobile-app-marketing", description: "Drive app downloads and engagement with targeted mobile marketing strategies." },
          { title: "Internet Marketing", slug: "internet-marketing", description: "Comprehensive online marketing strategies across multiple digital channels." },
        ],
      },
      {
        title: "SEO",
        icon: Search,
        subServices: [
          { title: "Guaranteed SEO", slug: "guaranteed-seo", description: "Results-driven SEO services with guaranteed ranking improvements." },
          { title: "Backlink Building", slug: "backlink-building", description: "High-quality link building strategies to boost your domain authority." },
          { title: "On Page Optimization", slug: "on-page-optimization", description: "Optimize your website content, meta tags, and structure for search engines." },
          { title: "Off Page Optimization", slug: "off-page-optimization", description: "Build your website authority through strategic off-page SEO techniques." },
          { title: "Local SEO", slug: "local-seo", description: "Dominate local search results and attract customers in your area." },
          { title: "Technical SEO", slug: "technical-seo", description: "Fix technical issues and optimize site performance for better crawlability." },
        ],
      },
      {
        title: "SMO",
        icon: Share2,
        subServices: [
          { title: "Facebook Ads", slug: "facebook-ads", description: "Targeted Facebook advertising campaigns to reach your ideal audience." },
          { title: "Instagram Ads", slug: "instagram-ads", description: "Visual marketing on Instagram to boost brand awareness and engagement." },
          { title: "LinkedIn Management", slug: "linkedin-management", description: "Professional LinkedIn marketing for B2B lead generation and brand building." },
          { title: "Social Media Management", slug: "social-media-management", description: "End-to-end social media management across all major platforms." },
          { title: "YouTube Ads", slug: "youtube-ads", description: "Video advertising on YouTube to reach billions of potential customers." },
        ],
      },
    ],
  },
};

export function getAllServices() {
  const all: { title: string; slug: string; description: string; parentSlug: string; parentTitle: string }[] = [];
  const cats = [servicesData.webDevelopment, servicesData.softwareDevelopment, servicesData.appDevelopment];
  cats.forEach((cat) => {
    cat.subServices.forEach((s) => all.push({ ...s, parentSlug: cat.slug, parentTitle: cat.title }));
  });
  if (servicesData.digitalMarketing.categories) {
    servicesData.digitalMarketing.categories.forEach((c) => {
      c.subServices.forEach((s) => all.push({ ...s, parentSlug: servicesData.digitalMarketing.slug, parentTitle: servicesData.digitalMarketing.title }));
    });
  }
  return all;
}
