import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import type { IconType } from "react-icons";

export const CONTACT_INFO = {
  phone: "+1 (437) 453-1120",
  email: "admin@seragmounir.com",
  city: "Waterloo, Ontario",
};

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}

// GitHub / LinkedIn / Instagram only — swap in X or YouTube later if needed.
export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/seragmounir7",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/serageldin-abdelmoaty/",
    icon: FaLinkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/serag.mohemma/",
    icon: FaInstagram,
  },
];
