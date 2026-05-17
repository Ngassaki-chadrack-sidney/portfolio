"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "@/hooks/useTranslation";
import MagneticButton from "@/components/ui/MagneticButton";

const coreTech = [
  { name: "Next.js", icon: "nextjs-original" },
  { name: "Flutter", icon: "flutter-plain" },
  { name: "Prisma", icon: "prisma-original" },
  { name: "AdonisJS", icon: "adonisjs-original" },
  { name: "React Native", icon: "react-original" },
  { name: "PostgreSQL", icon: "postgresql-plain" },
];

const getIconUrl = (icon: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon.split("-")[0]}/${icon}.svg`;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const title = titleRef.current;
    if (!section || !title) return;

    const originalText = title.innerText;
    title.innerHTML = originalText
      .split(" ")
      .map(
        (word) =>
          `<span class="inline-block overflow-hidden"><span class="word inline-block">${word}&nbsp;</span></span>`,
      )
      .join("");

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const words = section.querySelectorAll(".word");
      const techItems = section.querySelectorAll(".hero-core-tech");
      const cta = section.querySelector(".hero-cta");

      gsap.set(words, { yPercent: 100 });
      gsap.set(techItems, { y: 30, opacity: 0, scale: 0.8 });
      gsap.set(cta, { y: 20, opacity: 0 });

      const ctx = gsap.context(() => {
        const tl = gsap.timeline();

        tl.to(words, {
          yPercent: 0,
          duration: 1.2,
          stagger: 0.05,
          ease: "expo.out",
        })
          .to(
            techItems,
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
              stagger: 0.1,
              ease: "back.out(1.7)",
            },
            "-=0.6",
          )
          .to(
            cta,
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
            },
            "-=0.4",
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
      className="relative min-h-screen flex items-center justify-start px-[clamp(1.5rem,5vw,6rem)] overflow-hidden bg-background"
    >
      <div className="hero-content relative z-10 w-full max-w-[60vw] lg:max-w-[60%] mt-8">
        <h1
          ref={titleRef}
          className="text-6xl md:text-7xl font-bold break-words overflow-hidden"
        >
          {t("hero.title")}
        </h1>

        <div className="flex flex-wrap items-center gap-6 mt-12 mb-16">
          {coreTech.map((tech) => (
            <div
              key={tech.name}
              className="hero-core-tech group flex flex-col items-center gap-2"
            >
              <img
                src={getIconUrl(tech.icon)}
                alt={tech.name}
                className="w-16 h-16 object-contain"
              />
              <span className="text-xs font-bold uppercase tracking-widest text-khaki-950 dark:text-khaki-50 group-hover:text-accent transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        <div className="hero-cta">
          <a href="#projects">
            <MagneticButton
              variant="primary"
              className="px-14 py-6 text-base font-bold"
            >
              {t("hero.cta")}
            </MagneticButton>
          </a>
        </div>
      </div>
    </section>
  );
}