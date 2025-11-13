"use client";

import Image from "next/image";
import photo from "../../public/profile.jpeg";
import { motion } from "framer-motion";
import { TextAnimation } from "@/components/animations/TextAnimation";

function Header() {
  return (
    <div className="w-full flex justify-center">
      <section className="max-w-7xl flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-12 py-8 lg:py-0 overflow-x-hidden">
        <motion.div
          initial={{ x: -900 }}
          animate={{ x: 0 }}
          transition={{ ease: "backInOut", duration: 0.5 }}
          className="space-y-4 w-full lg:w-1/2"
        >
          <TextAnimation
            variant="slideUp"
            duration={0.4}
            className="text-2xl md:text-3xl lg:text-5xl font-bold bg-linear-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent"
          >
            NGASSAKI Chadrack
          </TextAnimation>
          <div className="space-y-3 text-gray-300 text-xs md:text-sm lg:text-base">
            <TextAnimation
              variant="slideUp"
              duration={0.4}
              delay={0.05}
            >
              Je transforme les idées en expériences digitales fluides — du web
              au mobile.
            </TextAnimation>
            <TextAnimation
              variant="slideUp"
              duration={0.4}
              delay={0.1}
            >
              Développeur Full-Stack & Mobile, je pousse les limites du code
              pour créer des solutions performantes, scalables et innovantes
            </TextAnimation>
            <TextAnimation
              variant="slideUp"
              duration={0.4}
              delay={0.15}
            >
              Je ne me contente pas de coder — j'explore, j'expérimente, et je
              repousse mes limites. Que ce soit en optimisant une app Next.js,
              en bâtissant une API Node.js ultra-rapide, ou en créant une
              expérience mobile immersive avec Flutter, mon objectif est simple
              : livrer des produits qui marquent
            </TextAnimation>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 900 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.3 }}
          className="w-full lg:w-1/2 flex justify-center items-center relative min-h-[250px] md:min-h-[350px] lg:min-h-[500px]"
        >
          <div className="relative w-full max-w-xs md:max-w-sm aspect-square">
            <div className="absolute inset-0 bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-20 blur-2xl" />
            <Image
              src={photo}
              alt="Photo de NGASSAKI Chadrack"
              className="rounded-full relative z-10 w-full h-full object-cover border-4 border-white/10 shadow-2xl"
              priority
              quality={100}
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Header;
