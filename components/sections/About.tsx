"use client";

import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="py-[clamp(6rem,12vw,14rem)] px-[clamp(1.5rem,5vw,6rem)] bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-surface/50 -z-10" />

      <div className="max-w-7xl mx-auto">
        <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-bold tracking-tight text-foreground">
          {t("about.title")}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-7 space-y-12">
            <div className="about-text-content space-y-6">
              <p className="text-2xl md:text-3xl font-bold leading-tight">
                {t("about.skills_intro")}
              </p>
              <p className="text-lg md:text-xl leading-relaxed font-medium">
                {t("about.text")}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative w-full aspect-4/5 max-w-md mx-auto overflow-hidden rounded-3xl">
              <Image
                src="/ChadrackDev.png"
                alt="NGASSAKI Chadrack Sidney"
                fill
                className="object-contain transition-transform duration-700"
                priority
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
