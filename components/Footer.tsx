import React from "react";
import Link from "next/link";
import { Magnetic } from "./motion-primitives/magnetic";

function Footer() {
  const socailNetwork = [
    {
      nom: "LinkedIn",
      logo: "",
      link: "#",
    },
    {
      nom: "WhatsApp",
      logo: "",
      link: "#",
    },
    {
      nom: "Github",
      logo: "",
      link: "#",
    },
  ];

  return (
    <div className="h-64 flex gap-2">
      <div className="w-1/2 flex flex-col justify-start items-center gap-6">
        <p>
          Ce site est en cours de developpement, donc il manque encore des
          projets que je n'ai pas encore rajouter.
        </p>

        <div className="flex gap-2.5">
          <span>Mes reseau</span>
          <div className="gap-2">
            {socailNetwork.map((element) => (
              <Link href={element.link} key={element.nom}>
                <img
                  src={element.logo}
                  alt={element.nom}
                  height={100}
                  width={100}
                  className="rounded-full"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="w-1/2">
        <Link href="/contact">
          <Magnetic>
            <div className="h-32 w-32 flex justify-center items-center rounded-full bg-blue-500">
              <span>Me contactez</span>
            </div>
          </Magnetic>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
