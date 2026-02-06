'use client';

import { PointMaterial, Points } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import * as random from 'maath/random/dist/maath-random.cjs';
import { Suspense, useRef, useState, useMemo, useEffect } from 'react';
import * as THREE from 'three';

function LoveAura(props: any) {
    const ref = useRef<THREE.Points>(null);
    const count = 3000;
    const [positions] = useState(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const r = Math.random() * 2;
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);
            const distance = Math.pow(Math.random(), 2) * 2.5;

            pos[i * 3] = distance * Math.sin(phi) * Math.cos(theta); // x
            pos[i * 3 + 1] = distance * Math.sin(phi) * Math.sin(theta); // y
            pos[i * 3 + 2] = distance * Math.cos(phi) - 1; // z
        }
        return pos;
    });

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.z += delta / 25;
            ref.current.rotation.y += delta / 40;
            const pulse = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
            ref.current.scale.set(pulse, pulse, pulse);
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#FF1493"
                    size={0.012}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}

function FloatingHeartInstances() {
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const count = 40;

    // Create Heart Shape Geometry
    const heartGeometry = useMemo(() => {
        const shape = new THREE.Shape();
        const x = 0, y = 0;
        shape.moveTo(x + 0.25, y + 0.25);
        shape.bezierCurveTo(x + 0.25, y + 0.25, x + 0.20, y, x, y);
        shape.bezierCurveTo(x - 0.30, y, x - 0.30, y + 0.35, x - 0.30, y + 0.35);
        shape.bezierCurveTo(x - 0.30, y + 0.55, x - 0.10, y + 0.77, x + 0.25, y + 0.95);
        shape.bezierCurveTo(x + 0.60, y + 0.77, x + 0.80, y + 0.55, x + 0.80, y + 0.35);
        shape.bezierCurveTo(x + 0.80, y + 0.35, x + 0.80, y, x + 0.50, y);
        shape.bezierCurveTo(x + 0.35, y, x + 0.25, y + 0.25, x + 0.25, y + 0.25);

        // Extrude slightly for 3D effect or just use ShapeGeometry for 2D billboard
        // Using ShapeGeometry for 2D "paper cut" look is lighter and cute
        return new THREE.ShapeGeometry(shape);
    }, []);

    // Initial random positions
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const factor = 1 + Math.random(); // size variation
            const speed = 0.5 + Math.random() * 0.5;
            const x = (Math.random() - 0.5) * 10; // wide spread
            const y = (Math.random() - 0.5) * 10;
            const z = (Math.random() - 0.5) * 5;
            temp.push({ t, factor, speed, x, y, z });
        }
        return temp;
    }, []);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame((state, delta) => {
        if (!meshRef.current) return;

        particles.forEach((particle, i) => {
            let { t, factor, speed, x, y, z } = particle;

            // Update time/position
            // Float up
            t += speed * 0.01;
            // Wiggle
            const s = Math.sin(t);

            // Calculate pseudo-position
            // We want them to drift UP continuously
            particle.y += delta * speed;
            if (particle.y > 6) particle.y = -6; // Loop

            // Billboard effect: look at camera or just face forward?
            // Let's just rotate them slowly

            dummy.position.set(particle.x, particle.y, particle.z);
            dummy.scale.set(0.05 * factor, 0.05 * factor, 0.05 * factor);

            // Gentle rotation
            dummy.rotation.z = Math.sin(t * 2) * 0.2 + Math.PI; // Face up-ish (Hearts are drawn tip down usually, need check)
            // Shape code above draws tip at bottom (y=0ish) and bumps up. 
            // Actually standard bezier heart usually points down.
            // We'll adjust rotation to make them stand straight.
            dummy.rotation.z = Math.PI; // Flip if needed, let's test.

            dummy.updateMatrix();
            meshRef.current!.setMatrixAt(i, dummy.matrix);
        });
        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[heartGeometry, undefined, count]}>
            <meshBasicMaterial color="#FF69B4" transparent opacity={0.6} side={THREE.DoubleSide} />
        </instancedMesh>
    );
}

export default function ThreeConstellation() {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <Suspense fallback={null}>
                    <LoveAura />
                    <FloatingHeartInstances />
                </Suspense>
            </Canvas>
        </div>
    );
}
