"use client";

import Image from "next/image";
import photo from "../../public/profile.jpeg";
import { motion } from "framer-motion";
import CopyText from "../animations/CopyText";
import {
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTypescript,
  SiFlutter,
} from "react-icons/si";

function Header() {
  const techStack = [
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiReact />, name: "React Native" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <SiFlutter />, name: "Flutter" },
  ];

  return (
    <div
      id="header"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >

      {/* Container principal plus large avec px-8 à lg:px-20 */}
      <section className="container mx-auto px-8 md:px-12 lg:px-20 max-w-350 flex flex-col lg:flex-row justify-between items-center gap-12 z-10">
        {/* Zone de texte élargie : lg:w-3/5 et max-w-3xl */}
        <div className="flex flex-col space-y-10 w-full lg:w-3/5 text-left">
          <div className="space-y-6">
            <CopyText delay={0.2} blockColor="#3b82f6">
              <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">
                Développeur web & Mobile
              </span>
            </CopyText>
            {/* Taille de texte réduite et mieux proportionnée */}
            <CopyText delay={0.4} blockColor="#2563eb">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight customFont">
                NGASSAKI <span className="text-blue-600">Chadrack</span>
              </h1>
            </CopyText>

            {/* max-w-3xl pour que le texte s'étale plus horizontalement */}
            <CopyText delay={0.6} blockColor="#3b82f6">
              <div className="max-w-3xl text-base md:text-lg leading-relaxed">
                <p>
                  Je conçois des solutions digitales qui allient performance
                  technique et esthétique moderne. En tant que développeur
                  passionné par l&apos;architecture logicielle, je me spécialise
                  dans la création d&apos;applications robustes, du backend
                  sécurisé aux interfaces mobiles intuitives. Chaque projet est
                  une opportunité de repousser les limites du possible, en
                  transformant des besoins métiers complexes en expériences
                  utilisateur fluides, scalables et durables. Mon approche
                  repose sur une veille constante et une exigence de qualité
                  sans compromis.
                </p>
              </div>
            </CopyText>
          </div>

          {/* Icons Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap items-center gap-5 pt-4"
          >
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="group relative flex items-center justify-center p-3.5 rounded-xl bg-slate-900/40 border border-white/5 hover:border-blue-500/50 transition-all duration-300"
                title={tech.name}
              >
                <div className="text-2xl  group-hover:text-blue-500 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Partie Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full lg:w-2/5 flex justify-center lg:justify-end"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-600/10 rounded-3xl blur-2xl"></div>

            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-95 lg:h-95 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src={photo}
                alt="NGASSAKI Chadrack"
                className="w-full h-full object-cover hover:grayscale transition-all duration-700"
                width={500}
                height={500}
                quality={100}
                priority
              />
            </div>

            {/* Badge flottant plus discret */}
            <motion.div
              animate={{ y: [0, -8, 0], x: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 bg-white text-black p-3 px-5 rounded-full shadow-2xl z-20"
            >
              <div className="flex items-center gap-2">
                {/* <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span> */}
                <p className="text-black font-semibold text-xs uppercase tracking-wider">
                  Disponible
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Subtle Background Shape */}
      <div className="absolute -bottom-20 -left-20 w-125 h-125 bg-blue-600/5 rounded-full blur-[120px] -z-10"></div>
    </div>
  );
}

export default Header;
