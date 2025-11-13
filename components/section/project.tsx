"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from "../CountUp";

gsap.registerPlugin(ScrollTrigger);

interface ProjetType {
  title: string;
  description: string;
  stack: string[];
  videoUrl: string;
  bgColor: string;
}

const projets: ProjetType[] = [
  {
    title: "E-Commerce Platform",
    description: "Une plateforme e-commerce complète avec paiement intégré",
    stack: ["Next.js", "TypeScript", "Stripe"],
    videoUrl: "/videos/project1.mp4",
    bgColor: "#ec4899",
  },
  {
    title: "Dashboard Analytics",
    description: "Dashboard analytics en temps réel avec visualisations",
    stack: ["React", "D3.js", "Node.js"],
    videoUrl: "/videos/project2.mp4",
    bgColor: "#8b5cf6",
  },
  {
    title: "Mobile App",
    description: "Application mobile cross-platform avec React Native",
    stack: ["React Native", "Firebase", "Redux"],
    videoUrl: "/videos/project3.mp4",
    bgColor: "#3b82f6",
  },
  {
    title: "SaaS Platform",
    description: "Plateforme SaaS pour la gestion de projets",
    stack: ["Next.js", "PostgreSQL", "Prisma"],
    videoUrl: "/videos/project4.mp4",
    bgColor: "#06b6d4",
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
      className="projet-card absolute top-0 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl rounded-3xl overflow-hidden shadow-2xl"
      style={{ backgroundColor: projet.bgColor }}
      data-index={index}
    >
      <div className="flex flex-col md:flex-row gap-8 p-8 md:p-12 min-h-[500px]">
        <div className="flex-1 flex flex-col justify-center text-white">
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            {projet.title}
          </h3>
          <p className="text-lg md:text-xl mb-6 opacity-90">
            {projet.description}
          </p>
          <div className="flex flex-wrap gap-3">
            {projet.stack.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full aspect-video bg-white/10 backdrop-blur-sm rounded-2xl border-4 border-white/20 flex items-center justify-center overflow-hidden">
            <div className="w-20 h-20 border-4 border-white/50 rounded-xl flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <div className="absolute w-10 h-6 border-2 border-white/50 rounded-b-lg mt-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Project() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;

    const cards = gsap.utils.toArray(".projet-card") as HTMLElement[];
    const totalCards = cards.length;

    cards.forEach((card, index) => {
      gsap.set(card, {
        zIndex: index,
        y: window.innerHeight,
        scale: 1,
      });
    });

    ScrollTrigger.create({
      trigger: cardsRef.current,
      start: "top top",
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
    <div className="px-8 md:px-30 mb-8">
      <div className="mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Mes réalisations
        </h2>
        <p className="text-xl md:text-2xl text-white">
          Plus de <CountUp from={0} to={20} /> projets réalisés
        </p>
      </div>

      <div ref={cardsRef} className="relative h-screen">
        {projets.map((projet, index) => (
          <ProjetCard key={index} projet={projet} index={index} />
        ))}
      </div>

      <div className="h-screen"></div>
    </div>
  );
}

export default Project;
