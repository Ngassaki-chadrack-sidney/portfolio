import StaggeredMenu from "@/components/StaggeredMenu";

const menuItems = [
  { label: "Portfolio", ariaLabel: "Portfolio", link: "/" },
  { label: "Stack", ariaLabel: "Stack", link: "#stack" },
  { label: "Projets", ariaLabel: "Projets", link: "/projets" },
  { label: "CV", ariaLabel: "CV", link: "/cv" },
];

const socialMedia = [
  { label: "LinkedIn", link: "https://linkedin.com" },
  { label: "GitHub", link: "https://github.com" },
  { label: "WhatsApp", link: "https://whatsapp.com" },
];

export const Navigation = () => {
  return (
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
      className=""
      logoUrl="/logo.png"
    />
  );
};
