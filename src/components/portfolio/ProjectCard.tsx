import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import type { Project } from "../../types";
import { PlaceholderMedia } from "../shared/PlaceholderMedia";

interface ProjectCardProps {
  project: Project;
  onOpen: () => void;
}

function CoverMedia({ project }: { project: Project }) {
  const cover = project.media[0];

  if (!cover) {
    return <PlaceholderMedia label={project.title} className="aspect-[4/3] w-full" />;
  }

  if (cover.type === "video") {
    return (
      <div className="relative">
        <PlaceholderMedia label={cover.label} variant="video" className="aspect-[4/3] w-full" />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-void/60 text-sand-50 ring-1 ring-line-strong backdrop-blur transition duration-300 group-hover:scale-110">
            <PlayCircle className="h-6 w-6" strokeWidth={1.25} />
          </span>
        </span>
      </div>
    );
  }

  const first = cover.type === "gallery" ? cover.items[0] : cover;

  return first?.src ? (
    <img
      src={first.src}
      alt={first.alt}
      className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
      loading="lazy"
    />
  ) : (
    <PlaceholderMedia
      label={first?.alt ?? project.title}
      className="aspect-[4/3] w-full transition duration-700 group-hover:scale-[1.02]"
    />
  );
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group glass mb-6 block w-full overflow-hidden rounded-2xl text-left transition duration-300 hover:-translate-y-1.5 hover:border-line-strong"
    >
      <div className="overflow-hidden rounded-t-2xl">
        <CoverMedia project={project} />
      </div>
      <div className="p-5">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-spice-400">
          {project.category}
        </span>
        <h3 className="mt-2 font-display text-xl text-sand-50">{project.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-300">
          {project.description}
        </p>
        {project.technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-line px-2.5 py-1 text-xs font-medium text-ink-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="rounded-full border border-line px-2.5 py-1 text-xs font-medium text-ink-500">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.button>
  );
}
