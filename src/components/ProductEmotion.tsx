'use client';

import { motion } from 'framer-motion';
import { Heart, Maximize2, Sparkles } from 'lucide-react';

const features = [
    {
        icon: <Maximize2 className="w-6 h-6" />,
        title: "L'Heure du Câlin",
        desc: "Une taille parfaite pour être serré fort contre le cœur. Ni trop grand, ni trop petit. Juste rassurant."
    },
    {
        icon: <Sparkles className="w-6 h-6" />,
        title: "Douceur Infinie",
        desc: "Une texture pensée pour apaiser. Passer la main dans son pelage, c'est comme une caresse."
    },
    {
        icon: <Heart className="w-6 h-6" />,
        title: "Fait avec Amour",
        desc: "Chaque détail compte. Des coutures solides pour un amour qui dure."
    }
];

export default function ProductEmotion() {
    return (
        <section className="py-24 bg-soft-rose/50">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-3xl md:text-5xl text-deep-rose mb-4">L&apos;expérience Sensorielle</h2>
                    <p className="font-sans text-soft-black/60 italic">Fermez les yeux et imaginez.</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.6 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center space-y-4"
                        >
                            <div className="w-12 h-12 bg-rose-100 text-deep-rose rounded-full flex items-center justify-center mx-auto mb-4">
                                {f.icon}
                            </div>
                            <h3 className="font-serif text-xl text-soft-black">{f.title}</h3>
                            <p className="font-sans text-soft-black/70 leading-relaxed text-sm">
                                {f.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
