'use client';

import { ShoppingBag } from 'lucide-react';
import { triggerHeartExplosion } from '@/utils/confetti';

export default function PriceOffer() {
    // Fake stock logic
    const stock = 3;

    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Background Context Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_70%)] pointer-events-none" />

            <div className="max-w-3xl mx-auto relative z-10 px-0 md:px-6 text-center">
                <div className="bg-white/80 backdrop-blur-xl border-2 border-primary/10 p-8 md:p-12 rounded-3xl relative shadow-[0_20px_60px_-15px_rgba(255,20,146,0.15)] overflow-hidden">
                    {/* Discount Badge */}
                    <div className="absolute top-0 right-0 bg-secondary text-white font-bold px-6 py-3 rounded-bl-3xl z-20 shadow-md">
                        -30€
                    </div>

                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-8 py-2 rounded-full font-bold uppercase tracking-widest text-sm shadow-lg shadow-primary/30 animate-pulse-subtle">
                        Dernière Chance
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-text-main mt-4">Offrez <span className="font-chrisdia text-5xl md:text-6xl ml-2 text-primary block md:inline">l'Inoubliable</span></h3>

                    <div className="flex items-center justify-center gap-6 mb-8">
                        <span className="text-7xl font-extrabold text-[#1d0c15] tracking-tighter">49€</span>
                        <div className="flex flex-col items-start bg-rose-100/50 px-3 py-1 rounded-lg">
                            <span className="text-2xl opacity-40 line-through text-text-muted font-bold">79€</span>
                            <span className="text-xs font-bold text-secondary uppercase tracking-wide">Prix Lancement</span>
                        </div>
                    </div>

                    <p className="opacity-80 mb-10 max-w-sm mx-auto text-text-muted font-medium text-lg leading-relaxed">
                        Le temps passe, les souvenirs restent. Saisissez l'instant pour graver cette <span className="font-chrisdia text-2xl text-primary px-1">Saint-Valentin</span> dans sa mémoire.
                    </p>

                    <button
                        onClick={triggerHeartExplosion}
                        className="w-full h-20 bg-gradient-to-r from-primary to-accent text-white rounded-2xl text-xl md:text-2xl font-bold shadow-xl shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
                    >
                        {/* Button Sheen */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-shine" />
                        <ShoppingBag className="w-6 h-6 mb-1" />
                        <span>Sécuriser Mon Exemplaire</span>
                    </button>

                    {/* Trust Signals & Urgency */}
                    <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
                        <div className="flex items-center gap-2 text-rose-600 bg-rose-50 px-4 py-2 rounded-full border border-rose-100">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
                            </span>
                            <span className="font-bold">Plus que {stock} exemplaires en stock</span>
                        </div>

                        <div className="flex items-center gap-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                            {/* Replaced images with text for robustness if assets missing, or simple icons */}
                            <span className="font-bold text-xs border border-gray-300 rounded px-2 py-1">CB</span>
                            <span className="font-bold text-xs border border-gray-300 rounded px-2 py-1">VISA</span>
                            <span className="font-bold text-xs border border-gray-300 rounded px-2 py-1 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500" />Paypal</span>
                            <span className="text-[10px] uppercase font-bold tracking-wider flex items-center gap-1"><span className="text-green-500">🔒</span> Paiement 100% Sécurisé</span>
                        </div>
                    </div>

                    <p className="mt-6 text-xs text-text-muted/60">Livraison garantie le 14 Février pour toute commande passée dans les prochaines 4 heures.</p>
                </div>
            </div>
        </section>
    );
}
