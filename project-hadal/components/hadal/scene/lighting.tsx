"use client";

import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function Lighting() {
  const { scene } = useThree();

  useEffect(() => {
    let animationFrame = 0;
    let progress = 0;

    const ambient = scene.children.find(
      (child) => child instanceof THREE.AmbientLight,
    ) as THREE.AmbientLight | undefined;

    const directional = scene.children.find(
      (child) => child instanceof THREE.DirectionalLight,
    ) as THREE.DirectionalLight | undefined;

    const point = scene.children.find(
      (child) => child instanceof THREE.PointLight,
    ) as THREE.PointLight | undefined;

    const update = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const target =
        maxScroll > 0
          ? THREE.MathUtils.clamp(window.scrollY / maxScroll, 0, 1)
          : 0;

      progress = THREE.MathUtils.lerp(progress, target, 0.04);

      const depth = progress * 10924;

      let ambientIntensity = 0.25;
      let directionalIntensity = 1.8;
      let pointIntensity = 1.4;

      if (depth < 200) {
        ambientIntensity = 0.35;
        directionalIntensity = 1.8;
        pointIntensity = 1.4;
      } else if (depth < 1000) {
        ambientIntensity = 0.2;
        directionalIntensity = 0.9;
        pointIntensity = 1.1;
      } else if (depth < 4000) {
        ambientIntensity = 0.1;
        directionalIntensity = 0.15;
        pointIntensity = 0.75;
      } else if (depth < 6000) {
        ambientIntensity = 0.045;
        directionalIntensity = 0.02;
        pointIntensity = 0.35;
      } else {
        ambientIntensity = 0.02;
        directionalIntensity = 0;
        pointIntensity = 0.18;
      }

      if (ambient) {
        ambient.intensity = THREE.MathUtils.lerp(
          ambient.intensity,
          ambientIntensity,
          0.05,
        );
      }

      if (directional) {
        directional.intensity = THREE.MathUtils.lerp(
          directional.intensity,
          directionalIntensity,
          0.05,
        );
      }

      if (point) {
        point.intensity = THREE.MathUtils.lerp(
          point.intensity,
          pointIntensity,
          0.05,
        );
      }

      animationFrame = window.requestAnimationFrame(update);
    };

    update();

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [scene]);

  return null;
}
