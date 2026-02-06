'use client';

import { ShoppingBag } from 'lucide-react';
import { triggerHeartExplosion } from '@/utils/confetti';

export default function PriceOffer() {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Background Context Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_70%)] pointer-events-none" />

            <div className="max-w-3xl mx-auto relative z-10 px-0 md:px-6 text-center">
                <div className="bg-white dark:bg-white/5 border-2 border-primary/20 p-12 rounded-xl relative shadow-2xl">
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white px-8 py-2 rounded-full font-bold uppercase tracking-widest text-sm shadow-lg">
                        Dernière Chance
                    </div>
                    <h3 className="text-3xl font-bold mb-2 text-text-main">Offrez l'Inoubliable</h3>
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <span className="text-6xl font-extrabold text-[#1d0c15] dark:text-white">49€</span>
                        <span className="text-2xl opacity-40 line-through text-text-muted">79€</span>
                    </div>
                    <p className="opacity-70 mb-8 max-w-sm mx-auto text-text-muted">Le temps passe, les souvenirs restent. Saisissez l'instant pour graver cette Saint-Valentin dans sa mémoire.</p>
                    <button className="w-full h-16 bg-primary text-white rounded-full text-xl font-bold shadow-xl shadow-primary/30 hover:scale-[1.02] transition-transform">
                        Sécuriser Mon Exemplaire
                    </button>
                    <p className="mt-4 text-xs font-bold text-primary uppercase">Stock critique : Livraison garantie le 14 pour les prochaines commandes.</p>
                </div>
            </div>
        </section>
    );
}
