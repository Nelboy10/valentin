'use client';

import { LucideHeart } from 'lucide-react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export default function Header() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background-dark/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 md:px-20">
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="text-primary transition-transform group-hover:scale-110 duration-300">
                        <svg className="size-6 drop-shadow-[0_0_8px_rgba(238,43,75,0.5)]" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" />
                        </svg>
                    </div>
                    <span className="text-white text-xl font-serif font-bold tracking-tight">EternalPlush</span>
                </div>

                <div className="flex items-center gap-8">
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
                        {['L\'Essence', 'La Promesse', 'Collection'].map((item) => (
                            <Link key={item} href="#" className="relative hover:text-white transition-colors duration-300 group">
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>
                    <button className="bg-white/5 hover:bg-primary text-white border border-white/10 hover:border-primary px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(238,43,75,0.4)]">
                        Commander
                    </button>
                </div>
            </div>
        </motion.header>
    );
}
