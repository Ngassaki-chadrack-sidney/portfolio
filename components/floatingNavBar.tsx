"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageToggle } from "@/components/language-toggle";
import { useTranslation } from "@/hooks/useTranslation";

const FloatingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  
  const links = [
    { name: t("navbar.home"), href: "/" },
    { name: t("navbar.experience"), href: "#experience" },
    { name: t("navbar.stack"), href: "#stack" },
    { name: t("navbar.projects"), href: "#projets" },
    { name: t("navbar.cv"), href: "/cv" },
  ];

  return (
    <>
      {/* Header Fixe */}
      <nav className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center p-6 md:p-10 mix-blend-difference">
        {/* Ton prénom comme logo, blanc, majuscule */}
        <div className="text-xl font-bold tracking-tight text-white uppercase">
          Chadrack Dev
        </div>

        {/* Bouton Menu / X avec animation de lignes */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center gap-2 outline-none"
        >
          <div className="flex flex-col gap-1.5 items-end">
            <span
              className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? "w-8 rotate-45 translate-y-2" : "w-8"}`}
            />
            <span
              className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? "opacity-0" : "w-5"}`}
            />
            <span
              className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? "w-8 -rotate-45 -translate-y-2" : "w-8"}`}
            />
          </div>
        </button>
      </nav>

      {/* Menu Plein Écran */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 95% 5%)" }}
            animate={{ clipPath: "circle(150% at 50% 50%)" }}
            exit={{ clipPath: "circle(0% at 95% 5%)" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[90] bg-white flex flex-col justify-center items-end px-8 md:pr-20 md:pl-0"
          >
            {/* Conteneur des liens aligné à droite */}
            <div className="flex flex-col gap-2 md:gap-4 items-end w-full px-4">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="group relative block"
                >
                  <div className="relative h-[3.5rem] w-fit overflow-hidden flex items-center justify-end">
                    {/* Texte Noir (État initial) */}
                    <motion.span
                      initial={{ y: "120%" }}
                      animate={{ y: 0 }}
                      transition={{
                        delay: 0.1 + index * 0.02,
                        duration: 0.8,
                        ease: [0.33, 1, 0.68, 1],
                      }}
                      className="block text-2xl md:text-4xl lg:text-5xl font-black uppercase leading-[1] text-black transition-transform duration-500 ease-in-out group-hover:-translate-y-[120%]"
                    >
                      {link.name}
                    </motion.span>

                    {/* Texte Bleu (Au survol) */}
                    {/* On utilise -translate-y-[-120%] pour le cacher en bas au départ */}
                    <span className="absolute block text-2xl md:text-4xl lg:text-5xl font-black uppercase leading-[1] text-blue-600 translate-y-[120%] transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                      {link.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Footer discret (en bas à gauche) */}
            <div className="absolute bottom-10 left-8 md:left-20 flex flex-col gap-2">
              {/* Nom - Ligne 1 */}
              <div className="overflow-hidden h-fit">
                <motion.h2
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.5, // Commence juste après l'animation des liens
                    duration: 0.8,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                  className="text-black text-lg md:text-xl font-bold uppercase tracking-tight"
                >
                  NGASSAKI Chadrack Sidney
                </motion.h2>
              </div>

              {/* Titre - Ligne 2 */}
              <div className="overflow-hidden h-fit">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.55,
                    duration: 0.8,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                  className="text-black/60 text-xs md:text-sm uppercase tracking-widest font-medium block"
                >
                  Développeur full stack (WEB & Mobile)
                </motion.span>
              </div>

              {/* Contact - Ligne 3 */}
              <div className="overflow-hidden h-fit">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.6,
                    duration: 0.8,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                  className="text-black font-semibold text-sm block"
                >
                  <a href="tel:+242064732923">Contact : +242 06 473 29 23</a>
                </motion.span>
              </div>

              {/* Language Toggle - Ligne 4 */}
              <div className="overflow-hidden h-fit pt-2">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.65,
                    duration: 0.8,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                >
                  <LanguageToggle />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingNavbar;
