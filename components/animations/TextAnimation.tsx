"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TextAnimationProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  variant?: "fadeIn" | "slideUp" | "slideDown" | "slideLeft" | "slideRight";
}

const variants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  },
  slideLeft: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
  },
  slideRight: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  },
};

/**
 * Composant pour animer du texte avec une animation fluide
 * @param children - Contenu à animer
 * @param delay - Délai avant l'animation (en secondes)
 * @param duration - Durée de l'animation (en secondes)
 * @param className - Classes CSS additionnelles
 * @param variant - Type d'animation (fadeIn, slideUp, slideDown, slideLeft, slideRight)
 */
export const TextAnimation = ({
  children,
  delay = 0,
  duration = 0.4,
  className = "",
  variant = "slideUp",
}: TextAnimationProps) => {
  const selectedVariant = variants[variant];

  return (
    <motion.div
      initial={selectedVariant.initial}
      whileInView={selectedVariant.animate}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default TextAnimation;
