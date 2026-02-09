'use client';

import { motion } from 'framer-motion';
import { Truck, ArrowRight } from 'lucide-react';
import { triggerHeartExplosion } from '@/utils/confetti';
import MagneticWrapper from '@/components/MagneticWrapper';

export default function FinalCTA() {
    return (
        <section className="py-32 px-6 text-center relative overflow-hidden">
            {/* Background Pulse */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/20 blur-[100px] rounded-full animate-pulse" />

            <div className="max-w-4xl mx-auto space-y-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-5xl md:text-8xl font-extrabold text-text-main tracking-tighter leading-none">
                        Marquez son cœur <br />
                        <span className="text-primary">pour toujours</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-text-muted font-light max-w-2xl mx-auto">
                        Ne laissez pas passer l&apos;occasion d&apos;offrir plus qu&apos;un objet : offrez une émotion durable.
                    </p>
                </motion.div>

                <div className="pt-4 flex flex-col items-center gap-8">
                    <MagneticWrapper>
                        <motion.button
                            onClick={triggerHeartExplosion}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative inline-flex items-center justify-center px-8 py-4 md:px-12 md:py-8 font-bold text-primary transition-all bg-white rounded-full hover:shadow-[0_0_80px_rgba(255,255,255,0.4)] overflow-hidden"
                        >
                            <span className="relative z-10 text-lg md:text-2xl tracking-tight mr-2 block md:hidden">Je le veux</span>
                            <span className="relative z-10 text-2xl tracking-tight mr-2 hidden md:block">Recevoir mon cadeau</span>
                            <ArrowRight className="relative z-10 w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-2" />

                            {/* Hover Glare */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-100/30 to-transparent translate-x-[-100%] group-hover:animate-shine" />
                        </motion.button>
                    </MagneticWrapper>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="text-text-muted text-sm flex items-center justify-center gap-2 uppercase tracking-widest font-medium"
                    >
                        <Truck className="w-4 h-4" />
                        Livraison express offerte
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
