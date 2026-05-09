"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "@/hooks/useTranslation";
import { 
  SiTailwindcss, 
  SiReact, 
  SiNodedotjs, 
  SiNextdotjs, 
  SiTypescript, 
  SiFlutter 
} from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AuroraBackground } from "../ui/aurora-background";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation des textes (Reveal yPercent 110)
      const tl = gsap.timeline();

      tl.from(".reveal-text", {
        yPercent: 110,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
      })
      .from(".reveal-stagger", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      }, "-=0.5")
      .from(imageRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        ease: "power3.out"
      }, "-=1");

      // Floating animation pour le badge
      gsap.to(".badge-float", {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const techStack = [
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiReact />, name: "React Native" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <SiFlutter />, name: "Flutter" },
  ];

  return (
    <AuroraBackground>
    <section 
      ref={containerRef}
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center gap-16 z-10">
        
        {/* Texte */}
        <div className="flex flex-col space-y-6 w-full lg:w-3/5">
          <div className="overflow-hidden">
            <span className="reveal-text inline-block text-primary font-bold tracking-[0.2em] uppercase text-xs">
              {t("hero.subtitle")}
            </span>
          </div>

          <div className="overflow-hidden">
            <h1 className="reveal-text text-3xl md:text-5xl font-bold leading-tight tracking-tight">
              {t("hero.title_part1")} {t("hero.title_part2")}
            </h1>
          </div>

          <div className="overflow-hidden">
            <p className="reveal-text max-w-2xl text-sm md:text-base text-foreground/80 leading-relaxed">
              {t("hero.description")}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            {techStack.map((tech, i) => (
              <div 
                key={i} 
                className="reveal-stagger p-3 rounded-xl bg-accent border border-border"
                title={tech.name}
              >
                <div className="text-2xl text-foreground/70">
                  {tech.icon}
                </div>
              </div>
            ))}
          </div>

          <div className="reveal-stagger pt-4">
            <Button size="lg" className="rounded-full px-8 font-semibold">
              {t("hero.cta")}
            </Button>
          </div>
        </div>

        {/* Image / Visuel */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
          <div ref={imageRef} className="relative">
            {/* Glow effect shadcn primary */}
            <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] blur-3xl opacity-50"></div>
            
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[2rem] overflow-hidden border border-border shadow-2xl">
              <Image
                src="/profile.jpeg"
                alt="NGASSAKI Chadrack"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Badge */}
            <Badge className="badge-float absolute -bottom-6 -right-6 shadow-xl z-20">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground"></span>
                </span>
                <p className="font-bold text-xs uppercase tracking-widest">
                  {t("hero.badge")}
                </p>
              </div>
            </Badge>
          </div>
        </div>
      </div>

      {/* Décoration arrière-plan */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10"></div>
    </section>
    </AuroraBackground>
  );
}