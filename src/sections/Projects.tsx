import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import ProjectThumb from "../components/ProjectThumb";
import { ArrowUpRight } from "../components/Icons";
import { projects, type ProjectCategory } from "../data/projects";

const filters: ("All" | ProjectCategory)[] = [
  "All",
  "Frontend",
  "Full-Stack",
  "WordPress",
];

export default function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-16 sm:py-20">
      <SectionHeading
        eyebrow="My Projects"
        title="Selected work, live in production"
        subtitle="A selection of real products I've built. Click any project to see the details and a link to its live demo."
      />

      {/* Filters */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors cursor-pointer ${
              active === f
                ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white"
                : "bg-white dark:bg-gray-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-gray-700 hover:border-emerald-300"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={`/project/${p.slug}`}
                className="group block bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-neutral-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <ProjectThumb
                    title={p.title}
                    gradientFrom={p.gradientFrom}
                    gradientTo={p.gradientTo}
                    icon={p.icon}
                  />
                  <span className="absolute top-3 left-3 text-xs font-bold text-white px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm">
                    {p.category}
                  </span>
                </div>

                {/* Body */}
                <div className="p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-neutral-900 dark:text-white">
                      {p.title}
                    </h3>
                    <span className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-gray-700 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">
                    {p.role}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 leading-relaxed">
                    {p.tagline}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
