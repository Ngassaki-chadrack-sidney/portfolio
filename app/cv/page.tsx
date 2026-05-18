"use client";

import { Download } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import MagneticButton from "@/components/ui/MagneticButton";

export default function CVPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen px-[clamp(1.5rem,5vw,6rem)]">
      <section className="py-[clamp(6rem,12vw,8rem)] max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="space-y-6">
            <span className="text-base font-bold uppercase tracking-[0.3em]">
              {t("cv.title")}
            </span>
            <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-bold tracking-tighter text-foreground leading-[0.9]">
              Curriculum <span className="text-accent italic">Vitae</span>
            </h1>
            <p className="text-xl max-w-xl font-medium leading-relaxed">
              {t("cv.description")}
            </p>
          </div>

          <a href="/ChadrackDevCV.pdf" download="NGASSAKI_Chadrack_CV.pdf">
            <MagneticButton
              variant="primary"
              className="px-10 py-5 flex items-center gap-4"
            >
              <Download size={18} />
              {t("cv.download")}
            </MagneticButton>
          </a>
        </div>
      </section>

      <section className="pb-[clamp(6rem,12vw,14rem)] max-w-full">
        <div className="aspect-[1/1.414] w-full mx-auto relative">
          <iframe
            src="/ChadrackDevCV.pdf"
            className="w-full h-full border-none relative z-10"
            title="CV Preview"
          />
        </div>
      </section>
    </main>
  );
}
