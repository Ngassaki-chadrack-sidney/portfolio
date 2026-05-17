"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "@/hooks/useTranslation";
import { experiences } from "@/data/experiences";

const techIconMap: Record<string, string> = {
  "React Native":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  NestJS:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
  Docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  PostgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "Next.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  Figma:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Flutter:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  Dart: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
};

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const items = section.querySelectorAll(".exp-item");

      const ctx = gsap.context(() => {
        gsap.from(items, {
          y: 60,
          // opacity: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "expo.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        });
      }, section);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-[clamp(6rem,12vw,14rem)] px-[clamp(1.5rem,5vw,6rem)] bg-background relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-black tracking-tight mb-24 text-foreground leading-[0.9]">
          {t("experience.title")}
        </h2>

        <div className="grid grid-cols-1 gap-12">
          {experiences && experiences.length > 0 ? (
            experiences.map((exp) => (
              <div
                key={exp.id}
                className="exp-item grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 py-16 px-8 md:px-14 border-2 border-surface rounded-[3rem] bg-surface/20"
              >
                <div className="lg:col-span-3">
                  <div className="lg:sticky lg:top-32">
                    <span className="text-base font-black tracking-tight text-accent bg-accent/5 px-6 py-3 rounded-full border border-accent/20">
                      {t(exp.date_key)}
                    </span>
                    <div className="mt-8 hidden lg:block">
                      <div className="w-1.5 h-32 bg-gradient-to-b from-accent/40 to-transparent ml-8 rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-9 space-y-12">
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-foreground">
                      {t(`experience.items.${exp.key}.poste`)}
                    </h3>
                    <p className="text-xl md:text-2xl text-khaki-700 dark:text-khaki-200 font-bold uppercase tracking-[0.15em]">
                      {exp.entreprise}
                    </p>
                  </div>

                  <ul className="grid grid-cols-1 gap-6">
                    {Array.from({ length: exp.missionCount }).map((_, i) => (
                      <li
                        key={i}
                        className="text-lg md:text-xl text-khaki-950 dark:text-khaki-50 flex items-start gap-5 font-semibold leading-relaxed"
                      >
                        <div className="w-4 h-4 rounded-full border-4 border-accent bg-background mt-2 shrink-0 " />
                        {t(`experience.items.${exp.key}.missions.${i}`)}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-4 pt-10 border-t border-border/50">
                    {exp.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center gap-3 px-6 py-3 rounded-full bg-background border-2 border-surface"
                      >
                        {techIconMap[tech] && (
                          <img
                            src={techIconMap[tech]}
                            alt={tech}
                            className="w-5 h-5 object-contain"
                          />
                        )}
                        <span className="text-xs font-black uppercase tracking-widest text-khaki-900 dark:text-khaki-100">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-32 border-2 border-dashed border-border rounded-[3rem]">
              <p className="text-2xl font-bold text-khaki-600">
                {t("experience.none")}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
