import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "../../hooks/useActiveSection";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(NAV_ITEMS.map((item) => item.id));

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-void/70 backdrop-blur-xl border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <button
          type="button"
          onClick={() => scrollTo("about")}
          className="font-display text-lg tracking-wide text-sand-50"
        >
          Serag<span className="text-spice-400">.</span>Mounir
        </button>

        <ul className="hidden items-center gap-10 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => scrollTo(item.id)}
                className="group relative text-sm font-medium tracking-wide text-ink-300 transition-colors hover:text-sand-50"
              >
                {item.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-spice-400 transition-all duration-300 ${
                    activeId === item.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => scrollTo("contact")}
          className="hidden rounded-full border border-line-strong px-5 py-2 text-sm font-medium text-sand-50 transition hover:border-spice-400 hover:bg-spice-500/10 md:block"
        >
          Let's Talk
        </button>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="text-sand-50 md:hidden"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {menuOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-1 border-t border-line bg-void/95 px-6 pb-6 pt-2 backdrop-blur-xl md:hidden"
        >
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => scrollTo(item.id)}
                className={`w-full rounded-lg px-3 py-3 text-left text-sm font-medium transition ${
                  activeId === item.id ? "bg-surface text-sand-50" : "text-ink-300"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </motion.ul>
      )}
    </header>
  );
}
