"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "WhatsApp Redesign",
    url: "https://res.cloudinary.com/dji6k1cvh/video/upload/v1767601795/whatsapp_apps_mq96jv.mkv",
  },
  {
    id: 2,
    title: "Next.js Experience",
    url: "https://res.cloudinary.com/dji6k1cvh/video/upload/v1763459208/nwSy6DrQfj_sawc9i.mp4",
  },
  {
    id: 3,
    title: "Vision Graphic",
    url: "https://res.cloudinary.com/dji6k1cvh/video/upload/v1767602668/hg_vision-graphic_agdvtg.mkv",
  },
  {
    id: 4,
    title: "Awwwards Replica",
    url: "https://res.cloudinary.com/dji6k1cvh/video/upload/v1763458344/replique_d_un_site_awwward_pkzvoi.mp4",
  },
  {
    id: 5,
    title: "Creative Dev",
    url: "https://res.cloudinary.com/dji6k1cvh/video/upload/v1763458900/20250621-2042-00.2174813_gv38kx.mp4",
  },
];

export default function ProjectSectionSlide() {
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Animation du bouton au début
      gsap.from(".reveal-btn", {
        y: 80,
        opacity: 0,
        duration: 1.4,
        ease: "cubic-bezier(0.22, 1, 0.36, 1)",
        scrollTrigger: {
          trigger: ".reveal-btn",
          start: "top 90%",
        },
      });

      // 2. Parallaxe horizontal (Slide droite vers gauche)
      // On calcule de combien on doit déplacer la bande de projets
      const totalWidth = slideRef.current?.offsetWidth;
      const windowWidth = window.innerWidth;
      
      if (!totalWidth || !slideRef.current || !containerRef.current) return;
      
      const xTranslate = totalWidth - windowWidth + 100;

      gsap.fromTo(
        slideRef.current,
        { x: 0 },
        {
          x: -xTranslate,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 20%",
            end: "bottom top",
            scrub: 1.5,
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-20 bg-transparent overflow-hidden"
    >
      {/* Bande de projets qui glisse horizontalement */}
      <div className="w-screen relative">
        <div
          ref={slideRef}
          className="flex flex-nowrap gap-12 pl-10 md:pl-20 pr-10"
          style={{ width: "max-content" }} // Force le conteneur à prendre toute la largeur
        >
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="project-item flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[45vw] aspect-video relative group"
            >
              <div className="relative w-full h-full overflow-hidden rounded-3xl border border-white/10">
                <video
                  src={project.url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-8 flex justify-between items-baseline pr-4">
                <h3 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tighter">
                  {project.title}
                </h3>
                <span className="text-blue-600 font-black text-xl md:text-2xl">
                  0{i + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
