export interface Project {
  id: string;
  title: string;
  category: "websites" | "mobile" | "uiux" | "systems";
  description: string;
  technologies: string[];
  imageUrl: string;
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "GreenMart E-Commerce Platform",
    category: "websites",
    description:
      "A full-featured e-commerce platform for sustainable products with real-time inventory management, secure payments, and an intuitive shopping experience.",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    imageUrl: "/images/projects/placeholder.svg",
  },
  {
    id: "fitness-app",
    title: "FitForest Fitness Tracker",
    category: "mobile",
    description:
      "A cross-platform fitness tracking app with GPS-based trail mapping, workout analytics, and social community features for outdoor enthusiasts.",
    technologies: ["React Native", "Firebase", "Node.js", "MapBox"],
    imageUrl: "/images/projects/placeholder.svg",
  },
  {
    id: "saas-dashboard",
    title: "CloudVine Analytics Dashboard",
    category: "systems",
    description:
      "An enterprise analytics dashboard with real-time data visualization, automated reporting, and multi-tenant architecture for SaaS businesses.",
    technologies: ["React", "D3.js", "Python", "AWS"],
    imageUrl: "/images/projects/placeholder.svg",
  },
  {
    id: "restaurant-app",
    title: "DineLocal Restaurant App",
    category: "mobile",
    description:
      "A mobile ordering and reservation app for local restaurants featuring menu browsing, table booking, and contactless payment integration.",
    technologies: ["Flutter", "Firebase", "Stripe", "Google Maps"],
    imageUrl: "/images/projects/placeholder.svg",
  },
  {
    id: "portfolio-website",
    title: "Artisan Creative Portfolio",
    category: "websites",
    description:
      "A visually stunning portfolio website for a creative agency with immersive animations, case study showcases, and integrated contact management.",
    technologies: ["Next.js", "Framer Motion", "Sanity CMS", "Vercel"],
    imageUrl: "/images/projects/placeholder.svg",
  },
  {
    id: "design-system",
    title: "LeafUI Design System",
    category: "uiux",
    description:
      "A comprehensive design system with 50+ reusable components, accessibility guidelines, and interactive documentation for a fintech startup.",
    technologies: ["Figma", "Storybook", "React", "Tailwind CSS"],
    imageUrl: "/images/projects/placeholder.svg",
  },
  {
    id: "crm-system",
    title: "NatureFlow CRM Platform",
    category: "systems",
    description:
      "A custom CRM system with pipeline management, automated workflows, email integration, and detailed customer analytics for growing businesses.",
    technologies: ["Node.js", "PostgreSQL", "Redis", "Docker"],
    imageUrl: "/images/projects/placeholder.svg",
  },
  {
    id: "banking-ui",
    title: "EcoBank Mobile UI",
    category: "uiux",
    description:
      "A complete mobile banking UI/UX redesign focusing on accessibility, simplified navigation, and a nature-inspired visual identity.",
    technologies: ["Figma", "Protopie", "User Research", "A/B Testing"],
    imageUrl: "/images/projects/placeholder.svg",
  },
];

export const categories = [
  { key: "all", label: "All Projects" },
  { key: "websites", label: "Websites" },
  { key: "mobile", label: "Mobile Apps" },
  { key: "uiux", label: "UI/UX Design" },
  { key: "systems", label: "Systems" },
];
