import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LenisProvider } from "@/components/Lenis/LenisProvider";
import localFont from "next/font/local";
import PageTransistion from "@/components/animations/PageTransistion";

const customFont = localFont({
  src: "../public/font.ttf",
});

export const metadata: Metadata = {
  title: "NGASSAKI Chadrack | Développeur Full-Stack & Mobile",
  description:
    "Développeur Full-Stack & Mobile passionné. Je crée des solutions performantes et innovantes avec React, Next.js, Node.js et Flutter. Découvrez mon portfolio et mes projets.",
  keywords: [
    "NGASSAKI Chadrack",
    "développeur",
    "développeur web",
    "développeur mobile",
    "full-stack",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Flutter",
    "portfolio",
    "freelance",
  ],
  authors: [{ name: "NGASSAKI Chadrack" }],
  creator: "NGASSAKI Chadrack",
  publisher: "NGASSAKI Chadrack",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://ngassaki-chadrack.com",
    siteName: "NGASSAKI Chadrack - Portfolio",
    title: "NGASSAKI Chadrack | Développeur Full-Stack & Mobile",
    description:
      "Développeur Full-Stack & Mobile passionné. Je crée des solutions performantes et innovantes avec React, Next.js, Node.js et Flutter.",
    images: [
      {
        url: "https://ngassaki-chadrack.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "NGASSAKI Chadrack - Développeur Full-Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NGASSAKI Chadrack | Développeur Full-Stack & Mobile",
    description:
      "Développeur Full-Stack & Mobile passionné. Je crée des solutions performantes et innovantes.",
    images: ["https://ngassaki-chadrack.com/og-image.png"],
  },
  alternates: {
    canonical: "https://ngassaki-chadrack.com",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://ngassaki-chadrack.com" />
      </head>
      <body
        className={`${customFont.className} bg-black text-white antialiased`}
      >
        <LenisProvider>
          <PageTransistion>{children}</PageTransistion>
        </LenisProvider>
      </body>
    </html>
  );
}
