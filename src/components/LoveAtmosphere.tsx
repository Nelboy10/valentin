'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function LoveAtmosphere() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        // Particle System
        const particles: Particle[] = [];
        const particleCount = width < 768 ? 20 : 45; // Subtle amount

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            color: string;
            alpha: number;
            targetAlpha: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 60 + 20; // Large, soft blobs
                this.speedX = (Math.random() - 0.5) * 0.2; // Very slow drift
                this.speedY = (Math.random() - 0.5) * 0.2;

                // Colors: Deep Red, Soft Pink, Warm Gold
                const colors = [
                    '220, 20, 60',  // Crimson
                    '255, 20, 147', // DeepPink
                    '255, 105, 180', // HotPink
                    '255, 215, 0'   // Gold (Accent)
                ];
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.alpha = 0;
                this.targetAlpha = Math.random() * 0.15 + 0.05; // Low opacity for softness
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Gentle fade in/out
                if (this.alpha < this.targetAlpha) this.alpha += 0.001;

                // Wrap around screen
                if (this.x < -100) this.x = width + 100;
                if (this.x > width + 100) this.x = -100;
                if (this.y < -100) this.y = height + 100;
                if (this.y > height + 100) this.y = -100;
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.beginPath();
                // Radial gradient for soft edges
                const gradient = ctx.createRadialGradient(
                    this.x, this.y, 0,
                    this.x, this.y, this.size
                );
                gradient.addColorStop(0, `rgba(${this.color}, ${this.alpha})`);
                gradient.addColorStop(1, `rgba(${this.color}, 0)`);

                ctx.fillStyle = gradient;
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Init Particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Global Pulse/Breathing Effect (Red overlay)
            const time = Date.now() * 0.001;
            const pulse = (Math.sin(time) + 1) / 2; // 0 to 1
            const bgAlpha = 0.02 + (pulse * 0.03); // Subtle background tint pulse

            // Removed dark tint pulse

            particles.forEach(p => {
                p.update();
                p.draw(ctx);
            });

            requestAnimationFrame(animate);
        };

        const animId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animId);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Base Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-pink-50 to-red-50 opacity-40 mix-blend-multiply"></div>

            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full mix-blend-multiply" />

            {/* Floating Dust / Sparkles (CSS Animation) */}
            <div className="absolute inset-0 opacity-30">
                {/* Can add pure CSS particles here if needed for sharpness */}
            </div>
        </div>
    );
}
