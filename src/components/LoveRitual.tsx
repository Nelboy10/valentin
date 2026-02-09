'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import useSound from 'use-sound';

export default function LoveRitual({ onComplete }: { onComplete: () => void }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    // We use a simple heartbeat sound if available, otherwise silence/visual only
    // Ideally we would want a 'thump-thump' sound here.
    const [playHeartbeat] = useSound('https://assets.mixkit.co/sfx/preview/mixkit-human-heart-beat-716.mp3', { volume: 0.5 });
    const [playMagic] = useSound('https://assets.mixkit.co/sfx/preview/mixkit-magical-glitter-dust-movement-2766.mp3', { volume: 0.5 });

    const handleEnter = () => {
        if (isClicked) return;
        setIsClicked(true);
        playHeartbeat();
        playMagic();

        // Allow animation to play before unmounting
        setTimeout(() => {
            onComplete();
        }, 1500);
    };

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
            className="fixed inset-0 z-[10000] bg-[#1a0510] flex flex-col items-center justify-center cursor-pointer overflow-hidden touch-manipulation"
            onClick={handleEnter}
            onTouchStart={handleEnter}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative">
                {/* Pulse Waves */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            scale: [1, 2],
                            opacity: [0.5, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.6,
                            ease: "easeOut",
                        }}
                        className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
                    />
                ))}

                {/* The Heart */}
                <motion.div
                    animate={{
                        scale: isClicked ? [1, 50] : [1, 1.1, 1],
                    }}
                    transition={{
                        scale: {
                            duration: isClicked ? 1.5 : 1.2,
                            repeat: isClicked ? 0 : Infinity,
                            ease: isClicked ? "easeIn" : "easeInOut"
                        }
                    }}
                    className="relative z-10 p-8 rounded-full bg-gradient-to-br from-primary to-secondary shadow-[0_0_50px_rgba(255,20,147,0.5)]"
                >
                    <Heart className={`w-16 h-16 text-white fill-white ${isClicked ? 'animate-ping' : ''}`} />
                </motion.div>
            </div>

            <motion.p
                animate={{
                    opacity: [0.4, 1, 0.4],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="mt-12 text-white/60 text-sm uppercase tracking-[0.3em] font-light"
            >
                {isClicked ? "Bienvenue..." : "Touchez pour entrer"}
            </motion.p>
        </motion.div>
    );
}
