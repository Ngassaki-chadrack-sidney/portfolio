export interface Experience {
  id: string;
  poste: string;
  entreprise: string;
  type: "CDI" | "CDD" | "Stage" | "Freelance";
  dateDebut: string;
  dateFin: string | null;
  actuel: boolean;
  missions: string[];
  technologies: string[];
  localisation?: string;
}

export const experiences: Experience[] = [
  {
    id: "exp-webtinix",
    poste: "Développeur web",
    entreprise: "Webtinix",
    type: "CDI",
    dateDebut: "2025-06",
    dateFin: "2026-01",
    actuel: false,
    missions: [
      "Transformation de maquettes Figma en code avec Next.js",
      "Développement d'interfaces utilisateur modernes et responsives",
      "Amélioration et optimisation de boutiques e-commerce PrestaShop",
      "Intégration de fonctionnalités e-commerce avancées",
      "Optimisation des performances et de l'expérience utilisateur",
    ],
    technologies: ["Next.js", "React", "TypeScript", "PrestaShop", "Figma"],
    localisation: "Brazzaville",
  },
];

export const getExperiencesByType = (type: Experience["type"]) => {
  return experiences.filter((exp) => exp.type === type);
};

export const getActiveExperience = () => {
  return experiences.find((exp) => exp.actuel);
};

export const getExperiencesSorted = () => {
  return [...experiences].sort((a, b) => {
    const dateA = new Date(a.dateDebut).getTime();
    const dateB = new Date(b.dateDebut).getTime();
    return dateB - dateA;
  });
};
