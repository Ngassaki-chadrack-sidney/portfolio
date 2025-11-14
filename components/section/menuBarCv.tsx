import StaggeredMenu from "@/components/StaggeredMenu";

const menuItems = [
  { label: "Portfolio", ariaLabel: "Portfolio", link: "/" },
  { label: "Stack", ariaLabel: "Stack", link: "/" },
  { label: "Projets", ariaLabel: "Projets", link: "/" },
  { label: "CV", ariaLabel: "CV", link: "/cv" },
];

const socialMedia = [
  { label: "LinkedIn", link: "https://linkedin.com" },
  { label: "GitHub", link: "https://github.com" },
  { label: "WhatsApp", link: "https://whatsapp.com" },
];

export const NavigationCv = () => {
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
