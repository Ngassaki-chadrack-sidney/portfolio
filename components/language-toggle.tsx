"use client";

import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";

export function LanguageToggle() {
  const context = useContext(LanguageContext);
  
  if (!context) {
    return null;
  }

  const { language, setLanguage } = context;

  const toggleLanguage = () => {
    const newLang = language === "fr" ? "en" : "fr";
    setLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1.5 rounded-full bg-transparent border border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-xs font-bold uppercase tracking-wider"
      aria-label="Toggle language"
    >
      {language === "fr" ? "FR" : "EN"}
    </button>
  );
}