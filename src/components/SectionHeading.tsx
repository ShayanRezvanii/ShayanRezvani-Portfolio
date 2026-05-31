import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45 }}
      className={isCenter ? "text-center" : "text-left"}
    >
      <span className="inline-block text-emerald-600 dark:text-emerald-400 font-semibold text-sm tracking-wide uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-neutral-500 dark:text-neutral-400 ${
            isCenter ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
