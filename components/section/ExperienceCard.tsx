"use client";

import { Experience } from "@/data/experiences";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { TextAnimation } from "@/components/animations/TextAnimation";
import { BorderTrail } from "../ui/border-trail";

interface ExperienceCardProps {
  experience: Experience;
}

const getTypeColor = (type: Experience["type"]) => {
  const colors: Record<Experience["type"], string> = {
    CDI: "bg-green-500/20 text-green-400 border-green-500/30",
    CDD: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    Stage: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    Freelance: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  };
  return colors[type];
};

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("fr-FR", { year: "numeric", month: "long" });
};

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const dateDebut = formatDate(experience.dateDebut);
  const dateFin = experience.dateFin ? formatDate(experience.dateFin) : null;
  const dateRange = experience.actuel
    ? `${dateDebut} - Actuellement`
    : `${dateDebut} - ${dateFin}`;

  return (
    <div className="relative group">
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

      <div className="relative bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all duration-300 backdrop-blur-sm">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <TextAnimation
              variant="slideUp"
              duration={0.4}
              className="text-xl font-bold text-white mb-1"
            >
              {experience.poste}
            </TextAnimation>
            <TextAnimation
              variant="slideUp"
              duration={0.4}
              // delay={0.05}
              className=" text-sm"
            >
              {experience.entreprise}
            </TextAnimation>
          </div>
          <Badge className={`${getTypeColor(experience.type)} border`}>
            {experience.type}
          </Badge>
        </div>

        {/* Date and location */}
        <div className="flex flex-col gap-2 mb-4 text-sm ">
          <TextAnimation
            variant="slideUp"
            duration={0.4}
            // delay={0.1}
            className="flex items-center gap-2"
          >
            <Calendar size={16} className="" />
            {dateRange}
          </TextAnimation>
          {experience.localisation && (
            <TextAnimation
              variant="slideUp"
              duration={0.4}
              // delay={0.15}
              className="flex items-center gap-2"
            >
              <MapPin size={16} className="" />
              {experience.localisation}
            </TextAnimation>
          )}
        </div>

        {/* Missions */}
        <div className="mb-4">
          <TextAnimation
            variant="slideUp"
            duration={0.4}
            // delay={0.2}
            className="flex items-center gap-2 mb-3"
          >
            <Briefcase size={16} className="" />
            <span className="text-sm font-semibold text-gray-300">
              Missions
            </span>
          </TextAnimation>
          <ul className="space-y-2">
            {experience.missions.map((mission, idx) => (
              <TextAnimation
                key={idx}
                variant="slideUp"
                // duration={0.4}
                delay={0.25 + idx * 0.05}
                className="text-sm  pl-6 relative"
              >
                <span className="absolute left-0 ">•</span>
                {mission}
              </TextAnimation>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <TextAnimation
            variant="slideUp"
            duration={0.4}
            // delay={0.35}
            className="text-sm font-semibold text-gray-300 mb-2"
          >
            Technologies
          </TextAnimation>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, idx) => (
              <TextAnimation
                key={tech}
                variant="slideUp"
                // duration={0.4}
                delay={0.4 + idx * 0.05}
              >
                <Badge className="bg-blue-500 text-white px-2 py-1 border-gray-700 hover:bg-gray-700 transition-colors">
                  {tech}
                </Badge>
              </TextAnimation>
            ))}
          </div>
        </div>

        {experience.actuel && (
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <span className="text-xs font-semibold text-green-400">
              En cours
            </span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>
        )}
      </div>

      <BorderTrail
        className="bg-linear-to-r from-blue-500 via-cyan-500 to-green-500 rounded-2xl"
        size={150}
      />
    </div>
  );
};

export default ExperienceCard;
