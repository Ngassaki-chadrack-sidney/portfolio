"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface NavItem {
    id: string;
    label: string;
    href: string;
}

interface FloatingNavbarProps {
    items: NavItem[];
    className?: string;
    textColor?: string;
    hoverColor?: string;
}

export default function FloatingNavbar({
    items,
    className = "",
    textColor = "text-gray-400",
    hoverColor = "text-white",
}: FloatingNavbarProps) {
    const [activeSection, setActiveSection] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    // --- OPTIMISATION PERFORMANCE : Intersection Observer ---
    // Plus performant que de calculer l'offsetTop dans un listener de scroll
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-40% 0px -40% 0px", // Déclenche quand la section est au milieu
            threshold: 0,
        };

        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);

        items.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        // Visibilité de la barre au scroll
        const handleScroll = () => {
            setIsVisible(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);
        };
    }, [items]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.nav
                    initial={{ y: -100, x: "-50%", opacity: 0 }}
                    animate={{ y: 0, x: "-50%", opacity: 1 }}
                    exit={{ y: -100, x: "-50%", opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className={`fixed top-6 left-1/2 z-50 w-[90%] md:w-auto ${className}`}
                >
                    <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-full p-2 shadow-2xl">
                        <ul className="flex items-center justify-around md:justify-center gap-1">
                            {items.map((item) => {
                                const isActive = activeSection === item.id;

                                return (
                                    <li key={item.id} className="relative">
                                        <Link
                                            href={item.href}
                                            className={`relative px-4 py-2 text-xs md:text-sm lg:text-base font-medium transition-colors flex items-center justify-center rounded-full outline-none`}
                                        >
                                            {/* --- EFFET DE HOVER / ACTIVE (PILL) --- */}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="active-pill"
                                                    className="absolute inset-0 bg-blue-600/20 border border-blue-500/30 rounded-full"
                                                    transition={{ type: "spring", duration: 0.5 }}
                                                />
                                            )}

                                            <motion.span
                                                className={`relative z-10 ${isActive ? "text-blue-400" : textColor
                                                    } hover:${hoverColor}`}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                {item.label}
                                            </motion.span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
    );
}