import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
