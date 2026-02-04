import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import CustomCursor from "@/components/CustomCursor";
import FilRouge from "@/components/FilRouge";
import DynamicTitle from "@/components/DynamicTitle";
import SoundManager from "@/components/SoundManager";
import GsapRegistry from "@/components/GsapRegistry";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "EternalPlush - Saint-Valentin",
  description: "Le témoin de vos plus beaux 'Je t'aime'.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <body className={`${jakarta.variable} ${playfair.variable} antialiased bg-background-light dark:bg-background-dark text-white cursor-none`}>
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
