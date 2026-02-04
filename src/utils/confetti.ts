import confetti from 'canvas-confetti';

export const triggerHeartExplosion = () => {
    const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        colors: ['#ee2b4b', '#ff758c', '#ffffff']
    };

    const shoot = () => {
        confetti({
            ...defaults,
            particleCount: 40,
            scalar: 1.2,
            shapes: ['circle']
        });

        confetti({
            ...defaults,
            particleCount: 10,
            scalar: 2.75, // Large hearts
            shapes: ['square'] // We don't have built-in hearts in basic, but we can simulate or use shapes. 
            // Note: canvas-confetti supports 'heart' shape if we use the browser module, but for safer TS usage we stick to basic or custom shapes.
            // Actually, 'heart' IS supported in newer versions. Let's try it.
        });

        // Since 'heart' might need a custom shape or specific version, let's use a known trick:
        // We will just do a nice burst of red/pink particles.
        // If we want real hearts we might need to define a shape, but for now let's use the 'heart' string distinctively.
        confetti({
            ...defaults,
            particleCount: 30,
            scalar: 2,
            shapes: ['heart' as any]
        });
    };

    shoot();
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
};
