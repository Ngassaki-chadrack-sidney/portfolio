"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onTap?: () => void;
}

export default function MagneticButton({
  children,
  className,
  onTap,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 200 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distance = Math.sqrt(
      Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
    );

    const magneticRadius = rect.width * 0.8;

    if (distance < magneticRadius) {
      const deltaX = (e.clientX - centerX) * 0.5;
      const deltaY = (e.clientY - centerY) * 0.5;
      x.set(deltaX);
      y.set(deltaY);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.button
      ref={buttonRef}
      className={twMerge(
        "relative overflow-hidden rounded-full bg-gray-400 px-10 py-5 text-lg font-semibold text-white transition-colors duration-300",
        className
      )}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onTap={onTap}
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Calque de remplissage avec courbe */}
      <motion.div
        className="absolute inset-0 bg-blue-600"
        initial={{ clipPath: "circle(0% at 50% 50%)" }}
        animate={{
          clipPath: isHovered
            ? "circle(150% at 50% 50%)"
            : "circle(0% at 50% 50%)",
        }}
        transition={{
          duration: 0.5,
          ease: [0.34, 1.56, 0.64, 1],
        }}
      />

      {/* Contenu du bouton */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
