"use client";

import { useEffect, useRef } from "react";
import { useTranslation } from "@/hooks/useTranslation";

const services = [
  { key: "web" as const },
  { key: "mobile" as const },
  { key: "ecommerce" as const },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    // GSAP animations removed for performance optimization.
  }, [t]);

  return (
    <section ref={sectionRef} id="services" className="py-[clamp(6rem,12vw,14rem)] px-[clamp(1.5rem,5vw,6rem)] bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-bold tracking-tight text-foreground leading-[0.9]">
            {t("services.title")}
          </h2>
          <p className="font-medium text-lg max-w-xs text-right">
            {t("services.intro")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border overflow-hidden rounded-3xl border border-border">
          {services.map((service, i) => (
            <div
              key={service.key}
              className="service-card group bg-background p-12 md:p-16 hover:bg-surface transition-colors duration-500 relative overflow-hidden"
            >
              {/* Hover effect background */}
              <div className="absolute top-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                  {"0" + (i + 1)}
                </span>
                
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mt-10 mb-6 text-foreground group-hover:text-accent transition-colors duration-300">
                  {t(`services.${service.key}.title`)}
                </h3>
                
                <p className="text-lg text-khaki-700 dark:text-khaki-300 leading-relaxed font-medium">
                  {t(`services.${service.key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
