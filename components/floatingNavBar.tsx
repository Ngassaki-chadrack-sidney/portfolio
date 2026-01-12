"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface NavItem {
    id: string;
    label: string;
    href: string;
}

interface FloatingNavbarProps {
    items: NavItem[];
    className?: string;
    bgColor?: string;
    textColor?: string;
    hoverColor?: string;
}

export default function FloatingNavbar({
    items,
    className = "",
    textColor = "text-white",
    hoverColor = "text-blue-500",
}: FloatingNavbarProps) {
    const [activeSection, setActiveSection] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 10);

            const sections = items.map((item) => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                if (section) {
                    const top = section.offsetTop;
                    const height = section.offsetHeight;

                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [items]);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 ${className}`}
        >
            <div
                className={`backdrop-blur-xl border-none rounded-full px-6 py-3`}
            >
                <ul className="flex items-center gap-1">
                    {items.map((item) => (
                        <li key={item.id}>
                            <Link
                                href={item.href}
                                className="relative px-6 py-2 rounded-full transition-colors cursor-pointer"
                            >
                                <span
                                    className={`relative text-lg z-10 font-medium ${activeSection === item.id ? "text-white" : textColor
                                        } hover:${hoverColor} transition-colors`}
                                >
                                    {item.label}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
}