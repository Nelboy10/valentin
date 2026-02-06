'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { Heart } from 'lucide-react';

export default function HeroMainImage() {
    const ref = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Mouse parallax effect
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        // Calculate position relative to center of the element (-1 to 1)
        const x = (e.clientX - left - width / 2) / 25;
        const y = (e.clientY - top - height / 2) / 25;
        setMousePosition({ x, y });
    };

    const handleMouseLeave = () => {
        setMousePosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full max-w-[600px] aspect-square mx-auto z-20 perspective-1000 mt-8 md:mt-0 flex items-center justify-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Living Glow Experience - Heartbeat synced */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute inset-0 bg-primary/30 blur-[100px] rounded-full z-0 pointer-events-none"
            />

            {/* Secondary warm glow */}
            <div className="absolute inset-10 bg-secondary/10 blur-[80px] rounded-full z-0 pointer-events-none" />

            {/* Floating Hearts Particles - Valentine Concept */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [-20, -100],
                        x: Math.sin(i) * 30,
                        opacity: [0, 1, 0],
                        scale: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        delay: i * 0.8,
                        ease: "easeOut"
                    }}
                    className="absolute z-0 text-primary/30"
                    style={{
                        left: `${40 + (i % 3) * 20}%`,
                        top: '60%'
                    }}
                >
                    <Heart className="w-8 h-8 fill-current" />
                </motion.div>
            ))}

            {/* Main Image Container - No Borders, Just Plush */}
            <motion.div
                animate={{
                    x: mousePosition.x,
                    y: mousePosition.y,
                    rotateX: mousePosition.y * 0.1,
                    rotateY: mousePosition.x * -0.1,
                    scale: [1, 1.02, 1] // Subtle breath/heartbeat
                }}
                transition={{
                    x: { type: "spring", stiffness: 150, damping: 15 },
                    y: { type: "spring", stiffness: 150, damping: 15 },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="relative z-10 w-full h-full flex items-center justify-center group"
            >
                <Image
                    src="/tedybear.png"
                    alt="L'Ours EternalPlush"
                    width={550}
                    height={700}
                    className="object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                    priority
                    draggable={false}
                />
            </motion.div>
        </motion.div>
    );
}
