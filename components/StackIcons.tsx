"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiFlutter,
  SiNodedotjs,
  SiAdonisjs,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const stackIcons = [
  { icon: SiReact, label: "React", color: "#61dafb" },
  { icon: SiNextdotjs, label: "Next.js", color: "#ffffff" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178c6" },
  { icon: SiFlutter, label: "Flutter", color: "#02569b" },
  { icon: SiReact, label: "React Native", color: "#61dafb" },
  { icon: SiAdonisjs, label: "Adonis", color: "#5a67d8" },
  { icon: SiNodedotjs, label: "Node.js", color: "#68a063" },
];

export default function StackIcons() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      iconsRef.current.forEach((icon, index) => {
        if (!icon) return;

        gsap.from(icon, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
          opacity: 0,
          y: 100,
          duration: 0.8,
          ease: "power3.out",
          delay: index * 0.1,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-slate-900 to-slate-800"
    >
      <div className="max-w-6xl mx-auto">
        <h3 className="text-center text-2xl md:text-3xl font-bold text-foreground mb-12">
          Technologies que je maîtrise
        </h3>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8">
          {stackIcons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                ref={(el) => {
                  if (el) iconsRef.current[index] = el;
                }}
                className="flex flex-col items-center justify-center group"
              >
                <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-lg bg-slate-700/50 border border-slate-600 group-hover:border-primary group-hover:bg-slate-700 transition-all duration-300 transform group-hover:scale-110">
                  <Icon
                    size={40}
                    className="text-foreground group-hover:text-primary transition-colors duration-300"
                    style={{ color: item.color }}
                  />
                </div>
                <p className="mt-3 text-xs md:text-sm text-muted-foreground text-center font-medium group-hover:text-primary transition-colors">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
