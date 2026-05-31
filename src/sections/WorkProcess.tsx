import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { Search, Layout, Code, Rocket } from "../components/Icons";

const steps = [
  {
    Icon: Search,
    title: "Discovery & Planning",
    desc: "Understanding goals, scope and users before writing a single line of code.",
  },
  {
    Icon: Layout,
    title: "UI/UX & Architecture",
    desc: "Designing the structure, components and data flow for a clean, scalable base.",
  },
  {
    Icon: Code,
    title: "Development",
    desc: "Building responsive frontends and reliable APIs with clean, maintainable code.",
  },
  {
    Icon: Rocket,
    title: "Testing & Delivery",
    desc: "Reviewing, optimizing and deploying to production with CI/CD pipelines.",
  },
];

const skills = [
  { label: "React / Next.js", value: 95 },
  { label: "TypeScript", value: 88 },
  { label: "Node.js / Express", value: 82 },
  { label: "UI / Tailwind CSS", value: 92 },
];

export default function WorkProcess() {
  return (
    <section id="process" className="py-16 sm:py-20">
      <SectionHeading
        eyebrow="My Work Process"
        title="How I turn ideas into products"
        subtitle="A clear, repeatable approach that keeps projects on track from start to launch."
      />

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Steps */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative bg-white dark:bg-gray-800 rounded-3xl p-6 border border-neutral-100 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <span className="absolute top-5 right-6 text-4xl font-bold text-neutral-100 dark:text-gray-700">
                0{i + 1}
              </span>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center mb-4">
                <s.Icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-neutral-900 dark:text-white">{s.title}</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1.5 leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Skills bars */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-7 border border-neutral-100 dark:border-gray-700 flex flex-col justify-center gap-6"
        >
          <h3 className="font-bold text-lg text-neutral-900 dark:text-white">
            Tools & Skills
          </h3>
          {skills.map((sk, i) => (
            <div key={sk.label}>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="font-medium text-neutral-700 dark:text-neutral-200">
                  {sk.label}
                </span>
                <span className="text-neutral-400">{sk.value}%</span>
              </div>
              <div className="h-2 rounded-full bg-neutral-100 dark:bg-gray-700 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${sk.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-600"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
