import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function AboutMe() {
  function scrollToJourney() {
    document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32 pb-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-glow-600/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-spice-600/15 blur-[140px]" />
        <div className="bg-noise absolute inset-0 opacity-30" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-2 mx-auto w-full max-w-sm md:order-1"
        >
          <div className="absolute inset-0 -z-10 scale-90 rounded-[2.5rem] bg-gradient-to-tr from-spice-500/30 via-glow-500/20 to-transparent blur-3xl" />
          <img
            src="/character/idle/focus.png"
            alt="Serag Mounir portrait"
            className="w-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.45)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 flex flex-col items-start gap-6 md:order-2"
        >
          <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-spice-400">
            <span className="h-px w-8 bg-spice-500/60" />
            Frontend Developer &amp; AI Enthusiast
          </span>

          <h1 className="font-display text-5xl leading-[1.05] text-sand-50 sm:text-6xl lg:text-7xl">
            Serag <span className="text-gradient-spice">Mounir</span>
          </h1>

          <p className="max-w-md text-base leading-relaxed text-ink-300 sm:text-lg">
            I build fast, thoughtful interfaces and explore what's possible at
            the edge of frontend engineering and applied AI — currently based
            in Waterloo, Ontario.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="button"
              onClick={scrollToJourney}
              className="group flex items-center gap-2 rounded-full bg-spice-500 px-7 py-3.5 text-sm font-semibold text-void shadow-[0_0_40px_-8px_rgba(224,151,63,0.7)] transition hover:bg-spice-400"
            >
              View My Journey
              <ArrowDown className="h-4 w-4 transition group-hover:translate-y-0.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
