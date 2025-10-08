import Image from "next/image";
import React from "react";
import { Progress } from "./ui/progress";
import { Tilt } from "./motion-primitives/tilt";

function Stack() {
  const LangageData = [
    {
      nom: "HTML",
      description: "Langage de balisage",
      taux_metrisse: 94,
      image_url: "",
    },
    {
      nom: "CSS",
      description: "",
      taux_metrisse: 90,
      image_url: "",
    },
    {
      nom: "Tailwind CSS",
      description: "",
      taux_metrisse: 97,
      image_url: "",
    },
    {
      nom: "JavaScript",
      description: "",
      taux_metrisse: 80,
      image_url: "",
    },
    {
      nom: "TypeScript",
      description: "",
      taux_metrisse: 80,
      image_url: "",
    },
    {
      nom: "React",
      description: "",
      taux_metrisse: 84,
      image_url: "",
    },
    {
      nom: "Next JS",
      description: "",
      taux_metrisse: 80,
      image_url: "",
    },
    {
      nom: "SQL",
      description: "",
      taux_metrisse: 60,
      image_url: "",
    },
    {
      nom: "Python",
      description: "",
      taux_metrisse: 60,
      image_url: "",
    },
    {
      nom: "Express JS",
      description: "",
      taux_metrisse: 72,
      image_url: "",
    },
    {
      nom: "Dart",
      description: "",
      taux_metrisse: 70,
      image_url: "",
    },
    {
      nom: "Flutter",
      description: "",
      taux_metrisse: 70,
      image_url: "",
    },
    {
      nom: "React Native",
      description: "",
      taux_metrisse: 70,
      image_url: "",
    },
    {
      nom: "Docker",
      description: "",
      taux_metrisse: 65,
      image_url: "",
    },
    {
      nom: "Prisma",
      description: "",
      taux_metrisse: 70,
      image_url: "",
    },
    {
      nom: "My SQL",
      description: "",
      taux_metrisse: 79,
      image_url: "",
    },
    {
      nom: "Postgresql",
      description: "",
      taux_metrisse: 73,
      image_url: "",
    },
  ];

  return (
    <div>
      <h3 className="text-lg">Ma stack technique</h3>
      <div className="grid grid-cols-4">
        {LangageData.map((techo) => (
          <Tilt
            key={techo.nom}
            className="h-90 border border-gray-400 rounded-lg"
          >
            <Image
              src={techo.image_url}
              alt={techo.description}
              className="h-60 object-contain"
            />
            <div className="p-4 space-x-2">
              <p className="text-md">{techo.nom}</p>
              <p className="text-sm text-wrap h-25">{techo.description}</p>
              <div className="flex justify-baseline items-start gap-2">
                <span>Taux de maintrisse : </span>
                <Progress value={techo.taux_metrisse} />
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}

export default Stack;
