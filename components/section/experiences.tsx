import React from "react";
import CopyText from "../animations/CopyText";
import { CascadeAnimation } from "../animations";
import ExperienceCard from "./ExperienceCard";
import { getExperiencesSorted } from "@/data/experiences";

function Experiences() {
  const sortedExperiences = getExperiencesSorted();

  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <CopyText>
          <h3 className="text-3xl font-bold text-white mb-12">
            Parcours Professionnel
          </h3>
        </CopyText>

        <CascadeAnimation
          staggerDelay={0.15}
          itemDuration={0.5}
          startDelay={0.1}
          containerClassName="space-y-6"
        >
          {sortedExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </CascadeAnimation>
      </div>
    </section>
  );
}

export default Experiences;
