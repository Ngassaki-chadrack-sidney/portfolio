"use client";

import { TextAnimation } from "../animations";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

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
            <p>
              Ce site es cours de developpement donc il se pourrais que toutes
              les informations me concernant ne soit pas au complet tels que les
              projtes etc... <br />
              Merci pour votre compréhension{" "}
            </p>
          </TextAnimation>

          <div className="flex flex-col items-center md:items-end">
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
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white justify-center w-12 h-12 rounded-full hover:text-blue-500 cursor-pointer tran"
                    aria-label={link.name}
                  >
                    <Icon className="hover:text-blue-500 transition-colors" />
                  </motion.a>
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
