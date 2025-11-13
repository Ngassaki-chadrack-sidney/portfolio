"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CascadeAnimationProps {
  children: ReactNode;
  staggerDelay?: number;
  itemDuration?: number;
  containerClassName?: string;
  itemClassName?: string;
  startDelay?: number;
}

/**
 * Composant pour animer des cartes/éléments en cascade
 * Utilise translateY et opacity pour un effet slide-up
 * @param children - Éléments à animer
 * @param staggerDelay - Délai entre chaque élément (100-150ms recommandé)
 * @param itemDuration - Durée totale de l'animation (max 500ms)
 * @param containerClassName - Classes CSS du conteneur
 * @param itemClassName - Classes CSS pour chaque élément
 * @param startDelay - Délai avant le début de l'animation
 */
export const CascadeAnimation = ({
  children,
  staggerDelay = 0.12,
  itemDuration = 0.5,
  containerClassName = "",
  itemClassName = "",
  startDelay = 0,
}: CascadeAnimationProps) => {
  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <div className={containerClassName}>
      {childrenArray.map((child, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: "30%",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: itemDuration,
            delay: startDelay + index * staggerDelay,
            ease: "easeOut",
          }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className={itemClassName}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};

export default CascadeAnimation;
