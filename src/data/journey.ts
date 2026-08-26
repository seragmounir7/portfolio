import type { JourneyCategory } from "../types";

// Sample data — structure and real milestones are accurate where noted,
// media is placeholder until real photos/videos are dropped in (see MediaBlock).
export const JOURNEY: JourneyCategory[] = [
  {
    id: "education",
    label: "Education",
    icon: "GraduationCap",
    events: [
      {
        year: "2025",
        title: "AI & Machine Learning",
        subtitle: "Conestoga College",
        description:
          "Studying applied AI while building real-world projects — from data pipelines and model training to shipping ML features inside production apps.",
        media: [
          { type: "image", alt: "Conestoga College campus" },
          {
            type: "gallery",
            items: [
              { alt: "AI lab workstation" },
              { alt: "Group project presentation" },
              { alt: "Campus library study session" },
            ],
          },
        ],
      },
      {
        year: "2016",
        title: "Computer Engineering",
        subtitle: "Bachelor's Degree",
        description:
          "Graduated with a foundation in systems design, embedded hardware, and software engineering — the base everything since has built on.",
        media: [{ type: "image", alt: "Graduation day" }],
      },
    ],
  },
  {
    id: "experience",
    label: "Professional Experience",
    icon: "Briefcase",
    events: [
      {
        year: "2025",
        title: "Full Stack Web Developer (Co-op)",
        subtitle: "Conestoga Smart Centre, Conestoga College · Cambridge, Ontario",
        description:
          "Building internal tools and web platforms for the Smart Centre, working across the full stack from database schema to deployed UI.",
        media: [
          {
            type: "gallery",
            items: [
              { alt: "Smart Centre office" },
              { alt: "Dashboard UI screenshot" },
            ],
          },
        ],
      },
      {
        year: "2021 – 2024",
        title: "Frontend Developer",
        subtitle: "Freelance & Contract Work",
        description:
          "Shipped production interfaces for SaaS and e-commerce clients, focused on performance, accessibility, and clean component architecture.",
        media: [
          {
            type: "gallery",
            items: [
              { alt: "Client website homepage" },
              { alt: "Component library preview" },
            ],
          },
          { type: "video", label: "Codebase walkthrough demo", duration: "3:12" },
        ],
      },
      {
        year: "2017 – 2021",
        title: "Web Development Lead",
        subtitle: "Egypt",
        description:
          "Led a small development team through a full redesign of a legacy platform — modernizing the UI and mentoring two junior developers along the way.",
        media: [
          {
            type: "gallery",
            items: [
              { alt: "UI before redesign" },
              { alt: "UI after redesign" },
              { alt: "Team working session" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "certifications",
    label: "Certifications",
    icon: "BadgeCheck",
    events: [
      {
        year: "2024",
        title: "AWS Certified Cloud Practitioner",
        subtitle: "Amazon Web Services",
        description:
          "Foundational certification covering cloud architecture, security, and cost management on AWS.",
        media: [{ type: "image", alt: "AWS certification badge" }],
      },
      {
        year: "2022",
        title: "Meta Front-End Developer",
        subtitle: "Professional Certificate",
        description:
          "A deep dive into modern front-end engineering — React, responsive design systems, and UX principles.",
        media: [{ type: "image", alt: "Meta certification badge" }],
      },
    ],
  },
  {
    id: "military",
    label: "Military Service",
    icon: "Shield",
    events: [
      {
        year: "2019 – 2021",
        title: "Mandatory Military Service",
        subtitle: "Egypt",
        description:
          "Two years that shaped discipline, leadership under pressure, and the ability to stay calm and methodical when it matters most.",
        media: [
          {
            type: "gallery",
            items: [{ alt: "Training exercise" }, { alt: "Unit achievement ceremony" }],
          },
        ],
      },
    ],
  },
  {
    id: "projects",
    label: "Major Projects",
    icon: "Rocket",
    events: [
      {
        year: "2024",
        title: "Smart Glasses",
        subtitle: "IoT & Embedded Systems",
        description:
          "A wearable prototype pairing an ESP32 microcontroller with a heads-up display for real-time notifications — from schematic to working demo.",
        media: [
          {
            type: "gallery",
            items: [{ alt: "ESP32 circuit board" }, { alt: "Assembled prototype" }],
          },
          { type: "video", label: "Working demonstration", duration: "1:48" },
        ],
      },
      {
        year: "2023",
        title: "Roll in Real",
        subtitle: "Personal Website Builder",
        description:
          "A drag-and-drop platform for building and hosting personal websites — from initial design mockups to a live public launch.",
        media: [
          {
            type: "gallery",
            items: [{ alt: "Design mockup" }, { alt: "Builder interface" }],
          },
          { type: "video", label: "Launch walkthrough", duration: "2:35" },
        ],
      },
    ],
  },
  {
    id: "growth",
    label: "Personal Growth",
    icon: "Sprout",
    events: [
      {
        year: "2024",
        title: "Moved to Canada",
        subtitle: "New Chapter",
        description:
          "Relocated to Ontario to pursue a new professional and academic path — a reset that pushed me to rebuild a network and a career from the ground up.",
        media: [{ type: "image", alt: "First week in Ontario" }],
      },
      {
        year: "2022",
        title: "Started Mentoring",
        subtitle: "Giving Back",
        description:
          "Began mentoring junior developers, which turned out to teach me as much about communication as it did about code.",
        media: [],
      },
    ],
  },
];
