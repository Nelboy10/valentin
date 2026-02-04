'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

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
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-background-dark">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="absolute top-10 left-10 z-10">
                    <span className="text-secondary/50 uppercase tracking-widest text-sm font-semibold">L'Excellence</span>
                </div>

                <motion.div style={{ x }} className="flex gap-12 md:gap-24 pl-10 md:pl-24 pr-24 items-center">
                    {/* Intro Title */}
                    <div className="shrink-0 w-[80vw] md:w-[400px]">
                        <h2 className="text-5xl md:text-8xl font-serif text-white font-medium leading-tight">
                            L'Art du <br />
                            <span className="text-white/20">Détail_</span>
                        </h2>
                        <p className="mt-8 text-white/60 text-lg md:text-xl max-w-sm">
                            Chaque millimètre a été pensé pour offrir une expérience sensorielle inoubliable.
                        </p>
                    </div>

                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="group relative h-[60vh] w-[85vw] md:w-[500px] shrink-0 overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:scale-[1.02]"
                        >
                            <div className="absolute inset-0 z-0">
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-90" />
                                <Image
                                    src="/tedybear.jpg"
                                    alt={feature.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    style={{
                                        objectPosition: feature.bgPosition
                                    }}
                                />
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="inline-block px-3 py-1 rounded-full border border-white/20 text-xs text-white/80 mb-4 backdrop-blur-md">
                                    0{feature.id}
                                </span>
                                <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">{feature.title}</h3>
                                <div className="h-[1px] w-10 bg-primary mb-4 transition-all duration-500 group-hover:w-full" />
                                <p className="text-lg text-white/70 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* Outro Text */}
                    <div className="shrink-0 w-[50vw] md:w-[400px] flex items-center justify-center">
                        <span className="text-2xl md:text-4xl font-serif italic text-white/30 text-center">
                            "Plus qu'un objet,<br />un héritage."
                        </span>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
