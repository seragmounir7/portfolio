import { useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { JOURNEY } from "../../data/journey";
import { SectionHeading } from "../shared/SectionHeading";
import { FilterPills } from "../shared/FilterPills";
import { TimelineEvent } from "../journey/TimelineEvent";

export function Journey() {
  const [activeCategory, setActiveCategory] = useState(JOURNEY[0].id);
  const trackRef = useRef<HTMLDivElement>(null);

  const category = JOURNEY.find((c) => c.id === activeCategory) ?? JOURNEY[0];

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.5,
  });

  return (
    <section id="journey" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="The Path So Far"
          title="Journey"
          description="Education, work, and the projects in between — organized by category, told chronologically."
        />

        <FilterPills
          options={JOURNEY.map((c) => c.id)}
          active={activeCategory}
          onChange={setActiveCategory}
          getLabel={(id) => JOURNEY.find((c) => c.id === id)?.label ?? id}
        />

        <div ref={trackRef} className="relative mt-16">
          <div className="absolute left-4 top-0 h-full w-px bg-line md:left-1/2" />
          <motion.div
            style={{ scaleY: lineProgress }}
            className="absolute left-4 top-0 h-full w-px origin-top bg-gradient-to-b from-spice-400 via-glow-500 to-transparent md:left-1/2"
          />

          <div className="flex flex-col gap-14">
            {category.events.map((event, i) => (
              <TimelineEvent
                key={`${category.id}-${event.year}-${event.title}`}
                event={event}
                side={i % 2 === 0 ? "left" : "right"}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
