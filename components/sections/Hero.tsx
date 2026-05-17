"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "@/hooks/useTranslation";
import MagneticButton from "@/components/ui/MagneticButton";

const coreTech = [
  { name: "Next.js", icon: "nextjs/nextjs-original" },
  { name: "Flutter", icon: "flutter/flutter-original" },
  { name: "NestJS", icon: "nestjs/nestjs-original" },
  { name: "AdonisJS", icon: "adonisjs/adonisjs-original" },
  { name: "PostgreSQL", icon: "postgresql/postgresql-original" },
];

const getIconUrl = (icon: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}.svg`;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const title = titleRef.current;
    if (!section || !title) return;

    const wordsArray = title.innerText.split(" ");
    title.innerHTML = wordsArray
      .map(
        (word) =>
          `<span class="inline-block overflow-hidden"><span class="word inline-block">${word}&nbsp;</span></span>`,
      )
      .join("");

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        const words = title.querySelectorAll(".word");
        const techItems = section.querySelectorAll(".hero-tech-card");
        const cta = section.querySelector(".hero-cta-wrapper");

        const tl = gsap.timeline({ delay: 0.8 });

        tl.from(words, {
          yPercent: 100,
          duration: 1.2,
          stagger: 0.05,
          ease: "expo.out",
        })
        .fromTo(techItems,
          { y: 40, opacity: 0, scale: 0.8 },
          { y: 0, opacity: 1, scale: 1, duration: 1, stagger: 0.1, ease: "back.out(1.7)" },
          "-=0.8"
        )
        .fromTo(cta,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.6"
        );
      }, section);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, [t]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen grid grid-cols-1 lg:grid-cols-12 items-center px-[clamp(1.5rem,5vw,6rem)] overflow-hidden bg-background pt-24"
    >
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="lg:col-span-10 xl:col-span-9 relative z-10 grid grid-cols-1 gap-12 lg:gap-16">
        <h1
          ref={titleRef}
          className="text-[clamp(2.2rem,6.5vw,5.5rem)] font-black leading-[0.9] tracking-tighter text-foreground max-w-[95vw] lg:max-w-[85%]"
        >
          {t("hero.title")}
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 wrap-normal gap-6 max-w-4xl">
          {coreTech.map((tech) => (
            <div
              key={tech.name}
              className="hero-tech-card group grid grid-cols-1 justify-items-center gap-4 p-6 rounded-[2rem] bg-surface/30 border-2 border-surface hover:border-accent/40 transition-all duration-500"
            >
              <div className="w-10 h-10 relative">
                <img
                  src={getIconUrl(tech.icon)}
                  alt={tech.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-khaki-950 dark:text-khaki-50 text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        <div className="hero-cta-wrapper">
          <a href="#projects">
            <MagneticButton
              variant="primary"
              className="px-16 py-8 text-lg font-black tracking-widest uppercase"
            >
              {t("hero.cta")}
            </MagneticButton>
          </a>
        </div>
      </div>
    </section>
  );
}
