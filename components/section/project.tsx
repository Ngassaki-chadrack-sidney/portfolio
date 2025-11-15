"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from "../CountUp";
import { TextAnimation } from "@/components/animations/TextAnimation";
import { BorderTrail } from "../ui/border-trail";

gsap.registerPlugin(ScrollTrigger);

interface ProjetType {
  title: string;
  description?: string;
  stack: string[];
  videoUrl: string;
}

const projets: ProjetType[] = [
  {
    title: "Reseau social",
    description:
      "J'ai creer un reseau social inspirer du reseau social x anciennement nommer Twitter",
    stack: ["Next.js", "TypeScript", "Adonis"],
    videoUrl: "/videos/project1.mp4",
  },
  {
    title: "Mojito",
    description:
      "J'ai creer un site de presentation de boison pour la marque Mojito.",
    stack: ["Next.js", "GSAP"],
    videoUrl: "/videos/project1.mp4",
  },
  {
    title: "Shadow Flix",
    description:
      "Shadow Flix est une application qui permet au utilisateur de consulter des informations concernant des films, series, etc... via l'API the movie DB",
    stack: ["React Native"],
    videoUrl: "/videos/project2.mp4",
  },
  {
    title: "Signature front",
    description:
      "Signature font est une application de signature de document PDF",
    stack: ["Next JS"],
    videoUrl: "/videos/project3.mp4",
  },
  {
    title: "Application de recette de cuisine",
    description: "J'ai creer une application de rectte de cuissine.",
    stack: ["Flutter", "Express JS", "PostgreSQL", "Prisma"],
    videoUrl: "/videos/project4.mp4",
  },
  {
    title: "Quiz go",
    description: "Quiz go est une application de quiz.",
    stack: ["React Native"],
    videoUrl: "/videos/project4.mp4",
  },
];

const ProjetCard = ({
  projet,
  index,
}: {
  projet: ProjetType;
  index: number;
}) => {
  return (
    <div
      className="projet-card bg-[#1E1E1E] absolute top-0 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl rounded-3xl overflow-hidden shadow-2xl"
      data-index={index}
    >
      <div className="flex flex-col md:flex-row gap-8 p-8 md:p-12 min-h-[500px]">
        <div className="flex-1 flex flex-col justify-center text-white">
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            {projet.title}
          </h3>
          <div className="text-lg md:text-xl mb-6 opacity-90">
            {projet.description ? (
              <p>{projet.description}</p>
            ) : (
              <p>Aucune description n'est disponible</p>
            )}
          </div>
          <div className="flex flex-wrap gap-3">
            {projet.stack.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-blue-500 backdrop-blur-sm rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <video
            src={projet.videoUrl}
            className="w-full h-full object-cover aspect-video bg-white/10 backdrop-blur-sm rounded-2xl border-4 border-white/20 flex items-center justify-center overflow-hidden"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>

      <BorderTrail className="bg-linear-to-r from-blue-500 via-cyan-500 to-green-500 rounded-2xl" size={150} />
    </div>
  );
};

function Project() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;

    const cards = gsap.utils.toArray(".projet-card") as HTMLElement[];
    const totalCards = cards.length;

    // Initialiser toutes les cartes en dehors de la vue
    cards.forEach((card, index) => {
      gsap.set(card, {
        zIndex: index,
        y: 50, // Positionner légèrement en bas pour l'animation
        scale: 0.9,
        opacity: 1,
      });
    });

    ScrollTrigger.create({
      trigger: cardsRef.current,
      start: "top 30",
      end: `+=${window.innerHeight * totalCards * 1.5}`,
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const progressPerCard = 1 / totalCards;

        cards.forEach((card, index) => {
          const cardStart = index * progressPerCard;

          let cardProgress = (progress - cardStart) / progressPerCard;
          cardProgress = Math.max(0, Math.min(1, cardProgress));

          const targetY = index * 30;
          const currentY =
            window.innerHeight - (window.innerHeight - targetY) * cardProgress;

          gsap.to(card, {
            y: currentY,
            scale: 1,
            opacity: 1,
            duration: 0,
            ease: "none",
          });
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="projets" className="px-8 md:px-30 mb-8">
      <div className="mb-8">
        <TextAnimation
          variant="slideUp"
          duration={0.4}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Mes réalisations
        </TextAnimation>
        <TextAnimation
          variant="slideUp"
          duration={0.4}
          delay={0.1}
          className="text-xl md:text-2xl text-white"
        >
          Plus de <CountUp from={0} to={20} /> projets réalisés
        </TextAnimation>
      </div>

      <div ref={cardsRef} className="relative h-screen">
        {projets.map((projet, index) => (
          <ProjetCard key={index} projet={projet} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Project;
