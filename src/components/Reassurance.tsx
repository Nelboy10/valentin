'use client';

import { Truck, ShieldCheck, HeartHandshake, Clock } from 'lucide-react';

export default function Reassurance() {
    const items = [
        {
            icon: Truck,
            title: "Livraison Express",
            desc: "Garantie avant le 14 Février pour toute commande avant le 10."
        },
        {
            icon: ShieldCheck,
            title: "Paiement Sécurisé",
            desc: "Transactions chiffrées SSL. Vos données sont protégées."
        },
        {
            icon: HeartHandshake,
            title: "Satisfait ou Remboursé",
            desc: "30 jours pour changer d'avis. Retour gratuit."
        },
        {
            icon: Clock,
            title: "Service Client 24/7",
            desc: "Une question ? Notre équipe passionnée vous répond."
        }
    ];

    return (
        <section className="py-20 border-y border-rose-50">
            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {items.map((item, i) => (
                    <div key={i} className="flex flex-col items-center text-center space-y-4 group">
                        <div className="w-16 h-16 rounded-full bg-white border border-rose-100 flex items-center justify-center text-primary shadow-lg group-hover:scale-110 transition-transform duration-300 group-hover:border-primary/20 group-hover:shadow-primary/20 backdrop-blur-sm">
                            <item.icon className="w-7 h-7" />
                        </div>
                        <div>
                            <h3 className="font-bold text-text-main text-lg mb-2">{item.title}</h3>
                            <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
