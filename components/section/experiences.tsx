"use client";

import { motion } from "framer-motion";
import { Experience, getExperiencesSorted } from "@/data/experiences";
import { Calendar, MapPin, Briefcase, ChevronRight } from "lucide-react";
import CopyText from "../animations/CopyText";

function ExperienceCard({
  experience,
  isLast,
}: {
  experience: Experience;
  isLast: boolean;
}) {
  return (
    <div className="relative flex gap-8">
      {/* Contenu de l'expérience */}
      <motion.div whileHover={{ x: 10 }} className="pb-16 flex-grow">
        <div className="bg-slate-900/50 border border-white/5 p-6 md:p-8 rounded-2xl backdrop-blur-sm hover:border-blue-500/30 transition-all shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-blue-500 font-mono text-sm mb-1">
                <Briefcase size={14} />
                <span>{experience.type}</span>
              </div>
              <h4 className="text-2xl font-bold text-white">
                {experience.poste}
              </h4>
              <p className="text-lg text-blue-400 font-medium">
                {experience.entreprise}
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end gap-2 text-gray-400 text-sm">
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">
                <Calendar size={14} />
                <span>
                  {experience.dateDebut} —{" "}
                  {experience.actuel ? "Présent" : experience.dateFin}
                </span>
              </div>
              {experience.localisation && (
                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  <span>{experience.localisation}</span>
                </div>
              )}
            </div>
          </div>

          {/* Missions */}
          <ul className="space-y-3 mb-8">
            {experience.missions.map((mission, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-gray-400 leading-relaxed"
              >
                <ChevronRight
                  size={18}
                  className="text-blue-600 mt-1 shrink-0"
                />
                <span>{mission}</span>
              </li>
            ))}
          </ul>

          {/* Tech Stack utilisée */}
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-white text-black rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function Experiences() {
  const sortedExperiences = getExperiencesSorted();

  return (
    <section
      id="experiences"
      className="w-full py-32 px-8 md:px-16 lg:px-24 bg-[#050505]"
    >
      <div className="max-w-5xl mx-auto">
        {/* En-tête de section */}
        <div className="mb-20">
          <CopyText delay={0.1}>
            <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs">
              Mon Parcours
            </span>
          </CopyText>
          <CopyText delay={0.2}>
            <h3 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6">
              Expériences{" "}
              <span className="text-blue-600">Professionnelles</span>
            </h3>
          </CopyText>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full" />
        </div>

        {/* Liste des expériences avec ligne de temps */}
        <div className="relative">
          {sortedExperiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isLast={index === sortedExperiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiences;
