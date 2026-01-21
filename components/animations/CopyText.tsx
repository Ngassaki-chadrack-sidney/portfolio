"use client";

import React from "react";
import { motion } from "framer-motion";

interface CopyTextProps {
  children: React.ReactNode;
  animateOnScroll?: boolean;
  blockColor?: string;
  duration?: number;
  delay?: number;
  stagger?: number;
  className?: string;
}

const CopyText = ({
  children,
  animateOnScroll = true,
  blockColor = "#3b82f6",
  duration = 0.5, // Ajusté pour plus de nervosité avec Framer
  delay = 0,
  stagger = 0.1,
  className = "",
}: CopyTextProps) => {

  // On transforme les enfants en tableau pour pouvoir les animer un par un
  const items = React.Children.toArray(children);

  // Configuration de l'animation pour le bloc de couleur
  const blockVariants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: (i: number) => ({
      scaleX: [0, 1, 1, 0],
      originX: [0, 0, 1, 1],
      transition: {
        duration: duration * 2, // Le cycle complet (aller-retour)
        ease: "easeInOut",
        delay: delay + i * stagger,
      },
    }),
  };

  // Configuration de l'animation pour le texte
  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        // Le texte apparaît précisément quand le bloc est à scaleX: 1 (milieu de l'anim)
        delay: delay + i * stagger + duration,
        duration: 0.01,
      },
    }),
  };

  return (
    <div className={`relative ${className}`}>
      {items.map((item, i) => (
        <div key={i} className="relative overflow-hidden w-fit inline-block mb-1 align-bottom">
          {/* Le Texte */}
          <motion.div
            custom={i}
            initial="hidden"
            whileInView={animateOnScroll ? "visible" : undefined}
            animate={!animateOnScroll ? "visible" : undefined}
            viewport={{ once: true }}
            variants={textVariants}
          >
            {item}
          </motion.div>

          {/* Le Bloc de Révélation (Reveal Block) */}
          <motion.div
            custom={i}
            initial="hidden"
            whileInView={animateOnScroll ? "visible" : undefined}
            animate={!animateOnScroll ? "visible" : undefined}
            viewport={{ once: true }}
            variants={blockVariants}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: blockColor,
              zIndex: 20,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default CopyText;