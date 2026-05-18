import type { Metadata, Viewport } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeProvider";
import GSAPProvider from "@/components/gsap/GSAPProvider";
import SmoothScrollProvider from "@/components/gsap/SmoothScrollProvider";
import Navigation from "@/components/layout/Navigation";
import { PageTransitionProvider } from "@/components/gsap/PageTransitionProvider";

const cabinetGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/cabinet-grotesk/CabinetGrotesk-Regular.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/cabinet-grotesk/CabinetGrotesk-Medium.otf",
      weight: "500",
    },
  ],
  display: "swap",
  variable: "--font-cabinet-grotesk",
});

const SITE_URL = "https://ngassaki-chadrack.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NGASSAKI Chadrack | Développeur Full-Stack & Mobile",
    template: "%s | NGASSAKI Chadrack",
  },
  description:
    "Développeur Full-Stack & Mobile spécialisé en React, Next.js et Flutter. Création d'applications performantes et innovantes à Brazzaville.",
  keywords: [
    "Développeur Full-Stack",
    "Next.js",
    "Flutter",
    "Brazzaville",
    "Congo",
  ],
  authors: [{ name: "NGASSAKI Chadrack" }],
  alternates: { canonical: "/" },
  verification: {
    google: "jEZynX7ElAzbTXrm5ywwWwRtKqDVbzkL5Vefz8Oa2gE",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "NGASSAKI Chadrack Portfolio",
    images: [
      {
        url: "/Chadrack.png",
        width: 1200,
        height: 630,
        alt: "NGASSAKI Chadrack - Développeur Full-Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/Chadrack.png"],
  },
  icons: {
    icon: "/Chadrack.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <meta
        name="google-site-verification"
        content="jEZynX7ElAzbTXrm5ywwWwRtKqDVbzkL5Vefz8Oa2gE"
      />
      <body className={`${cabinetGrotesk.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>
            <GSAPProvider>
              <SmoothScrollProvider>
                <PageTransitionProvider>
                  <Navigation />
                  {children}
                </PageTransitionProvider>
              </SmoothScrollProvider>
            </GSAPProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
