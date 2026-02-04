'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';

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
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative w-full max-w-[500px] aspect-[4/5] mx-auto z-20 perspective-1000 mt-12 md:mt-0"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Glow backing - Moves opposite to image for depth */}
            <motion.div
                animate={{
                    x: mousePosition.x * -2,
                    y: mousePosition.y * -2,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="absolute inset-8 bg-primary/30 blur-[60px] rounded-full z-0 opacity-80"
            />

            {/* Gold Accent Ring - Decorative */}
            <motion.div
                animate={{
                    x: mousePosition.x * -0.5,
                    y: mousePosition.y * -0.5,
                    rotate: 5
                }}
                className="absolute -inset-4 border border-secondary/30 rounded-[2.5rem] z-0 blur-[1px]"
            />

            {/* Main Image Container */}
            <motion.div
                animate={{
                    x: mousePosition.x,
                    y: mousePosition.y,
                    rotateX: mousePosition.y * 0.1,
                    rotateY: mousePosition.x * -0.1,
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                className="relative z-10 w-full h-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm group"
            >
                {/* Overlay shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent z-20 pointer-events-none mix-blend-soft-light" />

                <Image
                    src="/tedybear.png"
                    alt="L'Ours EternalPlush"
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    priority
                    draggable={false}
                />

                {/* Premium Vignette */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/40 z-10 pointer-events-none" />
            </motion.div>
        </motion.div>
    );
}
