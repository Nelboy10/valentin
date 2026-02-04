'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-background-dark border-t border-white/5 py-20 px-6">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

                <div className="col-span-1 md:col-span-2 space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="text-primary">
                            <svg className="size-6" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V44Z" fill="currentColor" />
                            </svg>
                        </div>
                        <h2 className="text-white text-xl font-bold tracking-tight">EternalPlush</h2>
                    </div>
                    <p className="text-white/40 font-light max-w-sm">
                        L&apos;excellence de la douceur au service de vos émotions les plus sincères. Créateur de liens depuis 2024.
                    </p>
                </div>

                <div className="space-y-4">
                    <h4 className="text-white font-bold">Produit</h4>
                    <nav className="flex flex-col gap-2 text-white/40 font-light">
                        <Link href="#" className="hover:text-primary transition-colors">Notre collection</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Qualité Premium</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Entretien</Link>
                    </nav>
                </div>

                <div className="space-y-4">
                    <h4 className="text-white font-bold">Aide</h4>
                    <nav className="flex flex-col gap-2 text-white/40 font-light">
                        <Link href="#" className="hover:text-primary transition-colors">Livraison</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Retours</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
                    </nav>
                </div>

            </div>

            <div className="max-w-[1200px] mx-auto mt-20 pt-8 border-t border-white/5 text-center text-white/20 text-sm font-light">
                © 2024 EternalPlush. Tous droits réservés. L&apos;amour est éternel.
            </div>
        </footer>
    );
}
