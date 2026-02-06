'use client';

import { triggerHeartExplosion } from '@/utils/confetti';
import { motion } from 'framer-motion';
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
                {/* Removed white gradient overlay to show global red gradient */}
                <div className="absolute -inset-4 bg-primary/10 rounded-xl blur-3xl opacity-50"></div>
                <ThreeConstellation />
            </div>

            <div className="relative z-10 w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-4 items-center">

                {/* Text Content */}
                {/* Text Content */}
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
                    className="order-2 md:order-1 flex flex-col justify-center text-center md:text-left"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="flex flex-col gap-4 mb-8"
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm">Édition Signature • Série Limitée</span>
                        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-text-main">
                            Plus Qu'un Cadeau, <br /> Une Preuve <span className="text-secondary">d'Amour</span>
                        </h1>
                        <p className="text-lg opacity-80 max-w-lg leading-relaxed text-text-muted mx-auto md:mx-0">
                            Offrez l'éternité dans un regard. Une pièce unique, conçue pour immortaliser vos sentiments et faire battre son cœur.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                        className="flex flex-col sm:flex-row gap-4 mb-8 justify-center md:justify-start"
                    >
                        <button
                            onClick={triggerHeartExplosion}
                            className="flex-1 lg:flex-none min-w-[240px] h-16 rounded-full bg-secondary text-white text-lg font-bold shadow-xl shadow-secondary/30 hover:bg-red-600 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95"
                        >
                            <span>Lui Offrir l'Exception</span>
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="flex items-center justify-center md:justify-start gap-4 text-sm font-medium opacity-70 text-text-muted"
                    >
                        <span className="flex items-center gap-1 text-green-600">● Stock Limité</span>
                        <span className="flex items-center gap-1 text-green-600">● Expédition Prioritaire</span>
                    </motion.div>
                </motion.div>

                {/* Hero Image */}
                <div className="order-1 md:order-2 flex justify-center md:justify-end relative translate-x-4 md:translate-x-0">
                    <HeroMainImage />
                </div>
            </div>
        </section>
    );
}
