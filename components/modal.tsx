"use client";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useMemo, useState } from "react";
import { gsap } from "gsap";

type ModalState = { active: boolean; index: number };
type ProjectItem = {
  id: number;
  title: string;
  description: string;
  stackUsed: string;
  src: string;
};
type ModalProps = {
  modal: ModalState;
  projects: ProjectItem[];
};

const animations = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4 },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4 },
  },
};

function Modal({ modal, projects }: ModalProps) {
  const { active, index } = modal;
  const container = useRef(null);
  const lastIndex = useRef(0);
  const size = { w: 400, h: 300 };

  // Keep last visible index so we can animate out with the previous video still shown
  if (active) {
    lastIndex.current = index;
  }
  const currentIndex = useMemo(() => {
    return active ? index : lastIndex.current;
  }, [active, index]);

  useEffect(() => {
    if (!active) return;

    const moveContainerX = gsap.quickTo(container.current, "left", {
      duration: 0,
    });
    const moveContainerY = gsap.quickTo(container.current, "top", {
      duration: 0,
    });

    let ticking = false;
    let lastX = 0;
    let lastY = 0;

    const update = () => {
      ticking = false;
      moveContainerX(lastX);
      moveContainerY(lastY);
    };

    const onMove = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });
  }, [active]);

  return (
    <div
      ref={container}
      className="flex justify-center items-center fixed overflow-hidden pointer-events-none z-50"
      style={{ left: 0, top: 0, width: size.w, height: size.h }}
    >
      <motion.div
        className="flex justify-center items-center"
        variants={animations}
        initial="initial"
        animate={active ? "open" : "closed"}
      >
        {projects[currentIndex] ? (
          <video
            className="w-full h-full aspect-auto"
            key={currentIndex}
            src={projects[currentIndex].src}
            muted
            autoPlay
            preload="none"
            playsInline
            style={{ objectFit: "contain" }}
          />
        ) : null}
      </motion.div>
    </div>
  );
}

export default Modal;
