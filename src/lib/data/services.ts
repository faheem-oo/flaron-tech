import {
  Globe,
  Smartphone,
  Layers,
  FileText,
  Globe2,
  Server,
  Mail,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  icon: typeof Globe;
  overview: string;
  technologies: string[];
  benefits: string[];
  useCases: string[];
}

export const services: Service[] = [
  {
    slug: "website-design-development",
    title: "Website Design & Development",
    shortDescription:
      "Crafting stunning, responsive websites that captivate visitors and drive conversions with cutting-edge design principles.",
    icon: Globe,
    overview:
      "We design and develop modern, responsive websites tailored to your brand identity and business goals. From single-page portfolios to complex enterprise platforms, our team delivers pixel-perfect designs backed by robust, scalable code. Every website we build is optimized for speed, accessibility, and search engine visibility.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "WordPress",
      "Figma",
      "Framer Motion",
      "Node.js",
    ],
    benefits: [
      "Mobile-first responsive design that works on all devices",
      "SEO-optimized structure for maximum visibility",
      "Fast loading speeds with modern optimization techniques",
      "Custom animations and interactive user experiences",
      "Scalable architecture that grows with your business",
      "Accessibility compliant (WCAG standards)",
    ],
    useCases: [
      "Corporate business websites with CMS integration",
      "E-commerce storefronts with payment processing",
      "Portfolio websites for creative professionals",
      "Landing pages for marketing campaigns",
      "SaaS product websites with interactive demos",
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile Application Development",
    shortDescription:
      "Building powerful, intuitive mobile applications for iOS and Android that users love to engage with.",
    icon: Smartphone,
    overview:
      "We create native and cross-platform mobile applications that deliver seamless user experiences. Our mobile development team combines beautiful UI design with powerful backend functionality to build apps that solve real problems and delight users. From concept to App Store deployment, we handle every step.",
    technologies: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Firebase",
      "REST APIs",
      "GraphQL",
      "Redux",
    ],
    benefits: [
      "Cross-platform development for iOS and Android simultaneously",
      "Native performance with smooth animations",
      "Offline-first architecture for reliable usage",
      "Push notifications and real-time updates",
      "App Store optimization and deployment support",
      "Ongoing maintenance and performance monitoring",
    ],
    useCases: [
      "On-demand service applications (delivery, ride-sharing)",
      "Social networking and community platforms",
      "Health and fitness tracking applications",
      "Enterprise workforce management tools",
      "Educational and e-learning apps",
    ],
  },
  {
    slug: "full-stack-development",
    title: "Full Stack Development",
    shortDescription:
      "End-to-end application development combining frontend excellence with robust backend architecture.",
    icon: Layers,
    overview:
      "Our full stack development service covers every layer of your application — from the user interface to the database and everything in between. We architect scalable, secure applications using modern frameworks and cloud infrastructure. Whether you need a startup MVP or an enterprise-grade platform, we deliver production-ready solutions.",
    technologies: [
      "Node.js",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "AWS",
      "Next.js",
      "Express",
      "Prisma",
    ],
    benefits: [
      "Single team managing frontend, backend, and infrastructure",
      "Consistent code quality across the entire stack",
      "Faster development cycles with unified architecture",
      "Scalable cloud-native deployments",
      "Comprehensive testing and CI/CD pipelines",
      "Real-time features with WebSocket integration",
    ],
    useCases: [
      "SaaS platforms with multi-tenant architecture",
      "Real-time dashboards and analytics platforms",
      "Marketplace and booking systems",
      "Content management systems with APIs",
      "IoT data collection and visualization platforms",
    ],
  },
  {
    slug: "documentation-services",
    title: "Documentation Services",
    shortDescription:
      "Professional technical documentation that makes complex systems clear and accessible.",
    icon: FileText,
    overview:
      "Clear documentation is the backbone of successful software projects. We create comprehensive technical documentation, API references, user guides, and knowledge bases that help your team and users understand your products. Our documentation follows industry best practices with proper structure, versioning, and searchability.",
    technologies: [
      "Markdown",
      "Docusaurus",
      "GitBook",
      "Swagger/OpenAPI",
      "Confluence",
      "Notion",
      "Storybook",
      "JSDoc",
    ],
    benefits: [
      "Reduced support tickets with clear user guides",
      "Faster developer onboarding with technical docs",
      "Interactive API documentation with examples",
      "Version-controlled documentation that stays current",
      "Searchable knowledge bases for self-service support",
      "Consistent formatting and professional presentation",
    ],
    useCases: [
      "API documentation for developer platforms",
      "Internal engineering knowledge bases",
      "Product user manuals and getting-started guides",
      "Open source project documentation",
      "Compliance and regulatory documentation",
    ],
  },
  {
    slug: "domain-registration",
    title: "Domain Registration",
    shortDescription:
      "Secure your perfect domain name with expert guidance on branding and online identity.",
    icon: Globe2,
    overview:
      "Your domain name is your digital identity. We help you find, register, and manage the perfect domain for your business. Our team provides expert guidance on domain selection, brand protection, DNS configuration, and domain portfolio management. We handle the technical setup so you can focus on building your business.",
    technologies: [
      "DNS Management",
      "WHOIS Protection",
      "SSL Certificates",
      "Domain Forwarding",
      "DNSSEC",
      "Cloudflare",
    ],
    benefits: [
      "Expert domain name consultation and brand alignment",
      "Privacy protection for your registration details",
      "Professional DNS setup and configuration",
      "Domain portfolio management for multiple brands",
      "Automatic renewal to prevent expiration",
      "Free SSL certificate setup with every domain",
    ],
    useCases: [
      "Startup brand establishment with new domain",
      "Corporate rebrand with domain migration",
      "Multi-brand domain portfolio management",
      "International domain variants (.com, .co, .io)",
      "Premium domain acquisition strategy",
    ],
  },
  {
    slug: "web-hosting",
    title: "Web Hosting Services",
    shortDescription:
      "Reliable, high-performance hosting solutions that keep your website fast and always online.",
    icon: Server,
    overview:
      "We provide robust web hosting solutions designed for performance, security, and reliability. From shared hosting for small websites to dedicated cloud infrastructure for high-traffic platforms, our hosting services include 99.9% uptime guarantees, automated backups, and 24/7 monitoring. Your website stays fast, secure, and always accessible.",
    technologies: [
      "AWS",
      "Vercel",
      "DigitalOcean",
      "Nginx",
      "Cloudflare CDN",
      "Docker",
      "Kubernetes",
      "Let's Encrypt",
    ],
    benefits: [
      "99.9% uptime guarantee with redundant infrastructure",
      "Automated daily backups and disaster recovery",
      "Global CDN for fast loading worldwide",
      "Free SSL certificates and security hardening",
      "Automatic scaling during traffic spikes",
      "24/7 server monitoring and incident response",
    ],
    useCases: [
      "Business website hosting with custom domains",
      "E-commerce hosting with PCI compliance",
      "Application hosting with CI/CD deployment",
      "WordPress managed hosting",
      "Static site hosting with global CDN",
    ],
  },
  {
    slug: "email-hosting",
    title: "Email Hosting Services",
    shortDescription:
      "Professional email solutions with your domain for a polished, trustworthy business presence.",
    icon: Mail,
    overview:
      "Professional email hosting gives your business credibility and reliability. We set up and manage custom email solutions with your domain name, providing spam protection, encryption, and seamless integration with your existing tools. Whether you need individual mailboxes or enterprise email infrastructure, we ensure your communications are secure and professional.",
    technologies: [
      "Google Workspace",
      "Microsoft 365",
      "cPanel",
      "IMAP/SMTP",
      "SPF/DKIM/DMARC",
      "Exchange Server",
    ],
    benefits: [
      "Professional @yourdomain.com email addresses",
      "Advanced spam filtering and virus protection",
      "Encrypted email communication (TLS/SSL)",
      "Calendar, contacts, and collaboration tools",
      "Mobile sync across all devices",
      "Large mailbox storage with archiving",
    ],
    useCases: [
      "Small business professional email setup",
      "Enterprise email migration from legacy systems",
      "Team collaboration with shared calendars and drives",
      "Secure email for legal and financial services",
      "Multi-domain email management for agencies",
    ],
  },
];
