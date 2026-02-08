'use client';

import { motion } from 'framer-motion';

export default function AliveText() {
    return (
        <div className="flex flex-col gap-4 mb-8">
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-secondary font-bold tracking-widest uppercase text-xs md:text-sm"
            >
                Édition Signature • Série Limitée
            </motion.span>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-text-main relative">
                <span className="block">Plus Qu'un Cadeau,</span>
                <span className="block mt-2">
                    Une Preuve
                    <span className="relative inline-block ml-3">

                        {/* Living Gradient Text (Masked) */}
                        <div className="relative z-10 font-chrisdia text-6xl md:text-8xl">
                            {/* The text itself acting as a mask for the "liquid" background */}
                            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-secondary via-[#ff4d6d] to-secondary animate-gradient-x background-animate">
                                d'Amour
                            </span>

                            {/* Internal Liquid/Flow Animation Overlay */}
                            <motion.span
                                className="absolute inset-0 z-20 pointer-events-none mix-blend-soft-light"
                                animate={{
                                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                }}
                                transition={{
                                    duration: 8,
                                    ease: "linear",
                                    repeat: Infinity,
                                }}
                                style={{
                                    backgroundImage: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 45%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.4) 55%, transparent 100%)',
                                    backgroundSize: '200% auto',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                d'Amour
                            </motion.span>
                        </div>

                        {/* Outer Glow / Illumination "Halo" */}
                        <motion.div
                            className="absolute -inset-4 blur-xl bg-secondary/40 rounded-full z-0 pointer-events-none mix-blend-screen"
                            animate={{
                                opacity: [0.2, 0.5, 0.2],
                                scale: [0.95, 1.05, 0.95],
                            }}
                            transition={{
                                duration: 3,
                                ease: "easeInOut",
                                repeat: Infinity,
                            }}
                        />

                        {/* Sparkles around text */}
                        <div className="absolute -top-2 -right-4">
                            <motion.div
                                animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                className="w-1 h-1 bg-white rounded-full shadow-[0_0_8px_2px_rgba(255,255,255,0.8)]"
                            />
                        </div>
                    </span>
                </span>
            </h1>

            <p className="text-lg opacity-80 max-w-lg leading-relaxed text-text-muted mx-auto md:mx-0">
                Offrez l'éternité dans un regard. Une pièce unique, conçue pour immortaliser vos sentiments et faire battre son cœur.
            </p>

            <style jsx global>{`
                .background-animate {
                    background-size: 200%;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: gradient-flow 6s ease infinite;
                }
                @keyframes gradient-flow {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
        </div>
    );
}
