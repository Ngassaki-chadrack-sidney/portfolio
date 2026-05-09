"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";

interface NavItem {
  id: string;
  label: string;
  href: string;
}

interface NavbarProps {
  items: NavItem[];
}

export default function Navbar({ items }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 w-full">
        <div className="bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl">
          <div className="flex items-center justify-between px-6 py-3">
            <Link
              href="#hero"
              className="text-sm font-bold tracking-tight text-foreground"
            >
              NGASSAKI Chadrack
            </Link>

            <div className="flex items-center gap-3">
              <LanguageToggle />
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(true)}
                className="flex flex-col justify-center items-center w-10 h-10 rounded-full bg-white/10"
                aria-label="Open menu"
              >
                <span className="block w-5 h-0.5 bg-foreground mb-1"></span>
                <span className="block w-5 h-0.5 bg-foreground mb-1"></span>
                <span className="block w-5 h-0.5 bg-foreground"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[100] bg-background/95 backdrop-blur-2xl flex items-center justify-center transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleLinkClick}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <ul className="flex flex-col items-center gap-8">
          {items.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                onClick={handleLinkClick}
                className={`text-3xl md:text-4xl font-bold tracking-tight ${
                  activeSection === item.id ? "text-primary" : "text-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}