'use client';

import { useEffect, useRef, useState } from 'react';

interface SpotlightRevealProps {
    text: string;
    className?: string;
}

export default function SpotlightReveal({ text, className = '' }: SpotlightRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            setPosition({ x, y });
            setOpacity(1);
        };


        const handleTouchMove = (e: TouchEvent) => {
            if (!containerRef.current || e.touches.length === 0) return;

            const rect = containerRef.current.getBoundingClientRect();
            const x = e.touches[0].clientX - rect.left;
            const y = e.touches[0].clientY - rect.top;

            setPosition({ x, y });
            setOpacity(1);
        };

        const container = containerRef.current;
        if (container) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('touchmove', handleTouchMove, { passive: true });
            window.addEventListener('touchstart', handleTouchMove, { passive: true });
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchstart', handleTouchMove);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={`pointer-events-none absolute inset-0 overflow-hidden flex items-center justify-center ${className}`}
        >
            <div
                className="text-center font-serif italic text-primary/30 text-4xl select-none transition-opacity duration-300"
                style={{
                    maskImage: `radial-gradient(circle 150px at ${position.x}px ${position.y}px, black, transparent)`,
                    WebkitMaskImage: `radial-gradient(circle 150px at ${position.x}px ${position.y}px, black, transparent)`,
                    opacity: opacity
                }}
            >
                {text}
            </div>
        </div>
    );
}
