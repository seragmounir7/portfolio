import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-14 flex flex-col gap-4 ${isCenter ? "items-center text-center" : "items-start text-left"}`}
    >
      <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-spice-400">
        <span className="h-px w-8 bg-spice-500/60" />
        {eyebrow}
      </span>
      <h2 className="font-display text-4xl leading-[1.1] text-sand-50 sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className={`max-w-xl text-base leading-relaxed text-ink-300 ${isCenter ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
