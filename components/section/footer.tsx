"use client";

import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

function Footer() {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: Linkedin,
      color: "#0077B5",
    },
    { name: "GitHub", url: "https://github.com", icon: Github, color: "#333" },
    {
      name: "Email",
      url: "mailto:contact@example.com",
      icon: Mail,
      color: "#EA4335",
    },
  ];

  return (
    <footer className="w-full mb-14 py-20 px-8 md:px-16 lg:px-24 border-t border-white/5 bg-[#050505] relative overflow-hidden">
      {/* Effet de lueur en arrière-plan */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        {/* Partie Gauche : Infos & Status */}
        <div className="space-y-6 max-w-xl">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">
              Portfolio — En cours de développement
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            On construit quelque chose de{" "}
            <span className="text-blue-600">grand</span> ensemble ?
          </h2>

          <div className="md:text-base leading-relaxed space-y-2">
            <p>© 2025 Chadrack Hermann. Tous droits réservés.</p>
            <p className="italic ">
              Note : Ce site évolue constamment. De nouveaux projets et
              fonctionnalités arrivent bientôt.
            </p>
          </div>
        </div>

        {/* Partie Droite : Réseaux Sociaux */}
        <div className="flex flex-col items-start md:items-end gap-6">
          <span className=" text-sm font-medium uppercase tracking-widest">
            Connectons-nous
          </span>

          <div className="flex gap-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="group relative flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300"
                  aria-label={link.name}
                >
                  <Icon
                    className=" group-hover:text-blue-500 transition-colors"
                    size={22}
                  />

                  {/* Tooltip au survol */}
                  <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded">
                    {link.name}
                  </span>
                </motion.a>
              );
            })}
          </div>

          <motion.a
            href="#header"
            className="flex items-center gap-2 text-xs  hover:text-white transition-colors uppercase tracking-widest font-bold mt-4"
          >
            Retour en haut <ExternalLink size={12} className="-rotate-90" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
