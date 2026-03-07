export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    company: "GreenLeaf Organics",
    role: "Founder & CEO",
    content:
      "Flaron Tech transformed our online presence completely. Their forest-inspired approach to design gave our organic brand the perfect digital identity. The website they built is not only beautiful but converts visitors into customers effortlessly.",
    rating: 5,
  },
  {
    id: "2",
    name: "James Rodriguez",
    company: "TechVault Solutions",
    role: "CTO",
    content:
      "Working with the Flaron Tech team was an exceptional experience. They delivered a complex SaaS platform that exceeded our expectations in both performance and design. Their full-stack expertise is truly impressive.",
    rating: 5,
  },
  {
    id: "3",
    name: "Priya Sharma",
    company: "WellnessPath",
    role: "Product Manager",
    content:
      "The mobile app Flaron Tech built for us has received incredible user feedback. The team understood our vision perfectly and delivered an intuitive, high-performance application that our users love.",
    rating: 5,
  },
  {
    id: "4",
    name: "David Chen",
    company: "Horizon Analytics",
    role: "Operations Director",
    content:
      "Flaron Tech's documentation services saved our engineering team countless hours. Their structured approach to technical writing produced clear, comprehensive docs that accelerated our developer onboarding by 60%.",
    rating: 5,
  },
];
