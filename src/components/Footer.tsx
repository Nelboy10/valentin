'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-primary text-white py-24 text-center">
            <div className="max-w-4xl mx-auto px-6">
                <span className="text-7xl mb-6 block">✨</span>
                <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">Rendez Cette Saint-Valentin <br /><span className="font-chrisdia text-6xl md:text-8xl mt-4 block">Inoubliable</span></h2>
                <div className="flex flex-col items-center gap-6">
                    <button className="min-w-[300px] h-16 bg-white text-primary rounded-full text-xl font-bold shadow-2xl hover:bg-background-light hover:scale-105 transition-all">
                        Commander pour le 14 Fév
                    </button>
                    <p className="text-white/80 font-medium">Série Limitée. Fait main avec passion.</p>
                </div>
                <div className="mt-20 pt-10 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6 text-sm opacity-70">
                    <div className="flex items-center gap-2">
                        <span>❤️</span>
                        <span>© 2026 EternalPlush. Tous droits réservés.</span>
                    </div>
                    <div className="flex gap-8">
                        <Link className="hover:text-white transition-colors" href="#">Confidentialité</Link>
                        <Link className="hover:text-white transition-colors" href="#">CGV</Link>
                        <Link className="hover:text-white transition-colors" href="#">Livraison</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
