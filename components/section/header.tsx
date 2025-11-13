"use client";

import Image from "next/image";
import photo from "../../public/profile.jpeg";
import { motion } from "framer-motion";

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
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
            NGASSAKI Chadrack
          </h1>
          <div className="space-y-3 text-gray-300 text-xs md:text-sm lg:text-base">
            <p>
              Je transforme les idées en expériences digitales fluides — du web
              au mobile.
            </p>
            <p>
              Développeur Full-Stack & Mobile, je pousse les limites du code
              pour créer des solutions performantes, scalables et innovantes
            </p>
            <p>
              Je ne me contente pas de coder — j'explore, j'expérimente, et je
              repousse mes limites. Que ce soit en optimisant une app Next.js,
              en bâtissant une API Node.js ultra-rapide, ou en créant une
              expérience mobile immersive avec Flutter, mon objectif est simple
              : livrer des produits qui marquent
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 900 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.3 }}
          className="w-full lg:w-1/2 flex justify-center items-center relative min-h-[250px] md:min-h-[350px] lg:min-h-[500px]"
        >
          <div className="relative w-full max-w-xs md:max-w-sm">
            <Image
              src={photo}
              // width={400}
              // height={400}
              alt="Photo de NGASSAKI Chadrack"
              className="rounded-full relative z-10 w-full h-auto object-cover"
              priority
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Header;
