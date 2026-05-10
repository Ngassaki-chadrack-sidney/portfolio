"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "@/hooks/useTranslation";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: "exp-webtinix",
    poste: "Développeur Web Junior",
    entreprise: "Webtinix",
    type: "CDI",
    date: "Juin 2025 — Jan 2026",
    missions: [
      "Architecture Next.js & TypeScript",
      "Optimisation PrestaShop & PHP",
      "Intégration Figma Pixel Perfect",
    ],
    techIcons: ["nextjs", "typescript", "php", "figma"],
  },
  {
    id: "exp-kale",
    poste: "Développeur Full Stack",
    entreprise: "Kale Logistics Solutions",
    type: "Freelance",
    date: "Jan 2025 — Avr 2025",
    missions: [
      "Développement mobile React Native",
      "Conception API REST NestJS",
      "Déploiement Docker & VPS",
    ],
    techIcons: ["react", "nestjs", "docker", "postgresql"],
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".exp-item", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.4,
        ease: "cubic-bezier(0.22, 1, 0.36, 1)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-40 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between mb-32 border-b border-current pb-10">
          <h2 className="font-black uppercase tracking-tighter flex flex-col">
            <span className="text-xl md:text-2xl ">{t("experience.years")}</span>
            <span className="text-2xl text-blue-500">{t("experience.domain")}</span>
          </h2>
          <span className="font-bold uppercase tracking-widest text-sm">
            / 02
          </span>
        </div>

        <div className="flex flex-col gap-40">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="exp-item grid grid-cols-1 md:grid-cols-12 gap-10"
            >
              {/* Colonne Gauche : Poste & Infos */}
              <div className="md:col-span-4 flex flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] mb-4">
                    {exp.date}
                  </p>
                  <h3 className="text-xl font-black uppercase leading-none mb-2">
                    {exp.entreprise}
                  </h3>
                  <p className="text-lg font-bold uppercase">{exp.poste}</p>
                </div>
                <div className="flex gap-4 mt-8">
                  {exp.techIcons.map((icon) => (
                    <img
                      key={icon}
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
                      alt={icon}
                      className="w-8 h-8 object-contain"
                      onError={(e) =>
                        (e.currentTarget.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-plain.svg`)
                      }
                    />
                  ))}
                </div>
              </div>

              {/* Colonne Droite : Missions stylisées */}
              <div className="md:col-span-8 flex flex-col gap-6">
                {exp.missions.map((mission, i) => (
                  <div
                    key={i}
                    className="group overflow-hidden border-b border-current/10 pb-4"
                  >
                    <p className="text-base md:text-lg font-medium uppercase tracking-tight leading-none transition-transform duration-500 group-hover:translate-x-4">
                      {mission}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
