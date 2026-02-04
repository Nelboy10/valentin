'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function SpotlightCursor() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    // Spring physics for smooth following
    const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
    const x = useSpring(0, springConfig);
    const y = useSpring(0, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            x.set(e.clientX);
            y.set(e.clientY);
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [x, y]);

    return (
        <motion.div
            style={{
                left: x,
                top: y,
            }}
            className="fixed pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2 mix-blend-soft-light w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_70%)]"
        />
    );
}
