'use client';

import { triggerHeartExplosion } from '@/utils/confetti';
import MagneticWrapper from '@/components/MagneticWrapper';
import ConstellationBackground from '@/components/ConstellationBackground';
import SpotlightReveal from '@/components/SpotlightReveal';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-40 pb-32">
            {/* Background - Interactive */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/80 to-background-dark z-10 pointer-events-none"></div>
                <ConstellationBackground />
                <SpotlightReveal text="Pour toujours dans mon cœur..." className="z-0" />
            </div>

            <div className="relative z-10 max-w-5xl text-center">
                <h1 className="text-4xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-8 leading-[1.1]">
                    Le témoin de vos plus beaux <br />
                    <span className="font-extrabold text-primary italic mt-2 block">&quot;Je t&apos;aime&quot;</span>
                </h1>

                <p className="text-lg md:text-2xl text-white/70 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                    Un cadeau symbolique conçu pour une connexion émotionnelle profonde,
                    une présence qui traverse le temps.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <MagneticWrapper>
                        <button
                            onClick={triggerHeartExplosion}
                            className="relative group bg-primary text-white px-10 py-5 rounded-full text-lg font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(238,43,75,0.3)] hover:shadow-[0_0_60px_rgba(238,43,75,0.5)]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-shine" />
                            <span className="relative z-10">Offrir maintenant</span>
                        </button>
                    </MagneticWrapper>

                    <MagneticWrapper>
                        <button className="group text-white/90 border border-white/10 px-10 py-5 rounded-full text-lg font-medium hover:bg-white/5 transition-all flex items-center gap-2">
                            <span>Découvrir l&apos;histoire</span>
                            <span className="block transition-transform group-hover:translate-x-1">→</span>
                        </button>
                    </MagneticWrapper>
                </div>
            </div>
        </section>
    );
}
