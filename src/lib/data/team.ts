export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  animal: string;
  animalEmoji: string;
  avatar: string;
  traits: string[];
  shortBio: string;
  fullBio: string;
  skills: string[];
  color: string;
  portfolioUrl: string;
}

export const team: TeamMember[] = [
  {
    slug: "lokesh",
    name: "Lokesh",
    role: "Lead Developer & Visionary",
    animal: "Dragon",
    animalEmoji: "🐉",
    avatar: "/lokesh.png",
    traits: ["Power", "Vision", "Leadership"],
    shortBio:
      "A visionary leader who commands the team with strategic foresight and unwavering determination.",
    fullBio:
      "Lokesh is the driving force behind Flaron Tech's technical direction. Like the mythical dragon, he combines raw power with a far-reaching vision that sees beyond the horizon of current technology. His leadership style inspires the team to push boundaries and achieve what others consider impossible. With expertise spanning full stack development and system architecture, Lokesh transforms complex challenges into elegant solutions.",
    skills: [
      "System Architecture",
      "Full Stack Development",
      "Technical Leadership",
      "Cloud Infrastructure",
      "Strategic Planning",
      "Team Mentoring",
    ],
    color: "#FF4444",
    portfolioUrl: "#",
  },
  {
    slug: "thamil",
    name: "Thamil",
    role: "Senior Developer",
    animal: "Panther",
    animalEmoji: "🐆",
    avatar: "/thamil.png",
    traits: ["Speed", "Intelligence", "Precision"],
    shortBio:
      "Swift and precise in execution, delivering high-performance solutions with unmatched efficiency.",
    fullBio:
      "Thamil embodies the panther's legendary combination of speed and intelligence. In the digital jungle of software development, he moves with precision — delivering clean, optimized code at remarkable speed without sacrificing quality. His analytical mind dissects complex problems into manageable components, and his attention to detail ensures every line of code meets the highest standards. Thamil's expertise in performance optimization makes him the go-to expert for building blazing-fast applications.",
    skills: [
      "React & Next.js",
      "Performance Optimization",
      "API Development",
      "Database Design",
      "Code Review",
      "Agile Methodology",
    ],
    color: "#1A1A2E",
    portfolioUrl: "#",
  },
  {
    slug: "aravind",
    name: "Aravind",
    role: "Creative Developer",
    animal: "Phoenix",
    animalEmoji: "🔥",
    avatar: "/aravindh.png",
    traits: ["Innovation", "Rebirth", "Creativity"],
    shortBio:
      "A creative force who brings fresh perspectives and innovative solutions to every challenge.",
    fullBio:
      "Aravind is the creative phoenix of Flaron Tech — constantly reinventing approaches and breathing new life into projects. His innovative mindset transforms conventional problems into opportunities for breakthrough solutions. Like the phoenix rising from ashes, Aravind has a remarkable ability to take struggling projects and revitalize them with fresh energy and creative thinking. His passion for UI/UX design and frontend development creates experiences that captivate and delight users.",
    skills: [
      "UI/UX Design",
      "Creative Development",
      "Framer Motion",
      "Design Systems",
      "Prototyping",
      "Brand Identity",
    ],
    color: "#FF6B35",
    portfolioUrl: "#",
  },
  {
    slug: "ronak",
    name: "Ronak",
    role: "Backend Engineer",
    animal: "Elephant",
    animalEmoji: "🐘",
    avatar: "/ronak.png",
    traits: ["Strength", "Reliability", "Wisdom"],
    shortBio:
      "The foundation of our backend systems, building infrastructure with unwavering reliability.",
    fullBio:
      "Ronak brings the elephant's legendary strength and wisdom to Flaron Tech's backend infrastructure. He is the bedrock upon which reliable systems are built — his architectural decisions stand the test of time and scale. With deep knowledge of databases, server systems, and cloud infrastructure, Ronak ensures that every application we build has a solid, scalable foundation. His methodical approach and extensive memory for system details make him the team's trusted guardian of data integrity and system stability.",
    skills: [
      "Backend Architecture",
      "Database Management",
      "DevOps & CI/CD",
      "Security Implementation",
      "Server Administration",
      "Scalability Planning",
    ],
    color: "#5C6BC0",
    portfolioUrl: "#",
  },
  {
    slug: "faheem",
    name: "Faheem",
    role: "Project Strategist & Developer",
    animal: "Fox",
    animalEmoji: "🦊",
    avatar: "/faheemud.png",
    traits: ["Strategy", "Clever Problem Solving"],
    shortBio:
      "A strategic thinker who navigates complex project landscapes with clever, elegant solutions.",
    fullBio:
      "Faheem is the fox of Flaron Tech — sharp, strategic, and always finding the cleverest path to success. His ability to see around corners and anticipate challenges before they arise makes him an invaluable project strategist. Faheem combines technical skill with business acumen, ensuring that every solution not only works brilliantly but also delivers real value to clients. His resourceful approach to problem-solving often discovers elegant shortcuts that save time and resources without compromising quality.",
    skills: [
      "Project Management",
      "Strategic Planning",
      "Full Stack Development",
      "Client Communication",
      "Problem Solving",
      "Business Analysis",
    ],
    color: "#FF8F00",
    portfolioUrl: "https://fox-psi.vercel.app/",
  },
];
