'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart } from 'lucide-react';

import { useState, useEffect } from 'react';

export default function HeroMainImage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="relative w-full max-w-[850px] aspect-square mx-auto z-20 flex items-center justify-center pointer-events-none">
            {/* Ambient Backend Glow - Anchored */}
            <motion.div
                animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.4, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-20 bg-primary/20 blur-[80px] rounded-full"
            />

            {/* Breathing Animation Wrapper */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full flex items-center justify-center p-4"
            >
                {/* Responsive Image */}
                <Image
                    src="/challengeimage.png"
                    alt="L'Ours EternalPlush"
                    width={850}
                    height={850}
                    className="object-contain drop-shadow-2xl relative z-10"
                    priority
                />
            </motion.div>

            {/* Floating Particles (Foreground/Background) */}
            {mounted && [...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -40, 0],
                        x: Math.random() * 20 - 10,
                        opacity: [0, 0.6, 0],
                        scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{
                        duration: 4 + Math.random() * 3,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "easeInOut"
                    }}
                    className="absolute"
                    style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${40 + Math.random() * 40}%`,
                        z: Math.random() > 0.5 ? 30 : 0 // Some in front, some behind
                    }}
                >
                    <Heart className="w-6 h-6 text-primary/20 fill-primary/10 blur-[1px]" />
                </motion.div>
            ))}
        </div>
    );
}
