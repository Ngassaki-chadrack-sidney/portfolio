"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import userPhoto from "../public/profile.jpg";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import TextType from "./TextType";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiFlutter,
  SiNodedotjs,
  SiAdonisjs,
} from "react-icons/si";

gsap.registerPlugin(SplitText);

function Header() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const bgGradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!h1Ref.current || !paragraphRef.current || !photoRef.current) return;

    // SplitText pour animations par mots et lignes
    const textH1 = new SplitText(h1Ref.current, { type: "words" });
    const paragraphText = new SplitText(paragraphRef.current, {
      type: "lines",
    });

    // Wrapper pour chaque mot pour masquer le débordement
    textH1.words.forEach((word) => {
      const wrapper = document.createElement("div");
      wrapper.style.overflow = "hidden";
      wrapper.style.display = "inline-block";
      word.parentNode?.insertBefore(wrapper, word);
      wrapper.appendChild(word);
    });

    // États initiaux invisibles
    gsap.set(textH1.words, { yPercent: 100, opacity: 0 });
    gsap.set(paragraphText.lines, { yPercent: 120, opacity: 0 });
    gsap.set(photoRef.current, {
      x: 200,
      opacity: 0,
      filter: "blur(20px)",
      rotation: 15,
    });

    // Animation du gradient de couleurs en arrière-plan
    if (bgGradientRef.current) {
      gsap.set(bgGradientRef.current, {
        opacity: 0,
      });
      gsap.to(bgGradientRef.current, {
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.5,
      });

      // Animation continue du gradient
      gsap.to(bgGradientRef.current, {
        backgroundPosition: "200% center",
        duration: 8,
        ease: "none",
        repeat: -1,
      });
    }

    // Timeline d'animation
    const tl = gsap.timeline({ delay: 0.3 });

    // Animation H1 : mots qui montent du bas
    tl.to(textH1.words, {
      yPercent: 0,
      opacity: 1,
      ease: "power4.out",
      stagger: 0.06,
      duration: 1.2,
    })

      // Animation paragraphe : lignes qui montent
      .to(
        paragraphText.lines,
        {
          yPercent: 0,
          opacity: 1,
          ease: "power3.out",
          stagger: 0.08,
          duration: 1,
        },
        "-=0.6"
      )

      // Animation photo : vient de la droite avec blur et rotation
      .to(
        photoRef.current,
        {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          rotation: 0,
          ease: "power3.out",
          duration: 1.4,
        },
        "-=1"
      );

    // Cleanup
    return () => {
      textH1.revert();
      paragraphText.revert();
    };
  }, []);

  return (
    <div className="min-h-screen w-full relative flex flex-col bg-black">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start px-6 md:px-12 lg:px-24 flex-1 gap-12 md:gap-16 py-20">
        {/* Section Texte */}
        <div className="w-full md:max-w-3xl space-y-6 md:mt-20 text-center md:text-left order-2 md:order-1">
          {/* Titre principal */}
          <div className="overflow-hidden">
            <h1
              ref={h1Ref}
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-foreground leading-tight"
            >
              NGASSAKI Chadrack Sidney
            </h1>
          </div>

          {/* TextType pour le typing effect */}
          <div className="overflow-hidden">
            <TextType
              text={["Developpeur web full stack", "Developpeurs mobile"]}
              as="h2"
              className="text-xl md:text-2xl lg:text-3xl font-bold text-primary"
              typingSpeed={50}
              deletingSpeed={30}
              pauseDuration={2000}
              loop={true}
              showCursor={true}
              cursorCharacter="|"
              cursorClassName="text-primary"
              variableSpeed={undefined}
              onSentenceComplete={undefined}
            />
          </div>

          {/* Paragraphes */}
          <div ref={paragraphRef} className="space-y-5 overflow-hidden">
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-muted-foreground font-light">
              Développeur web & mobile spécialisé dans la création
              d&apos;interfaces modernes, élégantes et performantes. À travers
              des technologies de pointe et un design soigné, je transforme vos
              idées en solutions digitales qui captivent, engagent et inspirent.
            </p>
          </div>

          {/* Stack Icons */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 flex-wrap gap-4 md:gap-6 mt-8 md:mt-12">
            {[
              // { Icon: SiReact, label: "React", color: "#61dafb" },
              { Icon: SiReact, label: "React Native", color: "#61dafb" },
              { Icon: SiNextdotjs, label: "Next.js", color: "#ffffff" },
              { Icon: SiTypescript, label: "TypeScript", color: "#3178c6" },
              { Icon: SiFlutter, label: "Flutter", color: "#02569b" },
              { Icon: SiNodedotjs, label: "Node.js", color: "#68a063" },
              { Icon: SiAdonisjs, label: "Adonis", color: "#5a67d8" },
            ].map((item, index) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2 group animate-fade-in"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-slate-800/50 border border-slate-700 rounded-full">
                  <item.Icon
                    size={65}
                    className="text-foreground group-hover:text-primary transition-colors"
                    style={{ color: item.color }}
                  />
                </div>
                <span className="text-xs md:text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Photo de profil avec ombre bleue */}
        <div
          ref={photoRef}
          className="flex-shrink-0 mb-8 md:mb-0 order-1 md:order-2 relative"
        >
          <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px]">
            <div
              className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-primary/30"
              style={{
                boxShadow:
                  "0 0 60px rgba(59, 130, 246, 0.6), 0 0 100px rgba(59, 130, 246, 0.3)",
              }}
            >
              <Image
                src={userPhoto}
                alt="Photo de profil de NGASSAKI Chadrack"
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
