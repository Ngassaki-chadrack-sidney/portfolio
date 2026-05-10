"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "@/hooks/useTranslation";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation du Titre (H2)
      gsap.from(".about-title", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about-title",
          start: "top 85%",
        },
      });

      // Animation des Paragraphes (Stagger)
      gsap.from(".about-text", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-text-container",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 px-6 md:px-20 bg-transparent relative"
    >
      <div className="max-w-6xl">
        {/* Titre avec animation de reveal */}
        <div className="overflow-hidden">
          <h2 className="about-title text-xl md:text-2xl font-black uppercase leading-[1.1] text-white">
            {t("about.title")}
          </h2>
        </div>

        <div className="about-text-container flex flex-col md:max-w-[60%] gap-12 mt-16">
          <div className="overflow-hidden">
            <p className="about-text text-base leading-relaxed ">
              {t("about.paragraph1")}
            </p>
          </div>

          <div className="overflow-hidden">
            <p className="about-text text-base leading-relaxed">
              {t("about.paragraph2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
