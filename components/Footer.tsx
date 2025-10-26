"use client";

import React, { useEffect, useRef } from "react";
import { Magnetic } from "./motion-primitives/magnetic";
import { socialMediaAccout } from "@/data/programmingLanguage";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | HTMLDivElement)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    // Animation des éléments du footer
    gsap.fromTo(
      [titleRef.current, textRef.current],
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      }
    );

    gsap.fromTo(
      linksRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      }
    );

    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-purple-950/20 pointer-events-none" />

      <div className="relative container mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div className="space-y-8">
            <div>
              <h2
                ref={titleRef}
                className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
              >
                Construisons
                <br />
                ensemble.
              </h2>
              <p
                ref={textRef}
                className="text-lg text-white leading-relaxed max-w-md"
              >
                Développeur passionné par la création d&apos;expériences digitales
                exceptionnelles. Toujours en quête de nouveaux défis et
                d&apos;innovations.
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-white">Disponible pour des projets</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                Retrouvez-moi sur
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialMediaAccout.map((social, index) => (
                  <Magnetic key={social.name} intensity={0.3} range={60}>
                    <a
                      ref={(el) => {
                        if (el) linksRef.current[index] = el;
                      }}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 transition-all duration-300 border rounded-full border-gray-800 hover:border-gray-700"
                    >
                      <span className="text-gray-300 group-hover:text-blue-500 transition-colors">
                        {social.name}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white group-hover:text-blue-500 group-hover:translate-x-1 transition-all"
                      >
                        <path d="M7 7h10v10M7 17L17 7" />
                      </svg>
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-sm font-semibold text-white uppercase border-b-2 border-b-slate-600 tracking-wider mb-6">
                Navigation
              </h3>
              <nav className="grid grid-cols-2 gap-4">
                {[
                  { label: "Accueil", href: "#home" },
                  { label: "Stack", href: "#stack" },
                  { label: "Projets", href: "#projects" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-white hover:text-primary transition-colors text-lg font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex justify-start lg:justify-end">
              <Link href="#contact">
                <Magnetic intensity={0.5} range={80}>
                  <div
                    ref={ctaRef}
                    className="group relative px-8 py-8 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-xl shadow-blue-900/50 hover:shadow-2xl hover:shadow-blue-900/70 cursor-pointer"
                  >
                    <span className="text-xl font-bold mr-3">Me contacter</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </Magnetic>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white to-transparent mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {currentYear} • Conçu et développé avec passion </p>
          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="text-white hover:text-blue-500 transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-blue-500 transition-colors"
            >
              Confidentialité
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
    </footer>
  );
}

export default Footer;
