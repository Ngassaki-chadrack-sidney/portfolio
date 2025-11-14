"use client";
import { useEffect, useRef, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";

interface PageTransistionProps {
  children: React.ReactNode;
}

function PageTransistion({ children }: PageTransistionProps) {
  const router = useRouter();
  const pathName = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const blockRef = useRef<HTMLElement[]>([]);
  const isTransistioning = useRef(false);

  const createBlock = useCallback(() => {
    if (!overlayRef.current) return;

    overlayRef.current.innerHTML = "";
    blockRef.current = [];

    for (let i = 0; i < 20; i++) {
      const block = document.createElement("div");
      block.className = "page-transition-block";
      overlayRef.current.appendChild(block);
      blockRef.current.push(block);
    }
  }, []);

  const coverPage = useCallback(
    (url: string) => {
      if (isTransistioning.current) return;

      isTransistioning.current = true;

      const tl = gsap.timeline({
        onComplete: () => {
          router.push(url);
          // La révélation se fera après la navigation via le useEffect qui écoute pathName
        },
      });

      tl.to(blockRef.current, {
        scaleX: 1,
        duration: 0.4,
        stagger: 0.02,
        ease: "power2.out",
        transformOrigin: "left",
      });
    },
    [router]
  );

  const revealPage = useCallback(() => {
    if (blockRef.current.length === 0) return;

    gsap.set(blockRef.current, { scaleX: 1, transformOrigin: "left" });

    gsap.to(blockRef.current, {
      scaleX: 0,
      duration: 0.4,
      stagger: 0.02,
      ease: "power2.out",
      transformOrigin: "right",
      onComplete: () => {
        isTransistioning.current = false;
      },
    });
  }, []);

  // Gestion des transitions via événements personnalisés (pour StaggeredMenu)
  useEffect(() => {
    const handlePageTransition = (e: CustomEvent<string>) => {
      const url = e.detail;
      if (url && url !== pathName && !url.startsWith("#")) {
        coverPage(url);
      }
    };

    window.addEventListener(
      "pageTransition" as any,
      handlePageTransition as EventListener
    );

    return () => {
      window.removeEventListener(
        "pageTransition" as any,
        handlePageTransition as EventListener
      );
    };
  }, [pathName, coverPage]);

  // Initialisation et gestion des liens
  useEffect(() => {
    createBlock();

    // Révéler la page au chargement initial
    const timer = setTimeout(() => {
      if (blockRef.current.length > 0) {
        revealPage();
      }
    }, 100);

    const handleLinkClick = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute("href");

      if (!href || href.startsWith("#")) return;

      e.preventDefault();
      const url = href.startsWith("/") ? href : new URL(href).pathname;

      // Ne pas déclencher l'animation si on est déjà sur la même page
      if (url === pathName) {
        router.push(url);
        return;
      }

      coverPage(url);
    };

    // Écouter tous les liens internes
    const links = document.querySelectorAll('a[href^="/"]');
    links.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    return () => {
      clearTimeout(timer);
      links.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, [createBlock, revealPage, pathName, router, coverPage]);

  // Révéler la page après changement de route
  useEffect(() => {
    if (blockRef.current.length > 0 && !isTransistioning.current) {
      const timer = setTimeout(() => {
        revealPage();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [pathName, revealPage]);

  useEffect(() => {
    // Ajouter les styles des blocs
    const style = document.createElement("style");
    style.textContent = `
      .page-transition-block {
        background-color: #5227FF;
        height: 100vh;
        width: 100%;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[9999] pointer-events-none"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(20, 1fr)",
          gap: 0,
        }}
      />
      {children}
    </>
  );
}

// Fonction utilitaire pour déclencher une transition depuis l'extérieur
export const triggerPageTransition = (url: string) => {
  window.dispatchEvent(
    new CustomEvent("pageTransition", { detail: url })
  );
};

export default PageTransistion;
