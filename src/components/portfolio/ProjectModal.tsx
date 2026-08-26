import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import type { Project } from "../../types";
import { MediaBlock } from "../shared/MediaBlock";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-void/90 px-4 py-10 backdrop-blur-sm sm:px-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="glass relative w-full max-w-2xl rounded-3xl p-6 sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 rounded-full border border-line p-2 text-ink-50 transition hover:border-line-strong hover:bg-surface"
        >
          <X className="h-5 w-5" />
        </button>

        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-spice-400">
          {project.category}
        </span>
        <h3 className="mt-2 font-display text-3xl text-sand-50">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-300">{project.description}</p>

        {project.technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-line px-2.5 py-1 text-xs font-medium text-ink-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {(project.githubUrl || project.liveUrl) && (
          <div className="mt-5 flex flex-wrap gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-sm font-medium text-sand-50 transition hover:border-spice-400 hover:bg-spice-500/10"
              >
                <FaGithub className="h-4 w-4" />
                GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-spice-500 px-4 py-2 text-sm font-semibold text-void transition hover:bg-spice-400"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
          </div>
        )}

        {project.media.length > 0 && (
          <div className="mt-6 flex flex-col gap-4">
            {project.media.map((item, i) => (
              <MediaBlock key={i} media={item} />
            ))}
          </div>
        )}
      </motion.div>
    </div>,
    document.body,
  );
}
