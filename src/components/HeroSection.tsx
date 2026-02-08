'use client';

import { triggerHeartExplosion } from '@/utils/confetti';
import { motion } from 'framer-motion';
import MagneticWrapper from '@/components/MagneticWrapper';

import HeroMainImage from '@/components/HeroMainImage';
import useSound from 'use-sound';
import AliveText from './AliveText';

export default function HeroSection() {
    const [playHover] = useSound('https://assets.mixkit.co/sfx/preview/mixkit-modern-click-box-check-1120.mp3', { volume: 0.5 });

    return (

        <section className="relative z-50 min-h-[100dvh] flex items-center justify-center px-6 pt-32 md:pt-40 pb-20">
            {/* Background - Interactive (Clipped) */}
            <div className="absolute inset-0 z-0 overflow-hidden rounded-b-[3rem]">
                {/* Removed white gradient overlay to show global red gradient */}
                <div className="absolute -inset-4 bg-primary/10 rounded-xl blur-3xl opacity-50"></div>

            </div>

            <div className="relative z-10 w-full max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-8 items-center justify-items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
                    className="order-2 md:order-1 flex flex-col justify-center text-center md:text-left"
                >
                    <AliveText />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                        className="flex flex-col sm:flex-row gap-4 mb-8 justify-center md:justify-start"
                    >
                        <button
                            onClick={triggerHeartExplosion}
                            className="relative overflow-hidden flex-1 lg:flex-none min-w-[240px] h-16 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-lg font-bold shadow-xl shadow-secondary/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group animate-pulse-subtle"
                        >
                            {/* Sheen effect */}
                            <div className="absolute inset-0 -translate-x-[120%] group-hover:animate-shine bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-0 pointer-events-none" />
                            <span className="relative z-10">Lui Offrir l'Exception</span>
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
