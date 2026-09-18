"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const plumePositions = Array.from({ length: 90 }, (_, index) => {
  const a = index * 12.9898;
  const b = index * 78.233;
  const c = index * 37.719;

  return {
    x: Math.sin(a) * 2.2,
    y: (Math.sin(b) * 0.5 + 0.5) * 5,
    z: Math.cos(c) * 2.2,
    scale: 0.025 + (Math.sin(index * 4.17) * 0.5 + 0.5) * 0.055,
  };
});

type HydrothermalVentProps = {
  active: boolean;
};

export default function HydrothermalVent({ active }: HydrothermalVentProps) {
  const groupRef = useRef<THREE.Group>(null);

  const plumeRef = useRef<THREE.Group>(null);

  useEffect(() => {
    let animationFrame = 0;

    const update = () => {
      if (groupRef.current) {
        groupRef.current.visible = active;
      }

      if (plumeRef.current && active) {
        const time = performance.now() * 0.001;

        plumeRef.current.position.x = Math.sin(time * 0.35) * 0.15;

        plumeRef.current.rotation.y = Math.sin(time * 0.22) * 0.08;
      }

      animationFrame = window.requestAnimationFrame(update);
    };

    animationFrame = window.requestAnimationFrame(update);

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [active]);

  return (
    <group ref={groupRef} visible={false} position={[0, -5.5, -32]}>
      {/* Seafloor rock formation */}
      <mesh position={[0, -0.5, 0]}>
        <dodecahedronGeometry args={[5.5, 1]} />

        <meshStandardMaterial color="#080d10" roughness={1} metalness={0.05} />
      </mesh>

      {/* Main chimney */}
      <mesh position={[0, 3, 0]} scale={[1.15, 3.2, 1.15]}>
        <cylinderGeometry args={[1, 1.45, 2.5, 8]} />

        <meshStandardMaterial
          color="#11181b"
          roughness={0.95}
          metalness={0.08}
        />
      </mesh>

      {/* Secondary chimney */}
      <mesh
        position={[-2.2, 1.8, 0.4]}
        scale={[0.7, 2.1, 0.7]}
        rotation={[0, 0, -0.08]}
      >
        <cylinderGeometry args={[0.8, 1.15, 2.2, 8]} />

        <meshStandardMaterial color="#0c1317" roughness={1} />
      </mesh>

      {/* Third chimney */}
      <mesh
        position={[2.1, 1.4, -0.5]}
        scale={[0.6, 1.7, 0.6]}
        rotation={[0, 0, 0.1]}
      >
        <cylinderGeometry args={[0.75, 1, 2, 8]} />

        <meshStandardMaterial color="#101619" roughness={1} />
      </mesh>

      {/* Hot vent opening */}
      <mesh position={[0, 5.05, 0]}>
        <cylinderGeometry args={[0.65, 0.85, 0.15, 16]} />

        <meshBasicMaterial color="#f4a62a" />
      </mesh>

      {/* Mineral plume */}
      <group ref={plumeRef}>
        {plumePositions.map((particle, index) => (
          <mesh
            key={index}
            position={[particle.x, particle.y, particle.z]}
            scale={[particle.scale, particle.scale, particle.scale]}
          >
            <sphereGeometry args={[1, 6, 6]} />

            <meshBasicMaterial
              color={index % 5 === 0 ? "#38e8d0" : "#71838c"}
              transparent
              opacity={0.12 + (index % 4) * 0.025}
            />
          </mesh>
        ))}
      </group>

      {/* Vent glow */}
      <pointLight
        position={[0, 4.7, 0]}
        color="#f4a62a"
        intensity={7}
        distance={12}
      />

      <pointLight
        position={[0, 1.5, 0]}
        color="#0ea5b7"
        intensity={2}
        distance={10}
      />

      {/* Small biological lights */}
      <mesh position={[-3, 0.2, 1]}>
        <sphereGeometry args={[0.09, 10, 10]} />

        <meshBasicMaterial color="#38e8d0" />
      </mesh>

      <mesh position={[3, 0.5, -1]}>
        <sphereGeometry args={[0.07, 10, 10]} />

        <meshBasicMaterial color="#38e8d0" />
      </mesh>

      <mesh position={[1.5, 0.1, 2]}>
        <sphereGeometry args={[0.06, 10, 10]} />

        <meshBasicMaterial color="#6366f1" />
      </mesh>
    </group>
  );
}
