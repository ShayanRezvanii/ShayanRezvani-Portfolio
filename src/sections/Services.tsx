import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { Code, Mobile, Server, Sparkle } from "../components/Icons";

const services = [
  {
    Icon: Code,
    title: "Web Development",
    desc: "Modern, high-performance web apps with React & Next.js — scalable architecture and clean UX.",
    from: "#6366F1",
    to: "#8B5CF6",
  },
  {
    Icon: Mobile,
    title: "Mobile Apps",
    desc: "Cross-platform apps with React Native & Expo — offline-first and native-like animations.",
    from: "#EC4899",
    to: "#F43F5E",
  },
  {
    Icon: Server,
    title: "Backend & APIs",
    desc: "Secure REST APIs with Node.js & Express, authentication, real-time sockets and CI/CD.",
    from: "#16A34A",
    to: "#0D9488",
  },
  {
    Icon: Sparkle,
    title: "UI/UX & Performance",
    desc: "Accessible design systems and Core Web Vitals tuning for polished, snappy interfaces.",
    from: "#F97316",
    to: "#EC1B09",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20">
      <SectionHeading
        eyebrow="My Services"
        title="What I can do for you"
        subtitle="End-to-end product development — from the first wireframe to a deployed, production-ready app."
      />

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="bg-white dark:bg-gray-800 rounded-3xl p-6 border border-neutral-100 dark:border-gray-700 hover:shadow-lg transition-shadow"
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-5"
              style={{ background: `linear-gradient(135deg, ${s.from}, ${s.to})` }}
            >
              <s.Icon className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-neutral-900 dark:text-white">{s.title}</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 leading-relaxed">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
