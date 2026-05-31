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
}

export const projects: Project[] = [
  {
    slug: "3engine",
    title: "3engine.io",
    role: "Frontend Developer",
    category: "Frontend",
    year: "2023",
    tagline: "Interactive frontend for a 3D engine platform.",
    description:
      "I built responsive, interactive UI components for 3engine.io — a platform around a real-time 3D engine. The work focused on translating complex product ideas into a clean, fast, and intuitive web experience using React and Next.js.",
    features: [
      "Pixel-perfect, responsive layouts from design specs",
      "Reusable component library for consistent UI",
      "Smooth animations and interactive sections",
      "Performance tuning for fast initial load",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://3engine.io",
    gradientFrom: "#6366F1",
    gradientTo: "#8B5CF6",
    initials: "3E",
  },
  {
    slug: "funicket",
    title: "Funicket.ir",
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
    link: "https://funicket-landing-a3fy.vercel.app/",
    gradientFrom: "#EC4899",
    gradientTo: "#F43F5E",
    initials: "FK",
  },
  {
    slug: "tamnama",
    title: "Tamnama Menu",
    role: "Full-Stack Developer",
    category: "Full-Stack",
    year: "2024",
    tagline: "Full-stack digital restaurant menu with live admin panel.",
    description:
      "Tamnama is a full-stack digital menu app for restaurants and cafés. I built the React frontend and a Node.js + Express backend, including an admin panel for managing items and categories with real-time updates pushed to customers.",
    features: [
      "Customer-facing digital menu with categories",
      "Admin panel to manage items, prices & images",
      "Real-time updates via WebSockets",
      "RESTful API with Node.js + Express",
      "MongoDB data layer",
    ],
    tech: ["React", "Node.js", "Express", "Socket.io", "MongoDB"],
    link: "https://tamnama.nsjsoft.ir/t-cafe",
    gradientFrom: "#16A34A",
    gradientTo: "#0D9488",
    initials: "TM",
  },
  {
    slug: "tushehbar-app",
    title: "Tushehbar Shipping App",
    role: "Frontend Developer",
    category: "Frontend",
    year: "2023",
    tagline: "Cargo management dashboard for a shipping company.",
    description:
      "A web application for Tushehbar to manage client requests and track cargo operations. I developed the frontend, building data-heavy dashboards and forms that keep the shipping workflow fast and organized.",
    features: [
      "Operations dashboard for cargo tracking",
      "Client request management screens",
      "Data tables, filters and forms",
      "Responsive, role-based interface",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://app.tushehbar.com",
    gradientFrom: "#0EA5E9",
    gradientTo: "#2563EB",
    initials: "TB",
  },
  {
    slug: "tushehbar-wordpress",
    title: "Tushehbar Website",
    role: "WordPress Developer",
    category: "WordPress",
    year: "2022",
    tagline: "Multi-language corporate & e-commerce WordPress sites.",
    description:
      "I designed and developed multi-language e-commerce and corporate WordPress websites for Tushehbar, optimized for performance, SEO and usability across languages.",
    features: [
      "Multi-language (RTL & LTR) setup",
      "E-commerce with WooCommerce",
      "Performance & SEO optimization",
      "Custom theme tweaks and content management",
    ],
    tech: ["WordPress", "WooCommerce", "PHP", "Elementor"],
    link: "https://tushehbar.com",
    gradientFrom: "#F97316",
    gradientTo: "#EC1B09",
    initials: "WP",
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
