'use client';

export default function SectionDivider({
    position = "bottom",
    fill = "white",
    variant = "curve"
}: {
    position?: "top" | "bottom",
    fill?: string,
    variant?: "curve" | "wave"
}) {
    const isTop = position === "top";

    // Smooth organic curve
    if (variant === "curve") {
        return (
            <div className={`absolute ${isTop ? 'top-0' : 'bottom-0'} left-0 right-0 z-20 pointer-events-none overflow-hidden leading-none rotate-180`}>
                <svg
                    className={`relative block w-[calc(100%+1.3px)] h-[80px] md:h-[150px] ${isTop ? '' : 'transform rotate-180'}`}
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        fill={fill}
                    />
                </svg>
            </div>
        );
    }

    // Gentle wave
    return (
        <div className={`absolute ${isTop ? 'top-0' : 'bottom-0'} left-0 right-0 z-20 pointer-events-none overflow-hidden leading-none`}>
            <svg
                className={`relative block w-[calc(100%+1.3px)] h-[50px] md:h-[100px] ${isTop ? '' : 'transform rotate-180'}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    fill={fill}
                    fillOpacity="1"
                    d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
        </div>
    );
}
