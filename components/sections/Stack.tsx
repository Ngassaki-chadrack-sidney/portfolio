"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "@/hooks/useTranslation";

const stackData = [
  {
    category: "Frontend",
    skills: [
      { name: "Next.js", icon: "nextjs/nextjs-original" },
      { name: "React", icon: "react/react-original" },
      { name: "TypeScript", icon: "typescript/typescript-original" },
      { name: "JavaScript", icon: "javascript/javascript-original" },
      { name: "Tailwind CSS", icon: "tailwindcss/tailwindcss-original" },
    ],
  },
  {
    category: "Backend & Frameworks",
    skills: [
      { name: "Node.js", icon: "nodejs/nodejs-plain" },
      { name: "NestJS", icon: "nestjs/nestjs-plain" },
      { name: "AdonisJS", icon: "adonisjs/adonisjs-original" },
      { name: "Express", icon: "express/express-original" },
      { name: "PHP", icon: "php/php-plain" },
    ],
  },
  {
    category: "Databases & ORM",
    skills: [
      { name: "PostgreSQL", icon: "postgresql/postgresql-plain" },
      { name: "MySQL", icon: "mysql/mysql-plain" },
      { name: "Prisma", icon: "prisma/prisma-original" },
      { name: "Supabase", icon: "supabase/supabase-plain" },
    ],
  },
  {
    category: "Mobile",
    skills: [
      { name: "React Native", icon: "react/react-original" },
      { name: "Flutter", icon: "flutter/flutter-plain" },
      { name: "Dart", icon: "dart/dart-plain" },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: "docker/docker-plain" },
      { name: "Git", icon: "git/git-plain" },
      { name: "Vercel", icon: "vercel/vercel-original" },
      { name: "Postman", icon: "postman/postman-plain" },
    ],
  },
  {
    category: "Dev Environment",
    skills: [
      { name: "VS Code", icon: "vscode/vscode-original" },
      { name: "Cursor", icon: "cursor/cursor-original" },
    ],
  },
];

const getIconUrl = (icon: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}.svg`;

const fallbackIcons: Record<string, string> = {
  Cursor:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "VS Code":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  Postman:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-plain.svg",
  "REST API":
    "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/cable.svg",
  OpenCode:
    "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/terminal.svg",
  "Claude Code":
    "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/bot.svg",
};

export default function Stack() {
  const containerRef = useRef<HTMLElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = containerRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const cards = section.querySelectorAll(".stack-card");

      gsap.set(cards, { y: 60, opacity: 0 });

      const ctx = gsap.context(() => {
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: {
            each: 0.05,
            grid: "auto",
            from: "start",
          },
          ease: "expo.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
          },
        });
      }, section);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="stack"
      className="py-[clamp(6rem,12vw,14rem)] px-[clamp(1.5rem,5vw,6rem)] bg-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-bold tracking-tight mb-24 text-foreground leading-[0.9]">
          {t("stack.title")}
        </h2>

        <div className="space-y-32">
          {stackData.map((group, idx) => (
            <div key={idx} className="space-y-12">
              <h4 className="text-xs font-bold uppercase tracking-[0.4em] text-accent flex items-center gap-6">
                <span className="w-16 h-px bg-accent" />
                {t(`stack.${group.category}`) ?? group.category}
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {group.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="stack-card bg-surface/40 border-2 border-surface p-10 rounded-[2.5rem] flex flex-col items-center justify-center gap-8"
                  >
                    <div className="w-20 h-20 relative">
                      <img
                        src={
                          fallbackIcons[skill.name] ?? getIconUrl(skill.icon)
                        }
                        alt={skill.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          const base = skill.icon.split("/")[0];
                          (e.currentTarget as HTMLImageElement).src =
                            `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${base}/${base}-plain.svg`;
                        }}
                      />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-[0.15em] text-khaki-950 dark:text-khaki-50 text-center">
                      {skill.name}
                    </span>
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
