import About from "@/components/About";
import ContactAndFooter from "@/components/Contact";
import ExperienceSection from "@/components/ExperienceSection";
import Hero from "@/components/Hero";
import ProjectSectionSlide from "@/components/ProjectSectionSlide";
import ProjectGrid from "@/components/Projets";
import StackSection from "@/components/stack";

export default function Home() {
  return (
    <main className="pt-15">
      <Hero />
      <About />
      <ProjectSectionSlide />
      <ExperienceSection />
      <StackSection />
      <ProjectGrid />
      <ContactAndFooter />
    </main>
  );
}
