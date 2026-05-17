"use client";

import { Download } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import MagneticButton from "@/components/ui/MagneticButton";

export default function CVPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen pt-32 px-[clamp(1.5rem,5vw,6rem)] bg-background">
      <section className="py-[clamp(6rem,12vw,8rem)] max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
              {t("cv.title")}
            </span>
            <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-bold tracking-tighter text-foreground leading-[0.9]">
              Curriculum <span className="text-accent italic">Vitae</span>
            </h1>
            <p className="text-xl max-w-xl text-khaki-700 dark:text-khaki-300 font-medium leading-relaxed">
              {t("cv.description")}
            </p>
          </div>
          
          <a
            href="/cv.pdf"
            download="NGASSAKI_Chadrack_CV.pdf"
          >
            <MagneticButton variant="primary" className="px-10 py-5 flex items-center gap-4">
              <Download size={18} />
              {t("cv.download")}
            </MagneticButton>
          </a>
        </div>
      </section>

      <section className="pb-[clamp(6rem,12vw,14rem)] max-w-7xl mx-auto">
        <div className="aspect-[1/1.414] w-full max-w-5xl mx-auto bg-surface rounded-3xl overflow-hidden border border-border relative">
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin" />
          </div>
          <iframe
            src="/cv.pdf#toolbar=0"
            className="w-full h-full border-none relative z-10"
            title="CV Preview"
          />
        </div>
      </section>
    </main>
  );
}
