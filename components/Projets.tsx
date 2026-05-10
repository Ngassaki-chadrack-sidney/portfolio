"use client";

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

const projets = [
  {
    title: "Copy de whatsapp android",
    description: "Une copy de whatsapp fait avec Next JS et typescript.",
    stack: ["nextjs", "typescript"],
    videoUrl:
      "https://res.cloudinary.com/dji6k1cvh/video/upload/v1767601795/whatsapp_apps_mq96jv.mkv",
  },
  {
    title: "Réseau Social X-Clone",
    description:
      "Conception d'une plateforme sociale moderne inspirée de Twitter/X.",
    stack: ["nextjs", "typescript", "adonisjs"],
    videoUrl:
      "https://res.cloudinary.com/dji6k1cvh/video/upload/v1763459208/nwSy6DrQfj_sawc9i.mp4",
  },
  {
    title: "HG Vision Graphic",
    description: "J'ai coder un site vitrine pour un freelance designer.",
    stack: ["html5", "css3", "javascript"],
    videoUrl:
      "https://res.cloudinary.com/dji6k1cvh/video/upload/v1767602668/hg_vision-graphic_agdvtg.mkv",
  },
  {
    title: "Dashboard de transaction",
    description: "Interface de gestion de transactions financières.",
    stack: ["nextjs", "typescript"],
    videoUrl:
      "https://res.cloudinary.com/dji6k1cvh/video/upload/v1767601789/Dashboard_plateforme_de_transaction_ooogrn.mkv",
  },
  {
    title: "Mojito Brand",
    description:
      "Site vitrine immersif pour une marque de boisson avec animations avancées.",
    stack: ["nextjs", "typescript"],
    videoUrl:
      "https://res.cloudinary.com/dji6k1cvh/video/upload/v1763458344/replique_d_un_site_awwward_pkzvoi.mp4",
  },
  {
    title: "Copy de notion",
    description: "Application de prise de note simulaire a notion.",
    stack: ["nextjs", "typescript"],
    videoUrl:
      "https://res.cloudinary.com/dji6k1cvh/video/upload/v1763458393/notion_app_dj4drr.mp4",
  },
  {
    title: "Shadow Flix",
    description: "Application mobile cross-platform explorant l'API TMDB.",
    stack: ["react", "typescript"],
    videoUrl:
      "https://res.cloudinary.com/dji6k1cvh/video/upload/v1763458900/20250621-2042-00.2174813_gv38kx.mp4",
  },
  {
    title: "Chef's Recipe App",
    description:
      "Application mobile complète de gestion de recettes de cuisine.",
    stack: ["flutter", "nodejs", "postgresql"],
    videoUrl:
      "https://res.cloudinary.com/dji6k1cvh/video/upload/v1763458336/Screen_Recording_2025-10-03_155250_mjxfjq.mp4",
  },
  {
    title: "Quiz Go",
    description: "Application mobile de quiz interactive et gamifiée.",
    stack: ["react"],
    videoUrl:
      "https://res.cloudinary.com/dji6k1cvh/video/upload/v1763458896/20250624-1912-13.1762648_k6roav.mp4",
  },
];

const getIconUrl = (tech: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`;

export default function ProjectGrid() {
  const { t } = useTranslation();
  
  return (
    <section id="projets" className="py-24 px-6 md:px-12 lg:px-20 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black uppercase mb-16 tracking-tighter">
          {t("projects.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projets.map((project, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="cursor-pointer group">
                  <div className="rounded-xl overflow-hidden border border-white/10 bg-black">
                    <div className="flex gap-1.5 p-3 border-b border-white/5 bg-zinc-900/50">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                    </div>
                    <div className="aspect-video w-full bg-black">
                      <video
                        src={project.videoUrl}
                        className="w-full h-full object-contain"
                        muted
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex justify-between items-start px-1">
                    <h3 className="text-base font-bold uppercase tracking-tight">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      {project.stack.map((tech) => (
                        <img
                          key={tech}
                          src={getIconUrl(tech)}
                          className="w-4 h-4 object-contain"
                          alt={tech}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </DialogTrigger>

              {/* FIX: Utilisation d'une ScrollArea avec une hauteur max définie */}
              <DialogContent className="sm:max-w-[800px] w-[95vw] p-0 bg-black border-white/10 overflow-hidden">
                <ScrollArea className="max-h-[85vh] w-full">
                  <div className="flex flex-col">
                    <div className="aspect-video w-full bg-black">
                      <video
                        src={project.videoUrl}
                        className="h-100 w-250 object-contain"
                        controls
                        autoPlay
                      />
                    </div>

                    <div className="p-6 md:p-10 space-y-8">
                      <DialogHeader>
                        <DialogTitle className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white">
                          {project.title}
                        </DialogTitle>
                        <DialogDescription className="text-white text-base md:text-lg font-medium leading-snug pt-4 opacity-80">
                          {project.description}
                        </DialogDescription>
                      </DialogHeader>

                      <div className="pt-8 border-t border-white/5 flex flex-wrap gap-8 pb-4">
                        {project.stack.map((tech) => (
                          <div key={tech} className="flex items-center gap-3">
                            <img
                              src={getIconUrl(tech)}
                              className="w-6 h-6"
                              alt={tech}
                            />
                            <span className="text-[10px] font-black uppercase tracking-widest">
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
      </div>
    </section>
  );
}
