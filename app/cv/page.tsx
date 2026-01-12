"use client";

import { getExperiencesSorted } from "@/data/experiences";
import { TextAnimation } from "@/components/animations/TextAnimation";
import Footer from "@/components/section/footer";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import FloatingNavbar from "@/components/floatingNavBar";
import Experiences from "@/components/section/experiences";

export default function CVPage() {
  const sortedExperiences = getExperiencesSorted();
  const navItems = [
    { id: "home", label: "Principal", href: "/" },
    { id: "stack", label: "Stack", href: "/" },
    { id: "projet", label: "Projet", href: "/" },
    { id: "contact", label: "Contact", href: "/" },
    { id: "cv", label: "CV", href: "cv" },
  ]

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <FloatingNavbar
        items={navItems}
        hoverColor="text-blue-500"
      />

      <section className="w-full pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <TextAnimation variant="slideUp" duration={0.6}>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
                CV & <span className="text-blue-600">Parcours</span>
              </h1>
            </TextAnimation>
            <TextAnimation variant="slideUp" duration={0.6} delay={0.1}>
              <p className=" text-lg max-w-xl leading-relaxed">
                Expertise en développement Full-Stack et Mobile. Consultez mes
                expériences ou téléchargez la version PDF pour vos archives.
              </p>
            </TextAnimation>
          </div>
          {/* 
          {/* BOUTON DE TÉLÉCHARGEMENT AMÉLIORÉ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-1000"></div>
            <a
              href="/cv.pdf"
              download="NGASSAKI_Chadrack_CV.pdf" // L'attribut download ne s'active qu'au clic
              className="relative flex items-center gap-3 bg-white text-black font-extrabold py-5 px-10 rounded-2xl shadow-2xl transition-transform active:scale-95"
            >
              <Download size={20} />
              TÉLÉCHARGER LE PDF
            </a>
          </motion.div>
        </div>
      </section>

      {/* PRÉVISUALISATION (Optionnel mais recommandé) */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <div className="relative aspect-[1/1.414] w-full max-w-3xl mx-auto bg-slate-900 rounded-2xl border border-white/10 shadow-2xl overflow-hidden group">
            <iframe
              src="/cv.pdf#toolbar=0"
              className="w-full h-full border-none"
              title="CV Preview"
            />
          </div>
        </div>
      </section>

      <Experiences />

      <Footer />
    </main>
  );
}
