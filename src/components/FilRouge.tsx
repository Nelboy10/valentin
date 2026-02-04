'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function FilRouge() {
    const { scrollYProgress } = useScroll();

    // We'll draw a long wavy line down the center/side of the page
    // Since the page height is variable, we can fix this to the viewport or make it a massive SVG layer.
    // A cleaner "God Mode" approach is a fixed center line that pulses, OR a line that traces scroll.
    // Let's do a fixed background line that fills.

    return (
        <div className="fixed top-0 left-4 md:left-10 h-full w-[2px] z-50 pointer-events-none mix-blend-screen">
            {/* Track */}
            <div className="absolute inset-0 bg-white/5" />

            {/* The Thread */}
            <motion.div
                style={{ scaleY: scrollYProgress }}
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#ee2b4b] via-[#ff758c] to-[#ee2b4b] origin-top shadow-[0_0_10px_#ee2b4b]"
            />

            {/* The Needle/Heart at the tip */}
            <motion.div
                style={{ top: useTransform(scrollYProgress, v => `${v * 100}%`) }}
                className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_20px_#ee2b4b]"
            >
                <div className="absolute inset-0 bg-primary animate-ping rounded-full opacity-50" />
            </motion.div>
        </div>
    );
}
