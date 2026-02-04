'use client';

import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { Fingerprint, Heart } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { triggerHeartExplosion } from '@/utils/confetti';

export default function LoveRitualSection() {
    const [charging, setCharging] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [progress, setProgress] = useState(0);

    const requestRef = useRef<number>(0);
    const controls = useAnimation();

    // "Liquid" fill animation logic
    useEffect(() => {
        if (charging && !completed) {
            const animate = () => {
                setProgress(prev => {
                    if (prev >= 100) {
                        setCompleted(true);
                        setCharging(false);
                        triggerHeartExplosion(); // BOOM at 100%
                        return 100;
                    }
                    return prev + 0.5; // Speed of fill
                });
                requestRef.current = requestAnimationFrame(animate);
            };
            requestRef.current = requestAnimationFrame(animate);
        } else {
            cancelAnimationFrame(requestRef.current);
            if (!completed) {
                // Decay if released early
                const decay = () => {
                    setProgress(prev => {
                        if (prev <= 0) return 0;
                        return prev - 2;
                    });
                    requestRef.current = requestAnimationFrame(decay);
                };
                requestRef.current = requestAnimationFrame(decay);
            }
        }
        return () => cancelAnimationFrame(requestRef.current);
    }, [charging, completed]);

    return (
        <section className="py-32 px-6 bg-black relative overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            <div className={`absolute inset-0 bg-primary/20 blur-[150px] transition-opacity duration-1000 ${charging ? 'opacity-100' : 'opacity-0'}`} />

            <div className="relative z-10 text-center space-y-12 max-w-2xl">
                <motion.div
                    animate={{ scale: charging ? 1.05 : 1 }}
                    className="space-y-4"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white">Le Rituel</h2>
                    <p className="text-white/60 text-xl font-light">
                        Avant de commander, transférez votre intention.<br />
                        <span className="text-primary font-bold">Maintenez le cœur</span> pour charger le cadeau.
                    </p>
                </motion.div>

                {/* The Vessel */}
                <div className="relative w-64 h-64 mx-auto">
                    {/* Outter Ring */}
                    <div className="absolute inset-0 rounded-full border border-white/10" />

                    {/* Shake Effect Wrapper */}
                    <motion.div
                        animate={charging ? { x: [-2, 2, -2], y: [-1, 1, -1] } : {}}
                        transition={{ repeat: Infinity, duration: 0.1 }}
                        className="relative w-full h-full flex items-center justify-center"
                    >
                        {/* Interaction Button */}
                        <button
                            onMouseDown={() => !completed && setCharging(true)}
                            onMouseUp={() => setCharging(false)}
                            onMouseLeave={() => setCharging(false)}
                            onTouchStart={() => !completed && setCharging(true)}
                            onTouchEnd={() => setCharging(false)}
                            disabled={completed}
                            className={`
                            relative z-20 w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300
                            ${completed ? 'scale-110 bg-primary shadow-[0_0_50px_#ee2b4b]' : 'bg-white/5 border border-white/20 hover:scale-105 active:scale-95'}
                        `}
                        >
                            {completed ? (
                                <Heart className="w-12 h-12 text-white fill-white animate-pulse" />
                            ) : (
                                <Fingerprint className={`w-12 h-12 transition-colors ${charging ? 'text-primary' : 'text-white/50'}`} />
                            )}
                        </button>

                        {/* Progress Circle (SVG) */}
                        <svg className="absolute inset-0 w-full h-full rotate-[-90deg] pointer-events-none">
                            <circle
                                cx="128" cy="128" r="120"
                                stroke="white" strokeWidth="2"
                                fill="transparent"
                                strokeOpacity={0.1}
                            />
                            <motion.circle
                                cx="128" cy="128" r="120"
                                stroke="#ee2b4b" strokeWidth="4"
                                fill="transparent"
                                strokeDasharray={753} // 2 * PI * 120
                                strokeDashoffset={753 - (753 * progress) / 100}
                                strokeLinecap="round"
                                className="drop-shadow-[0_0_10px_#ee2b4b]"
                            />
                        </svg>

                        {/* Completed Particles */}
                        {completed && (
                            <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/30 blur-[60px] animate-pulse" />
                            </div>
                        )}
                    </motion.div>
                </div>

                {/* Status Text */}
                <div className="h-8">
                    {completed ? (
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-primary font-bold tracking-[0.3em] uppercase"
                        >
                            Amour Transféré
                        </motion.span>
                    ) : (
                        <span className="text-white/30 text-sm">{Math.round(progress)}% INTENTION</span>
                    )}
                </div>
            </div>
        </section>
    );
}
