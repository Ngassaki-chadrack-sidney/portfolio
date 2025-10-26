"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Magnetic } from "./motion-primitives/magnetic";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Application Flutter - Recettes",
    description:
      "App mobile moderne pour découvrir des recettes avec Firebase. Interface intuitive et animations fluides.",
    category: "Mobile",
    image: "/projects/flutter-recipes.jpg",
    tags: ["Flutter", "Firebase", "Dart"],
  },
  {
    id: 2,
    title: "Site Web Next.js Awwwards",
    description:
      "Réplique d'un site Awwwards avec animations avancées GSAP et Framer Motion.",
    category: "Web",
    image: "/projects/nextjs-awwwards.jpg",
    tags: ["Next.js", "GSAP", "Framer Motion"],
  },
  {
    id: 3,
    title: "API REST Express",
    description:
      "Backend robuste avec authentification JWT, validation des données et gestion d'erreurs.",
    category: "Backend",
    image: "/projects/express-api.jpg",
    tags: ["Express", "Node.js", "JWT"],
  },
  {
    id: 4,
    title: "Dashboard React Analytics",
    description:
      "Interface de visualisation de données en temps réel avec charts interactifs.",
    category: "Web",
    image: "/projects/react-dashboard.jpg",
    tags: ["React", "Chart.js", "Tailwind"],
  },
];

const categories = ["Tous", "Web", "Mobile", "Backend"];

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [activeCategory, setActiveCategory] = useState("Tous");
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);

  const filteredProjects =
    activeCategory === "Tous"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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

      gsap.from(".tab-button", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
      });

      projectsRef.current.forEach((project, index) => {
        if (!project) return;
        gsap.from(project, {
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
  }, []);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-12 text-center"
        >
          Mes Projets
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {categories.map((category, index) => (
            <Magnetic key={category} intensity={0.2} range={50}>
              <button
                ref={(el) => {
                  if (el) tabsRef.current[index] = el;
                }}
                onClick={() => setActiveCategory(category)}
                className={`tab-button px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-slate-800 text-muted-foreground hover:text-foreground border border-slate-700"
                }`}
              >
                {category}
              </button>
            </Magnetic>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                if (el) projectsRef.current[index] = el;
              }}
              className="group bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              {/* Image Placeholder */}
              <div className="relative w-full h-48 md:h-56 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="text-muted-foreground text-sm">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-slate-700 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
