"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

const skills = [
  { name: "TypeScript", icon: "typescript-original" },
  { name: "Next.js", icon: "nextjs-original" },
  { name: "React Native", icon: "react-original" },
  { name: "Flutter", icon: "flutter-plain" },
  { name: "Node.js", icon: "nodejs-plain" },
  { name: "PrestaShop", icon: "prestashop-original" },
  { name: "PostgreSQL", icon: "postgresql-plain" },
  { name: "Supabase", icon: "supabase-plain" },
  { name: "Docker", icon: "docker-plain" },
];

const getIconUrl = (icon: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon.split("-")[0]}/${icon}.svg`;

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const title = titleRef.current;
    if (!section || !image || !title) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.from(title, {
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: title,
            start: "top 90%",
          },
        });

        gsap.from(".about-text-content", {
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-text-content",
            start: "top 85%",
          },
        });

        gsap.from(".skill-icon-wrapper", {
          y: 20,
          opacity: 0,
          scale: 0.8,
          duration: 0.6,
          stagger: 0.05,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 85%",
          },
        });

        gsap.set(".image-overlay", { scaleX: 1 });
        gsap.to(".image-overlay", {
          scaleX: 0,
          duration: 1.5,
          ease: "expo.inOut",
          transformOrigin: "right",
          scrollTrigger: {
            trigger: image,
            start: "top 80%",
          },
        });

        gsap.from(image.querySelector("img"), {
          scale: 1.2,
          duration: 1.5,
          ease: "expo.inOut",
          scrollTrigger: {
            trigger: image,
            start: "top 80%",
          },
        });
      }, section);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-[clamp(6rem,12vw,14rem)] px-[clamp(1.5rem,5vw,6rem)] bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-surface/50 -z-10" />

      <div className="max-w-7xl mx-auto">
        <h2
          ref={titleRef}
          className="text-[clamp(2.5rem,5vw,5rem)] font-bold tracking-tight text-foreground"
        >
          {t("about.title")}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-7 space-y-12">
            <div className="about-text-content space-y-6">
              <p className="text-2xl md:text-3xl font-bold text-accent leading-tight">
                Specialized in Next.js, React Native & Flutter. Available for
                freelance projects.
              </p>
              <p className="text-lg md:text-xl leading-relaxed font-medium">
                {t("about.text")} — I specialize in crafting high-performance
                digital solutions that combine exceptional design with technical
                excellence.
              </p>
            </div>

            <div className="skills-grid flex flex-wrap -space-x-4 mt-16">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="skill-icon-wrapper w-16 h-16 rounded-full bg-background border-2 border-surface p-4 flex items-center justify-center relative hover:z-10 hover:-translate-y-2 transition-all duration-300 group"
                >
                  <img
                    src={getIconUrl(skill.icon)}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-background text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div
              ref={imageRef}
              className="relative w-full aspect-4/5 max-w-md mx-auto overflow-hidden rounded-3xl"
            >
              <div className="image-overlay absolute inset-0 bg-accent z-10" />
              <Image
                src="/profile.png"
                alt="NGASSAKI Chadrack Sidney"
                fill
                className="object-cover transition-transform duration-700"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
