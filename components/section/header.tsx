import localFont from "next/font/local";
import { GlowEffect } from "../ui/glow-effect";
import { Magnetic } from "../ui/magnetic";
import Link from "next/link";
import { BorderTrail } from "../ui/border-trail";
import Image from "next/image";
import photo from "../../public/profile.jpeg";

// const headerFont = localFont({
//   src: "./titleFont.otf",
// });

function Header() {
  return (
    <section className="h-full w-full flex justify-between items-center">
      <div className="space-y-2 w-1/2">
        <h1 className={`text-4xl`}>NGASSAKI Chadrack</h1>
        <div className="space-y-2">
          <p>
            Je transforme les idées en expériences digitales fluides — du web au
            mobile.
          </p>
          <p>
            Développeur Full-Stack & Mobile, je pousse les limites du code pour
            créer des solutions performantes, scalables et innovantes
          </p>
          <p>
            Je ne me contente pas de coder — j’explore, j’expérimente, et je
            repousse mes limites. Que ce soit en optimisant une app Next.js, en
            bâtissant une API Node.js ultra-rapide, ou en créant une expérience
            mobile immersive avec Flutter, mon objectif est simple : livrer des
            produits qui marquent
          </p>

          <Magnetic>
            <div className="relative w-35">
              <GlowEffect
                colors={["#FF5733", "#33FF57", "#3357FF", "#F1C40F"]}
                mode="colorShift"
                blur="soft"
                duration={1}
              />
              <button className="relative inline-flex px-1 py-2 bg-white rounded text-black">
                Voir mes projets
              </button>
            </div>
          </Magnetic>
        </div>
      </div>

      <div className="h-[700px] w-1/2 flex justify-center items-center">
        {/* <BorderTrail /> */}
        <Image
          src={photo}
          width={400}
          height={300}
          alt="Photo de NGASSAKI Chadrack"
          className="rounded-4xl"
        />
      </div>
    </section>
  );
}

export default Header;
