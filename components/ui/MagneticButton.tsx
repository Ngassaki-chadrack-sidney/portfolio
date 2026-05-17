"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline" | "ghost";
  magneticStrength?: number;
}

export default function MagneticButton({
  children,
  className,
  variant = "primary",
  magneticStrength = 0.5,
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const fill = fillRef.current;
    const text = textRef.current;
    if (!button || !fill || !text) return;

    const xTo = gsap.quickTo(button, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(button, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const textXTo = gsap.quickTo(text, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const textYTo = gsap.quickTo(text, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = button.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      xTo(x * magneticStrength);
      yTo(y * magneticStrength);
      textXTo(x * (magneticStrength * 0.5));
      textYTo(y * (magneticStrength * 0.5));
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = button.getBoundingClientRect();
      
      // Calculate entry point
      const x = clientX - left;
      const y = clientY - top;
      
      // Initial position of the fill circle
      gsap.set(fill, {
        x: x - (width * 1.5) / 2,
        y: y - (width * 1.5) / 2,
        width: width * 1.5,
        height: width * 1.5,
        scale: 0,
      });

      gsap.to(fill, {
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = button.getBoundingClientRect();
      
      const x = clientX - left;
      const y = clientY - top;

      gsap.to(fill, {
        x: x - (width * 1.5) / 2,
        y: y - (width * 1.5) / 2,
        scale: 0,
        duration: 0.5,
        ease: "power2.out",
      });

      xTo(0);
      yTo(0);
      textXTo(0);
      textYTo(0);
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [magneticStrength]);

  const variantStyles = {
    primary: "bg-surface text-foreground border-border",
    outline: "bg-transparent text-foreground border-foreground/20",
    ghost: "bg-transparent text-foreground border-transparent",
  };

  return (
    <button
      ref={buttonRef}
      className={cn(
        "relative group overflow-hidden px-8 py-4 rounded-full border transition-colors duration-300",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      <div
        ref={fillRef}
        className="absolute pointer-events-none rounded-full bg-accent mix-blend-difference"
        style={{ transform: "scale(0)" }}
      />
      <div ref={textRef} className="relative z-10 flex items-center justify-center gap-2 font-medium uppercase tracking-wider text-sm pointer-events-none">
        {children}
      </div>
    </button>
  );
}
