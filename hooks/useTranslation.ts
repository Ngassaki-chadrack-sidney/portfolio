"use client";
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import fr from "@/locales/fr.json";
import en from "@/locales/en.json";

type Translations = typeof fr;

const translations: Record<"fr" | "en", Translations> = { fr, en };

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useTranslation must be used within LanguageProvider");
  
  const { language, setLanguage } = context;
  
  const t = (key: string): string => {
    const keys = key.split(".");
    let value: unknown = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }
    
    return typeof value === "string" ? value : key;
  };

  return { t, language, setLanguage };
};