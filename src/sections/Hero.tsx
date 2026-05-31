import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Telegram, Whatsapp } from "../components/Icons";
import profile from "../assets/ba44b8e6-77a7-4d52-8da4-09fbf8c0f316 (1).png";

const socials = [
  { Icon: Github, href: "https://github.com/shayanrezvanii", label: "GitHub" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/shayan-rezvani-770490259", label: "LinkedIn" },
  { Icon: Telegram, href: "https://t.me/+989105293253", label: "Telegram" },
  { Icon: Whatsapp, href: "https://wa.me/989105293253", label: "WhatsApp" },
];

const stack = ["React", "Next.js", "TypeScript", "Node.js", "Tailwind"];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden rounded-[28px] mt-3 px-6 sm:px-10 py-12 lg:py-16
                 bg-gradient-to-br from-violet-100 via-white to-teal-100
                 dark:from-violet-950/40 dark:via-gray-800 dark:to-teal-950/40"
    >
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-center lg:text-left"
        >
          <span className="inline-flex items-center gap-2 bg-white/70 dark:bg-gray-700 border border-emerald-200 dark:border-gray-600 text-emerald-700 dark:text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for new projects
          </span>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-neutral-900 dark:text-white">
            I am Shayan Rezvani
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
              <br className="hidden sm:block" /> Front-End Developer.
            </span>
          </h1>

          <p className="mt-5 max-w-xl mx-auto lg:mx-0 text-neutral-600 dark:text-neutral-300 leading-relaxed">
            A passionate developer building modern, high-performance web & mobile
            applications with React, Next.js and Node.js — from polished UIs to
            scalable backends.
          </p>

          {/* CTAs */}
          <div className="mt-7 flex flex-wrap gap-3 justify-center lg:justify-start">
            <button
              onClick={() => scrollTo("projects")}
              className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold pl-5 pr-3 py-3 rounded-full hover:opacity-90 transition-opacity cursor-pointer"
            >
              View My Work
              <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="bg-white dark:bg-gray-700 text-neutral-800 dark:text-white font-semibold px-6 py-3 rounded-full border border-neutral-200 dark:border-gray-600 hover:bg-neutral-50 dark:hover:bg-gray-600 transition-colors cursor-pointer"
            >
              Contact Me
            </button>
          </div>

          {/* Stack chips */}
          <div className="mt-7 flex flex-wrap gap-2 justify-center lg:justify-start">
            {stack.map((s) => (
              <span
                key={s}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/70 dark:bg-gray-700 border border-neutral-200 dark:border-gray-600 text-neutral-700 dark:text-neutral-200"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right: photo with orbital rings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative shrink-0 w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] flex items-center justify-center"
        >
          {/* rotating dashed ring */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-400/50 animate-[spin_18s_linear_infinite]" />
          <div className="absolute inset-6 rounded-full border border-teal-400/40 animate-[spin_24s_linear_infinite_reverse]" />
          {/* glow */}
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 blur-2xl opacity-30" />
          {/* photo */}
          <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl">
            <img src={profile} alt="Shayan Rezvani" className="w-full h-full scale-125 object-cover" />
          </div>
        </motion.div>

        {/* Right edge social rail (desktop) */}
        <div className="hidden lg:flex flex-col gap-3">
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 border border-neutral-200 dark:border-gray-600 flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:text-emerald-600 hover:border-emerald-300 transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* mobile social row */}
      <div className="lg:hidden flex justify-center gap-3 mt-8">
        {socials.map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 border border-neutral-200 dark:border-gray-600 flex items-center justify-center text-neutral-600 dark:text-neutral-300"
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </section>
  );
}
