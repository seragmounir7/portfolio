import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { PROJECTS, PROJECT_CATEGORIES } from "../../data/portfolio";
import { SectionHeading } from "../shared/SectionHeading";
import { FilterPills } from "../shared/FilterPills";
import { ProjectCard } from "../portfolio/ProjectCard";
import { ProjectModal } from "../portfolio/ProjectModal";

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<(typeof PROJECT_CATEGORIES)[number]>("All");
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const filtered =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const openProject = PROJECTS.find((p) => p.slug === openSlug) ?? null;

  return (
    <section id="portfolio" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Portfolio"
          description="A cross-section of what I build and shoot — filter by category to explore."
        />

        <FilterPills
          options={PROJECT_CATEGORIES}
          active={activeCategory}
          onChange={setActiveCategory}
        />

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <div key={project.slug} className="break-inside-avoid">
                <ProjectCard project={project} onOpen={() => setOpenSlug(project.slug)} />
              </div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-sm text-ink-300">
            Nothing in this category yet — check back soon.
          </p>
        )}
      </div>

      {openProject && (
        <ProjectModal project={openProject} onClose={() => setOpenSlug(null)} />
      )}
    </section>
  );
}
