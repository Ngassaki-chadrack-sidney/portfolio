"use client";

import { motion } from "framer-motion";
import { CascadeAnimation } from "@/components/animations/CascadeAnimation";
import { BorderTrail } from "../ui/border-trail";
import CopyText from "../animations/CopyText";

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
}

const StackCard = ({
  label,
  iconUrl,
  taux,
  level,
  description,
}: StackItemProps) => {
  return (
    <div className="relative group h-full">
      <div className="absolute h-[350px] inset-0 bg-gray-800 rounded-xl -z-10" />
      <div className="relative bg-gray-900 h-[350px] rounded-xl p-6 border-gray-700 shadow shadow-xl hover:shadow-blue-500 transition-all flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-gray-800 to-gray-900 opacity-0 group-hover:opacity-50 transition-opacity -z-10" />

        <div className="relative z-10">
          <div className="flex items-cente justify-center relative justify-between mb-4">
            <img
              src={iconUrl}
              alt={label}
              className="w-35 h-35 object-contain filter saturate-150"
              loading="lazy"
            />
            <span className="text-xs font-semibold absolute top-2 right-0 text-white bg-blue-700 px-3 py-1 rounded-full">
              {level}
            </span>
          </div>
          <h4 className="font-bold text-lg mb-2">{label}</h4>
          <p className="text-sm mb-4 line-clamp-3">
            {description}
          </p>
        </div>

        <div className="relative z-10">
          <div className="w-full bg-gray-600 rounded-full h-2 overflow-hidden">
            <div
              className="bg-white h-2 rounded-full transition-all duration-500"
              style={{ width: taux }}
            />
          </div>
          {/* <p className="text-xs text-white font-semibold mt-2">
            {taux} maîtrise
          </p> */}
        </div>
        {/* <BorderTrail
          className="bg-linear-to-r from-blue-500 via-cyan-500 to-green-500 rounded-2xl"
          size={150}
        /> */}
      </div>
    </div>
  );
};

function Stack() {
  return (
    <section id="stack" className="w-full py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <CopyText>
            <h3 className="text-4xl md:text-5xl font-bold">Ma stack</h3>
          </CopyText>
          <CopyText>
            <p>
              Durant mon parcour de dévéloppeur j&apos;ai eu location de travailler sur ces technologies
            </p>
          </CopyText>
        </div>

        <div className="mb-7">
          <CascadeAnimation
            staggerDelay={0.12}
            itemDuration={0.5}
            startDelay={0.2}
            containerClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {frontendStack.map((item) => (
              <StackCard key={item.label} {...item} />
            ))}
          </CascadeAnimation>
        </div>

        <div className="mb-7">
          <CascadeAnimation
            staggerDelay={0.12}
            itemDuration={0.5}
            startDelay={0.2}
            containerClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {backendStack.map((item) => (
              <StackCard key={item.label} {...item} />
            ))}
          </CascadeAnimation>
        </div>

        <div className="mb-7">
          <CascadeAnimation
            staggerDelay={0.12}
            itemDuration={0.5}
            startDelay={0.2}
            containerClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {mobileStack.map((item) => (
              <StackCard key={item.label} {...item} />
            ))}
          </CascadeAnimation>
        </div>
      </div>
    </section>
  );
}

export default Stack;
