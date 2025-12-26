"use client";

import Image from "next/image";
import photo from "../../public/profile.jpeg";
import { motion } from "framer-motion";
import { Spotlight } from "../ui/spotlight";
import CopyText from "../animations/CopyText";

function Header() {
  return (
    <div id="header" className="w-full mb-30 flex justify-center">
      <section className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-12 py-8 lg:py-0 overflow-x-hidden">
        <div className="space-y-4 w-full lg:w-1/2">
          <Spotlight className="absolute top-0 right-0" />
          <CopyText delay={0.4}>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-blue-500 customFont">
              NGASSAKI Chadrack
            </h1>
          </CopyText>
          <CopyText delay={0.5}>
            <p>
              Je transforme les idées en expériences digitales fluides du web au
              mobile tout en repoussant mes limites du code pour créer des
              solutions performantes et scalables. j&apos;explore,
              j&apos;expérimente, et je repousse mes limites.
            </p>
          </CopyText>
          {/* <CopyText delay={0.6}>
            <p>
              Je ne me contente pas de coder — j&apos;explore,
              j&apos;expérimente, et je repousse mes limites. Que ce soit en
              optimisant une app Next.js, en bâtissant une API Node.js
              ultra-rapide, ou en créant une expérience mobile immersive avec
              Flutter, mon objectif est simple : livrer des produits qui
              marquent
            </p>
          </CopyText> */}
        </div>

        <motion.div
          initial={{ x: 900 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center items-center relative min-h-82.5 md:min-h-87.5 lg:min-h-125"
        >
          <div className="relative w-full max-w-xs md:max-w-sm aspect-square rounded-full overflow-hidden">
            <Image
              src={photo}
              alt="Photo de NGASSAKI Chadrack"
              className="rounded relative z-10 w-full h-full object-cover"
              width={500}
              height={500}
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
