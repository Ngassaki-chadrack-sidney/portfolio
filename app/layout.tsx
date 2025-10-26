import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import localFont from "next/font/local";
import GlobalHeader from "@/components/GlobalHeader";

const clashDisplay = localFont({
  src: [
    {
      path: "../public/fonts/ClashDisplay/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/ClashDisplay/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
});

export const metadata: Metadata = {
  title: "NGASSAKI Chadrack Sidney",
  description:
    "Je suis NGASSAKI Chadrack Sidney, développeur web & mobile spécialisé dans la création d’interfaces modernes, élégantes et performantes.À travers des technologies de pointe et un design soigné, je transforme vos idées en solutions digitales qui captivent, engagent et inspirent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" title="NGASSAKI Chadrack portfolio dev">
      <body
        className={`text-foreground antialiased selection:bg-accent selection:text-accent-foreground overflow-x-hidden ${clashDisplay.className}`}
      >
        <LenisProvider>
          <GlobalHeader />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
