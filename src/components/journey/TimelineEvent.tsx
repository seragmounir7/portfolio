import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { JourneyEvent } from "../../types";
import { MediaBlock } from "../shared/MediaBlock";

interface TimelineEventProps {
  event: JourneyEvent;
  side: "left" | "right";
  index: number;
}

export function TimelineEvent({ event, side, index }: TimelineEventProps) {
  const [expanded, setExpanded] = useState(index === 0);
  const hasMedia = event.media.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -32 : 32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex flex-col gap-6 md:flex-row ${
        side === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      <span className="absolute left-[15px] top-1.5 z-10 flex h-3.5 w-3.5 -translate-x-1/2 items-center justify-center md:left-1/2">
        <span className="absolute h-3.5 w-3.5 animate-ping rounded-full bg-spice-400/40" />
        <span className="relative h-3 w-3 rounded-full bg-spice-400 shadow-[0_0_16px_2px_rgba(224,151,63,0.6)]" />
      </span>

      <div className="hidden md:block md:w-1/2" />

      <div className="w-full pl-10 md:w-1/2 md:pl-0">
        <div
          className={`group glass rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-line-strong ${
            side === "right" ? "md:mr-10" : "md:ml-10"
          }`}
        >
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="flex w-full items-start justify-between gap-4 text-left"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-spice-400">
                {event.year}
              </span>
              <h3 className="mt-2 font-display text-2xl text-sand-50">
                {event.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-ink-300">
                {event.subtitle}
              </p>
            </div>
            <ChevronDown
              className={`mt-1 h-5 w-5 shrink-0 text-ink-500 transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <p className="mt-4 text-sm leading-relaxed text-ink-300">
                  {event.description}
                </p>
                {hasMedia && (
                  <div className="mt-5 flex flex-col gap-3">
                    {event.media.map((item, i) => (
                      <MediaBlock key={i} media={item} />
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
