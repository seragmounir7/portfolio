import { useState } from "react";
import { PlayCircle } from "lucide-react";
import type { MediaItem } from "../../types";
import { PlaceholderMedia } from "./PlaceholderMedia";

interface VideoFrameProps {
  media: Extract<MediaItem, { type: "video" }>;
  className?: string;
}

export function VideoFrame({ media, className = "" }: VideoFrameProps) {
  const [playing, setPlaying] = useState(false);

  if (playing && media.youtubeId) {
    return (
      <div className={`aspect-video w-full overflow-hidden rounded-2xl ${className}`}>
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${media.youtubeId}?autoplay=1`}
          title={media.label}
          allow="accelerate-media; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => media.youtubeId && setPlaying(true)}
      className={`group relative block w-full overflow-hidden rounded-2xl text-left ${className}`}
    >
      <PlaceholderMedia
        label={media.label}
        variant="video"
        className="aspect-video w-full rounded-2xl"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-void/60 text-sand-50 ring-1 ring-line-strong backdrop-blur transition duration-300 group-hover:scale-110 group-hover:bg-spice-500/80">
          <PlayCircle className="h-7 w-7" strokeWidth={1.25} />
        </span>
      </span>
      {media.duration && (
        <span className="absolute bottom-3 right-3 rounded-full bg-void/70 px-2.5 py-1 text-xs font-medium text-ink-300 backdrop-blur">
          {media.duration}
        </span>
      )}
    </button>
  );
}
