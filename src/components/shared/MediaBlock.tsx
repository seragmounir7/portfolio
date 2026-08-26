import { useState } from "react";
import type { MediaItem } from "../../types";
import { PlaceholderMedia } from "./PlaceholderMedia";
import { Lightbox } from "./Lightbox";
import { VideoFrame } from "./VideoFrame";

interface MediaBlockProps {
  media: MediaItem;
  className?: string;
}

export function MediaBlock({ media, className = "" }: MediaBlockProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (media.type === "image") {
    return (
      <>
        <button
          type="button"
          onClick={() => setLightboxIndex(0)}
          className={`group block w-full overflow-hidden rounded-2xl ${className}`}
        >
          {media.src ? (
            <img
              src={media.src}
              alt={media.alt}
              className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <PlaceholderMedia label={media.alt} className="aspect-[4/3] w-full rounded-2xl transition duration-700 group-hover:scale-[1.02]" />
          )}
        </button>
        {lightboxIndex !== null && (
          <Lightbox
            images={[{ src: media.src, alt: media.alt }]}
            startIndex={0}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </>
    );
  }

  if (media.type === "gallery") {
    return (
      <>
        <div className={`grid grid-cols-2 gap-3 sm:grid-cols-3 ${className}`}>
          {media.items.map((item, i) => (
            <button
              type="button"
              key={i}
              onClick={() => setLightboxIndex(i)}
              className="group block overflow-hidden rounded-xl"
            >
              {item.src ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <PlaceholderMedia label={item.alt} className="aspect-square w-full rounded-xl transition duration-700 group-hover:scale-[1.02]" />
              )}
            </button>
          ))}
        </div>
        {lightboxIndex !== null && (
          <Lightbox
            images={media.items}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </>
    );
  }

  return <VideoFrame media={media} className={className} />;
}
