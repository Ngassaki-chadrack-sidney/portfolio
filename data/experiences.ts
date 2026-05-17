export interface Experience {
  id: string;
  key: string;
  entreprise: string;
  type: string;
  date_key: string;
  technologies: string[];
  missionCount: number;
}

export const experiences: Experience[] = [
  {
    id: "exp-kale",
    key: "kale",
    entreprise: "Kale Logistics Solutions",
    type: "freelance",
    date_key: "experience.items.kale.date",
    technologies: ["React Native", "NestJS", "Docker", "VPS", "PostgreSQL"],
    missionCount: 4
  },
  {
    id: "exp-webtinix",
    key: "webtinix",
    entreprise: "Webtinix",
    type: "cdi",
    date_key: "experience.items.webtinix.date",
    technologies: ["Next.js", "TypeScript", "PrestaShop", "PHP", "Figma"],
    missionCount: 4
  }
];
