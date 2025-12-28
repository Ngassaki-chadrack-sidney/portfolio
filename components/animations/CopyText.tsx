"use client";

import React, { useRef, useCallback } from "react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface CopyTextProps {
  children: React.ReactNode;
  animateOnScroll?: boolean;
  blockColor?: string;
  duration?: number;
  delay?: number;
  stagger?: number;
  className?: string; // Ajout pour garder tes styles CSS
}

function CopyText({
  children,
  animateOnScroll = true,
  blockColor = "#3b82f6",
  duration = 0.6,
  delay = 0,
  stagger = 0.1,
  className = "",
}: CopyTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // 1. On split le texte en lignes
      const childElements =
        containerRef.current.children.length > 0
          ? Array.from(containerRef.current.children)
          : [containerRef.current];

      const splits = childElements.map((el) => {
        return new SplitText(el, {
          type: "lines",
          linesClass: "split-line",
        });
      });

      const allLines = splits.flatMap((s) => s.lines);

      // 2. Création des wrappers et des blocs de révélation de manière propre
      const animations = allLines.map((line) => {
        // On entoure chaque ligne d'un wrapper "overflow hidden"
        const wrapper = document.createElement("div");
        wrapper.style.position = "relative";
        wrapper.style.overflow = "hidden";
        wrapper.style.display = "block"; // Important pour le layout
        wrapper.className = "line-wrapper";

        line.parentNode?.insertBefore(wrapper, line);
        wrapper.appendChild(line);

        // Création du bloc de couleur (Reveal Block)
        const block = document.createElement("div");
        block.style.position = "absolute";
        block.style.top = "0";
        block.style.left = "0";
        block.style.width = "100%";
        block.style.height = "100%";
        block.style.backgroundColor = blockColor;
        block.style.transformOrigin = "left center";
        block.style.transform = "scaleX(0)";
        wrapper.appendChild(block);

        // Timeline pour cette ligne précise
        const tl = gsap.timeline({ paused: true });
        tl.to(block, { scaleX: 1, duration: duration, ease: "power3.inOut" })
          .set(line, { opacity: 1 }) // Le texte est invisible au début (via CSS ou GSAP)
          .set(block, { transformOrigin: "right center" })
          .to(block, { scaleX: 0, duration: duration, ease: "power3.inOut" });

        return { tl, wrapper };
      });

      // Rendre le texte invisible initialement pour éviter le flash
      gsap.set(allLines, { opacity: 0 });

      // 3. Animation au scroll ou immédiate
      if (animateOnScroll) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top 85%",
          onEnter: () => {
            animations.forEach((anim, i) => {
              gsap.delayedCall(delay + i * stagger, () => anim.tl.play());
            });
          },
          once: true,
        });
      } else {
        animations.forEach((anim, i) => {
          gsap.delayedCall(delay + i * stagger, () => anim.tl.play());
        });
      }

      // Nettoyage lors du démontage
      return () => {
        splits.forEach((s) => s.revert());
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    },
    { scope: containerRef, dependencies: [children] }
  );

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {children}
    </div>
  );
}

export default CopyText;
