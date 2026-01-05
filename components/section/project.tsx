"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import CopyText from "../animations/CopyText";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiFlutter,
  SiPostgresql,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiAdonisjs,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

// --- Données ---
interface ProjetType {
  title: string;
  description?: string;
  stack: string[];
  videoUrl: string;
  color: string;
}

// J'ai ajouté des icônes pour rendre la stack plus visuelle
const iconMap: { [key: string]: React.ReactNode } = {
  "Next.js": <SiNextdotjs />,
  TypeScript: <SiTypescript />,
  "React Native": <SiReact />,
  Flutter: <SiFlutter />,
  PostgreSQL: <SiPostgresql />,
  "Express JS": <SiExpress />,
  HTML: <SiHtml5 />,
  CSS: <SiCss3 />,
  JavaScript: <SiJavascript />,
  Adonis: <SiAdonisjs />,
  // Ajoute les autres icônes manquantes si besoin (Adonis, Prisma, etc.)
};

const projets: ProjetType[] = [
  {
    title: "Copy de whatsapp android",
    description: "Une copy de whatsapp fait avec Next JS et typescript",
    stack: ["Next.js", "Typescript"],
    videoUrl:
      "https://res.cloudinary.com/dji6k1cvh/video/upload/v1767601795/whatsapp_apps_mq96jv.mkv",
    color: "#052e16",
  },
  {
    title: "Réseau Social X-Clone",
    description:
      "Conception d'une plateforme sociale moderne inspirée de Twitter/X, mettant l'accent sur les interactions en temps réel et une architecture backend évolutive.",
    stack: ["Next.js", "TypeScript", "Adonis"],
    videoUrl:
      "https://res.cloudinary.com/dji6k1cvh/video/upload/v1763459208/nwSy6DrQfj_sawc9i.mp4", // Assure-toi que ces vidéos existent
    color: "#0f172a", // Bleu nuit très sombre
  },
  {
    title: "HG Vision Graphic",
    description: "J'ai coder un site vitrine pour un freelance designer.",
    color: "#4c0519",
    stack: ["HTML", "CSS", "JavaScript"],
    videoUrl:
      "https://res.cloudinary.com/dji6k1cvh/video/upload/v1767602668/hg_vision-graphic_agdvtg.mkv",
  },
  {
    title: "Dashboard d'une app de transaction financiare",
    color: "#000",
    videoUrl:
      "https://res.cloudinary.com/dji6k1cvh/video/upload/v1767601789/Dashboard_plateforme_de_transaction_ooogrn.mkv",
    stack: ["Next.js", "TypeScript"],
  },
  {
    title: "Mojito Brand",
    description:
      "Site vitrine immersif pour une marque de boisson, utilisant des animations GSAP avancées pour une expérience utilisateur rafraîchissante et dynamique.",
    stack: ["Next.js", "GSAP", "TypeScript"],
    videoUrl:
      "https://res.cloudinary.com/dji6k1cvh/video/upload/v1763458344/replique_d_un_site_awwward_pkzvoi.mp4",
    color: "#052e16", // Vert forêt profond
  },
  {
    title: "Copy de notion",
    description: "Application de prise de note simulaire a notion",
    stack: ["Next.js", "TypeScript"],
    videoUrl:
      "https://res.cloudinary.com/dji6k1cvh/video/upload/v1763458393/notion_app_dj4drr.mp4",
    color: "#701a75",
  },
  {
    title: "Shadow Flix",
    description:
      "Application mobile cross-platform permettant d'explorer une vaste base de données de films et séries via l'API TMDB, avec une interface fluide.",
    stack: ["React Native", "TypeScript"],
    videoUrl:
      "https://res.cloudinary.com/dji6k1cvh/video/upload/v1763458900/20250621-2042-00.2174813_gv38kx.mp4",
    color: "#312e81", // Indigo profond
  },
  {
    title: "Signature Front",
    description:
      "Solution SaaS sécurisée pour la signature électronique de documents PDF, intégrant des fonctionnalités de workflow et de validation.",
    stack: ["Next.js", "TypeScript"],
    videoUrl: "/videos/project3.mp4",
    color: "#4c0519", // Rose/Rouge profond
  },
  {
    title: "Chef's Recipe App",
    description:
      "Application mobile complète de gestion de recettes de cuisine, avec une base de données robuste et une interface utilisateur intuitive.",
    stack: ["Flutter", "Express JS", "PostgreSQL"],
    videoUrl:
      "https://res.cloudinary.com/dji6k1cvh/video/upload/v1763458336/Screen_Recording_2025-10-03_155250_mjxfjq.mp4",
    color: "#14532d", // Vert foncé
  },
  {
    title: "Quiz Go",
    description:
      "Application mobile de quiz interactive et gamifiée, conçue pour tester les connaissances des utilisateurs de manière ludique.",
    stack: ["React Native"],
    videoUrl:
      "https://res.cloudinary.com/dji6k1cvh/video/upload/v1763458896/20250624-1912-13.1762648_k6roav.mp4",
    color: "#701a75", // Magenta profond
  },
];

