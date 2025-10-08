"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { DotIcon, X } from "lucide-react";
import Link from "next/link";
import { Magnetic } from "./motion-primitives/magnetic";

function FloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  // Todo : Ajout des animations d'entrer avec GSAP

  return (
    <div>
      {isOpen ? (
        <div className="h-screen w-screen flex">
          <Button
            variant={"ghost"}
            className="backdrop-brightness-50 w-2/3"
            onClick={() => setIsOpen(false)}
          />

          <div className="md:w-1/3 h-full bg-gray-600 relative">
            <Magnetic>
              <Button
                variant={"ghost"}
                className="p-2 rounded-full bg-muted/50 absolute top-4 right-4"
                onClick={() => setIsOpen(false)}
                id="anime"
              >
                <X className="w-4 h-4" />
              </Button>
            </Magnetic>

            <Link href={"/"} className="text-ls font-medium" id="anime">
              Page principal
            </Link>
            <Link href={"/projects"} className="text-ls font-medium" id="anime">
              Mes realisations
            </Link>
            <Link href={"/contact"} className="text-ls font-medium" id="anime">
              Contact
            </Link>
          </div>
        </div>
      ) : (
        <Button
          variant={"ghost"}
          className="p-4 rounded-full bg-muted/50"
          onClick={() => setIsOpen(true)}
        >
          <DotIcon className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}

export default FloatingButton;
