'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#100b0c] text-white/60 py-20 border-t border-white/5 font-light text-sm">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <span className="text-2xl text-white font-serif font-bold tracking-tight block mb-6">EternalPlush</span>
                    <p className="max-w-sm mb-8 leading-relaxed">
                        Créateur d'émotions durables. Nous transformons la douceur en un langage universel d'amour.
                    </p>
                    <p className="opacity-40">© 2026 EternalPlush. All rights reserved.</p>
                </div>

                <div>
                    <h4 className="text-white font-medium mb-6">Navigation</h4>
                    <ul className="space-y-4">
                        <li><Link href="#" className="hover:text-primary transition-colors">Accueil</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Notre Histoire</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Collection</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-medium mb-6">Légal</h4>
                    <ul className="space-y-4">
                        <li><Link href="#" className="hover:text-primary transition-colors">CGV</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Confidentialité</Link></li>
                        <li><Link href="#" className="hover:text-primary transition-colors">Mentions Légales</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
