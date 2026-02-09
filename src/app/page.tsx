'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ComparisonSection from '@/components/ComparisonSection';
import ProductShowcase from '@/components/ProductShowcase';
import StorySection from '@/components/StorySection';
import PriceOffer from '@/components/PriceOffer';
import Reassurance from '@/components/Reassurance';
import Reviews from '@/components/Reviews';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import LoveAtmosphere from '@/components/LoveAtmosphere';
import SpotlightCursor from '@/components/SpotlightCursor';
import React from 'react';
import LoveRitual from '@/components/LoveRitual';
import LoveCode from '@/components/LoveCode';
import StickyCTA from '@/components/StickyCTA';

import { PlushAnimationProvider } from '@/context/PlushAnimationContext';
import { AnimatePresence } from 'framer-motion';

export default function Home() {
  const [showRitual, setShowRitual] = React.useState(true);

  // Structured Data (JSON-LD)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'EternalPlush - Saint Valentin Edition',
    image: 'https://valentine-plush.vercel.app/challengeimage.png',
    description: 'Une peluche premium en édition limitée pour la Saint-Valentin. Finition velours, cœur lumineux et douceur incomparable.',
    brand: {
      '@type': 'Brand',
      name: 'EternalPlush'
    },
    offers: {
      '@type': 'Offer',
      url: 'https://valentine-plush.vercel.app',
      priceCurrency: 'EUR',
      price: '49.00',
      priceValidUntil: '2025-02-15',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1240'
    }
  };

  return (
    <PlushAnimationProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen relative selection:bg-primary selection:text-white">
        <AnimatePresence>
          {showRitual && <LoveRitual onComplete={() => setShowRitual(false)} />}
        </AnimatePresence>

        {/* <SpotlightCursor /> Removed spotlight cursor as it might conflict with white theme visibility or needed adjustment */}
        <LoveAtmosphere />
        <LoveCode />
        <Header />

        {/* 1. Hero section */}
        <HeroSection />

        {/* 2. Pourquoi offrir cette peluche (Comparison: Classic vs Eternal) */}
        <ComparisonSection />

        {/* 3. Présentation de la peluche */}
        <ProductShowcase />

        {/* 4. Bénéfices et valeur émotionnelle */}
        <StorySection />

        {/* 5. Prix et offre */}
        <PriceOffer />

        {/* 6. Éléments de réassurance */}
        <Reassurance />

        {/* 7. Avis / preuve sociale */}
        <Reviews />

        {/* 8. Call-to-action final */}
        <FinalCTA />

        <Footer />
        <StickyCTA />
      </main>
    </PlushAnimationProvider>
  );
}
