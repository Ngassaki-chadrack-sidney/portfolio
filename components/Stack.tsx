"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";
import { LangageData } from "@/data/programmingLanguage";
import MagneticButton from "./MagneticButton";

gsap.registerPlugin(ScrollTrigger);

function Stack() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRef = useRef<HTMLDivElement>(null);

  const goProject = () => {
    router.push("/contact");
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animation du header
      const tlHeader = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      tlHeader
        .from(titleRef.current, {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: "power3.out",
        })
        .from(
          descRef.current,
          {
            opacity: 0,
            y: 40,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.6"
        );

      // Animation des cartes - du bas vers le haut
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          y: 100,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: index * 0.1,
        });
      });

      // Animation du bouton
      if (buttonRef.current) {
        gsap.from(buttonRef.current, {
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 90%",
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power3.out",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-24 text-center">
          <h3
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-6 text-gray-900"
          >
            Technologies que je maîtrise
          </h3>
          <p
            ref={descRef}
            className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            Des outils puissants, des solutions modernes. Chaque technologie est
            choisie pour créer des expériences digitales performantes et
            innovantes.
          </p>
        </div>

        {/* Grille des cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 justify-items-center">
          {LangageData.map((tech, index) => (
            <div
              key={tech.nom}
              ref={(el: any) => (cardsRef.current[index] = el)}
              className="group cursor-pointer"
            >
              <div className="relative bg-white border border-gray-200 rounded-2xl p-8 h-[380px] w-[300px] flex flex-col shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-500 hover:-translate-y-3 overflow-hidden">
                {/* Badge de niveau */}
                <div className="absolute top-4 right-4 bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {tech.taux_maitrise}%
                </div>

                {/* Image de la technologie */}
                <div className="mb-6 flex items-center justify-center h-20 w-20 mx-auto bg-gray-50 rounded-xl overflow-hidden group-hover:scale-110 transition-transform duration-500">
                  <div className="relative w-24 h-24">
                    <Image
                      src={tech.image_url || "/tech/placeholder.png"}
                      alt={tech.nom}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Nom de la technologie */}
                <h4 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
                  {tech.nom}
                </h4>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-6 leading-relaxed text-center flex-grow">
                  {tech.description}
                </p>

                {/* Barre de progression */}
                <div className="space-y-2 mt-auto">
                  <div className="flex items-center justify-between text-xs font-medium text-gray-500">
                    <span>Maîtrise</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gray-900 rounded-full transition-all duration-700 group-hover:bg-blue-600"
                      style={{ width: `${tech.taux_maitrise}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stack;
