"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import MagneticButton from "./MagneticButton";
import Router from "next/router";

const projects = [
  {
    id: 1,
    title: "Application Flutter - Recettes",
    description: "App mobile moderne pour découvrir des recettes avec Firebase",
    video: "/videos/replique d'un site awwward next js.mp4",
  },
  {
    id: 2,
    title: "Site Web Next.js",
    description: "Réplique d'un site Awwwards avec animations avancées",
    video: "/videos/replique d'un site awwward next js.mp4",
  },
  {
    id: 3,
    title: "API REST Express",
    description: "Backend robuste avec authentification JWT",
    video: "/videos/replique d'un site awwward next js.mp4",
  },
  {
    id: 4,
    title: "Dashboard React Analytics",
    description: "Interface de visualisation de données en temps réel",
    video: "/videos/replique d'un site awwward next js.mp4",
  },
];

function RecentProject() {
  const container = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  // Ajuster la distance d'animation selon la taille de l'écran
  const moveDistance = isMobile ? -200 : -400;

  // Ligne du haut : se déplace de droite vers gauche (valeurs négatives)
  const xTop = useTransform(scrollYProgress, [0, 1], [0, moveDistance]);

  // Ligne du bas : commence à gauche et se déplace vers la droite
  const xBottom = useTransform(scrollYProgress, [0, 1], [0, Math.abs(moveDistance)]);

  const goProject = () => {
    Router.push("/projets");
  };

  return (
    <div ref={container} className="min-h-screen w-full py-10 md:py-20 flex flex-col items-center justify-center">
      {/* Ligne du haut */}
      <div className="overflow-hidden mb-4 md:mb-8 w-full flex justify-center">
        <motion.div style={{ x: xTop }} className="flex gap-3 md:gap-6">
          {projects.map((project) => (
            <VideoComponent
              key={`top-${project.id}`}
              video_url={project.video}
            />
          ))}
        </motion.div>
      </div>

      {/* Ligne du bas */}
      <div className="overflow-hidden mb-4 md:mb-8 w-full flex justify-center">
        <motion.div style={{ x: xBottom }} className="flex gap-3 md:gap-6">
          {projects.map((project) => (
            <VideoComponent
              key={`bottom-${project.id}`}
              video_url={project.video}
            />
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center items-center w-full gap-8 md:gap-16 m-8 md:m-16">
        <MagneticButton className="h-20 md:h-30 rounded-full" onTap={goProject}>
          Voir plus
        </MagneticButton>
      </div>
    </div>
  );
}

export default RecentProject;

// Composant pour afficher les vidéos
const VideoComponent = ({ video_url }: { video_url: string }) => {
  return (
    <div className="flex-shrink-0 flex items-center justify-center">
      <video
        src={video_url}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        className="h-32 md:h-64 aspect-video rounded-lg object-cover w-full max-w-[90vw] md:max-w-none"
      />
    </div>
  );
};
