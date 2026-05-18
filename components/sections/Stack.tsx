"use client";

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
      { name: "TypeORM", icon: "typeorm/typeorm-plain" },
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
  {
    category: "Others",
    skills: [
      { name: "OpenCode", icon: "terminal/terminal-plain" },
      { name: "Claude Code", icon: "bot/bot-plain" },
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
  const { t } = useTranslation();

  return (
    <section
      id="stack"
      className="py-[clamp(6rem,12vw,14rem)] px-[clamp(1.5rem,5vw,6rem)] bg-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-bold tracking-tight mb-12 text-foreground leading-[0.9]">
          {t("stack.title")}
        </h2>

        <div className="space-y-10">
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
                    className="bg-background/20 backdrop-blur-sm border-2 border-surface p-3 rounded-3xl flex flex-col items-center justify-center gap-2"
                  >
                    <div className="w-15 h-15 relative">
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
