'use client';

import { LucideHeart, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 px-6 md:px-10 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50 transition-all">
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <motion.div
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-primary"
                >
                    <LucideHeart className="w-7 h-7 fill-primary filter drop-shadow-md" />
                </motion.div>
                <h2 className="text-xl font-bold leading-tight tracking-tight text-text-main group-hover:text-primary transition-colors">ValenPlush</h2>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
                <nav className="flex items-center gap-8">
                    {['Avantages', 'Détails', 'Avis'].map((item) => (
                        <a
                            key={item}
                            className="text-sm font-semibold text-text-muted hover:text-primary transition-colors relative group"
                            href={`#${item.toLowerCase().replace('é', 'e')}`}
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </nav>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-full h-11 px-6 bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold shadow-[0_4px_20px_-5px_rgba(255,20,147,0.4)] hover:shadow-[0_8px_25px_-5px_rgba(255,20,147,0.6)] transition-all gap-2 relative overflow-hidden group"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 animate-pulse" />
                        Offrir l'Amour
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                </motion.button>
            </div>

            {/* Mobile Nav Toggle */}
            <button
                className="md:hidden text-text-main p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                )}
            </button>

            {/* Mobile Dropdown */}
            {
                isMobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white border-b border-primary/10 shadow-xl p-6 flex flex-col gap-4 md:hidden animate-in slide-in-from-top-2">
                        <nav className="flex flex-col gap-4">
                            <a className="text-base font-semibold text-text-main hover:text-primary transition-colors" href="#benefits" onClick={() => setIsMobileMenuOpen(false)}>Avantages</a>
                            <a className="text-base font-semibold text-text-main hover:text-primary transition-colors" href="#details" onClick={() => setIsMobileMenuOpen(false)}>Détails</a>
                            <a className="text-base font-semibold text-text-main hover:text-primary transition-colors" href="#reviews" onClick={() => setIsMobileMenuOpen(false)}>Avis</a>
                        </nav>
                        <button className="w-full h-12 rounded-full bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                            Commander
                        </button>
                    </div>
                )
            }
        </header >
    );
}
