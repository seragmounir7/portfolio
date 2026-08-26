// `src` is optional: when omitted, media renders as a styled placeholder
// (using `alt`/`label` as the caption) until real files are dropped in.
export type MediaItem =
  | { type: "image"; src?: string; alt: string }
  | { type: "gallery"; items: { src?: string; alt: string }[] }
  | { type: "video"; youtubeId?: string; label: string; duration?: string };

export interface JourneyEvent {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  media: MediaItem[];
}

export interface JourneyCategory {
  id: string;
  label: string;
  icon: string;
  events: JourneyEvent[];
}

export type ProjectCategory =
  | "Web Development"
  | "AI & Machine Learning"
  | "IoT"
  | "UI/UX"
  | "Photography"
  | "Video Content";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  media: MediaItem[];
  githubUrl?: string;
  liveUrl?: string;
}
