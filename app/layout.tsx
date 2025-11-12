import type { Metadata } from "next";
import "./globals.css";
import { LenisProvider } from "@/components/Lenis/LenisProvider";
import localFont from "next/font/local";

const customFont = localFont({
  src: "../public/font.ttf",
});

export const metadata: Metadata = {
  title: "Chadrack | Développeur Frontend",
  description:
    "Chadrack deévéloppeur web full stack et mobile. Découvrez mes projets et compétences en développement web et mobile.",
  keywords: [
    "ngassaki",
    "chadrack",
    "ngassaki chadrack",
    "portfolio",
    "développeur",
    "frontend",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${customFont.className} bg-black text-white antialiased`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
