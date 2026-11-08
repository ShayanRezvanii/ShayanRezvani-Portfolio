import icon3engine from "../assets/projects/3engine.png";
import iconFunicket from "../assets/projects/funicket.png";
import iconKeyhanrah from "../assets/projects/keyhanrah.png";
import iconPortfolio from "../assets/projects/portfolio.png";
import iconSofragol from "../assets/projects/sofragol.png";
import iconTamnama from "../assets/projects/tamnama.png";
import iconTushehbarDashboard from "../assets/projects/tushehbar-dashboard.png";
import iconTushehbar from "../assets/projects/tushehbar.png";

export type ProjectCategory = "Frontend" | "Full-Stack" | "WordPress";

export interface Project {
  slug: string;
  title: string;
  role: string;
  category: ProjectCategory;
  year: string;
  /** Short one-liner shown on the project card */
  tagline: string;
  /** Full description shown on the detail page */
  description: string;
  /** Bullet highlights shown on the detail page */
  features: string[];
  tech: string[];
  link: string;
  gradientFrom: string;
  gradientTo: string;
  initials: string;
  /** Brand / favicon icon for the project */
  icon: string;
}

export const projects: Project[] = [
  {
    slug: "funicket",
    title: "Funicket",
    role: "Frontend Developer",
    category: "Frontend",
    year: "2023",
    tagline: "Online ticketing platform with optimized user flows.",
    description:
      "Funicket is an online ticketing platform. I implemented the frontend architecture and optimized the booking and checkout user flows, making the experience fast and friendly across all devices.",
    features: [
      "Frontend architecture with reusable components",
      "Optimized booking & checkout flows",
      "Fully responsive across mobile and desktop",
      "Clean, conversion-focused landing experience",
    ],
    tech: ["React", "Next.js", "Tailwind CSS"],
    link: "https://funicket.ir/",
    gradientFrom: "#EC4899",
    gradientTo: "#F43F5E",
    initials: "FK",
    icon: iconFunicket,
  },
  {
    slug: "keyhanrah",
    title: "Keyhan Rah",
    role: "Frontend Developer",
    category: "Frontend",
    year: "2024",
    tagline: "Flight inquiry platform for domestic & international trips.",
    description:
      "Keyhan Rah is a flight inquiry service for domestic and international routes. I built the frontend experience for submitting requests and following up with 24/7 support, focusing on a clear RTL layout and a fast request flow.",
    features: [
      "Flight inquiry request forms for domestic & international routes",
      "RTL-friendly, mobile-first interface",
      "Clear status and support-oriented UX",
      "Performance-focused landing and request pages",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://keyhanrah.com/",
    gradientFrom: "#0EA5E9",
    gradientTo: "#1D4ED8",
    initials: "KR",
    icon: iconKeyhanrah,
  },
  {
    slug: "sofragol",
    title: "Sofragol",
    role: "Frontend Developer",
    category: "Frontend",
    year: "2024",
    tagline: "Next.js storefront for an organic farm & products brand.",
    description:
      "Sofragol (Mazraeh SofraGol) is an organic farm brand from Golpayegan selling honey, saffron, vinegars, jams, and herbal products online. I built the frontend with Next.js — product browsing, shop flows, and a clean RTL experience that matches the brand's natural teal identity and works smoothly on mobile.",
    features: [
      "Next.js storefront for organic farm products",
      "RTL product listing and shop experience",
      "Brand-led UI with responsive layouts",
      "Performance-focused pages for fast browsing",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://sofragol.com/",
    gradientFrom: "#2CB8AD",
    gradientTo: "#0F766E",
    initials: "SG",
    icon: iconSofragol,
  },
  {
    slug: "tamnama",
    title: "Tamnama Menu",
    role: "Full-Stack Developer",
    category: "Full-Stack",
    year: "2024",
    tagline: "Full-stack digital restaurant menu with live admin panel.",
    description:
      "Tamnama is a full-stack digital menu app for restaurants and cafés. I built the React frontend and a Node.js + Express backend, including an admin panel for managing items and categories with real-time updates pushed to customers. The Sofragol instance is live in production.",
    features: [
      "Customer-facing digital menu with categories",
      "Admin panel to manage items, prices & images",
      "Real-time updates via WebSockets",
      "RESTful API with Node.js + Express",
      "MongoDB data layer",
    ],
    tech: ["React", "Node.js", "Express", "Socket.io", "MongoDB"],
    link: "https://tamnama.nsjsoft.ir/sofragol",
    gradientFrom: "#16A34A",
    gradientTo: "#0D9488",
    initials: "TM",
    icon: iconTamnama,
  },
  {
    slug: "tushehbar-dashboard",
    title: "Tushehbar Dashboard",
    role: "Frontend Developer",
    category: "Frontend",
    year: "2023",
    tagline: "Internal messaging and cargo operations dashboard.",
    description:
      "A web application for Tushehbar to manage client requests, internal messaging, and cargo operations. I developed the frontend, building data-heavy dashboards and forms that keep the shipping workflow fast and organized.",
    features: [
      "Operations dashboard for cargo tracking",
      "Internal messaging and management screens",
      "Data tables, filters and forms",
      "Responsive, role-based interface",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://dashboard.tushehbar.com/",
    gradientFrom: "#0EA5E9",
    gradientTo: "#2563EB",
    initials: "TD",
    icon: iconTushehbarDashboard,
  },
  {
    slug: "portfolio",
    title: "Personal Portfolio",
    role: "Frontend Developer",
    category: "Frontend",
    year: "2023",
    tagline: "Earlier personal portfolio site hosted on Netlify.",
    description:
      "My previous personal portfolio, built to introduce my work, skills, and contact details. It was a lightweight frontend project focused on clean presentation and fast load times.",
    features: [
      "Personal branding and project showcase",
      "Responsive layout across devices",
      "Fast static hosting on Netlify",
      "Clean, developer-focused presentation",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://shayanrezvani.netlify.app/",
    gradientFrom: "#334155",
    gradientTo: "#0F172A",
    initials: "SR",
    icon: iconPortfolio,
  },
  {
    slug: "3engine",
    title: "3engine.io",
    role: "Frontend Developer",
    category: "Frontend",
    year: "2023",
    tagline: "No-code Web3 game engine platform frontend.",
    description:
      "I built responsive, interactive UI components for 3engine.io — a no-code platform for 2D/3D Web3 game creation. The work focused on translating complex product ideas into a clean, fast, and intuitive web experience using React and Next.js.",
    features: [
      "Pixel-perfect, responsive layouts from design specs",
      "Reusable component library for consistent UI",
      "Smooth animations and interactive sections",
      "Performance tuning for fast initial load",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://3engine.io/",
    gradientFrom: "#2563EB",
    gradientTo: "#1D4ED8",
    initials: "3E",
    icon: icon3engine,
  },
  {
    slug: "tushehbar",
    title: "Tushehbar Website",
    role: "WordPress Developer",
    category: "WordPress",
    year: "2022",
    tagline: "Corporate shipping company website for Tushehbar.",
    description:
      "I designed and developed the corporate website for Tushehbar shipping company, optimized for performance, SEO and usability, with clear presentation of services and company information.",
    features: [
      "Corporate shipping company presence",
      "Performance & SEO optimization",
      "Custom theme tweaks and content management",
      "Responsive layout for all devices",
    ],
    tech: ["WordPress", "WooCommerce", "PHP", "Elementor"],
    link: "https://tushehbar.com/",
    gradientFrom: "#F97316",
    gradientTo: "#EC1B09",
    initials: "TB",
    icon: iconTushehbar,
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
