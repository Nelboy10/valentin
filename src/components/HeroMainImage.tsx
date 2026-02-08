'use client';

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { Heart } from 'lucide-react';
import { usePlushAnimation } from '@/context/PlushAnimationContext';

export default function HeroMainImage() {
    const ref = useRef<HTMLDivElement>(null);
    const { stage } = usePlushAnimation();

    // Motion Values for high-performance animation
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth physics for the mouse movement (mass/inertia effect)
    const smoothX = useSpring(x, { stiffness: 100, damping: 20, mass: 0.5 });
    const smoothY = useSpring(y, { stiffness: 100, damping: 20, mass: 0.5 });

    // 3D Transforms based on smoothed mouse position
    const rotateX = useTransform(smoothY, [-300, 300], [15, -15]); // Inverted for natural tilt
    const rotateY = useTransform(smoothX, [-300, 300], [-15, 15]);

    // Parallax layers
    const shadowMoveX = useTransform(smoothX, [-300, 300], [20, -20]); // Shadow moves opposite to appear "grounded"
    const shadowMoveY = useTransform(smoothY, [-300, 300], [10, -10]);

    // Dynamic Lighting (Sheen moves opposite to rotation to simulate reflection)
    const sheenX = useTransform(smoothX, [-300, 300], ['100%', '-100%']);
    const sheenOpacity = useTransform(smoothX, [-300, 0, 300], [0, 0.5, 0]); // Only visible at angles

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(e.clientX - centerX);
        y.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full max-w-[650px] aspect-square mx-auto z-20 perspective-1000 flex items-center justify-center cursor-grab active:cursor-grabbing"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
        >
            {/* Ambient Backend Glow - Anchored */}
            <motion.div
                animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.4, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-20 bg-primary/20 blur-[80px] rounded-full pointer-events-none"
            />

            {/* Cinematic Entrance & Stage Control */}
            <AnimatePresence mode="popLayout">
                {stage === 'hero' && (
                    <motion.div
                        layoutId="cinematic-plush"
                        className="relative z-10 w-full h-full flex items-center justify-center"
                        style={{
                            rotateX,
                            rotateY,
                            transformStyle: "preserve-3d",
                        }}
                        transition={{
                            layout: { type: "spring", stiffness: 100, damping: 20, duration: 1.5 }
                        }}
                    >
                        {/* Breathing Animation Wrapper */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-full h-full flex items-center justify-center transform-style-3d"
                        >
                            {/* Realistic Shadow (Ground Plane) */}
                            <motion.div
                                style={{ x: shadowMoveX, y: shadowMoveY, opacity: 0.4 }}
                                className="absolute bottom-10 left-1/2 -translate-x-1/2 w-2/3 h-12 bg-black/30 blur-2xl rounded-[100%] pointer-events-none"
                            />

                            {/* The Plush */}
                            <div className="relative transform-style-3d group">
                                <Image
                                    src="/tedybear.png"
                                    alt="L'Ours EternalPlush"
                                    width={600}
                                    height={750}
                                    className="object-contain drop-shadow-2xl will-change-transform"
                                    priority
                                    draggable={false}
                                />

                                {/* Dynamic Lighting / Sheen Overlay */}
                                {/* This gradient simulates light sweeping across the velvet texture */}
                                <motion.div
                                    style={{
                                        background: `linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.4) 40%, transparent 60%)`,
                                        x: sheenX,
                                        opacity: sheenOpacity
                                    }}
                                    className="absolute inset-0 w-full h-full mix-blend-overlay pointer-events-none rounded-3xl" // Adjust rounding to match image roughly if possible, or use clip-path
                                />

                                {/* Rim Light Hint (Inset shadow) */}
                                <div className="absolute inset-0 w-full h-full shadow-[inset_0_0_40px_rgba(255,255,255,0.1)] rounded-full pointer-events-none mix-blend-soft-light opacity-50" />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Particles (Foreground/Background) */}
            {[...Array(6)].map((_, i) => (
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
                    className="absolute pointer-events-none"
                    style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${40 + Math.random() * 40}%`,
                        z: Math.random() > 0.5 ? 30 : 0 // Some in front, some behind
                    }}
                >
                    <Heart className="w-6 h-6 text-primary/20 fill-primary/10 blur-[1px]" />
                </motion.div>
            ))}

        </motion.div>
    );
}
