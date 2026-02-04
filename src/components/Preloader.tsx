'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

export default function Preloader() {
    const [complete, setComplete] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setComplete(true);
        }, 2500); // 2.5s intro
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {!complete && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 1 } }}
                    className="fixed inset-0 z-[10000] bg-background-dark flex items-center justify-center overflow-hidden"
                >
                    {/* Expanding Heart Transition */}
                    <motion.div
                        initial={{ scale: 1, opacity: 1 }}
                        animate={{
                            scale: [1, 1.2, 1, 1.5, 50],
                            opacity: [1, 1, 1, 1, 0]
                        }}
                        transition={{
                            duration: 2.2,
                            times: [0, 0.2, 0.4, 0.6, 1],
                            ease: "easeInOut"
                        }}
                        className="relative flex flex-col items-center justify-center"
                    >
                        <Heart className="w-12 h-12 text-primary fill-primary" />
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-4 text-white/50 text-xs uppercase tracking-[0.5em] font-light"
                        >
                            Chargement pur...
                        </motion.span>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
