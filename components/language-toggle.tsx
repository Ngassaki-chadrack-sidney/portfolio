"use client";

import * as React from "react";
import { useTranslation } from "@/hooks/useTranslation";

export function LanguageToggle() {
  const { language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-2 rounded-full bg-secondary border border-border hover:border-primary/50 transition-all duration-300 text-xs font-bold uppercase tracking-wider"
      aria-label="Toggle language"
    >
      {language === "fr" ? "FR" : "EN"}
    </button>
  );
}