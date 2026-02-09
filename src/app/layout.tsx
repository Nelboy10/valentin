import type { Metadata } from "next";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import CustomCursor from "@/components/CustomCursor";
import FilRouge from "@/components/FilRouge";
import DynamicTitle from "@/components/DynamicTitle";
import SoundManager from "@/components/SoundManager";
import GsapRegistry from "@/components/GsapRegistry";

export const metadata: Metadata = {
  metadataBase: new URL('https://valentine-plush.vercel.app'), // Replace with actual domain if known, or localhost for now
  title: {
    default: "EternalPlush - Le Cadeau Saint-Valentin Inoubliable",
    template: "%s | EternalPlush"
  },
  description: "Plus qu'une peluche, une preuve d'amour éternelle. Découvrez le cadeau ultime pour la Saint-Valentin scellé d'une promesse.",
  keywords: ["peluche saint valentin", "cadeau couple", "ours éternel", "cadeau romantique", "peluche luxe", "valentines day gift", "teddy bear"],
  authors: [{ name: "EternalPlush Team" }],
  creator: "EternalPlush",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: 'https://valentine-plush.vercel.app',
    title: "EternalPlush - Offrez l'Éternité",
    description: "Le cadeau qui capture vos sentiments pour toujours. Une peluche premium, une expérience inoubliable.",
    siteName: "EternalPlush",
    images: [
      {
        url: '/challengeimage.png', // Assuming this is available in public
        width: 1200,
        height: 630,
        alt: "EternalPlush - L'Ours de la Saint-Valentin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EternalPlush - Le Cadeau Ultime",
    description: "Faites de cette Saint-Valentin un moment magique avec EternalPlush.",
    images: ['/challengeimage.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/challengeimage.png',
    shortcut: '/challengeimage.png',
    apple: '/challengeimage.png',
  },
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
