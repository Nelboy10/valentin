'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BadgeCheck, ScrollText } from 'lucide-react';
import { useRef } from 'react';
import TiltWrapper from '@/components/TiltWrapper';

import SectionDivider from '@/components/SectionDivider';

export default function StorySection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
    const listY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);

    return (
        <section ref={ref} className="py-32 px-6 relative z-10 overflow-hidden">
            <SectionDivider position="bottom" fill="transparent" variant="wave" /> {/* Transition to Primary Color Section (PriceOffer) */}
            <div className="max-w-[1200px] mx-auto text-center space-y-20">

                <div className="space-y-6">
                    <motion.span
                        initial={{ opacity: 0, letterSpacing: "0.2em" }}
                        whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
                        transition={{ duration: 1 }}
                        className="text-primary text-sm font-bold uppercase block"
                    >
                        Bénéfices
                    </motion.span>
                    <h2 className="text-3xl md:text-7xl font-bold text-text-main tracking-tight">Valeur Émotionnelle</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Levitating Container + 3D Tilt */}
                    <TiltWrapper className="order-2 md:order-1 relative aspect-square group perspective-1000">
                        {/* Floating Particles */}
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    y: [0, -20, 0],
                                    opacity: [0.5, 1, 0.5],
                                    scale: [1, 1.2, 1]
                                }}
                                transition={{
                                    duration: 3 + i,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: i * 0.5
                                }}
                                className={`absolute w-2 h-2 rounded-full bg-primary/60 blur-[1px] z-20`}
                                style={{
                                    top: `${20 + i * 30}%`,
                                    left: `${10 + (i % 2) * 80}%`
                                }}
                            />
                        ))}
                        {/* Magical Glow Behind */}
                        <div className="absolute inset-4 bg-primary/20 blur-[50px] rounded-full z-0 animate-pulse pointer-events-none" />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                y: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                            className="w-full h-full rounded-[2rem] overflow-hidden bg-white hover:shadow-[0_20px_50px_-10px_rgba(255,20,147,0.3)] border border-rose-100 relative z-10 shadow-2xl transition-shadow duration-500"
                        >
                            <motion.div
                                style={{ y: imgY, scale: 1.1 }}
                                className="w-full h-full relative"
                            >
                                <Image
                                    src="/amour.png"
                                    alt="Amour et Douceur"
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </motion.div>
                            {/* Overlay Shine */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </motion.div>
                    </TiltWrapper>

                    <div className="text-left space-y-8 px-4 md:px-0 order-1 md:order-2">
                        <motion.div style={{ y: textY }}>
                            <motion.h3
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-5xl font-light text-text-main"
                            >
                                Présence <br /><span className="font-bold text-primary">Rassurante</span>
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-xl text-text-muted leading-relaxed font-light mt-8"
                            >
                                Plus qu&apos;un simple objet, c&apos;est une promesse de réconfort nocturne et un ancrage émotionnel permanent dans votre foyer.
                            </motion.p>
                        </motion.div>

                        <motion.div style={{ y: listY }} className="pt-4 space-y-4">
                            {[
                                { icon: BadgeCheck, text: "Matériaux premium hypoallergéniques" },
                                { icon: ScrollText, text: "Certificat d'authenticité inclus" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + (i * 0.1) }}
                                    className="flex items-center gap-4 text-text-main p-4 rounded-xl hover:bg-white/50 transition-colors border border-transparent hover:border-rose-100"
                                >
                                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <span className="text-lg">{item.text}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
            {/* Smooth transition to next section */}
            {/* Removed white gradient fade */}
        </section>
    );
}
