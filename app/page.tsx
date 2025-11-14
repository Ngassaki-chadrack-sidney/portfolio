import Footer from "@/components/section/footer";
import Header from "@/components/section/header";
import { Navigation } from "@/components/section/menuBar";
import Project from "@/components/section/project";
import Stack from "@/components/section/stack";

export default function Home() {
  return (
    <main style={{ height: "100vh" }} className="pt-15">
      <Navigation />
      <Header />
      <Stack />
      <Project />
      <Footer />
    </main>
  );
}
