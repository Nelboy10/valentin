'use client';

import { motion } from 'framer-motion';
import { LucideGift, LucideShieldCheck, LucideTruck } from 'lucide-react';

const benefits = [
    {
        icon: LucideGift,
        title: "Unboxing Magique",
        description: "Chaque peluche arrive dans une boîte noire mate au ruban de satin, accompagnée de votre mot personnalisé."
    },
    {
        icon: LucideShieldCheck,
        title: "Garantie Émotion",
        description: "Satisfait ou remboursé sous 30 jours. Nous savons que le coup de foudre sera immédiat."
    },
    {
        icon: LucideTruck,
        title: "Livraison Précieuse",
        description: "Expédition suivie et assurée sous 48h. Votre preuve d'amour n'attend pas."
    }
];

export default function FeaturesSection() {
    return (
        <section className="py-32 px-6 bg-background-dark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-serif text-white mb-6"
                    >
                        La Promesse <span className="text-primary italic">EternalPlush</span>
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="h-[1px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="bg-white/5 border border-white/5 p-8 rounded-3xl hover:bg-white/10 transition-colors duration-300 group text-center"
                        >
                            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(238,43,75,0.1)]">
                                <benefit.icon className="text-primary size-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                            <p className="text-text-muted leading-relaxed font-light">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
