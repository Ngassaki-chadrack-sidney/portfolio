"use client";

import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";

export function LanguageToggle() {
  const context = useContext(LanguageContext);

  if (!context) {
    return null;
  }

  const { language, setLanguage } = context;

  return (
    <button
      onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
      className="text-sm uppercase tracking-[0.08em] font-medium text-foreground/60 hover:text-foreground transition-colors duration-300"
      aria-label="Toggle language"
    >
      {language === "fr" ? "FR" : "EN"}
    </button>
  );
}
