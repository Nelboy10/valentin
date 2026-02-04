'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { BadgeCheck, ScrollText } from 'lucide-react';
import { useRef } from 'react';
import TiltWrapper from '@/components/TiltWrapper';

export default function StorySection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

    return (
        <section ref={ref} className="py-32 px-6 bg-background-dark relative z-10">
            <div className="max-w-[1200px] mx-auto text-center space-y-20">

                <div className="space-y-6">
                    <motion.span
                        initial={{ opacity: 0, letterSpacing: "0.2em" }}
                        whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
                        transition={{ duration: 1 }}
                        className="text-primary text-sm font-bold uppercase block"
                    >
                        L&apos;Essence
                    </motion.span>
                    <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight">Douceur infinie</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Levitating Container + 3D Tilt */}
                    <TiltWrapper className="order-2 md:order-1 relative aspect-square group perspective-1000">
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
                            className="w-full h-full rounded-3xl overflow-hidden bg-white/5 border border-white/10 relative"
                        >
                            <motion.div
                                style={{ y: imgY, scale: 1.1 }}
                                className="w-full h-full bg-cover bg-center transition-transform duration-700"
                            >
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBg28xUwAkRJF0q5aUzvEIcVMlwVPfwq_nWKWpt6sIQJNA9UtcfiCHfTl2tQB_TqXgDqv6wVsO9tiObhn6pPrSpzpGgmh6DD_GSlcFiGLwwV4hIc3KP0LR4mmzRRds1jkhCmX4Mftt_i_JypRTQsjrDv9LbrrR603Pu-BqKu0FswQijwFTahytScqrpX00ewbR4C5G7hk-l3r3vCOoaEfFem6NrEuWymOpKxu71aRDoGGi99QWAxIqxrzQ1vCh7n9smS8W_QRcPlBZC')" }}
                                />
                            </motion.div>
                            {/* Overlay Shine */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    </TiltWrapper>

                    <div className="text-left space-y-8 px-4 md:px-0 order-1 md:order-2">
                        <motion.h3
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-light text-white/90"
                        >
                            Présence <br /><span className="font-bold text-white">Rassurante</span>
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-white/50 leading-relaxed font-light"
                        >
                            Plus qu&apos;un simple objet, c&apos;est une promesse de réconfort nocturne et un ancrage émotionnel permanent dans votre foyer.
                        </motion.p>

                        <div className="pt-4 space-y-4">
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
                                    className="flex items-center gap-4 text-white/80 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                                >
                                    <div className="p-2 rounded-full bg-primary/20 text-primary">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <span className="text-lg">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
