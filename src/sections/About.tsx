import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { ArrowUpRight } from "../components/Icons";

const education = [
  {
    period: "Self-taught • 2021 – Present",
    title: "Modern Web Development",
    place: "React, Next.js, Node.js ecosystem",
  },
  {
    period: "Ongoing",
    title: "Computer / Software Studies",
    place: "Continuous learning & certifications",
  },
];

const experience = [
  {
    period: "2023 – Present",
    title: "Full-Stack Developer",
    place: "Tushehbar Shipping",
  },
  {
    period: "2022 – 2023",
    title: "Frontend Developer",
    place: "3Engine.io",
  },
];

const facts = [
  { label: "Experience", value: "3+ Years" },
  { label: "Projects", value: "5+ Shipped" },
  { label: "Based in", value: "Tehran, Iran" },
];

function Card({
  items,
  accent,
}: {
  items: { period: string; title: string; place: string }[];
  accent: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((it, i) => (
        <div key={i} className="relative pl-5">
          <span
            className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full"
            style={{ background: accent }}
          />
          <span className="absolute left-[4px] top-4 bottom-[-16px] w-px bg-neutral-200 dark:bg-gray-600 last:hidden" />
          <p className="text-xs text-neutral-400">{it.period}</p>
          <p className="font-bold text-neutral-900 dark:text-white">{it.title}</p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">{it.place}</p>
        </div>
      ))}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <SectionHeading
        eyebrow="About Me"
        title="Designing & building products that work"
        subtitle="A little about who I am and what I bring to the table."
      />

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-7 border border-neutral-100 dark:border-gray-700 flex flex-col gap-5"
        >
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Hi, I'm <span className="font-bold text-neutral-900 dark:text-white">Shayan Rezvani</span> — a
            Front-End developer specializing in{" "}
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">Next.js</span> and{" "}
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">React</span>, with
            experience in React Native for mobile. I love turning complex ideas into
            clean, fast and reliable products — and I'm comfortable owning a feature
            end-to-end, from the UI down to the API and database.
          </p>

          <div className="grid grid-cols-3 gap-3">
            {facts.map((f) => (
              <div
                key={f.label}
                className="bg-[#F6FAF8] dark:bg-gray-700 rounded-2xl p-4 text-center"
              >
                <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                  {f.value}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  {f.label}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="self-start flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold pl-5 pr-3 py-2.5 rounded-full hover:opacity-90 transition-opacity cursor-pointer"
          >
            Let's Collaborate
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </button>
        </motion.div>

        {/* Education + Experience */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-3xl p-7 border border-neutral-100 dark:border-gray-700"
          >
            <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-5">
              Education
            </h3>
            <Card items={education} accent="#8B5CF6" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-3xl p-7 border border-neutral-100 dark:border-gray-700"
          >
            <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-5">
              Experience
            </h3>
            <Card items={experience} accent="#16A34A" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
