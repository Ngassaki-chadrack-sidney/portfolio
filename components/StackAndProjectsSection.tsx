"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { BorderTrail } from "./motion-primitives/border-trail";
import { LangageData } from "@/data/programmingLanguage";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Application Flutter - Recettes",
    description: "App mobile moderne pour découvrir des recettes avec Firebase",
    category: "Mobile",
    tags: ["Flutter", "Firebase", "Dart"],
  },
  {
    id: 2,
    title: "Site Web Next.js Awwwards",
    description: "Réplique d'un site Awwwards avec animations avancées",
    category: "Web",
    tags: ["Next.js", "GSAP", "Framer Motion"],
  },
  {
    id: 3,
    title: "API REST Express",
    description: "Backend robuste avec authentification JWT",
    category: "Backend",
    tags: ["Express", "Node.js", "JWT"],
  },
  {
    id: 4,
    title: "Dashboard React Analytics",
    description: "Interface de visualisation de données en temps réel",
    category: "Web",
    tags: ["React", "Chart.js", "Tailwind"],
  },
];

export default function StackAndProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [activeTab, setActiveTab] = useState<"stack" | "projects">("stack");
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
      });

      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.from(card, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power3.out",
          delay: index * 0.1,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [activeTab]);

  return (
    <>
      <section
        id="stack"
        ref={containerRef}
        className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-black"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center"
          >
            Mon Expertise
          </h2>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <button
              onClick={() => setActiveTab("stack")}
              className={`px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === "stack"
                  ? "bg-primary text-white"
                  : "bg-slate-800 text-muted-foreground hover:text-foreground border border-slate-700"
              }`}
            >
              Stack Technologique
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === "projects"
                  ? "bg-primary text-white"
                  : "bg-slate-800 text-muted-foreground hover:text-foreground border border-slate-700"
              }`}
            >
              Projets Réalisés
            </button>
          </div>

          {/* Stack Content */}
          {activeTab === "stack" && (
            <div className="w-full flex justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                {LangageData.map((tech, index) => (
                  <div
                    key={tech.nom}
                    ref={(el) => {
                      if (el) cardsRef.current[index] = el;
                    }}
                    className="group relative h-90 w-75 bg-slate-900/50 rounded-lg p-6 border border-slate-800 overflow-hidden hover:border-primary/50 transition-all duration-300"
                  >
                    <BorderTrail
                      className="bg-gradient-to-r from-primary to-cyan-500"
                      size={80}
                    />

                    <div className="relative z-10">
                      {/* Tech logo */}
                      <div className="mb-6 flex items-center justify-center">
                        <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-white ring-1 ring-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.45)] overflow-hidden">
                          <Image
                            src={
                              tech.image_url ||
                              "/programming-logo/others/placeholder.png"
                            }
                            alt={tech.nom}
                            fill
                            className="object-contain p-2"
                          />
                        </div>
                      </div>
                      {/* Badge */}
                      <div className="absolute top-4 right-4 bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full">
                        {tech.taux_maitrise}%
                      </div>

                      {/* Contenu */}
                      <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {tech.nom}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {tech.description}
                      </p>

                      {/* Progress bar */}
                      <div className="space-y-2">
                        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-cyan-500 rounded-full transition-all duration-700"
                            style={{ width: `${tech.taux_maitrise}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects Content */}
          {activeTab === "projects" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  ref={(el) => {
                    if (el) cardsRef.current[index] = el;
                  }}
                  className="group relative bg-slate-900/50 rounded-lg p-6 border border-slate-800 overflow-hidden hover:border-primary/50 transition-all duration-300"
                >
                  <BorderTrail
                    className="bg-gradient-to-r from-primary to-cyan-500"
                    size={80}
                  />

                  <div className="relative z-10">
                    {/* Category badge */}
                    <div className="inline-block bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full mb-3">
                      {project.category}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-slate-700 text-primary rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
