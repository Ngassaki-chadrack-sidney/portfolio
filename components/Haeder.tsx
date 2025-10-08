"use client";

import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import userPhoto from "../public/profile.jpg";
import { Magnetic } from "./motion-primitives/magnetic";
import { GlowEffect } from "./motion-primitives/glow-effect";
import { useRouter } from "next/navigation";

function Haeder() {
  const router = useRouter();
  const handleChangePage = (link: string) => {
    router.push(link.startsWith("/") ? link : `/${link}`);
  };

  return (
    <div className="h-screen w-screen relative">
      <div className="flex justify-between items-baseline absolute top-4 w-full space-x-4">
        <span>NGASSAKI Chadrack</span>
        <div className="flex justify-center items-center gap-6">
          <Magnetic>
            <Button
              onClick={() => handleChangePage("projets")}
              variant={"ghost"}
            >
              Mes realisations
            </Button>
            <Button
              onClick={() => handleChangePage("contact")}
              variant={"ghost"}
            >
              Me contactez
            </Button>
          </Magnetic>
        </div>
      </div>

      <div className="flex justify-between items-center pt-8">
        <div className="space-x-3">
          <h1 className="text-2xl">
            {" "}
            <span className="text-2xl font-bold">NGASSAKI</span> Chadrack Sidney
          </h1>
          <p>
            Développeur web & mobile spécialisé dans la création d’interfaces
            modernes, élégantes et performantes. À travers des technologies de
            pointe et un design soigné, je transforme vos idées en solutions
            digitales qui captivent, engagent et inspirent.
          </p>
          <p className="text-sm">
            <span className="text-sm font-bold">Mon but : </span>
            Concevoir des expériences digitales qui marquent les esprits et
            dépassent les attentes.
          </p>
        </div>

        <div className="relative">
          <GlowEffect
            colors={["#0894FF", "#C959DD", "#FF2E54", "#FF9004"]}
            mode="colorShift"
            blur="soft"
            duration={3}
            scale={0.9}
          />

          <Image
            src={userPhoto}
            alt="Photo de profile de NGASSAKI Chadrack"
            className="w-xl object-contain rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Haeder;
