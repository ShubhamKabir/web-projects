"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type HadalEnvironmentProps = {
  active: boolean;
};

export default function HadalEnvironment({ active }: HadalEnvironmentProps) {
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.visible = active;
    }
  }, [active]);

  return (
    <group ref={groupRef} visible={false} position={[0, -8, -55]}>
      {/* Hadal floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[100, 100, 8, 8]} />

        <meshStandardMaterial color="#010307" roughness={1} />
      </mesh>

      {/* Deep trench formations */}
      <mesh position={[-9, 2, -12]}>
        <dodecahedronGeometry args={[4.5, 1]} />

        <meshStandardMaterial color="#02070d" roughness={1} />
      </mesh>

      <mesh position={[8, 1.5, -18]}>
        <dodecahedronGeometry args={[3.5, 1]} />

        <meshStandardMaterial color="#02070d" roughness={1} />
      </mesh>

      <mesh position={[0, 1, -25]}>
        <dodecahedronGeometry args={[2.5, 1]} />

        <meshStandardMaterial color="#03080d" roughness={1} />
      </mesh>

      {/* Extremely narrow submersible beam */}
      <spotLight
        position={[0, 2, 5]}
        target-position={[0, -2, -22]}
        color="#e6eef2"
        intensity={13}
        distance={42}
        angle={0.22}
        penumbra={0.9}
      />

      {/* Very weak ambient biological glow */}
      <pointLight
        position={[0, 0, -20]}
        color="#6366f1"
        intensity={0.45}
        distance={12}
      />

      {/* Sparse final signals */}
      <mesh position={[-4, 0.35, -15]}>
        <sphereGeometry args={[0.045, 8, 8]} />
        <meshBasicMaterial color="#38e8d0" />
      </mesh>

      <mesh position={[5, 0.25, -24]}>
        <sphereGeometry args={[0.035, 8, 8]} />
        <meshBasicMaterial color="#6366f1" />
      </mesh>

      <mesh position={[1.5, 0.2, -31]}>
        <sphereGeometry args={[0.025, 8, 8]} />
        <meshBasicMaterial color="#38e8d0" />
      </mesh>
    </group>
  );
}
