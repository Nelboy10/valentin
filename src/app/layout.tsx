import type { Metadata } from "next";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import CustomCursor from "@/components/CustomCursor";
import FilRouge from "@/components/FilRouge";
import DynamicTitle from "@/components/DynamicTitle";
import SoundManager from "@/components/SoundManager";
import GsapRegistry from "@/components/GsapRegistry";

export const metadata: Metadata = {
  title: "Valentine's Plush - The Perfect Gift",
  description: "Le témoin de vos plus beaux 'Je t'aime'.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="light scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800;900&family=Great+Vibes&display=swap" rel="stylesheet" />
      </head>
      <body className={`font-body antialiased text-text-main cursor-none`}>
        <div className="bg-noise" />
        <DynamicTitle />
        <CustomCursor />
        <SoundManager />
        <GsapRegistry />
        <FilRouge />
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
