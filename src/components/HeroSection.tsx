'use client';

import { triggerHeartExplosion } from '@/utils/confetti';
import MagneticWrapper from '@/components/MagneticWrapper';
import ThreeConstellation from '@/components/ThreeConstellation';
import SpotlightReveal from '@/components/SpotlightReveal';
import HeroMainImage from '@/components/HeroMainImage';
import useSound from 'use-sound';

export default function HeroSection() {
    const [playHover] = useSound('https://assets.mixkit.co/sfx/preview/mixkit-modern-click-box-check-1120.mp3', { volume: 0.5 });

    return (
        <section className="relative min-h-[100dvh] flex items-center justify-center px-6 overflow-hidden pt-32 md:pt-40 pb-20">
            {/* Background - Interactive */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/80 to-background-dark z-10 pointer-events-none"></div>
                <ThreeConstellation />
                <SpotlightReveal text="Pour toujours dans mon cœur..." className="z-0" />
            </div>

            <div className="relative z-10 w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Text Content */}
                <div className="text-center md:text-left order-2 md:order-1">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-white mb-6 md:mb-8 leading-[1.1]">
                        <span className="block text-white/90">Le témoin de</span>
                        <span className="block">vos plus beaux</span>
                        <span className="font-serif italic text-primary mt-2 block">&quot;Je t&apos;aime&quot;</span>
                    </h1>

                    <p className="text-lg md:text-xl text-text-muted font-light mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
                        Plus qu&apos;une peluche, une promesse. <br />
                        Un chef-d&apos;œuvre de douceur conçu pour traverser le temps et sceller votre affection.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
                        <MagneticWrapper>
                            <button
                                onClick={triggerHeartExplosion}
                                onMouseEnter={() => playHover()}
                                className="relative group bg-primary text-white px-10 py-5 rounded-full text-lg font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(238,43,75,0.3)] hover:shadow-[0_0_60px_rgba(238,43,75,0.5)]"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-shine" />
                                <span className="relative z-10 flex items-center gap-2">
                                    Offrir l'Exception
                                </span>
                            </button>
                        </MagneticWrapper>

                        <MagneticWrapper>
                            <button
                                onMouseEnter={() => playHover()}
                                className="group text-white/90 border border-white/10 px-10 py-5 rounded-full text-lg font-medium hover:bg-white/5 transition-all flex items-center gap-2 backdrop-blur-sm"
                            >
                                <span>Découvrir l&apos;histoire</span>
                                <span className="block transition-transform group-hover:translate-x-1">→</span>
                            </button>
                        </MagneticWrapper>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="order-1 md:order-2 flex justify-center md:justify-end">
                    <HeroMainImage />
                </div>
            </div>
        </section>
    );
}
