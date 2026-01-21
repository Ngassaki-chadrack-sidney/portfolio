"use client";

import { Experience } from "@/data/experiences";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";
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
            <h3 className="text-xl font-bold text-white mb-1">
              {experience.poste}
            </h3>
            <p className="text-sm">
              {experience.entreprise}
            </p>
          </div>
          <Badge className={`${getTypeColor(experience.type)} border`}>
            {experience.type}
          </Badge>
        </div>

        {/* Date and location */}
        <div className="flex flex-col gap-2 mb-4 text-sm">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            {dateRange}
          </div>
          {experience.localisation && (
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              {experience.localisation}
            </div>
          )}
        </div>

        {/* Missions */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3">
            <Briefcase size={16} />
            <span className="text-sm font-semibold text-gray-300">
              Missions
            </span>
          </div>
          <ul className="space-y-2">
            {experience.missions.map((mission, idx) => (
              <li key={idx} className="text-sm pl-6 relative">
                <span className="absolute left-0">•</span>
                {mission}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <p className="text-sm font-semibold text-gray-300 mb-2">
            Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, idx) => (
              <Badge key={tech} className="bg-blue-500 text-white px-2 py-1 border-gray-700 hover:bg-gray-700 transition-colors">
                {tech}
              </Badge>
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
