"use client";

import { TextAnimation } from "@/components/animations/TextAnimation";
import { CascadeAnimation } from "@/components/animations/CascadeAnimation";
import { StaggeredText } from "@/components/animations/StaggeredText";

export default function TestAnimationsPage() {
  const items = [
    { id: 1, title: "React", description: "UI Library" },
    { id: 2, title: "Next.js", description: "Framework" },
    { id: 3, title: "TypeScript", description: "Language" },
    { id: 4, title: "Tailwind", description: "CSS Framework" },
  ];

  const textItems = ["Premier élément", "Deuxième élément", "Troisième élément"];

  return (
    <main className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* TextAnimation Tests */}
        <section>
          <TextAnimation
            variant="slideUp"
            duration={0.4}
            className="text-4xl font-bold mb-8"
          >
            Tests d'animations
          </TextAnimation>

          <div className="space-y-4 mb-12">
            <TextAnimation
              variant="slideUp"
              duration={0.4}
              delay={0.1}
              className="text-gray-400"
            >
              Ceci est un test de l'animation slideUp
            </TextAnimation>
            <TextAnimation
              variant="fadeIn"
              duration={0.4}
              delay={0.2}
              className="text-gray-400"
            >
              Ceci est un test de l'animation fadeIn
            </TextAnimation>
            <TextAnimation
              variant="slideLeft"
              duration={0.4}
              delay={0.3}
              className="text-gray-400"
            >
              Ceci est un test de l'animation slideLeft
            </TextAnimation>
          </div>
        </section>

        {/* CascadeAnimation Tests */}
        <section>
          <TextAnimation
            variant="slideUp"
            duration={0.4}
            className="text-3xl font-bold mb-8"
          >
            Cascade d'animations
          </TextAnimation>

          <CascadeAnimation
            staggerDelay={0.12}
            itemDuration={0.5}
            startDelay={0.1}
            containerClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors"
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </CascadeAnimation>
        </section>

        {/* StaggeredText Tests */}
        <section>
          <TextAnimation
            variant="slideUp"
            duration={0.4}
            className="text-3xl font-bold mb-8"
          >
            Texte en cascade
          </TextAnimation>

          <StaggeredText
            staggerDelay={0.15}
            itemDuration={0.4}
            containerClassName="space-y-4"
            className="text-lg text-gray-300"
          >
            {textItems}
          </StaggeredText>
        </section>

        {/* Variants showcase */}
        <section>
          <TextAnimation
            variant="slideUp"
            duration={0.4}
            className="text-3xl font-bold mb-8"
          >
            Variantes d'animations
          </TextAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["fadeIn", "slideUp", "slideDown", "slideLeft", "slideRight"].map(
              (variant, idx) => (
                <TextAnimation
                  key={variant}
                  variant={variant as any}
                  duration={0.4}
                  delay={idx * 0.1}
                  className="bg-gray-900 border border-gray-700 rounded-lg p-6 text-center"
                >
                  <div className="text-lg font-semibold mb-2">{variant}</div>
                  <div className="text-gray-400 text-sm">
                    Animation variant test
                  </div>
                </TextAnimation>
              )
            )}
          </div>
        </section>

        {/* Info */}
        <section className="bg-gray-900/50 border border-gray-700 rounded-lg p-8">
          <TextAnimation
            variant="slideUp"
            duration={0.4}
            className="text-2xl font-bold mb-4"
          >
            ℹ️ À propos de cette page
          </TextAnimation>
          <TextAnimation
            variant="slideUp"
            duration={0.4}
            delay={0.1}
            className="text-gray-400 space-y-2"
          >
            <p>
              Cette page de test permet de vérifier que tous les composants
              d'animation fonctionnent correctement.
            </p>
            <p>
              Les animations utilisent Framer Motion et respectent les
              contraintes de performance et d'accessibilité.
            </p>
            <p>
              Vous pouvez supprimer cette page en production en supprimant le
              dossier app/test-animations/.
            </p>
          </TextAnimation>
        </section>
      </div>
    </main>
  );
}
