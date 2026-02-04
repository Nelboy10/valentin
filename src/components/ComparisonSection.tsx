'use client';

import { motion } from 'framer-motion';
import { Flower2, Heart } from 'lucide-react';
import { useState } from 'react';

export default function ComparisonSection() {
    const [hovered, setHovered] = useState<null | 'classic' | 'eternal'>(null);

    return (
        <section className="relative z-10 py-32 px-6 bg-[#1f1618]">
            <div className="max-w-[960px] mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-white text-center mb-20 tracking-tight"
                >
                    Un choix pour l&apos;éternité
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Standard Gift */}
                    <motion.div
                        onMouseEnter={() => setHovered('classic')}
                        onMouseLeave={() => setHovered(null)}
                        animate={{
                            opacity: hovered === 'eternal' ? 0.4 : 1,
                            scale: hovered === 'classic' ? 1.02 : 1,
                            y: [0, 10, 0] // Floating effect 1
                        }}

                        transition={{
                            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="group cursor-default flex flex-col gap-8 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl p-10 hover:bg-white/10 transition-colors duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                    >
                        <div className="size-16 rounded-2xl bg-white/5 flex items-center justify-center text-white/30 group-hover:text-white/80 group-hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
                            <Flower2 className="w-8 h-8" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-white/50 text-2xl font-bold group-hover:text-white transition-colors duration-300">Cadeaux Classiques</h3>
                            <p className="text-white/40 text-lg font-light leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                                Fleurs fanées après quelques jours, chocolats éphémères. Un plaisir intense mais qui s&apos;évapore rapidement.
                            </p>
                        </div>
                    </motion.div>

                    {/* Eternal Plush */}
                    <motion.div
                        onMouseEnter={() => setHovered('eternal')}
                        onMouseLeave={() => setHovered(null)}
                        animate={{
                            opacity: hovered === 'classic' ? 0.4 : 1,
                            scale: hovered === 'eternal' ? 1.05 : 1,
                            borderColor: hovered === 'eternal' ? '#ee2b4b' : 'rgba(255,255,255,0.2)',
                            y: [0, -10, 0] // Floating effect 2 (Counter sync)
                        }}

                        transition={{
                            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
                        }}
                        className="relative group cursor-default flex flex-col gap-8 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl p-10 overflow-hidden shadow-[0_8px_32px_rgba(238,43,75,0.2)]"
                    >
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />

                        <div className="relative z-10 size-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                            <Heart className="w-8 h-8 fill-current" />
                        </div>
                        <div className="relative z-10 flex flex-col gap-4">
                            <h3 className="text-white text-2xl font-bold">Un Compagnon pour la Vie</h3>
                            <p className="text-white/70 text-lg font-light leading-relaxed">
                                Mémoire tangible de vos sentiments, présence silencieuse et douceur infinie. Un lien qui se renforce avec les années.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
