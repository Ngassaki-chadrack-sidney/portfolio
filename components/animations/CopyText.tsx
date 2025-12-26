"use client";

import React, { useRef } from "react";
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
}

function CopyText({
  children,
  animateOnScroll = true,
  blockColor = "#3b82f6",
  duration = 0.75,
  delay = 0,
  stagger = 0.15,
}: CopyTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const splitRef = useRef<any[]>([]);
  const lineRef = useRef<HTMLElement[]>([]);
  const blockRef = useRef<HTMLElement[]>([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      splitRef.current = [];
      lineRef.current = [];
      blockRef.current = [];

      let elements: Element[] = [];
      if (containerRef.current.hasAttribute("data-copy-wrapper")) {
        elements = Array.from(containerRef.current.children);
      } else {
        elements = [containerRef.current];
      }

      elements.forEach((element) => {
        const split = SplitText.create(element, {
          type: "lines",
          linesClass: "block-line++",
          lineThreshold: 0.1,
        });

        splitRef.current.push(split);

        split.lines.forEach((line: HTMLElement) => {
          const wrapper = document.createElement("div");
          wrapper.className = "block-line-wrapper";
          wrapper.style.overflow = "hidden";
          wrapper.style.position = "relative";

          line.parentNode?.insertBefore(wrapper, line);
          wrapper.appendChild(line);

          const block = document.createElement("div");
          block.className = "block-reveal";
          block.style.backgroundColor = blockColor;
          block.style.position = "absolute";
          block.style.top = "0";
          block.style.left = "0";
          block.style.width = "100%";
          block.style.height = "100%";
          wrapper.appendChild(block);

          lineRef.current.push(line);
          blockRef.current.push(block);
        });
      });

      gsap.set(lineRef.current, { opacity: 0 });
      gsap.set(blockRef.current, { scaleX: 0, transformOrigin: "left center" });

      const createBlockRevealAnimation = (
        block: HTMLElement,
        line: HTMLElement,
        index: number
      ) => {
        const tl = gsap.timeline({ delay: delay + index * stagger });
        tl.to(block, { scaleX: 1, duration: duration, ease: "power4.inOut" });
        tl.set(line, { opacity: 1 });
        tl.set(block, { transformOrigin: "right center" });
        tl.to(block, { scaleX: 0, duration: duration, ease: "power4.inOut" });
        return tl;
      };

      if (animateOnScroll) {
        blockRef.current.forEach((block, index) => {
          const tl = createBlockRevealAnimation(
            block,
            lineRef.current[index],
            index
          );
          tl.pause();

          ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top 90%",
            once: true,
            onEnter: () => tl.play(),
          });
        });
      } else {
        blockRef.current.forEach((block, index) => {
          createBlockRevealAnimation(block, lineRef.current[index], index);
        });
      }

      return () => {
        splitRef.current.forEach((split) => split?.revert());
        const wrappers = containerRef.current?.querySelectorAll(
          ".block-line-wrapper"
        );
        wrappers?.forEach((wrapper) => {
          if (wrapper.parentNode && wrapper.firstChild) {
            wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
            wrapper.remove();
          }
        });
      };
    },
    {
      scope: containerRef,
      dependencies: [animateOnScroll, delay, blockColor, stagger, duration],
    }
  );

  return (
    <div ref={containerRef} data-copy-wrapper>
      {children}
    </div>
  );
}

export default CopyText;
