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

const STRIP_COUNT = 3;
const DURATION = 0.65;
const STAGGER = 0.07;
const EASE_IN = "power3.inOut";
const EASE_OUT = "power3.inOut";

export function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const stripsRef = useRef<HTMLDivElement[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isAnimating = useRef(false);
  const prevPathname = useRef(pathname);

  const setStrip = useCallback((el: HTMLDivElement | null, index: number) => {
    if (el) stripsRef.current[index] = el;
  }, []);

  const getInitialX = (index: number) => (index % 2 === 0 ? "-100%" : "100%");

  const animateIn = useCallback((): Promise<void> => {
    return new Promise((resolve) => {
      const strips = stripsRef.current;
      if (!strips.length) return resolve();

      gsap.set(strips, { xPercent: 0 });

      gsap.to(strips, {
        xPercent: (i) => (i % 2 === 0 ? -100 : 100),
        duration: DURATION,
        ease: EASE_OUT,
        stagger: STAGGER,
        onComplete: () => {
          gsap.set(strips, { xPercent: (i) => (i % 2 === 0 ? -100 : 100) });
          resolve();
        },
      });
    });
  }, []);

  const animateOut = useCallback((): Promise<void> => {
    return new Promise((resolve) => {
      const strips = stripsRef.current;
      if (!strips.length) return resolve();

      gsap.set(strips, { xPercent: (i) => (i % 2 === 0 ? -100 : 100) });

      gsap.to(strips, {
        xPercent: 0,
        duration: DURATION,
        ease: EASE_IN,
        stagger: STAGGER,
        onComplete: resolve,
      });
    });
  }, []);

  const navigateTo = useCallback(
    async (href: string) => {
      if (isAnimating.current || href === pathname) return;
      isAnimating.current = true;
      setIsTransitioning(true);

      await animateOut();
      router.push(href);
    },
    [pathname, router, animateOut],
  );

  useEffect(() => {
    if (pathname !== prevPathname.current) {
      prevPathname.current = pathname;

      animateIn().then(() => {
        setIsTransitioning(false);
        isAnimating.current = false;
      });
    }
  }, [pathname, animateIn]);

  useEffect(() => {
    const strips = stripsRef.current;
    if (!strips.length) return;

    gsap.set(strips, { xPercent: (i) => (i % 2 === 0 ? -100 : 100) });

    animateOut().then(() =>
      animateIn().then(() => {
        setIsTransitioning(false);
      }),
    );
  }, []);

  return (
    <TransitionContext.Provider value={{ navigateTo, isTransitioning }}>
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          pointerEvents: isTransitioning ? "all" : "none",
        }}
      >
        {Array.from({ length: STRIP_COUNT }).map((_, i) => (
          <div
            key={i}
            ref={(el) => setStrip(el, i)}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              height: `${100 / STRIP_COUNT}%`,
              top: `${(100 / STRIP_COUNT) * i}%`,
              backgroundColor: i === 1 ? "var(--accent)" : "var(--surface)",
              transform: `translateX(${getInitialX(i)})`,
              willChange: "transform",
            }}
          />
        ))}
      </div>
      {children}
    </TransitionContext.Provider>
  );
}
