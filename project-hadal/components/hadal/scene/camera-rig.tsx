"use client";

import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

type CameraRigProps = {
  inspectionMode: boolean;
};

export default function CameraRig({ inspectionMode }: CameraRigProps) {
  const { camera } = useThree();

  useEffect(() => {
    let animationFrame = 0;
    let currentProgress = 0;

    const update = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const targetProgress =
        maxScroll > 0
          ? THREE.MathUtils.clamp(window.scrollY / maxScroll, 0, 1)
          : 0;

      currentProgress = THREE.MathUtils.lerp(
        currentProgress,
        targetProgress,
        0.045,
      );

      const p = currentProgress;

      if (inspectionMode) {
        camera.position.x = THREE.MathUtils.lerp(camera.position.x, 0, 0.045);

        camera.position.y = THREE.MathUtils.lerp(
          camera.position.y,
          -0.4,
          0.045,
        );

        camera.position.z = THREE.MathUtils.lerp(
          camera.position.z,
          -5.5,
          0.045,
        );

        camera.lookAt(0, -0.4, -10);
      } else {
        const depthProgress = Math.pow(p, 1.35);

        const depth = THREE.MathUtils.lerp(0, 55, depthProgress);

        camera.position.x = THREE.MathUtils.lerp(
          camera.position.x,
          Math.sin(p * Math.PI * 2) * 1.2,
          0.045,
        );

        camera.position.y = THREE.MathUtils.lerp(
          camera.position.y,
          Math.sin(p * Math.PI) * 0.8,
          0.045,
        );

        camera.position.z = THREE.MathUtils.lerp(
          camera.position.z,
          8 - depth,
          0.045,
        );

        camera.lookAt(
          0,
          THREE.MathUtils.lerp(0, -1.5, p),
          camera.position.z - 18,
        );
      }

      if (camera instanceof THREE.PerspectiveCamera) {
        camera.fov = THREE.MathUtils.lerp(
          camera.fov,
          inspectionMode ? 42 : THREE.MathUtils.lerp(52, 38, p),
          0.05,
        );

        camera.updateProjectionMatrix();
      }

      animationFrame = window.requestAnimationFrame(update);
    };

    animationFrame = window.requestAnimationFrame(update);

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [camera, inspectionMode]);

  return null;
}
