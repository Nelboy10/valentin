'use client';

import { useEffect } from 'react';

export default function DynamicTitle() {
    useEffect(() => {
        const originalTitle = document.title;
        const emotionalTitles = ["Reviens vite... 💔", "Tu me manques...", "N'oublie pas l'amour..."];

        const handleVisibilityChange = () => {
            if (document.hidden) {
                const randomTitle = emotionalTitles[Math.floor(Math.random() * emotionalTitles.length)];
                document.title = randomTitle;
            } else {
                document.title = originalTitle;
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);

    return null;
}
