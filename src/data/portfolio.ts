import type { Project } from "../types";

// Sample data — swap placeholder media for real screenshots/photos/videos as they're ready.
export const PROJECTS: Project[] = [
  {
    slug: "roll-in-real",
    title: "Roll in Real",
    category: "Web Development",
    description:
      "A personal website builder platform — drag-and-drop sections, live preview, and one-click publishing for non-technical users.",
    technologies: ["React", "Node.js", "MongoDB"],
    media: [
      { type: "image", alt: "Roll in Real — hero screenshot" },
      {
        type: "gallery",
        items: [
          { alt: "Dashboard overview" },
          { alt: "Section editor" },
          { alt: "Template gallery" },
          { alt: "Publish flow" },
        ],
      },
      { type: "video", label: "Product demo", duration: "2:35" },
    ],
  },
  {
    slug: "credit-card-fraud-detection",
    title: "Credit Card Fraud Detection",
    category: "AI & Machine Learning",
    description:
      "A gradient-boosted classifier trained on transaction data to flag fraudulent charges in real time, with a focus on minimizing false positives.",
    technologies: ["Python", "scikit-learn", "Pandas", "XGBoost"],
    media: [
      { type: "image", alt: "ROC curve comparison across models" },
      { type: "image", alt: "Confusion matrix — final model" },
      { type: "video", label: "Project presentation", duration: "5:10" },
    ],
  },
  {
    slug: "smart-glasses",
    title: "Smart Glasses",
    category: "IoT",
    description:
      "A wearable prototype pairing an ESP32 microcontroller with a heads-up micro-display for real-time notifications and sensor readouts.",
    technologies: ["ESP32", "C++", "MQTT", "KiCad"],
    media: [
      {
        type: "gallery",
        items: [
          { alt: "ESP32 circuit board" },
          { alt: "Soldered prototype" },
          { alt: "3D-printed frame" },
        ],
      },
      { type: "video", label: "Working demonstration", duration: "1:48" },
    ],
  },
  {
    slug: "smart-centre-dashboard",
    title: "Smart Centre Dashboard Redesign",
    category: "UI/UX",
    description:
      "A full UX audit and visual redesign of an internal analytics dashboard — simplifying navigation and cutting time-to-insight for daily users.",
    technologies: ["Figma", "Design Systems", "User Testing"],
    media: [
      { type: "image", alt: "Before — legacy dashboard layout" },
      { type: "image", alt: "After — redesigned dashboard layout" },
      {
        type: "gallery",
        items: [{ alt: "Wireframe exploration" }, { alt: "Component library" }],
      },
    ],
  },
  {
    slug: "portrait-series",
    title: "Portraits",
    category: "Photography",
    description: "A collection of natural-light portrait work.",
    technologies: [],
    media: [
      {
        type: "gallery",
        items: [{ alt: "Portrait — window light" }, { alt: "Portrait — outdoor golden hour" }, { alt: "Portrait — studio setup" }],
      },
    ],
  },
  {
    slug: "street-series",
    title: "Street Photography",
    category: "Photography",
    description: "Candid moments from city streets across two continents.",
    technologies: [],
    media: [
      {
        type: "gallery",
        items: [{ alt: "Street — downtown crossing" }, { alt: "Street — market scene" }, { alt: "Street — rainy evening" }],
      },
    ],
  },
  {
    slug: "travel-series",
    title: "Travel",
    category: "Photography",
    description: "Landscapes and moments from recent travel.",
    technologies: [],
    media: [
      {
        type: "gallery",
        items: [{ alt: "Travel — coastal cliffs" }, { alt: "Travel — mountain trail" }, { alt: "Travel — city skyline at dusk" }],
      },
    ],
  },
  {
    slug: "dev-workflow-walkthrough",
    title: "My Dev Workflow, Start to Deploy",
    category: "Video Content",
    description: "A walkthrough of how a project goes from idea to production.",
    technologies: [],
    media: [{ type: "video", label: "My Dev Workflow, Start to Deploy", duration: "8:24" }],
  },
  {
    slug: "smart-glasses-buildlog",
    title: "Building Smart Glasses — Build Log",
    category: "Video Content",
    description: "Behind-the-scenes footage from the Smart Glasses build.",
    technologies: [],
    media: [{ type: "video", label: "Building Smart Glasses — Build Log", duration: "6:02" }],
  },
];

export const PROJECT_CATEGORIES = [
  "All",
  "Web Development",
  "AI & Machine Learning",
  "IoT",
  "UI/UX",
  "Photography",
  "Video Content",
] as const;
