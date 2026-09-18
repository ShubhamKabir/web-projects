"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type SpecimenMode = "SURFACE" | "SCAN" | "X-RAY";

type OrganismsProps = {
  inspectionMode: boolean;
  specimenMode: SpecimenMode;
};

export default function Organisms({
  inspectionMode,
  specimenMode,
}: OrganismsProps) {
  const groupRef = useRef<THREE.Group>(null);

  const scanLineRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    let animationFrame = 0;
    let progress = 0;

    const update = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const target =
        maxScroll > 0
          ? THREE.MathUtils.clamp(window.scrollY / maxScroll, 0, 1)
          : 0;

      progress = THREE.MathUtils.lerp(progress, target, 0.04);

      if (groupRef.current) {
        const discovered = progress > 0.075 && progress < 0.34;

        groupRef.current.visible = discovered || inspectionMode;

        const targetScale = inspectionMode ? 1.0 : 1;

        const scale = THREE.MathUtils.lerp(
          groupRef.current.scale.x,
          targetScale,
          0.05,
        );

        groupRef.current.scale.set(scale, scale, scale);

        groupRef.current.rotation.y =
          Math.sin(performance.now() * 0.00025) * (inspectionMode ? 0.3 : 0.15);
      }

      if (scanLineRef.current) {
        const time = performance.now() * 0.001;

        scanLineRef.current.position.y = Math.sin(time * 1.5) * 1.15;

        scanLineRef.current.visible = inspectionMode && specimenMode === "SCAN";
      }

      animationFrame = window.requestAnimationFrame(update);
    };

    animationFrame = window.requestAnimationFrame(update);

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [inspectionMode, specimenMode]);

  const isScan = specimenMode === "SCAN";

  const isXray = specimenMode === "X-RAY";

  return (
    <group ref={groupRef} position={[0, -0.4, -10]}>
      {/* Main specimen body */}
      <mesh scale={[1.2, 0.8, 0.65]}>
        <sphereGeometry args={[1, 32, 24]} />

        <meshPhysicalMaterial
          color={isXray ? "#163a45" : "#0b5c68"}
          emissive="#0ea5b7"
          emissiveIntensity={isXray ? 0.35 : inspectionMode ? 1.2 : 0.7}
          roughness={isScan ? 0.8 : 0.2}
          metalness={0}
          transmission={isXray ? 0.55 : 0.15}
          transparent
          opacity={isXray ? 0.24 : 0.82}
          wireframe={isScan}
        />
      </mesh>

      {/* Internal biological core */}
      <mesh scale={isXray ? [0.7, 0.7, 0.7] : [0.38, 0.38, 0.38]}>
        <sphereGeometry args={[1, 24, 16]} />

        <meshBasicMaterial
          color={isXray ? "#f4a62a" : "#38e8d0"}
          transparent
          opacity={isXray ? 0.9 : 0.9}
          wireframe={isScan}
        />
      </mesh>

      {/* Upper structure */}
      <mesh position={[0, 0.75, 0]}>
        <sphereGeometry args={[0.42, 20, 14]} />

        <meshPhysicalMaterial
          color="#103c49"
          emissive="#38e8d0"
          emissiveIntensity={isXray ? 0.25 : 0.8}
          roughness={0.25}
          transparent
          opacity={isXray ? 0.2 : 0.75}
          wireframe={isScan}
        />
      </mesh>

      {/* Tendrils */}
      {[0, 1, 2, 3].map((index) => {
        const angle = (index / 4) * Math.PI * 2;

        return (
          <mesh
            key={index}
            position={[Math.cos(angle) * 0.65, -0.75, Math.sin(angle) * 0.65]}
            rotation={[Math.sin(angle) * 0.35, 0, Math.cos(angle) * 0.35]}
          >
            <cylinderGeometry args={[0.035, 0.06, 1.4, 10]} />

            <meshBasicMaterial
              color={isXray ? "#f4a62a" : "#2ae8c4"}
              transparent
              opacity={isXray ? 0.35 : 0.7}
              wireframe={isScan}
            />
          </mesh>
        );
      })}

      {/* Scan plane */}
      <mesh ref={scanLineRef} rotation={[0, 0, 0]}>
        <planeGeometry args={[3.5, 0.025]} />

        <meshBasicMaterial
          color="#38e8d0"
          transparent
          opacity={0.85}
          depthWrite={false}
        />
      </mesh>

      {/* Biological light */}
      <pointLight
        color={isXray ? "#f4a62a" : "#38e8d0"}
        intensity={isXray ? 1.2 : inspectionMode ? 4 : 2.2}
        distance={inspectionMode ? 8 : 5}
      />
    </group>
  );
}
