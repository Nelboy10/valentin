'use client';

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { triggerHeartExplosion } from '@/utils/confetti';
import Image from 'next/image';

export default function StickyCTA() {
    const { scrollY } = useScroll();
    const [isVisible, setIsVisible] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const heroHeight = typeof window !== 'undefined' ? window.innerHeight * 0.8 : 800;
        if (latest > heroHeight) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    });

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-md bg-white/90 backdrop-blur-md border border-primary/20 rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] p-2 pr-3 flex items-center justify-between gap-3"
                >
                    <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full bg-rose-50 overflow-hidden border border-rose-100 shrink-0">
                            <Image
                                src="/challengeimage.png"
                                alt="Mini Plush"
                                width={40}
                                height={40}
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs font-bold text-gray-900 leading-tight">EternalPlush™</span>
                            <span className="text-[10px] text-primary font-bold">Stock Limité</span>
                        </div>
                    </div>

                    <button
                        onClick={triggerHeartExplosion}
                        className="flex items-center gap-2 bg-primary text-white px-4 py-2 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-lg shadow-primary/30 hover:scale-105 active:scale-95 transition-all group"
                    >
                        <span>Commander</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
