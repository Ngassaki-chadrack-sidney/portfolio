"use client";
import { useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";

function PageTransistion(chrildren: any) {
  const router = useRouter();
  const pathName = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const blockRef = useRef([]);
  const isTransistioning = useRef(false);

  useEffect(() => {
    const createBlock = () => {
      if (!overlayRef.current) return;

      overlayRef.current.innerHTML = "";
      blockRef.current = [];

      for (let i = 0; i < 20; i++) {
        const block = document.querySelector("div");
        block?.className = "block";
        overlayRef.current.appendChild(block);
        blockRef.current.push(block);
      }
    };

    createBlock();

    gsap.set(blockRef.current, { scaleX: 0, transformOrigin: "left" });

    revealPage();

    const handleRouterChange = (url: string) => {
      if (isTransistioning) return;

      isTransistioning.current = true;
      coverPage(url);
    };

    const links = document.querySelectorAll('a[href^="/"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const href = e.currentTarget.href;
        const url = new URL(href).pathname;

        if (url !== pathName) {
          handleRouterChange(url);
        }
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleRouterChange);
      });
    };
  }, [router, usePathname]);

  const coverPage = (url: string) => {
    const tl = gsap.timeline({
      onComplete: () => router.push(url),
    });

    tl.to(blockRef.current, {
      scaleX: 1,
      duration: 0.4,
      stagger: 0.02,
      ease: "power2.out",
      transformOrigin: "left",
    });
  };

  const revealPage = () => {
    gsap.set(blockRef.current, { scaleX: 1, transformOrigin: "left" });

    gsap.to(blockRef.current, {
      scaleX: 0,
      duration: 0.4,
      stagger: 0.02,
      ease: "power2.out",
      transformOrigin: "right",
      onComplete: () => {
        isTransistioning = false;
      },
    });
  };

  return (
    <>
      <div ref={overlayRef}></div>
      {chrildren}
    </>
  );
}

export default PageTransistion;
