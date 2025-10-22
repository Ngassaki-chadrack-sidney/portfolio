"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { motion } from "framer-motion";
// import { SplitText } from "gsap/SplitText"; // Unused for now

interface MenuBurgerProps {
  className?: string;
}

// type menuLinkProps = {
//   label: string,
//   href: string
// } // Unused type

const menuLinks = [
  { label: "Principal", href: "/" },
  { label: "Projets", href: "/projets" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Ngassaki-chadrack-sidney/" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chadrack-sidney-ngassaki-26253635b/",
  },
  { label: "WhatsApp", href: "https://wa.me/+242064732923" },
];

export const MenuBurger: React.FC<MenuBurgerProps> = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGPathElement>(null);
  const navItemsRef = useRef<HTMLDivElement[]>([]);
  const socialsRef = useRef<HTMLDivElement>(null);

  const mouse = {
    x: 0,
    y: 0,
  };

  const mouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouse.x = clientX;
    mouse.y = clientY;
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);

    if (isOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  }, [isOpen]);

  const openMenu = () => {
    const tl = gsap.timeline();

    tl.to(menuRef.current, {
      x: 0,
      duration: 0.8,
      ease: "power3.inOut",
    });

    if (svgRef.current) {
      tl.to(
        svgRef.current,
        {
          attr: { d: "M 0 0 L 0 100 L 100 100 L 100 0 Z" },
          duration: 0.8,
          ease: "power3.inOut",
        },
        0
      );
    }

    tl.fromTo(
      navItemsRef.current,
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      },
      0.3
    );

    tl.fromTo(
      socialsRef.current,
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      0.5
    );
  };

  const closeMenu = () => {
    const tl = gsap.timeline();

    tl.to([...navItemsRef.current, socialsRef.current], {
      x: 100,
      opacity: 0,
      duration: 0.4,
      stagger: 0.05,
      ease: "power2.in",
    });

    if (svgRef.current) {
      tl.to(
        svgRef.current,
        {
          attr: { d: "M 0 0 Q 50 50 0 100 L 100 100 L 100 0 Z" },
          duration: 0.6,
          ease: "power3.inOut",
        },
        0.2
      );
    }

    tl.to(
      menuRef.current,
      {
        x: "100%",
        duration: 0.6,
        ease: "power3.inOut",
      },
      0.2
    );
  };

  const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    animateIcon(newState);
  };

  const animateIcon = (toOpen: boolean) => {
    const iconPath = document.querySelector("#burger-icon-path");

    if (toOpen) {
      gsap.to(iconPath, {
        attr: {
          d: "M18 6L6 18M6 6L18 18",
        },
        duration: 0.4,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(iconPath, {
        attr: {
          d: "M3 6H21M3 12H21M3 18H21",
        },
        duration: 0.4,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        onClick={toggleMenu}
        className={`w-12 h-12 ml-4 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-colors duration-300 z-[999] ${
          isOpen ? "bg-blue-500" : "bg-gray-900"
        } ${className}`}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="burger-icon-path"
            d="M3 6H21M3 12H21M3 18H21"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>

      <div
        ref={menuRef}
        className="fixed top-0 right-0 min-h-screen w-full md:w-[450px] bg-gray-900 text-white z-40"
        style={{ transform: "translateX(100%)" }}
      >
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            ref={svgRef}
            d="M 0 0 Q 50 50 0 100 L 100 100 L 100 0 Z"
            fill="#111827"
          />
        </svg>

        <div className="relative z-10 h-full flex flex-col justify-center px-16">
          <div className="mt-16">
            <p className="text-xl text-gray-500 mb-8 tracking-wider ">
              NAVIGATION
            </p>
            <div className="w-full h-px bg--gradientto-r from-transparent via-white to-transparent mb-8" />
            <nav className="space-y-6">
              {menuLinks.map((link, index) => (
                <div
                  key={link.label}
                  ref={(el) => {
                    if (el) navItemsRef.current[index] = el;
                  }}
                >
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      animateIcon(false);
                    }}
                  >
                    <Link href={link.href}>
                      <span className="text-4xl md:text-6xl font-light hover:text-blue-500 transition-colors duration-300 block">
                        {link.label}
                      </span>
                    </Link>
                  </button>
                </div>
              ))}
            </nav>
          </div>

          <div ref={socialsRef}>
            <p className="text-lg mb-6 tracking-wider underline">Mes reseaux</p>
            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="text-sm hover:text-blue-500 transition-colors duration-300"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 min-h-screen"
          onClick={() => {
            setIsOpen(false);
            animateIcon(false);
          }}
        />
      )}
    </>
  );
};

export default MenuBurger;

// Composant pour gerer les animations au hover du text
const duree = 0.25;
const stagger = 0.025;

// Unused HoverText component
// const HoverText = (children: string) => {
//   return (
//     <motion.div
//       className="relative overflow-hidden block whitespace-nowrap"
//       transition={{ staggerChildren: 0.2 }}
//     >
//       <div className="absolute inset-0">
//         {children.split("").map((l: string, i: number) => {
//           return (
//             <motion.span
//               initial={{ y: 0 }}
//               whileInView={{ y: "-100%" }}
//               className="inline-block"
//               key={`${l}-${i}`}
//               transition={{
//                 duration: duree,
//                 ease: "easeInOut",
//                 delay: stagger * i,
//               }}
//             >
//               {l}
//             </motion.span>
//           );
//         })}
//       </div>
//     </motion.div>
//   );
// };
