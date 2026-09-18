"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 5000;

export default function MarineSnow() {
  const pointsRef = useRef<THREE.Points>(null);

  const materialRef = useRef<THREE.PointsMaterial>(null);

  const { positions, sizes } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);

    const sizes = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;

      // Deterministic distribution.
      // Avoids Math.random() so the React Compiler
      // does not report an impure-render error.
      const x = Math.sin(i * 12.9898) * 0.5;

      const y = Math.sin(i * 78.233) * 0.5;

      const z = Math.sin(i * 39.425) * 0.5;

      positions[i3] = x * 24;
      positions[i3 + 1] = y * 18;
      positions[i3 + 2] = z * 35;

      sizes[i] = 0.4 + (Math.sin(i * 17.123) * 0.5 + 0.5) * 1.2;
    }

    return {
      positions,
      sizes,
    };
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress =
      maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;

    const depth = progress * 10924;

    const particleOpacity =
      depth < 200
        ? 0.34
        : depth < 1000
          ? 0.25
          : depth < 4000
            ? 0.16
            : depth < 6000
              ? 0.09
              : 0.045;

    if (materialRef.current) {
      materialRef.current.opacity = THREE.MathUtils.lerp(
        materialRef.current.opacity,
        particleOpacity,
        0.04,
      );
    }

    pointsRef.current.rotation.y += delta * 0.008;

    const geometry = pointsRef.current.geometry;

    const positionAttribute = geometry.getAttribute(
      "position",
    ) as THREE.BufferAttribute;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;

      positionAttribute.array[i3 + 1] -= delta * (0.025 + (i % 7) * 0.003);

      positionAttribute.array[i3] +=
        Math.sin(state.clock.elapsedTime * 0.25 + i) * delta * 0.003;

      if (positionAttribute.array[i3 + 1] < -9) {
        positionAttribute.array[i3 + 1] = 9;
      }
    }

    positionAttribute.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />

        <bufferAttribute attach="attributes-aSize" args={[sizes, 1]} />
      </bufferGeometry>

      <pointsMaterial
        ref={materialRef}
        color="#b7d9df"
        size={0.025}
        sizeAttenuation
        transparent
        opacity={0.34}
        depthWrite={false}
      />
    </points>
  );
}
