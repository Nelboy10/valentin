'use client';

import { PointMaterial, Points } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import * as random from 'maath/random/dist/maath-random.cjs';
import { Suspense, useRef, useState } from 'react';

// @ts-expect-error maath types missing
function Stars(props) {
    const ref = useRef<any>(null);
    // Generate 5000 stars in a sphere of radius 1.5
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#ee2b4b"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

import FloatingHeart from './FloatingHeart';

export default function ThreeConstellation() {
    return (
        <div className="absolute inset-0 w-full h-full -z-10">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Suspense fallback={null}>
                    <Stars />
                    <FloatingHeart />
                </Suspense>
            </Canvas>
        </div>
    );
}
