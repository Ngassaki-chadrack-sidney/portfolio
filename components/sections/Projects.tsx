"use client";

import { useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useTranslation } from "@/hooks/useTranslation";
import { cn } from "@/lib/utils";
import MagneticButton from "../ui/MagneticButton";


const projets = [
  {
    id: "whatsapp",
    title: "WhatsApp Clone",
    stack: ["nextjs", "typescript"],
    videoUrl: "https://res.cloudinary.com/dji6k1cvh/video/upload/v1767601795/whatsapp_apps_mq96jv.mkv",
  },
  {
    id: "x-clone",
    title: "X-Clone Social",
    stack: ["nextjs", "typescript", "adonisjs"],
    videoUrl: "https://res.cloudinary.com/dji6k1cvh/video/upload/v1763459208/nwSy6DrQfj_sawc9i.mp4",
  },
  {
    id: "hg-vision",
    title: "HG Vision Graphic",
    stack: ["html5", "css3", "javascript"],
    videoUrl: "https://res.cloudinary.com/dji6k1cvh/video/upload/v1767602668/hg_vision-graphic_agdvtg.mkv",
  },
  {
    id: "dashboard",
    title: "Transaction Dashboard",
    stack: ["nextjs", "typescript"],
    videoUrl: "https://res.cloudinary.com/dji6k1cvh/video/upload/v1767601789/Dashboard_plateforme_de_transaction_ooogrn.mkv",
  },
  {
    id: "mojito",
    title: "Mojito Brand",
    stack: ["nextjs", "typescript"],
    videoUrl: "https://res.cloudinary.com/dji6k1cvh/video/upload/v1763458344/replique_d_un_site_awwward_pkzvoi.mp4",
  },
  {
    id: "notion-clone",
    title: "Notion Clone",
    stack: ["nextjs", "typescript"],
    videoUrl: "https://res.cloudinary.com/dji6k1cvh/video/upload/v1763458393/notion_app_dj4drr.mp4",
  },
  {
    id: "shadow-flix",
    title: "Shadow Flix",
    stack: ["react", "typescript"],
    videoUrl: "https://res.cloudinary.com/dji6k1cvh/video/upload/v1763458900/20250621-2042-00.2174813_gv38kx.mp4",
  },
  {
    id: "chef-recipe",
    title: "Chef's Recipe App",
    stack: ["flutter", "nodejs", "postgresql"],
    videoUrl: "https://res.cloudinary.com/dji6k1cvh/video/upload/v1763458336/Screen_Recording_2025-10-03_155250_mjxfjq.mp4",
  },
  {
    id: "quiz-go",
    title: "Quiz Go",
    stack: ["react"],
    videoUrl: "https://res.cloudinary.com/dji6k1cvh/video/upload/v1763458896/20250624-1912-13.1762648_k6roav.mp4",
  },
];

const getIconUrl = (tech: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`;

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    // GSAP animations removed for performance optimization.
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-[clamp(6rem,12vw,14rem)] px-[clamp(1.5rem,5vw,6rem)] bg-surface/30">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-bold tracking-tight text-foreground">
          {t("projects.title")}
        </h2>
        <p className="text-lg text-foreground">
          {t("projects.intro")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projets.map((project, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div 
                className="project-card cursor-pointer group relative"
              >
                <div className="aspect-[4/3] w-full bg-surface rounded-xl overflow-hidden relative">
                  <video
                    src={project.videoUrl}
                    className="w-full h-full object-contain"
                    muted
                    loop
                    onMouseOver={(e) => e.currentTarget.play()}
                    onMouseOut={(e) => e.currentTarget.pause()}
                  />
                  
                  {/* Magnetic 'View' Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <MagneticButton>
                        {t("projects.view")}
                      </MagneticButton>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold tracking-tight text-foreground">
                      {project.title}
                    </h3>
                    <div className="flex -space-x-3">
                      {project.stack.slice(0, 3).map((tech) => (
                        <div key={tech} className="w-10 h-10 bg-background/20 backdrop-blur-sm rounded-full border-2 border-surface p-2 flex items-center justify-center relative hover:z-10 hover:-translate-y-1 transition-all">
                          <img
                            src={getIconUrl(tech)}
                            className="w-full h-full object-contain"
                            alt={tech}
                            onError={(e) => {
                              const base = tech;
                              e.currentTarget.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${base}/${base}-plain.svg`;
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm line-clamp-1">
                    {t(`projects.items.${project.id}.description`)}
                  </p>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[900px] w-[95vw] p-0 bg-background border-border overflow-hidden rounded-3xl">
              <ScrollArea className="max-h-[90vh] w-full">
                <div className="flex flex-col">
                  <div className="aspect-[4/3] w-full bg-surface rounded-xl overflow-hidden relative">
                    <video
                      src={project.videoUrl}
                      className="w-full h-full object-contain"
                      controls
                      autoPlay
                      loop
                    />
                  </div>
                  <div className="p-8 md:p-14 space-y-10">
                    <DialogHeader>
                      <DialogTitle className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground">
                        {project.title}
                      </DialogTitle>
                      <DialogDescription className="text-khaki-700 dark:text-khaki-300 text-lg md:text-xl leading-relaxed pt-6">
                        {t(`projects.items.${project.id}.description`)}
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="pt-10 border-t border-border flex flex-wrap gap-x-12 gap-y-8 pb-4">
                      {project.stack.map((tech) => (
                        <div key={tech} className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-surface p-2 flex items-center justify-center">
                            <img
                              src={getIconUrl(tech)}
                              className="w-full h-full object-contain"
                              alt={tech}
                            />
                          </div>
                          <span className="text-xs font-bold uppercase tracking-widest text-foreground">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}
