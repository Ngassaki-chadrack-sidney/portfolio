import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LenisProvider } from "@/components/Lenis/LenisProvider";
import localFont from "next/font/local";
import PageTransistion from "@/components/animations/PageTransistion";

const customFont = localFont({
  src: "../public/font.ttf",
  display: "swap",
  variable: "--font-custom",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ngassaki-chadrack.com"),
  title: {
    default: "NGASSAKI Chadrack | Développeur Full-Stack & Mobile",
    template: "%s | NGASSAKI Chadrack",
  },
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
    "Brazzaville",
    "Congo",
  ],
  authors: [{ name: "NGASSAKI Chadrack", url: "https://ngassaki-chadrack.com" }],
  creator: "NGASSAKI Chadrack",
  publisher: "NGASSAKI Chadrack",
  alternates: {
    canonical: "/",
  },
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
        url: "/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "NGASSAKI Chadrack - Développeur Web & mobile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NGASSAKI Chadrack | Développeur Full-Stack & Mobile",
    description:
      "Développeur Full-Stack & Mobile passionné. Je crée des solutions performantes et innovantes.",
    images: ["/profile.jpeg"],
  },
  verification: {
    google: "ton-code-google-search-console",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${customFont.variable} font-sans bg-black text-white antialiased`}
      >
        <LenisProvider>
          <PageTransistion>{children}</PageTransistion>
        </LenisProvider>
      </body>
    </html>
  );
}