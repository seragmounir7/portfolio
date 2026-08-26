import { ImageIcon, PlayCircle } from "lucide-react";
import { type ReactNode } from "react";

interface PlaceholderMediaProps {
  label: string;
  className?: string;
  icon?: ReactNode;
  variant?: "image" | "video";
}

const PALETTES = [
  "from-spice-500/25 via-obsidian to-glow-600/20",
  "from-glow-500/25 via-obsidian to-spice-600/20",
  "from-sand-400/20 via-obsidian to-glow-500/25",
];

function hashLabel(label: string) {
  let hash = 0;
  for (let i = 0; i < label.length; i++) {
    hash = (hash << 5) - hash + label.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function PlaceholderMedia({
  label,
  className = "",
  icon,
  variant = "image",
}: PlaceholderMediaProps) {
  const palette = PALETTES[hashLabel(label) % PALETTES.length];

  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden bg-gradient-to-br ${palette} bg-surface text-center ${className}`}
    >
      <div className="bg-noise absolute inset-0 opacity-40" />
      <div className="absolute inset-0 border border-line" />
      {icon ?? (
        <span className="relative text-ink-300">
          {variant === "video" ? (
            <PlayCircle className="h-9 w-9" strokeWidth={1.25} />
          ) : (
            <ImageIcon className="h-8 w-8" strokeWidth={1.25} />
          )}
        </span>
      )}
      <span className="relative max-w-[85%] text-xs font-medium tracking-wide text-ink-300">
        {label}
      </span>
    </div>
  );
}
