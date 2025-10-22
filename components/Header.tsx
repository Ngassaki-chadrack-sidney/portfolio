"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import userPhoto from "../public/profile.jpg";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

function Header() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

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
    <div className="h-full  w-full relative flex flex-col">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start px-6 md:px-12 lg:px-24 flex-1 gap-12 md:gap-16">
        {/* Section Texte */}
        <div className="w-full md:max-w-3xl space-y-6 md:mt-20 text-center md:text-left order-2 md:order-1">
          {/* Titre principal */}
          <div className="overflow-hidden">
            <h1
              ref={h1Ref}
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-slate-900 leading-tight"
            >
              NGASSAKI Chadrack Sidney
            </h1>
          </div>

          {/* Paragraphes */}
          <div ref={paragraphRef} className="space-y-5 overflow-hidden">
            <p className="text-md md:text-lg lg:text-xxl leading-relaxed text-slate-700 font-light">
              Développeur web & mobile spécialisé dans la création
              d&apos;interfaces modernes, élégantes et performantes. À travers
              des technologies de pointe et un design soigné, je transforme vos
              idées en solutions digitales qui captivent, engagent et inspirent.
            </p>

            <p className="text-base md:text-md lg:text-lg text-slate-600 font-light">
              <span className="font-semibold text-slate-800">
                Mon objectif :
              </span>{" "}
              Concevoir des expériences digitales mémorables qui dépassent les
              attentes.
            </p>
          </div>
        </div>

        {/* Photo de profil */}
        <div
          ref={photoRef}
          className="flex-shrink-0 mb-8 md:mb-0 order-1 md:order-2"
        >
          <div className="relative w-[350px] h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px]">
            <div className="absolute inset-0 rounded-full opacity-20 blur-2xl"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl ring-4 ring-white/50">
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