// --- Composant Principal ---
export default function Project() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useGSAP(
    () => {
      // 1. Gestion des z-index pour l'empilement
      sectionsRef.current.forEach((section, index) => {
        if (section) {
          gsap.set(section, { zIndex: index + 1 });
        }
      });

      // 2. Animation du contenu à l'intérieur de chaque section lors du scroll
      // On crée un ScrollTrigger pour chaque section pour animer son contenu quand elle arrive
      sectionsRef.current.forEach((section) => {
        if (!section) return;

        const content = section.querySelector(".project-content");
        const video = section.querySelector(".project-video");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top center", // Commence l'anim quand le haut de la section est au centre de l'écran
            end: "bottom center",
            toggleActions: "play none none reverse", // Joue à l'aller, inverse au retour
          },
        });

        tl.fromTo(
          content,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        ).fromTo(
          video,
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.6" // Commence un peu avant la fin de l'anim précédente
        );
      });
    },
    { scope: containerRef }
  );

  // Fonction utilitaire pour ajouter les refs au tableau
  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <section id="projets" className="relative" ref={containerRef}>
      {/* HEADER DE SECTION (Visible au début avant le stacking) */}
      <div className="py-24 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-7xl mx-auto space-y-4">
          <CopyText delay={0.1} blockColor="#3b82f6">
            <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm">
              Portfolio
            </h2>
          </CopyText>
          <CopyText delay={0.2} blockColor="#2563eb">
            <h3 className="text-4xl md:text-6xl font-extrabold text-white">
              Projets <span className="text-blue-600">Réalisés</span>
            </h3>
          </CopyText>
          <CopyText delay={0.3}>
            <p className="text-lg max-w-2xl leading-relaxed">
              Une sélection de mes travaux personnels et professionnels,
              illustrant ma capacité à transformer des concepts en applications
              fonctionnelles et performantes.
            </p>
          </CopyText>
        </div>
      </div>

      {/* CONTENEUR DES PROJETS STACKÉS */}
      {/* L'astuce est ici : on ne met pas d'overflow hidden sur le parent direct */}
      <div className="relative w-full">
        {projets.map((projet, index) => (
          // C'EST ICI QUE SE PASSE LE STICKY STACKING
          // h-screen = plein écran
          // sticky top-0 = colle en haut
          <section
            key={index}
            ref={addToRefs}
            className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: projet.color }}
          >
            <div className="container mx-auto px-6 md:px-12 lg:px-24 h-full flex items-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full items-center">
                {/* --- COLONNE GAUCHE : TEXTE & STACK --- */}
                <div className="project-content flex flex-col justify-center text-white space-y-8">
                  <div>
                    {/* Numéro du projet stylisé */}
                    <span className="font-black text-6xl md:text-8xl absolute -top-20 -left-10 select-none opacity-20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="relative text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                      {projet.title}
                    </h3>
                  </div>

                  <div className="text-lg text-gray-300 leading-relaxed font-light max-w-xl">
                    <p>
                      {projet.description || "Description du projet à venir."}
                    </p>
                  </div>

                  {/* Stack technique avec icônes */}
                  <div className="flex flex-wrap items-center gap-3">
                    {projet.stack.map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 backdrop-blur-md rounded-full text-sm font-medium transition-all hover:bg-white/20 hover:scale-105"
                      >
                        <span className="text-blue-400 text-lg">
                          {iconMap[tech] || null}
                        </span>
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bouton d'action (Optionnel) */}
                  {/* <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-fit mt-4 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-colors shadow-lg shadow-blue-600/30"
                  >
                    Voir le projet
                  </motion.button> */}
                </div>

                {/* --- COLONNE DROITE : VIDEO --- */}
                <div className="project-video h-full flex items-center justify-center lg:justify-end overflow-hidden relative">
                  {/* Effet de lueur derrière la vidéo */}
                  <div className="absolute inset-0 blur-3xl rounded-full scale-110"></div>

                  <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl">
                    {/* Placeholder si pas de vidéo, sinon la vidéo */}
                    <div className="w-full h-full flex items-center justify-center text-white/20">
                      {/* Remplace cette div par ta balise video quand tu auras les fichiers */}
                      <video
                        src={projet.videoUrl}
                        className="w-full h-full object-contain"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Espaceur final pour permettre au dernier projet de scroller complètement si besoin */}
      {/* <div className="h-[10vh] bg-black"></div> */}
    </section>
  );
}
