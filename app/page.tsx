import Header from "@/components/section/header";
import Stack from "@/components/section/stack";
import StaggeredMenu from "@/components/StaggeredMenu";

const menuItems = [
  { label: "Principal", ariaLabel: "Header", link: "#" },
  { label: "Ma stack", ariaLabel: "Ma stack ", link: "#" },
  // { label: "Me contacter", ariaLabel: "Me contacter", link: "#" },
  { label: "Mes projets", ariaLabel: "Projet realiser", link: "#" },
  { label: "Mon CV", ariaLabel: "Voir mon cv", link: "#" },
];

const socialMedia = [
  { label: "LindedIn", link: "" },
  { label: "GitHub", link: "" },
  { label: "WhatSapp", link: "" },
];

export default function Home() {
  return (
    <main style={{ height: "100vh" }}>
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialMedia}
        displaySocials={true}
        displayItemNumbering={false}
        menuButtonColor="white"
        openMenuButtonColor="black"
        changeMenuColorOnOpen={true}
        colors={["#B19EEF", "#5227FF"]}
        accentColor="blue"
        isFixed={true}
      />
      <div className="px-20 py-10">
        <Header />
        <Stack />
      </div>
    </main>
  );
}
