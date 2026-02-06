'use client';

import { motion } from 'framer-motion';
import { Flower2, Heart } from 'lucide-react';
import { useState } from 'react';

import SectionDivider from '@/components/SectionDivider';

export default function ComparisonSection() {
    const [hovered, setHovered] = useState<null | 'classic' | 'eternal'>(null);

    return (
        <section className="relative z-10 py-32 px-6">
            <SectionDivider position="top" fill="transparent" /> {/* Transparent or matching red if needed, but transparent lets gradient show */}
            <div className="max-w-[960px] mx-auto">


                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-text-main text-center mb-20 tracking-tight"
                >
                    Pourquoi Elle Va L'Adorer
                </motion.h2>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.15 } }
                    }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {/* Standard Gift */}
                    {/* Timeless */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
                        }}
                        className="flex flex-col items-center text-center p-8 rounded-[2rem] border border-primary/5 bg-white shadow-[0_10px_40px_-10px_rgba(255,20,147,0.1)] hover:shadow-[0_20px_60px_-10px_rgba(255,20,147,0.2)] hover:border-primary/20 hover:-translate-y-2 transition-all duration-300"
                    >
                        <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                            <Flower2 className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-text-main">Intemporel</h3>
                        <p className="opacity-70 leading-relaxed text-text-muted">Un symbole classique d'amour qui traverse le temps, bien plus durable que des fleurs.</p>
                    </motion.div>

                    {/* Soft */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
                        }}
                        className="flex flex-col items-center text-center p-8 rounded-[2rem] border border-primary/5 bg-white shadow-[0_10px_40px_-10px_rgba(255,20,147,0.1)] hover:shadow-[0_20px_60px_-10px_rgba(255,20,147,0.2)] hover:border-primary/20 hover:-translate-y-2 transition-all duration-300"
                    >
                        <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6">
                            {/* Using Heart as cloud replacement or generic soft icon */}
                            <Heart className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-text-main">Douceur Absolue</h3>
                        <p className="opacity-70 leading-relaxed text-text-muted">Fausse fourrure premium hypoallergénique et pattes lestées pour un câlin parfait.</p>
                    </motion.div>

                    {/* Romantic */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
                        }}
                        className="flex flex-col items-center text-center p-8 rounded-[2rem] border border-primary/5 bg-white shadow-[0_10px_40px_-10px_rgba(255,20,147,0.1)] hover:shadow-[0_20px_60px_-10px_rgba(255,20,147,0.2)] hover:border-primary/20 hover:-translate-y-2 transition-all duration-300"
                    >
                        <div className="w-16 h-16 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                            <Heart className="w-8 h-8 fill-current" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-text-main">Romantique</h3>
                        <p className="opacity-70 leading-relaxed text-text-muted">Le geste ultime conçu pour créer un souvenir impérissable ce 14 Février.</p>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
