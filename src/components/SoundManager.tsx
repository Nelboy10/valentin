'use client';

import { Volume2, VolumeX } from 'lucide-react';
import { useEffect, useState } from 'react';
import useSound from 'use-sound';

export default function SoundManager() {
    // Ambient sound URL - using a royalty free nature/calm loop
    const [play, { stop }] = useSound('https://assets.mixkit.co/sfx/preview/mixkit-crickets-and-insects-in-the-wild-ambience-1242.mp3', {
        volume: 0.2,
        loop: true,
        interrupt: true
    });

    const [isMuted, setIsMuted] = useState(true);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        // Only start playing if user has interacted and not muted
        const handleInteraction = () => {
            if (!hasInteracted) {
                setHasInteracted(true);
                if (!isMuted) {
                    play();
                }
            }
        };

        window.addEventListener('click', handleInteraction);
        window.addEventListener('keydown', handleInteraction);
        window.addEventListener('touchstart', handleInteraction);

        return () => {
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
            stop();
        };
    }, [play, stop, isMuted, hasInteracted]);

    const toggleMute = () => {
        if (isMuted) {
            setIsMuted(false);
            if (hasInteracted) play();
        } else {
            setIsMuted(true);
            stop();
        }
    };

    return (
        <button
            onClick={toggleMute}
            className="fixed bottom-6 right-6 z-50 p-3 bg-white/10 backdrop-blur-md rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-all shadow-lg group"
            aria-label={isMuted ? "Unmute" : "Mute"}
        >
            {isMuted ? (
                <VolumeX className="w-5 h-5 group-hover:scale-110 transition-transform" />
            ) : (
                <div className="relative">
                    <Volume2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ping" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
                </div>
            )}
        </button>
    );
}
