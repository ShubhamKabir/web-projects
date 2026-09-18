"use client";

import { Canvas } from "@react-three/fiber";

import MarineSnow from "./marine-snow";
import CameraRig from "./camera-rig";
import UnderwaterFog from "./underwater-fog";
import Lighting from "./lighting";
import Organisms from "./organisms";
import HydrothermalVent from "./hydrothermal-vent";
import AbyssEnvironment from "./abyss-environment";
import HadalEnvironment from "./hadal-environment";

type SpecimenMode = "SURFACE" | "SCAN" | "X-RAY";

type OceanSceneProps = {
  inspectionMode: boolean;
  specimenMode: SpecimenMode;
  ventActive: boolean;
  abyssActive: boolean;
  hadalActive: boolean;
};

function OceanEnvironment({
  inspectionMode,
  specimenMode,
  ventActive,
  abyssActive,
  hadalActive,
}: OceanSceneProps) {
  return (
    <>
      <ambientLight intensity={0.25} color="#0b3448" />

      <directionalLight position={[4, 12, 3]} intensity={1.8} color="#64d2ec" />

      <pointLight
        position={[0, 3, 3]}
        intensity={1.4}
        distance={18}
        color="#0ea5b7"
      />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -6, -24]}>
        <planeGeometry args={[60, 60, 1, 1]} />

        <meshStandardMaterial color="#07131a" roughness={1} metalness={0} />
      </mesh>

      <MarineSnow />

      <Organisms inspectionMode={inspectionMode} specimenMode={specimenMode} />
      <HydrothermalVent active={ventActive} />
      <AbyssEnvironment active={abyssActive} />
      <HadalEnvironment active={hadalActive} />
    </>
  );
}

export default function OceanScene({
  inspectionMode,
  specimenMode,
  ventActive,
  abyssActive,
  hadalActive,
}: OceanSceneProps) {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 52,
          near: 0.1,
          far: 200,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
        }}
      >
        <color attach="background" args={["#010307"]} />

        <CameraRig inspectionMode={inspectionMode} />

        <UnderwaterFog />
        <Lighting />

        <OceanEnvironment
          inspectionMode={inspectionMode}
          specimenMode={specimenMode}
          ventActive={ventActive}
          abyssActive={abyssActive}
          hadalActive={hadalActive}
        />
      </Canvas>
    </div>
  );
}
