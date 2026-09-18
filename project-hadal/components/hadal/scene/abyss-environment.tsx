"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type AbyssEnvironmentProps = {
  active: boolean;
};

export default function AbyssEnvironment({ active }: AbyssEnvironmentProps) {
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.visible = active;
    }
  }, [active]);

  return (
    <group ref={groupRef} visible={false} position={[0, -7, -42]}>
      {/* Abyss floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[80, 80, 8, 8]} />

        <meshStandardMaterial color="#03070b" roughness={1} metalness={0} />
      </mesh>

      {/* Large geological formations */}
      <mesh position={[-8, 3, -4]}>
        <dodecahedronGeometry args={[4, 1]} />

        <meshStandardMaterial color="#080d12" roughness={1} />
      </mesh>

      <mesh position={[9, 2, -7]}>
        <dodecahedronGeometry args={[3, 1]} />

        <meshStandardMaterial color="#070c10" roughness={1} />
      </mesh>

      <mesh position={[2, 1.5, -13]}>
        <dodecahedronGeometry args={[2.5, 1]} />

        <meshStandardMaterial color="#0a1015" roughness={1} />
      </mesh>

      {/* Submersible illumination */}
      <spotLight
        position={[0, 3, 4]}
        target-position={[0, -2, -14]}
        color="#e6eef2"
        intensity={18}
        distance={35}
        angle={0.34}
        penumbra={0.8}
      />

      <pointLight
        position={[0, 0, -10]}
        color="#0ea5b7"
        intensity={1.2}
        distance={18}
      />

      {/* Sparse biological signal */}
      <mesh position={[-5, 0.8, -8]}>
        <sphereGeometry args={[0.075, 8, 8]} />

        <meshBasicMaterial color="#6366f1" />
      </mesh>

      <mesh position={[6, 1.2, -12]}>
        <sphereGeometry args={[0.055, 8, 8]} />

        <meshBasicMaterial color="#38e8d0" />
      </mesh>

      <mesh position={[1, 0.5, -18]}>
        <sphereGeometry args={[0.045, 8, 8]} />

        <meshBasicMaterial color="#38e8d0" />
      </mesh>
    </group>
  );
}
