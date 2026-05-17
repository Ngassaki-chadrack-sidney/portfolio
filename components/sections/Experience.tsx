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
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Vue: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Flutter:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  Dart: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  MongoDB:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  MySQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  GitHub:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  GraphQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  Tailwind:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  TailwindCSS:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
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

      gsap.set(items, { y: 30, opacity: 0 });

      const ctx = gsap.context(() => {
        gsap.to(items, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
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
        <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-bold tracking-tight mb-24 text-foreground leading-[0.9]">
          {t("experience.title")}
        </h2>

        <div className="flex flex-col gap-10">
          {experiences && experiences.length > 0 ? (
            experiences.map((exp) => (
              <div
                key={exp.id}
                className="exp-item grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 py-14 px-8 md:px-14 border-2 border-surface rounded-[3rem] bg-surface/20"
              >
                <div className="lg:col-span-3">
                  <div className="sticky top-32">
                    <span className="text-base tracking-tight bg-accent/5 px-6 py-3 rounded-full border border-accent/20">
                      {exp.date}
                    </span>
                    <div className="mt-6 hidden lg:block">
                      <div className="w-1 h-32 bg-gradient-to-b from-accent/30 to-transparent ml-6 rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-9 space-y-10">
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground">
                      {exp.poste}
                    </h3>
                    <p className="text-xl md:text-2xl text-khaki-700 dark:text-khaki-200 font-bold uppercase tracking-[0.15em]">
                      {exp.entreprise}
                    </p>
                  </div>

                  <ul className="grid grid-cols-1 gap-6">
                    {exp.missions.map((mission, i) => (
                      <li
                        key={i}
                        className="text-lg md:text-xl text-khaki-950 dark:text-khaki-50 flex items-start gap-5 font-semibold leading-relaxed"
                      >
                        <img
                          src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/circle-dot.svg"
                          className="w-5 h-5 mt-1 shrink-0 opacity-70"
                          alt=""
                        />
                        {mission}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-y-4 pt-8 border-t border-border/50">
                    <div className="flex items-center -space-x-3">
                      {exp.technologies.map((tech) =>
                        techIconMap[tech] ? (
                          <div
                            key={tech}
                            title={tech}
                            className="w-10 h-10 rounded-full bg-background border-2 border-surface flex items-center justify-center"
                          >
                            <img
                              src={techIconMap[tech]}
                              alt={tech}
                              className="w-15 h-15"
                            />
                          </div>
                        ) : (
                          <div
                            key={tech}
                            title={tech}
                            className="w-10 h-10 rounded-full bg-background border-2 border-surface flex items-center justify-center"
                          >
                            <span className="text-[9px] font-black uppercase text-khaki-800 dark:text-khaki-200 text-center leading-tight px-1">
                              {tech.slice(0, 3)}
                            </span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-32 border-2 border-dashed border-border rounded-[3rem]">
              <p className="text-2xl font-bold text-khaki-600">
                No experience data found.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
