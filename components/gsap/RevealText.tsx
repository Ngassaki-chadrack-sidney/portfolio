"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface RevealTextProps {
  children: React.ReactNode;
  delay?: number;
  as?: "div" | "h1" | "h2" | "h3" | "p" | "span";
}

export default function RevealText({ children, delay = 0, as: Tag = "div" }: RevealTextProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const text = wrapper?.firstElementChild;
    if (!wrapper || !text) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.set(text, { yPercent: 120 });
      const ctx = gsap.context(() => {
        gsap.to(text, {
          yPercent: 0,
          duration: 1,
          ease: "power3.out",
          delay,
          scrollTrigger: {
            trigger: wrapper,
            start: "top 85%",
          },
        });
      }, wrapper);
      return () => ctx.revert();
    });

    return () => mm.revert();
  }, [delay]);

  return (
    <div ref={wrapperRef} className="overflow-hidden">
      <Tag style={{ transform: "translateY(120%)" }}>
        {children}
      </Tag>
    </div>
  );
}
