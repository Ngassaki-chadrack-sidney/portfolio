"use client";

import React, { useRef, useState } from "react";
import { gsap } from "gsap";

interface ProjectGalleryItemProps {
  name: string;
  description: string;
  stack: string[];
  videoUrl: string;
  className?: string;
}

export const ProjectGalleryItem: React.FC<ProjectGalleryItemProps> = ({
  name,
  description,
  stack,
  videoUrl,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoContainerRef.current || !isHovered) return;

    const container = videoContainerRef.current;

    gsap.to(container, {
      x: e.clientX - container.offsetWidth / 2,
      y: e.clientY - container.offsetHeight / 2,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <>
      <div
        className={`border-t border-gray-300 py-8 cursor-pointer transition-colors duration-300 hover:bg-gray-50 ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <div className="flex items-start justify-between gap-8">
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-3 text-gray-900">{name}</h3>
            <p className="text-base text-gray-600 mb-4 max-w-2xl">
              {description}
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm font-medium text-gray-900 mb-2">
              Next.js / TypeScript
            </p>
            <div className="flex flex-wrap gap-2 justify-end">
              {stack.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 bg-gray-200 rounded-md text-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isHovered && (
        <div
          ref={videoContainerRef}
          className="fixed pointer-events-none z-50"
          style={{
            left: 0,
            top: 0,
            width: "400px",
            height: "300px",
          }}
        >
          <video
            ref={videoRef}
            src={videoUrl}
            muted
            loop
            playsInline
            className="w-full h-full object-cover rounded-lg shadow-2xl"
          />
        </div>
      )}
    </>
  );
};

export default ProjectGalleryItem;
