'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import SectionDivider from '@/components/SectionDivider';
import { usePlushAnimation } from '@/context/PlushAnimationContext';

const features = [
    {
        title: "Douceur Céleste",
        description: "Un textile hypoallergénique tissé avec des fibres de soie pour une sensation de nuage au toucher.",
        id: 1,
        bgPosition: "center 30%"
    },
    {
        title: "Coutures Éternelles",
        description: "Assemblé à la main avec un fil renforcé, garantissant une longévité capable de traverser les générations.",
        id: 2,
        bgPosition: "center 70%"
    },
    {
        title: "Regard Profond",
        description: "Des yeux en verre artisanaux qui captent la lumière et semblent veiller sur vous avec bienveillance.",
        id: 3,
        bgPosition: "center 20%"
    },
];

export default function ProductShowcase() {
    const containerRef = useRef(null);

    return (
        <section className="py-20 px-6 relative z-50" id="details" ref={containerRef}>
            <SectionDivider position="top" fill="transparent" />
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Image Side with Floating Labels */}
                <div className="relative h-[600px] w-full flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center">
                        {/* Placeholder Background */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-[2rem] pointer-events-none border border-primary/5" />

                        <div className="relative w-full h-full flex items-center justify-center">
                            <Image
                                src="/challengeimage.png"
                                alt="Close up of high quality plush fabric"
                                width={500}
                                height={600}
                                className="w-full h-auto object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>

                    {/* Floating Label 1 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: -30 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ margin: "-50px" }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                        className="absolute top-10 left-0 md:top-1/4 md:-left-10 bg-white/80 backdrop-blur-xl p-4 md:p-5 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] border border-white/40 z-20 max-w-[180px] md:max-w-none hover:scale-105 transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(255,20,146,0.15)] group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-2xl opacity-50 pointer-events-none" />
                        <p className="text-xs md:text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">Toucher "Nuage de Soie"</p>
                        <p className="text-[10px] md:text-xs opacity-80 text-gray-600 uppercase tracking-wider font-medium">Douceur Inégalée</p>
                    </motion.div>

                    {/* Floating Label 2 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 30 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ margin: "-50px" }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 }}
                        className="absolute bottom-10 right-0 md:bottom-1/4 md:-right-10 bg-white/80 backdrop-blur-xl p-4 md:p-5 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] border border-white/40 z-20 max-w-[180px] md:max-w-none hover:scale-105 transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(255,105,180,0.15)] group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-2xl opacity-50 pointer-events-none" />
                        <p className="text-xs md:text-sm font-bold text-gray-900 group-hover:text-accent transition-colors">Finitions Haute Couture</p>
                        <p className="text-[10px] md:text-xs opacity-80 text-gray-600 uppercase tracking-wider font-medium">Héritage Artisanal</p>
                    </motion.div>
                </div>

                {/* Content Side */}
                <div className="flex flex-col gap-8">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight text-text-main">
                        Une Œuvre d'Art <br />
                        <span className="text-primary">À Câliner</span>
                    </h2>
                    <p className="text-lg text-text-muted leading-relaxed">
                        Chaque EternalPlush est une pièce unique, née entre les mains d'artisans passionnés. Nous avons banni le synthétique rugueux pour ne garder que la caresse d'un velours hypoallergénique, aussi pur que vos sentiments.
                    </p>

                    <ul className="flex flex-col gap-4">
                        {features.map((feature, i) => (
                            <motion.li
                                key={feature.id}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + (i * 0.1) }}
                                className="flex items-center gap-3 text-text-main font-medium"
                            >
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                </span>
                                <div>
                                    <strong className="block text-gray-900">{feature.title}</strong>
                                    <span className="text-sm opacity-80">{feature.description}</span>
                                </div>
                            </motion.li>
                        ))}
                    </ul>

                    <div className="mt-4">
                        <button className="text-primary font-bold border-b-2 border-primary/20 hover:border-primary transition-colors pb-1">
                            Découvrir le Secret de Fabrication
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
