"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useTranslation } from "@/hooks/useTranslation";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Animation d'entrée fluide
      tl.from(".hero-reveal", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.2,
      }).from(
        imageRef.current,
        {
          scale: 0.8,
          opacity: 0,
          duration: 1.5,
          ease: "expo.out",
        },
        "-=0.8",
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      <div className="flex flex-col items-center text-center z-10 w-full max-w-7xl">
        {/* Texte de gauche (Introduction) */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-start gap-2 text-left">
          <div className="overflow-hidden">
            <span className="hero-reveal block text-blue-600 font-bold uppercase tracking-tighter text-lg">
              {t("hero.hello")}
            </span>
          </div>
          <div className="overflow-hidden">
            <h2 className="hero-reveal block text-5xl font-black uppercase leading-none text-white">
              NGASSAKI
              <br />
              CHADRACK
            </h2>
          </div>
        </div>

        {/* Visuel Central (Ton personnage / Image) */}
        <div
          // ref={imageRef}
          className="relative w-full max-w-[300px] md:max-w-[500px] lg:max-w-[650px] aspect-square transition-all duration-700"
        >
          {/* Lueur bleue derrière l'image pour le relief */}
          <div className="absolute inset-0 bg-blue-600/20 blur-[120px] rounded-full" />

          <Image
            src="/profile.png" // Utilise ton image de personnage ici
            alt="NGASSAKI Chadrack Sidney"
            fill
            className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
            priority
          />
        </div>

        {/* Texte de droite (Spécialité) */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-end gap-2 text-right">
          <div className="overflow-hidden">
            <span className="hero-reveal block text-blue-600 font-bold uppercase tracking-tighter text-lg">
              {t("hero.fullstack")}
            </span>
          </div>
          <div className="overflow-visible">
            <h2 className="hero-reveal block text-5xl font-black uppercase leading-none text-white">
              {t("hero.developer")}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-800">
                {t("hero.engineer")}
              </span>
            </h2>
          </div>
        </div>

        {/* Version Mobile / Tablette (Affichée uniquement quand le layout absolute disparaît) */}
        <div className="xl:hidden mt-10 flex flex-col gap-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase text-white">
            NGASSAKI <span className="text-blue-600">CHADRACK</span>
          </h1>
          <p className="text-blue-400 font-bold uppercase tracking-widest text-sm">
            Développeur Full Stack (WEB & MOBILE)
          </p>
        </div>
      </div>
    </section>
  );
}
