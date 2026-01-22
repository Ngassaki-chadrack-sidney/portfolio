"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import CopyText from "../animations/CopyText";
import { useRef } from "react";
import Image from "next/image";

const frontendStack = [
  {
    label: "HTML5",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    taux: "95%",
    level: "Expert",
    description:
      "Structure sémantique, accessibilité web, formulaires avancés et validation native",
  },
  {
    label: "CSS3",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    taux: "90%",
    level: "Expert",
    description:
      "Animations fluides, layouts flexbox et grid, responsive design, transitions",
  },
  {
    label: "JavaScript",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    taux: "80%",
    level: "Avancé",
    description:
      "ES6+, DOM manipulation, async/await, closures, prototypes et programmation fonctionnelle",
  },
  {
    label: "TypeScript",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    taux: "80%",
    level: "Avancé",
    description:
      "Typage strict, interfaces complexes, génériques, décorateurs et types avancés",
  },
  {
    label: "React",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    taux: "78%",
    level: "Avancé",
    description:
      "Hooks personnalisés, context API, performance optimization, code splitting et lazy loading",
  },
  {
    label: "Next.js",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    taux: "80%",
    level: "Avancé",
    description:
      "SSR, SSG, ISR, API routes, middleware, image optimization et déploiement",
  },
];

const backendStack = [
  {
    label: "Node.js",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    taux: "80%",
    level: "Avancé",
    description:
      "Runtime JavaScript côté serveur, event loop, streams et modules natifs",
  },
  {
    label: "Express",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    taux: "85%",
    level: "Avancé",
    description:
      "Framework web minimaliste, middleware, routing avancé et gestion des erreurs",
  },
  {
    label: "Adonis.js",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/adonisjs/adonisjs-original.svg",
    taux: "85%",
    level: "Avancé",
    description:
      "Framework full-stack MVC robuste, ORM Lucid, validation et authentification",
  },
  {
    label: "Nest JS",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
    taux: "80%",
    description: "Framework Backend robuste pour des applications a grande echelle."
  },
  {
    label: "MySQL",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    taux: "80%",
    level: "Avancé",
    description:
      "Base de données relationnelle, requêtes complexes, indexation et optimisation",
  },
  {
    label: "PostgreSQL",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    taux: "70%",
    level: "Intermediare",
    description:
      "SGBD avancé, JSON, transactions, triggers et fonctionnalités PostGIS",
  },
  {
    label: "Prisma",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original-wordmark.svg",
    taux: "83%",
    level: "Intermediare",
    description:
      "ORM pour les commnunications avec les bases de donnees sans devoir ecrire une seul ligne de SQL",
  },
  {
    label: "Python",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    taux: "80%",
    level: "Intermediare",
    description:
      "Langage orienté objet, gestion de packages, bibliothèques scientifiques et web",
  },
];

const mobileStack = [
  {
    label: "React Native",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    taux: "90%",
    level: "Expert",
    description:
      "Applications mobiles cross-platform, navigation native, intégration API",
  },
  {
    label: "Flutter",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    taux: "70%",
    level: "Intermediare",
    description:
      "Framework UI moderne et performant, widgets personnalisés, animations fluides",
  },
  {
    label: "Dart",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
    taux: "80%",
    level: "Intermediare",
    description:
      "Langage orienté objet pour Flutter, null safety, async/await et collections",
  },
];

interface StackItemProps {
  label: string;
  iconUrl: string;
  taux: string;
  level: string;
  description: string;
  isFeatured?: boolean;
}

const StackCard = ({
  label,
  iconUrl,
  taux,
  level,
  description,
  isFeatured,
}: StackItemProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // 1. Gestion de la lueur qui suit la souris (Framer Motion)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-slate-950 p-6 transition-all hover:border-blue-500/50 ${isFeatured ? "md:col-span-2 md:row-span-2" : ""
        }`}
    >
      {/* Effet de lueur radiale */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className="rounded-xl">
            <Image
              src={iconUrl}
              alt={label}
              className="w-20 h-20 object-contain"
            />
          </div>
          <span className="text-[10px] font-bold text-black bg-white px-3 py-1 rounded-full border border-blue-500/20 uppercase tracking-tighter">
            {level}
          </span>
        </div>

        <h4 className="font-bold text-xl text-white mb-2 group-hover:text-blue-400 transition-colors">
          {label}
        </h4>
        <p className="leading-relaxed line-clamp-3 mb-4">{description}</p>
      </div>

      <div className="relative z-10 space-y-2">
        <div className="flex justify-between text-[10px] font-mono uppercase">
          <span>Expertise</span>
          <span>{taux}</span>
        </div>
        <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: taux }}
            className="h-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]"
          />
        </div>
      </div>
    </motion.div>
  );
};

function Stack() {
  return (
    <section
      id="stack"
      className="w-full py-24 px-6 md:px-12 lg:px-20 bg-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* TEXTE D'INTRODUCTION */}
        <div className="mb-20 space-y-4">
          <CopyText delay={0.1}>
            <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm">
              Mon Arsenal
            </h2>
          </CopyText>
          <CopyText delay={0.2}>
            <h3 className="text-4xl md:text-5xl font-extrabold">
              Ma Stack{" "}
              <span className="text-blue-600 text-outline">Technique</span>
            </h3>
          </CopyText>
          <CopyText delay={0.3}>
            <p className="max-w-2xl text-lg leading-relaxed">
              Durant mon parcours de développeur, j&apos;ai eu l&apos;occasion
              de travailler sur une multitude de technologies. Aujourd&apos;hui,
              je me concentre sur des outils qui permettent de créer des
              produits rapides, scalables et centrés sur l&apos;utilisateur.
            </p>
          </CopyText>
        </div>

        {/* --- FRONTEND --- */}
        <div className="mb-16">
          <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
            Frontend Development{" "}
            <div className="h-px grow bg-white/10" />
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frontendStack.map((item) => (
              <StackCard key={item.label} {...item} />
            ))}
          </div>
        </div>

        {/* --- BACKEND --- */}
        <div className="mb-16">
          <h4 className=" text-xs font-bold uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
            Backend & Databases{" "}
            <div className="h-px grow bg-white/10" />
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {backendStack.map((item) => (
              <StackCard key={item.label} {...item} />
            ))}
          </div>
        </div>

        {/* --- MOBILE --- */}
        <div className="mb-16">
          <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
            Mobile Development <div className="h-px grow bg-white/10" />
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mobileStack.map((item) => (
              <StackCard key={item.label} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stack;
