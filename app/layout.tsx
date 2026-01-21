import type { Metadata, Viewport } from "next";
import "./globals.css";
import localFont from "next/font/local";

const customFont = localFont({
  src: "../public/font.ttf", // Conseil : convertis en .woff2 pour de meilleures performances
  display: "swap",
  variable: "--font-custom",
});

// Remplace par ton URL réelle
const SITE_URL = "https://ngassaki-chadrack.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NGASSAKI Chadrack | Développeur Full-Stack & Mobile",
    template: "%s | NGASSAKI Chadrack",
  },
  description:
    "Développeur Full-Stack & Mobile spécialisé en React, Next.js et Flutter. Création d'applications performantes et innovantes à Brazzaville.",
  keywords: ["Développeur Full-Stack", "Next.js", "Flutter", "Brazzaville", "Congo"],
  authors: [{ name: "NGASSAKI Chadrack" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "NGASSAKI Chadrack Portfolio",
    images: [
      {
        url: "/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "NGASSAKI Chadrack - Développeur Full-Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/profile.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
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
    <html lang="fr">
      <body className={`${customFont.variable} font-sans bg-black text-white antialiased`}>
        {/* JSON-LD directement dans le body ou via un composant dédié est plus propre */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "NGASSAKI Chadrack",
              "url": SITE_URL,
              "image": `${SITE_URL}/profile.jpeg`,
              "jobTitle": "Développeur Full-Stack & Mobile",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Brazzaville",
                "addressCountry": "CG"
              },
              "sameAs": [
                "https://github.com/ngassaki-chadrack",
                "https://linkedin.com/in/ngassaki-chadrack"
              ]
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}