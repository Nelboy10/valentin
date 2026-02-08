'use client';

import { useEffect, useState } from 'react';
import { triggerHeartExplosion } from '@/utils/confetti';
import useSound from 'use-sound';

export default function LoveCode() {
    const [input, setInput] = useState("");
    const [playCheer] = useSound('https://assets.mixkit.co/sfx/preview/mixkit-ethereal-fairy-glitter-1011.mp3', { volume: 0.5 });

    // Konami-style codes
    const codes = ["LOVE", "AMOUR", "CADEAU"];

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const char = e.key.toUpperCase();
            // Only tracking letters
            if (!/^[A-Z]$/.test(char)) return;

            setInput((prev) => {
                const next = (prev + char).slice(-10); // Keep last 10 chars

                // Check if any code matches the END of the input string
                if (codes.some(code => next.endsWith(code))) {
                    triggerHeartExplosion();
                    playCheer();
                    // Reset input to avoid double triggering if typing fast/repeatedly
                    return "";
                }
                return next;
            });
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [playCheer]);

    return null;
}
