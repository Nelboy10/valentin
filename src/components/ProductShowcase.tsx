'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import SectionDivider from '@/components/SectionDivider';

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
    return (
        <section className="py-20 px-6" id="details">
            <SectionDivider position="top" fill="transparent" />
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Image Side with Floating Labels */}
                <div className="relative">
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group border border-primary/5 hover:border-primary/20 transition-all duration-500">
                        <Image
                            src="/tedybear.jpg"
                            alt="Close up of high quality plush fabric"
                            width={600}
                            height={600}
                            className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>

                    {/* Floating Label 1 */}
                    {/* Floating Label 1 */}
                    {/* Floating Label 1 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: -30 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ margin: "-50px" }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                        className="absolute top-10 left-0 md:top-1/4 md:-left-10 bg-white/95 backdrop-blur-md p-3 md:p-4 rounded-xl shadow-[0_8px_30px_-5px_rgba(0,0,0,0.1)] border-l-4 border-primary z-20 max-w-[160px] md:max-w-none hover:scale-105 transition-transform"
                    >
                        <p className="text-xs md:text-sm font-bold text-gray-900">Toucher "Nuage de Soie"</p>
                        <p className="text-[10px] md:text-xs opacity-80 text-gray-600 uppercase tracking-wider">Douceur Inégalée</p>
                    </motion.div>

                    {/* Floating Label 2 */}
                    {/* Floating Label 2 */}
                    {/* Floating Label 2 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 30 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ margin: "-50px" }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 }}
                        className="absolute bottom-10 right-0 md:bottom-1/4 md:-right-10 bg-white/95 backdrop-blur-md p-3 md:p-4 rounded-xl shadow-[0_8px_30px_-5px_rgba(0,0,0,0.1)] border-l-4 border-accent z-20 max-w-[160px] md:max-w-none hover:scale-105 transition-transform"
                    >
                        <p className="text-xs md:text-sm font-bold text-gray-900">Finitions Haute Couture</p>
                        <p className="text-[10px] md:text-xs opacity-80 text-gray-600 uppercase tracking-wider">Héritage Artisanal</p>
                    </motion.div>
                </div>

                {/* Content Side */}
                <div className="flex flex-col gap-8">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight text-text-main">
                        Une Œuvre d'Art <br />
                        <span className="text-primary">À Câliner</span>
                    </h2>
                    <p className="text-lg text-text-muted leading-relaxed">
                        Chaque ValenPlush est une pièce unique, née entre les mains d'artisans passionnés. Nous avons banni le synthétique rugueux pour ne garder que la caresse d'un velours hypoallergénique, aussi pur que vos sentiments.
                    </p>

                    <ul className="flex flex-col gap-4">
                        {[
                            "Textile Certifié Oeko-Tex® (Respect de la peau)",
                            "Coutures Invisibles Ultra-Résistantes",
                            "Un Compagnon pour la Vie"
                        ].map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + (i * 0.1) }}
                                className="flex items-center gap-3 text-text-main font-medium"
                            >
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                </span>
                                {item}
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
