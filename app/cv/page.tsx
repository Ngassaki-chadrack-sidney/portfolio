import type { Metadata } from "next";
import { getExperiencesSorted } from "@/data/experiences";
import ExperienceCard from "@/components/section/ExperienceCard";
import { TextAnimation } from "@/components/animations/TextAnimation";
import { CascadeAnimation } from "@/components/animations/CascadeAnimation";
import Footer from "@/components/section/footer";
import { NavigationCv } from "@/components/section/menuBarCv";

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
      <NavigationCv />
      <section className="w-full py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <TextAnimation
            variant="slideUp"
            duration={0.4}
            className="flex items-center gap-3 mb-4"
          >
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

      <section className="w-full py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <TextAnimation
            variant="slideUp"
            duration={0.4}
            className="flex items-center gap-3 mb-8"
          >
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

          <div className="flex gap-6">
            <TextAnimation
              variant="slideUp"
              duration={0.4}
              delay={0.2}
              className="flex flex-col justify-center gap-4"
            >
              <a
                href="/cv.pdf"
                download="NGASSAKI_Chadrack_CV.pdf"
                className="inline-flex items-center justify-center gap-2 bg-white text-black font-bold py-4 px-8 rounded-lg text-lg"
              >
                Télécharger mon CV (PDF)
              </a>
            </TextAnimation>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
