"use client";
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import fr from "@/locales/fr.json";
import en from "@/locales/en.json";

const translations: any = { fr, en };

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useTranslation must be used within LanguageProvider");
  
  const { language, setLanguage } = context;
  
  const t = (path: string) => {
    return path.split('.').reduce((obj, key) => obj?.[key], translations[language]) || path;
  };

  return { t, language, setLanguage };
};