"use client";

import { useEffect, useRef, useState, useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/hooks/useTranslation";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageContext } from "@/context/LanguageContext";
import { TransitionLink } from "@/components/gsap/TransitionLink";
import { cn } from "@/lib/utils";
import gsap from "gsap";

export default function Navigation() {
  const { t, language } = useTranslation();
  const { setLanguage } = useContext(LanguageContext)!;
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    
    // Initial animation with safe defaults
    gsap.fromTo(navRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "expo.out", delay: 0.5 }
    );

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";

  const links = [
    { href: isHome ? "#about" : "/#about", label: t("navbar.about") },
    { href: isHome ? "#services" : "/#services", label: "Services" },
    { href: isHome ? "#projects" : "/#projects", label: t("navbar.projects") },
    { href: isHome ? "#experience" : "/#experience", label: "Experience" },
    { href: isHome ? "#stack" : "/#stack", label: "Stack" },
    { href: isHome ? "#contact" : "/#contact", label: t("navbar.contact") },
  ];

  return (
    <header
      ref={navRef}
      className={cn(
        "fixed top-0 left-0 w-full z-[100] flex justify-center py-4 md:py-6 transition-all duration-500",
        scrolled ? "translate-y-0" : "translate-y-2"
      )}
    >
      <nav className={cn(
        "flex items-center gap-3 md:gap-6 px-4 md:px-8 py-3 rounded-full border",
        scrolled 
          ? "bg-background border-border" 
          : "bg-background/80 backdrop-blur-md border-accent/20"
      )}>
        <TransitionLink href="/" className="text-lg font-black tracking-tighter uppercase text-accent hover:text-foreground transition-colors mr-2">
          NC
        </TransitionLink>

        <div className="flex items-center gap-1 border-l border-border/50 pl-3 md:pl-6 overflow-x-auto no-scrollbar max-w-[40vw] sm:max-w-none">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-2 md:px-3 py-2 text-[10px] uppercase tracking-[0.2em] font-bold text-khaki-950 dark:text-khaki-50 hover:text-accent transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
          <TransitionLink
            href="/cv"
            className="px-2 md:px-3 py-2 text-[10px] uppercase tracking-[0.2em] font-black text-accent hover:text-foreground transition-colors whitespace-nowrap"
          >
            CV
          </TransitionLink>
        </div>

        <div className="flex items-center gap-2 md:gap-3 border-l border-border/50 pl-3 md:pl-6">
          <button
            onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
            className="w-9 h-9 flex items-center justify-center text-[10px] font-black text-accent border border-accent/20 hover:bg-accent hover:text-background rounded-full transition-all duration-300 shadow-sm"
            aria-label="Toggle language"
          >
            {language === "fr" ? "FR" : "EN"}
          </button>
          <div className="w-9 h-9 flex items-center justify-center border border-accent/20 rounded-full hover:border-accent transition-colors shadow-sm">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
