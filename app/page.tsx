import Navbar from "@/components/ui/navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  const navItems = [
    { id: "hero", label: "Accueil", href: "#hero" },
    { id: "about", label: "À propos", href: "#about" },
    { id: "stack", label: "Stack", href: "#stack" },
    { id: "projets", label: "Projets", href: "#projets" },
    { id: "experiences", label: "Expériences", href: "#experiences" },
    { id: "contact", label: "Contact", href: "#contact" },
    { id: "cv", label: "CV", href: "/cv" },
  ]

  return (
    <main className="pt-15">
      <Navbar items={navItems} />
      <Hero />
    </main>
  );
}
