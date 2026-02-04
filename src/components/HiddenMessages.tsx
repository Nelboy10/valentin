'use client';

export default function HiddenMessages() {
    const words = [
        { text: "Toujours", top: "15%", left: "10%" },
        { text: "Toi", top: "25%", left: "85%" },
        { text: "Lien", top: "45%", left: "20%" },
        { text: "Destin", top: "55%", left: "75%" },
        { text: "Unique", top: "75%", left: "15%" },
        { text: "Amour", top: "85%", left: "80%" },
    ];

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {words.map((word, i) => (
                <div
                    key={i}
                    className="absolute text-[6rem] md:text-[10rem] font-bold leading-none select-none font-serif tracking-tighter mix-blend-difference text-[#050505]"
                    style={{
                        top: word.top,
                        left: word.left,
                        // We use a color very close to black #050505.
                        // The background is black #000000 or #0a0a0a.
                        // Without spotlight, it blends in perfectly.
                        // With spotlight (White), Difference => White - #050505 = Almost White.
                        // It should pop.
                    }}
                >
                    {word.text}
                </div>
            ))}
        </div>
    );
}
