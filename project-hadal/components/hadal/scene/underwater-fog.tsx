"use client";

import { useEffect, useState } from "react";
import * as THREE from "three";

export default function UnderwaterFog() {
  const [fogColor, setFogColor] = useState("#0b3448");
  const [fogDensity, setFogDensity] = useState(0.008);

  useEffect(() => {
    let animationFrame = 0;
    let progress = 0;
    let lastUpdate = 0;

    const update = (time: number) => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const target =
        maxScroll > 0
          ? THREE.MathUtils.clamp(window.scrollY / maxScroll, 0, 1)
          : 0;

      progress = THREE.MathUtils.lerp(progress, target, 0.04);

      // Limit React updates to roughly 20fps.
      if (time - lastUpdate > 50) {
        const depth = progress * 10924;

        let color = "#0b3448";
        let density = 0.008;

        if (depth < 200) {
          color = "#0b3448";
          density = 0.008;
        } else if (depth < 1000) {
          color = "#082238";
          density = 0.012;
        } else if (depth < 4000) {
          color = "#030f1e";
          density = 0.022;
        } else if (depth < 6000) {
          color = "#02070d";
          density = 0.03;
        } else {
          color = "#010307";
          density = 0.038;
        }

        setFogColor(color);
        setFogDensity(density);

        lastUpdate = time;
      }

      animationFrame = window.requestAnimationFrame(update);
    };

    animationFrame = window.requestAnimationFrame(update);

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <fogExp2 attach="fog" args={[fogColor, fogDensity]} />;
}
