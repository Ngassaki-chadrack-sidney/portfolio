"use client";
import React from "react";

type ProjetProps = {
  index: number;
  title: string;
  description: string;
  stackUsed: string;
  onHover: (index: number) => void;
  onLeave: (index: number) => void;
};

function Projet({ index, title, description, stackUsed, onHover, onLeave }: ProjetProps) {
  return (
    <div
      className="flex justify-between items-baseline w-full h-40 border-t"
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onLeave(index)}
    >
      <div className="space-y-2">
        <h3 className="text-2xl font-bold hover:opacity-30 hover:translate-x-2 transition-all">
          {title}
        </h3>
        <p className="text-md hover:opacity-30 hover:translate-x-2 transition-all">
          {description}
        </p>
      </div>

      <div className="flex justify-center items-center">
        <span className="text-md font-bold hover:opacity-30 hover:translate-x-2 transition-all">
          {stackUsed}
        </span>
      </div>
    </div>
  );
}

export default Projet;
