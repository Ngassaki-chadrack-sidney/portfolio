"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Github, Linkedin, Mail, ArrowUpRight, Twitter } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.from(".contact-reveal", {
          y: 100,
          opacity: 0,
          duration: 1.2,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
          },
        });
      }, section);
      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="relative min-h-screen flex flex-col justify-between pt-[clamp(6rem,12vw,14rem)] px-[clamp(1.5rem,5vw,6rem)] bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col justify-center">
        <div className="contact-reveal mb-8">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
            {t("contact.get_in_touch")}
          </span>
        </div>
        
        <h2 
          ref={titleRef}
          className="contact-reveal text-[clamp(2.5rem,8vw,8rem)] font-bold tracking-tighter text-foreground leading-[0.85] mb-20"
        >
          {t("contact.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          <div className="contact-reveal space-y-12">
            <a 
              href="mailto:jrh3948@gmail.com" 
              className="group flex items-center gap-6"
            >
              <MagneticButton variant="outline" className="w-24 h-24 rounded-full border border-border flex items-center justify-center">
                <Mail className="w-10 h-10 group-hover:text-background transition-colors" />
              </MagneticButton>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-khaki-600 dark:text-khaki-400 mb-2">{t("contact.email_me")}</p>
                <p className="text-2xl md:text-4xl font-bold text-foreground group-hover:text-accent transition-colors">jrh3948@gmail.com</p>
              </div>
            </a>

            <div className="flex flex-wrap gap-8 pt-8">
              <a href="https://github.com/Ngassaki-chadrack-sidney/" target="_blank" rel="noopener noreferrer">
                <MagneticButton variant="outline" className="px-10 py-5 flex items-center gap-4 text-base">
                  <Github className="w-5 h-5" />
                  GitHub
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </MagneticButton>
              </a>
              <a href="https://www.linkedin.com/in/chadrack-sidney-ngassaki-26253635b/" target="_blank" rel="noopener noreferrer">
                <MagneticButton variant="outline" className="px-10 py-5 flex items-center gap-4 text-base">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </MagneticButton>
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <MagneticButton variant="outline" className="px-10 py-5 flex items-center gap-4 text-base">
                  <Twitter className="w-5 h-5" />
                  Twitter
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </MagneticButton>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Integrated Footer */}
      <footer className="contact-reveal w-full max-w-7xl mx-auto py-12 border-t border-border mt-20 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-khaki-700 dark:text-khaki-300">
            &copy; {currentYear} NGASSAKI CHADRACK. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-khaki-700 dark:text-khaki-300">
              {t("footer.available")}
            </span>
          </div>
        </div>
        
        <div className="text-xs uppercase tracking-[0.2em] font-bold text-accent italic">
          {t("contact.designed_with")}
        </div>
      </footer>
    </section>
  );
}
