"use client";

import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function ContactAndFooter() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <>
      {/* SECTION CONTACT */}
      <section id="contact" className="py-32 px-6 md:px-20 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none">
              {t("contact.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-end">
            {/* Email Principal */}
            <div>
              <a
                href="mailto:votre-email@exemple.com"
                className="group flex flex-col gap-2"
              >
                <span className="uppercase text-xs font-bold tracking-widest">
                  {t("contact.email_label")}
                </span>
                <div className="flex items-center gap-4">
                  <span className="text-2xl md:text-4xl font-medium border-b-2 border-white/10 pb-2 group-hover:border-blue-600 transition-all duration-500">
                    jrh3948@gmail.com
                  </span>
                  <ArrowUpRight className="w-8 h-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-blue-600" />
                </div>
              </a>
            </div>

            {/* Réseaux Sociaux Rapides */}
            <div className="flex flex-wrap gap-10 md:justify-end">
              {[
                {
                  name: "Github",
                  icon: <Github />,
                  url: "https://github.com/Ngassaki-chadrack-sidney/",
                },
                {
                  name: "LinkedIn",
                  icon: <Linkedin />,
                  url: "https://www.linkedin.com/in/chadrack-sidney-ngassaki-26253635b/",
                },
                {
                  name: "Twitter",
                  icon: <Twitter />,
                  url: "https://x.com/ChadrackHe44385",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 transition-colors duration-300"
                >
                  <span>{social.icon}</span>
                  <span className="uppercase text-[10px] font-black tracking-widest">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 md:px-20 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest opacity-50">
              {t("contact.footer_available")}
            </span>
          </div>

          <p className="text-[10px] font-black uppercase tracking-widest opacity-30">
            © {currentYear} — {t("contact.footer_copyright")}
          </p>

          <div className="flex gap-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-[10px] font-black uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity flex items-center gap-2"
            >
              {t("contact.back_to_top")}
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
