"use client";

import {
  createContext,
  useContext,
  useRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import { useTranslation } from "@/hooks/useTranslation";

interface TransitionContextValue {
  navigateTo: (href: string) => void;
  isTransitioning: boolean;
}

const TransitionContext = createContext<TransitionContextValue>({
  navigateTo: () => {},
  isTransitioning: false,
});

export function useTransition() {
  return useContext(TransitionContext);
}

export function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { t } = useTranslation();
  
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);
  const initialized = useRef(false);
  
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prevPathname = useRef(pathname);

  // SVG Paths
  const initialPath = "M0 100 Q50 100 100 100 L100 100 Q50 100 0 100 Z";
  const curvedEntrancePath = "M0 100 Q50 0 100 100 L100 100 Q50 100 0 100 Z";
  const flatPath = "M0 100 Q50 100 100 100 L100 0 Q50 0 0 0 Z";
  const curvedExitPath = "M0 0 Q50 100 100 0 L100 0 Q50 0 0 0 Z";
  const finalPath = "M0 0 Q50 0 100 0 L100 0 Q50 0 0 0 Z";

  const animateIn = useCallback((): Promise<void> => {
    return new Promise((resolve) => {
      if (isAnimatingRef.current || !pathRef.current || !textRef.current) return resolve();
      isAnimatingRef.current = true;

      const tl = gsap.timeline({
        onComplete: () => {
          isAnimatingRef.current = false;
          resolve();
        },
      });

      tl.set(containerRef.current, { visibility: "visible" })
        .set(pathRef.current, { attr: { d: initialPath } })
        .set(textRef.current, { opacity: 0 })
        .to(pathRef.current, {
          attr: { d: curvedEntrancePath },
          duration: 0.5,
          ease: "power3.in",
        })
        .to(pathRef.current, {
          attr: { d: flatPath },
          duration: 0.5,
          ease: "power3.out",
        })
        .to(textRef.current, {
          opacity: 1,
          duration: 0.3,
        }, "-=0.2")
        .to({}, { duration: 0.8 });
    });
  }, []);

  const animateOut = useCallback((): Promise<void> => {
    return new Promise((resolve) => {
      if (isAnimatingRef.current || !pathRef.current || !textRef.current) return resolve();
      isAnimatingRef.current = true;

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(containerRef.current, { visibility: "hidden" });
          isAnimatingRef.current = false;
          resolve();
        },
      });

      tl.to(textRef.current, {
        opacity: 0,
        duration: 0.3,
      })
      .to(pathRef.current, {
        attr: { d: curvedExitPath },
        duration: 0.6,
        ease: "power3.in",
      })
      .to(pathRef.current, {
        attr: { d: finalPath },
        duration: 0.4,
        ease: "power3.out",
      });
    });
  }, []);

  const navigateTo = useCallback(
    async (href: string) => {
      if (isAnimatingRef.current || href === pathname) return;
      setIsTransitioning(true);

      await animateIn();
      router.push(href);
    },
    [pathname, router, animateIn],
  );

  useEffect(() => {
    if (pathname !== prevPathname.current) {
      prevPathname.current = pathname;
      animateOut().then(() => {
        setIsTransitioning(false);
      });
    }
  }, [pathname, animateOut]);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const handleInitialLoad = async () => {
      setIsTransitioning(true);
      gsap.set(containerRef.current, { visibility: "visible" });
      gsap.set(pathRef.current, { attr: { d: flatPath } });
      gsap.set(textRef.current, { opacity: 1 });
      
      await gsap.to({}, { duration: 1 });
      await animateOut();
      setIsTransitioning(false);
    };

    handleInitialLoad();
  }, [animateOut]);

  return (
    <TransitionContext.Provider value={{ navigateTo, isTransitioning }}>
      <div
        ref={containerRef}
        className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center overflow-hidden"
        style={{ visibility: "hidden" }}
      >
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            ref={pathRef}
            fill="var(--foreground)"
            d={initialPath}
          />
        </svg>
        
        <div ref={textRef} className="relative z-10 text-center pointer-events-none px-6">
          <h2 className="text-[clamp(2.5rem,7vw,5rem)] font-black tracking-tighter text-background leading-[1]">
            {t("preloader.title")}
          </h2>
          <p className="text-[clamp(1rem,2vw,1.5rem)] font-bold uppercase tracking-[0.4em] text-accent mt-6">
            {t("preloader.subtitle")}
          </p>
        </div>
      </div>
      {children}
    </TransitionContext.Provider>
  );
}
