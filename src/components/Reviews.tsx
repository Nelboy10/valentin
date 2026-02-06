'use client';

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
    {
        name: "Thomas L.",
        date: "Février 2025",
        text: "Ma copine a fondu en larmes (de joie !) en ouvrant la boîte. La qualité est incroyable, rien à voir avec les peluches de supermarché.",
        stars: 5
    },
    {
        name: "Sophie M.",
        date: "Janvier 2026",
        text: "J'avais peur pour la livraison, mais reçu en 48h chrono. L'emballage est sublime, on sent le côté premium direct.",
        stars: 5
    },
    {
        name: "Marc D.",
        date: "Février 2025",
        text: "Le regard de la peluche est vraiment bluffant, elle est super douce. Un sans faute pour la Saint-Valentin.",
        stars: 5
    }
];

export default function Reviews() {
    return (
        <section className="py-32 px-6">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">Ils nous font confiance</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-text-main mt-4">L'Amour se partage</h2>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {reviews.map((review, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="bg-white border border-rose-50 p-6 rounded-2xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-5px_rgba(255,20,147,0.15)] hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="flex gap-0.5 mb-4 text-yellow-400">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <p className="text-text-main text-sm italic mb-4 leading-relaxed">
                                "{review.text}"
                            </p>
                            <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs uppercase">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <span className="block text-xs font-bold text-text-main">{review.name}</span>
                                    <span className="block text-[10px] text-text-muted uppercase tracking-wider">{review.date}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    {/* Add one more dummy review to make 4 if needed, or just map existing */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className="bg-white border border-rose-50 p-6 rounded-2xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-5px_rgba(255,20,147,0.15)] hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="flex gap-0.5 mb-4 text-yellow-400">
                            {[...Array(5)].map((_, j) => (
                                <Star key={j} className="w-4 h-4 fill-current" />
                            ))}
                        </div>
                        <p className="text-text-main text-sm italic mb-4 leading-relaxed">
                            "Livraison super rapide, arrivé 2 jours avant la Saint-Valentin. Un vrai sauveur."
                        </p>
                        <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs uppercase">
                                E
                            </div>
                            <div>
                                <span className="block text-xs font-bold text-text-main">Elena R.</span>
                                <span className="block text-[10px] text-text-muted uppercase tracking-wider">Février 2025</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section >
    );
}
