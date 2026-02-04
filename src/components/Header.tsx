'use client';

import { LucideHeart } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-white/5 px-6 md:px-20 py-4">
            <div className="max-w-[1200px] mx-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="text-primary">
                        {/* Replaced SVG with Lucide Icon for consistency, or we can use the exact SVG path if preferred. 
                 Using the SVG path from user for exact match. */}
                        <svg className="size-6" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" />
                        </svg>
                    </div>
                    <h2 className="text-white text-xl font-bold tracking-tight">EternalPlush</h2>
                </div>

                <div className="flex items-center gap-8">
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
                        <Link href="#" className="hover:text-primary transition-colors">L'Essence</Link>
                        <Link href="#" className="hover:text-primary transition-colors">La Promesse</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Collection</Link>
                    </nav>
                    <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105">
                        Commander
                    </button>
                </div>
            </div>
        </header>
    );
}
