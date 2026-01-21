"use client";

import { motion } from "framer-motion";
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

// --- Données ---
interface ProjetType {
  title: string;
  description?: string;
  stack: string[];
  videoUrl: string;
  color: string;
}

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
};

const projets: ProjetType[] = [
  {
    title: "Copy de whatsapp android",
    description: "Une copy de whatsapp fait avec Next JS et typescript",
    stack: ["Next.js", "TypeScript"],
    videoUrl: "https://res.cloudinary.com/dji6k1cvh/video/upload/v1767601795/whatsapp_apps_mq96jv.mkv",
    color: "#052e16",
  },
  {
    title: "Réseau Social X-Clone",
    description: "Conception d'une plateforme sociale moderne inspirée de Twitter/X.",
    stack: ["Next.js", "TypeScript", "Adonis"],
    videoUrl: "https://res.cloudinary.com/dji6k1cvh/video/upload/v1763459208/nwSy6DrQfj_sawc9i.mp4",
    color: "#0f172a",
  },
  {
    title: "HG Vision Graphic",
    description: "J'ai coder un site vitrine pour un freelance designer.",
    color: "#4c0519",
    stack: ["HTML", "CSS", "JavaScript"],
    videoUrl: "https://res.cloudinary.com/dji6k1cvh/video/upload/v1767602668/hg_vision-graphic_agdvtg.mkv",
  },
  {
    title: "Dashboard de transaction",
    color: "#000",
    videoUrl: "https://res.cloudinary.com/dji6k1cvh/video/upload/v1767601789/Dashboard_plateforme_de_transaction_ooogrn.mkv",
    stack: ["Next.js", "TypeScript"],
  },
  {
    title: "Mojito Brand",
    description: "Site vitrine immersif pour une marque de boisson avec animations avancées.",
    stack: ["Next.js", "TypeScript"],
    videoUrl: "https://res.cloudinary.com/dji6k1cvh/video/upload/v1763458344/replique_d_un_site_awwward_pkzvoi.mp4",
    color: "#052e16",
  },
  {
    title: "Copy de notion",
    description: "Application de prise de note simulaire a notion",
    stack: ["Next.js", "TypeScript"],
    videoUrl: "https://res.cloudinary.com/dji6k1cvh/video/upload/v1763458393/notion_app_dj4drr.mp4",
    color: "#701a75",
  },
  {
    title: "Shadow Flix",
    description: "Application mobile cross-platform explorant l'API TMDB.",
    stack: ["React Native", "TypeScript"],
    videoUrl: "https://res.cloudinary.com/dji6k1cvh/video/upload/v1763458900/20250621-2042-00.2174813_gv38kx.mp4",
    color: "#312e81",
  },
  {
    title: "Chef's Recipe App",
    description: "Application mobile complète de gestion de recettes de cuisine.",
    stack: ["Flutter", "Express JS", "PostgreSQL"],
    videoUrl: "https://res.cloudinary.com/dji6k1cvh/video/upload/v1763458336/Screen_Recording_2025-10-03_155250_mjxfjq.mp4",
    color: "#14532d",
  },
  {
    title: "Quiz Go",
    description: "Application mobile de quiz interactive et gamifiée.",
    stack: ["React Native"],
    videoUrl: "https://res.cloudinary.com/dji6k1cvh/video/upload/v1763458896/20250624-1912-13.1762648_k6roav.mp4",
    color: "#701a75",
  },
];

// --- Variantes d'animation ---
const contentVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

const videoVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
  },
};

export default function Project() {
  return (
    <section id="projets" className="relative bg-black">
      {/* HEADER DE SECTION */}
      <div className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-4">
          <CopyText delay={0.1} blockColor="#3b82f6">
            <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm">Portfolio</h2>
          </CopyText>
          <CopyText delay={0.2} blockColor="#2563eb">
            <h3 className="text-4xl md:text-6xl font-extrabold text-white">
              Projets <span className="text-blue-600">Réalisés</span>
            </h3>
          </CopyText>
          <CopyText delay={0.3}>
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
              Une sélection de mes travaux personnels et professionnels...
            </p>
          </CopyText>
        </div>
      </div>

      {/* CONTENEUR DES PROJETS STACKÉS */}
      <div className="relative w-full">
        {projets.map((projet, index) => (
          <section
            key={index}
            className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: projet.color }}
          >
            <div className="container mx-auto px-6 md:px-12 lg:px-24 h-full flex items-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full items-center">

                {/* --- COLONNE GAUCHE : TEXTE --- */}
                <motion.div
                  className="flex flex-col justify-center text-white space-y-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.4 }}
                  variants={contentVariants}
                >
                  <div className="relative">
                    <span className="text-6xl md:text-8xl absolute -top-20 -left-10 font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="relative text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                      {projet.title}
                    </h3>
                  </div>

                  <p className="text-lg text-gray-300 leading-relaxed font-light max-w-xl">
                    {projet.description || "Description du projet à venir."}
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    {projet.stack.map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 backdrop-blur-md rounded-full text-sm font-medium transition-all hover:bg-white/30"
                      >
                        <span className="text-blue-400 text-lg">
                          {iconMap[tech] || null}
                        </span>
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* --- COLONNE DROITE : VIDEO --- */}
                <motion.div
                  className="h-full flex items-center justify-center lg:justify-end relative"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.4 }}
                  variants={videoVariants}
                >
                  <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                    <video
                      src={projet.videoUrl}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>
                </motion.div>

              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}