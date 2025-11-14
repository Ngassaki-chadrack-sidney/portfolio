"use client";

import { TextAnimation } from "../animations";
import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com",
      icon: Github,
    },
    {
      name: "Email",
      url: "mailto:contact@example.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="w-full py-16 px-4 md:px-8 lg:px-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <TextAnimation
            variant="slideUp"
            duration={0.4}
            className="text-white text-sm md:text-base"
          >
            <p>© 2025 Chadrack Hermann. Tous droits réservés.</p>
          </TextAnimation>

          <div className="flex flex-col items-center md:items-end gap-4">
            <TextAnimation
              variant="slideUp"
              duration={0.4}
              delay={0.1}
              className="text-white text-sm font-semibold mb-2"
            >
              <span>Mes réseaux</span>
            </TextAnimation>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <TextAnimation
                    key={link.name}
                    variant="slideUp"
                    duration={0.4}
                    delay={0.15 + index * 0.05}
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 transition-all duration-300 group"
                      aria-label={link.name}
                    >
                      <Icon
                        size={20}
                        className="text-white group-hover:text-white transition-colors duration-300"
                      />
                    </a>
                  </TextAnimation>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
