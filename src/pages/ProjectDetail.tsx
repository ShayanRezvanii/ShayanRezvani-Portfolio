import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ProjectThumb from "../components/ProjectThumb";
import { ArrowLeft, ArrowUpRight, Check, ExternalLink } from "../components/Icons";
import { getProject, projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProject(slug) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  if (!project) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">
          Project not found
        </h1>
        <Link
          to="/#projects"
          className="mt-6 inline-flex items-center gap-2 text-emerald-600 font-semibold"
        >
          <ArrowLeft className="w-4 h-4" /> Back to projects
        </Link>
      </div>
    );
  }

  const gradient = `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`;
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="py-8"
    >
      {/* Back */}
      <Link
        to="/#projects"
        className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" /> Back to projects
      </Link>

      {/* Hero card */}
      <div className="rounded-[28px] overflow-hidden border border-neutral-100 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="relative h-56 sm:h-80">
          <ProjectThumb
            title={project.title}
            gradientFrom={project.gradientFrom}
            gradientTo={project.gradientTo}
          />
        </div>

        <div className="p-6 sm:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="text-xs font-bold text-white px-3 py-1 rounded-full"
              style={{ background: gradient }}
            >
              {project.role}
            </span>
            <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-gray-700 px-3 py-1 rounded-full">
              {project.category}
            </span>
            <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-gray-700 px-3 py-1 rounded-full">
              {project.year}
            </span>
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
            {project.title}
          </h1>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {/* Live demo CTA */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 text-white font-bold pl-6 pr-3 py-3.5 rounded-full hover:opacity-90 transition-opacity"
            style={{ background: gradient }}
          >
            <ExternalLink className="w-5 h-5" />
            View Live Demo
            <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
          <p className="mt-2 text-xs text-neutral-400 break-all">{project.link}</p>

          {/* Features + tech */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="font-bold text-lg text-neutral-900 dark:text-white mb-4">
                What I built
              </h2>
              <ul className="flex flex-col gap-3">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span
                      className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white mt-0.5"
                      style={{ background: gradient }}
                    >
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-neutral-600 dark:text-neutral-300">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-bold text-lg text-neutral-900 dark:text-white mb-4">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-sm font-semibold px-3 py-1.5 rounded-full bg-[#F6FAF8] dark:bg-gray-700 border border-neutral-200 dark:border-gray-600 text-neutral-700 dark:text-neutral-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other projects */}
      <div className="mt-12">
        <h2 className="font-bold text-xl text-neutral-900 dark:text-white mb-5">
          Other projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {others.map((p) => (
            <Link
              key={p.slug}
              to={`/project/${p.slug}`}
              className="group block bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-neutral-100 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="h-32">
                <ProjectThumb
                  title={p.title}
                  gradientFrom={p.gradientFrom}
                  gradientTo={p.gradientTo}
                />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-bold text-sm text-neutral-900 dark:text-white">
                    {p.title}
                  </p>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400">{p.role}</p>
                </div>
                <span className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-gray-700 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
