"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggeredTextProps {
  children: ReactNode;
  staggerDelay?: number;
  itemDuration?: number;
  className?: string;
  containerClassName?: string;
  variant?: "fadeIn" | "slideUp" | "slideDown" | "slideLeft" | "slideRight";
}

const variants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slideUp: {
    initial: { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0 },
  },
  slideDown: {
    initial: { opacity: 0, y: -25 },
    animate: { opacity: 1, y: 0 },
  },
  slideLeft: {
    initial: { opacity: 0, x: 25 },
    animate: { opacity: 1, x: 0 },
  },
  slideRight: {
    initial: { opacity: 0, x: -25 },
    animate: { opacity: 1, x: 0 },
  },
};

/**
 * Composant pour animer plusieurs éléments en cascade
 * @param children - Éléments à animer (doivent être des enfants directs)
 * @param staggerDelay - Délai entre chaque élément (en secondes)
 * @param itemDuration - Durée de l'animation pour chaque élément (en secondes)
 * @param className - Classes CSS pour chaque enfant
 * @param containerClassName - Classes CSS pour le conteneur
 * @param variant - Type d'animation
 */
export const StaggeredText = ({
  children,
  staggerDelay = 0.12,
  itemDuration = 0.4,
  className = "",
  containerClassName = "",
  variant = "slideUp",
}: StaggeredTextProps) => {
  const selectedVariant = variants[variant];
  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <div className={containerClassName}>
      {childrenArray.map((child, index) => (
        <motion.div
          key={index}
          initial={selectedVariant.initial}
          whileInView={selectedVariant.animate}
          transition={{
            duration: itemDuration,
            delay: index * staggerDelay,
            ease: "easeOut",
          }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className={className}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};

export default StaggeredText;
