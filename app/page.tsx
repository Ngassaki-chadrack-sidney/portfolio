import FloatingNavbar from "@/components/floatingNavBar";
import Contact from "@/components/section/contact";
import Experiences from "@/components/section/experiences";
import Footer from "@/components/section/footer";
import Header from "@/components/section/header";
import Project from "@/components/section/project";
import Stack from "@/components/section/stack";

export default function Home() {
  const navItems = [
    { id: "home", label: "Principal", href: "#home" },
    { id: "stack", label: "Stack", href: "#stack" },
    { id: "projet", label: "Projet", href: "#projets" },
    { id: "contact", label: "Contact", href: "#contact" },
    { id: "cv", label: "CV", href: "cv" },
  ]

  return (
    <main style={{ height: "100vh" }} className="pt-15">
      <FloatingNavbar
        items={navItems}
        hoverColor="text-blue-500"
      />
      <Header />
      <Stack />
      <Project />
      <Experiences />
      <Contact />
      <Footer key={"1"} />
    </main>
  );
}
