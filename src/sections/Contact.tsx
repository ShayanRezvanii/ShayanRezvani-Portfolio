import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Telegram,
  Whatsapp,
} from "../components/Icons";

const channels = [
  {
    Icon: Mail,
    label: "Email",
    value: "shayanrezvani5@gmail.com",
    href: "mailto:shayanrezvani5@gmail.com",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+98 910 529 3253",
    href: "tel:+989105293253",
  },
  {
    Icon: MapPin,
    label: "Location",
    value: "Tehran, Iran",
    href: undefined,
  },
];

const socials = [
  { Icon: Github, href: "https://github.com/shayanrezvanii", label: "GitHub" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/shayan-rezvani-770490259", label: "LinkedIn" },
  { Icon: Telegram, href: "https://t.me/+989105293253", label: "Telegram" },
  { Icon: Whatsapp, href: "https://wa.me/989105293253", label: "WhatsApp" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-emerald-500 to-teal-700 px-6 sm:px-12 py-12 text-center"
      >
        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/10" />
        <div className="absolute -bottom-20 -left-10 w-64 h-64 rounded-full bg-white/10" />

        <div className="relative z-10">
          <span className="inline-block text-white/80 font-semibold text-sm tracking-wide uppercase">
            Get In Touch
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            Let's build something great together
          </h2>
          <p className="mt-3 text-white/80 max-w-xl mx-auto">
            Have a project in mind or just want to say hi? I'm always open to new
            opportunities and collaborations.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {channels.map((c) => {
              const inner = (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 flex flex-col items-center gap-2 h-full hover:bg-white/20 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-white">
                    <c.Icon className="w-5 h-5" />
                  </div>
                  <p className="text-xs text-white/70">{c.label}</p>
                  <p className="text-sm font-semibold text-white break-all">{c.value}</p>
                </div>
              );
              return c.href ? (
                <a key={c.label} href={c.href} className="block">
                  {inner}
                </a>
              ) : (
                <div key={c.label}>{inner}</div>
              );
            })}
          </div>

          <a
            href="mailto:shayanrezvani5@gmail.com"
            className="mt-8 inline-flex items-center gap-2 bg-white text-emerald-700 font-bold pl-6 pr-3 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Send me an email
            <span className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>

          <div className="mt-8 flex justify-center gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      <p className="text-center text-sm text-neutral-400 dark:text-neutral-500 mt-8">
        © {new Date().getFullYear()} Shayan Rezvani. Built with React, Vite & Tailwind CSS.
      </p>
    </section>
  );
}
