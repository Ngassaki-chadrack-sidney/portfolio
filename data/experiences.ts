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
    id: "exp-1",
    poste: "Développeur Full-Stack Senior",
    entreprise: "Tech Solutions Inc.",
    type: "CDI",
    dateDebut: "2023-01",
    dateFin: null,
    actuel: true,
    missions: [
      "Conception et développement d'applications web scalables avec React et Next.js",
      "Architecture backend avec Node.js et Express",
      "Optimisation des performances et SEO",
      "Mentoring d'une équipe de 3 développeurs juniors",
      "Implémentation de CI/CD avec GitHub Actions",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"],
    localisation: "Paris, France",
  },
  {
    id: "exp-2",
    poste: "Développeur Full-Stack",
    entreprise: "Digital Agency Pro",
    type: "CDI",
    dateDebut: "2021-06",
    dateFin: "2022-12",
    actuel: false,
    missions: [
      "Développement de sites e-commerce avec React et Shopify",
      "Création d'API REST avec Express et MongoDB",
      "Intégration de paiements (Stripe, PayPal)",
      "Gestion de bases de données et optimisation des requêtes",
      "Déploiement sur AWS et Vercel",
    ],
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Stripe"],
    localisation: "Bordeaux, France",
  },
  {
    id: "exp-3",
    poste: "Développeur Frontend",
    entreprise: "StartUp Innovation",
    type: "CDD",
    dateDebut: "2020-09",
    dateFin: "2021-05",
    actuel: false,
    missions: [
      "Développement d'interface utilisateur avec React et Material-UI",
      "Gestion d'état avec Redux",
      "Tests unitaires avec Jest et React Testing Library",
      "Collaboration avec l'équipe design pour l'implémentation des maquettes",
      "Optimisation des performances (Lighthouse)",
    ],
    technologies: ["React", "Redux", "Material-UI", "Jest", "Webpack"],
    localisation: "Lyon, France",
  },
  {
    id: "exp-4",
    poste: "Développeur Mobile Flutter",
    entreprise: "Mobile First Studio",
    type: "Stage",
    dateDebut: "2020-02",
    dateFin: "2020-08",
    actuel: false,
    missions: [
      "Développement d'applications mobiles cross-platform avec Flutter",
      "Intégration d'API REST",
      "Gestion de l'authentification avec Firebase",
      "Publication sur Google Play et App Store",
      "Debugging et optimisation des performances",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "REST API"],
    localisation: "Toulouse, France",
  },
  {
    id: "exp-5",
    poste: "Développeur Web Freelance",
    entreprise: "Freelance",
    type: "Freelance",
    dateDebut: "2019-01",
    dateFin: "2020-01",
    actuel: false,
    missions: [
      "Création de sites web personnalisés avec HTML, CSS, JavaScript",
      "Développement de thèmes WordPress",
      "Maintenance et support client",
      "Gestion de projets et communication avec les clients",
      "Déploiement et gestion de serveurs",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "WordPress", "PHP"],
    localisation: "Remote",
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
