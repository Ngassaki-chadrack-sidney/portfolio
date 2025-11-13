import type { Metadata } from "next";
import { getExperiencesSorted } from "@/data/experiences";
import ExperienceCard from "@/components/section/ExperienceCard";
import { TextAnimation } from "@/components/animations/TextAnimation";
import { CascadeAnimation } from "@/components/animations/CascadeAnimation";
import { Briefcase, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "CV & Expérience | NGASSAKI Chadrack",
  description:
    "Découvrez mon parcours professionnel, mes expériences et mes compétences en développement full-stack.",
  keywords: [
    "CV",
    "expérience",
    "parcours professionnel",
    "développeur",
    "full-stack",
  ],
  openGraph: {
    title: "CV & Expérience | NGASSAKI Chadrack",
    description:
      "Découvrez mon parcours professionnel, mes expériences et mes compétences en développement full-stack.",
    type: "website",
  },
};

export default function CVPage() {
  const sortedExperiences = getExperiencesSorted();

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="w-full py-20 px-4 md:px-8 lg:px-16 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <TextAnimation
            variant="slideUp"
            duration={0.4}
            className="flex items-center gap-3 mb-4"
          >
            <Briefcase className="text-blue-500" size={32} />
            <h1 className="text-5xl md:text-6xl font-bold">CV & Expérience</h1>
          </TextAnimation>

          <TextAnimation
            variant="slideUp"
            duration={0.4}
            delay={0.1}
            className="text-gray-400 text-lg max-w-2xl"
          >
            Découvrez mon parcours professionnel, mes expériences et les
            technologies que j'ai maîtrisées au fil des années.
          </TextAnimation>
        </div>
      </section>

      <section className="w-full py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <TextAnimation
            variant="slideUp"
            duration={0.4}
            className="text-3xl font-bold text-white mb-12"
          >
            Parcours Professionnel
          </TextAnimation>

          <CascadeAnimation
            staggerDelay={0.15}
            itemDuration={0.5}
            startDelay={0.1}
            containerClassName="space-y-6"
          >
            {sortedExperiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </CascadeAnimation>
        </div>
      </section>

      <section className="w-full py-20 px-4 md:px-8 lg:px-16 border-t border-gray-800 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <TextAnimation
            variant="slideUp"
            duration={0.4}
            className="flex items-center gap-3 mb-8"
          >
            <FileText className="text-green-500" size={32} />
            <h2 className="text-3xl font-bold text-white">
              Télécharger mon CV
            </h2>
          </TextAnimation>

          <TextAnimation
            variant="slideUp"
            duration={0.4}
            delay={0.1}
            className="text-gray-400 text-lg mb-8 max-w-2xl"
          >
            Vous pouvez télécharger mon CV complet en PDF pour une consultation
            détaillée de mon parcours et mes compétences.
          </TextAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* PDF Viewer */}
            <TextAnimation
              variant="slideUp"
              duration={0.4}
              delay={0.15}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center min-h-[400px]"
            >
              <FileText className="text-gray-400 mb-4" size={48} />
              <p className="text-gray-400 text-center mb-4">
                Aperçu du CV en PDF
              </p>
              <p className="text-sm text-gray-500 text-center">
                Le fichier PDF s'affichera ici
              </p>
            </TextAnimation>

            <TextAnimation
              variant="slideUp"
              duration={0.4}
              delay={0.2}
              className="flex flex-col justify-center gap-4"
            >
              <a
                href="/cv.pdf"
                download="NGASSAKI_Chadrack_CV.pdf"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-lg"
              >
                <FileText size={24} />
                Télécharger le CV (PDF)
              </a>

              <div className="text-gray-400 text-sm space-y-2">
                <p>
                  <strong>Format:</strong> PDF (A4)
                </p>
                <p>
                  <strong>Taille:</strong> ~500 KB
                </p>
                <p>
                  <strong>Langue:</strong> Français
                </p>
              </div>
            </TextAnimation>
          </div>
        </div>
      </section>

      <section className="w-full py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <TextAnimation
            variant="slideUp"
            duration={0.4}
            className="text-3xl font-bold text-white mb-12"
          >
            En Chiffres
          </TextAnimation>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                label: "Années d'expérience",
                value: "5+",
                delay: 0.1,
              },
              {
                label: "Projets réalisés",
                value: "20+",
                delay: 0.15,
              },
              {
                label: "Technologies maîtrisées",
                value: "25+",
                delay: 0.2,
              },
              {
                label: "Clients satisfaits",
                value: "15+",
                delay: 0.25,
              },
            ].map((stat) => (
              <TextAnimation
                key={stat.label}
                variant="slideUp"
                duration={0.4}
                delay={stat.delay}
                className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 text-center hover:border-gray-600 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-blue-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </TextAnimation>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
