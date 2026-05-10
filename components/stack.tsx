"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "@/hooks/useTranslation";

gsap.registerPlugin(ScrollTrigger);

const stackData = [
  {
    category: "Frontend",
    skills: [
      { name: "Next.js", icon: "nextjs-original" },
      { name: "React", icon: "react-original" },
      { name: "TypeScript", icon: "typescript-original" },
      { name: "JavaScript", icon: "javascript-original" },
      { name: "HTML5", icon: "html5-original" },
      { name: "CSS3", icon: "css3-original" },
      { name: "Tailwind CSS", icon: "tailwindcss-original" },
    ],
  },
  {
    category: "Backend & Frameworks",
    skills: [
      { name: "Node.js", icon: "nodejs-plain" },
      { name: "NestJS", icon: "nestjs-plain" },
      { name: "AdonisJS", icon: "adonisjs-original" },
      { name: "Express", icon: "express-original" },
      { name: "PHP", icon: "php-plain" },
      { name: "Python", icon: "python-plain" },
    ],
  },
  {
    category: "Databases & ORM",
    skills: [
      { name: "MySQL", icon: "mysql-plain" },
      { name: "PostgreSQL", icon: "postgresql-plain" },
      { name: "Prisma", icon: "prisma-original" },
      { name: "TypeORM", icon: "typeorm-plain" },
      { name: "Lucid ORM", icon: "adonisjs-original" },
    ],
  },
  {
    category: "Mobile",
    skills: [
      { name: "React Native", icon: "react-original" },
      { name: "Flutter", icon: "flutter-plain" },
      { name: "Dart", icon: "dart-plain" },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: "docker-plain" },
      { name: "VPS / Linux", icon: "linux-plain" },
      { name: "Git", icon: "git-plain" },
      { name: "Postman", icon: "postman-plain" },
      { name: "NGINX", icon: "nginx-original" },
      { name: "Vercel", icon: "vercel-original" },
    ],
  },
];

export default function StackSection() {
  const containerRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stack-row", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "cubic-bezier(0.22, 1, 0.36, 1)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="stack" ref={containerRef} className="py-32 px-6 md:px-20 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-24 tracking-tighter">
          {t("stack.title")}<span className="text-blue-600">.</span>
        </h2>

        <div className="flex flex-col gap-14">
          {stackData.map((group, idx) => (
            <div
              key={idx}
              className="stack-row flex flex-col md:flex-row md:items-start gap-3 md:gap-8 border-b border-white/5 pb-8"
            >
              {/* Catégorie à gauche */}
              <h4 className="text-xs font-black uppercase tracking-[0.2em] min-w-[220px] pt-2">
                {t(`stack.${group.category}`)} :
              </h4>

              {/* Liste horizontale des compétences avec icônes */}
              <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
                {group.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon.split("-")[0]}/${skill.icon}.svg`}
                      alt={skill.name}
                      className="w-5 h-5 object-contain"
                      onError={(e) => {
                        const base = skill.icon.split("-")[0];
                        e.currentTarget.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${base}/${base}-plain.svg`;
                      }}
                    />
                    <span className="text-lg md:text-xl font-medium tracking-tight">
                      {skill.name}
                      {i < group.skills.length - 1 ? "," : "."}
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
