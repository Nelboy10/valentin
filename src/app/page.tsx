import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StorySection from '@/components/StorySection';
import ComparisonSection from '@/components/ComparisonSection';
import GiftNotePreview from '@/components/GiftNotePreview';
import LoveRitualSection from '@/components/LoveRitualSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import FloatingParticles from '@/components/FloatingParticles';
import SpotlightCursor from '@/components/SpotlightCursor';
import Preloader from '@/components/Preloader';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Preloader />
      <SpotlightCursor />
      <FloatingParticles />
      <Header />
      <HeroSection />
      <StorySection />
      <ComparisonSection />
      <GiftNotePreview />
      <LoveRitualSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
