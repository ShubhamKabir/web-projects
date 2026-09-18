"use client";

import { useEffect, useState } from "react";
import {
  formatDepth,
  getDepth,
  getPressure,
  getTemperature,
  getZone,
} from "@/lib/depth";

export default function Telemetry() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const next = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;

      setProgress(next);
    };

    update();

    window.addEventListener("scroll", update, {
      passive: true,
    });

    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const depth = getDepth(progress);
  const pressure = getPressure(depth);
  const temperature = getTemperature(depth);
  const zone = getZone(depth);

  return (
    <div className="pointer-events-none fixed inset-0 z-30">
      {/* TOP LEFT */}
      <div className="absolute left-5 top-5 md:left-8 md:top-7">
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#38e8d0]" />

          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#e6eef2]">
            HADAL / LIVE
          </span>
        </div>

        <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.2em] text-[#71838c]">
          Expedition 07
        </p>
      </div>

      {/* TOP RIGHT */}
      <div className="absolute right-5 top-5 text-right md:right-8 md:top-7">
        <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#71838c]">
          System
        </p>

        <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-[#38e8d0]">
          Nominal
        </p>
      </div>

      {/* BOTTOM LEFT TELEMETRY */}
      <div className="absolute bottom-6 left-5 md:bottom-8 md:left-8">
        <div className="mb-4 flex items-end gap-3">
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#71838c]">
            Depth
          </span>

          <span className="font-mono text-2xl tracking-[0.08em] text-[#e6eef2]">
            {formatDepth(depth)}
          </span>

          <span className="mb-1 font-mono text-[8px] text-[#71838c]">M</span>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-2 font-mono text-[8px] uppercase tracking-[0.16em]">
          <div>
            <span className="text-[#71838c]">Pressure</span>

            <p className="mt-1 text-[#e6eef2]">
              {pressure.toLocaleString()} BAR
            </p>
          </div>

          <div>
            <span className="text-[#71838c]">Temp</span>

            <p className="mt-1 text-[#e6eef2]">{temperature.toFixed(1)} °C</p>
          </div>

          <div className="col-span-2">
            <span className="text-[#71838c]">Zone</span>

            <p className="mt-1 text-[#38e8d0]">{zone}</p>
          </div>
        </div>
      </div>

      {/* BOTTOM RIGHT */}
      <div className="absolute bottom-6 right-5 text-right md:bottom-8 md:right-8">
        <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#71838c]">
          Vehicle
        </p>

        <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.15em] text-[#e6eef2]">
          HADAL-07
        </p>

        <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.15em] text-[#71838c]">
          Signal Acquired
        </p>
      </div>
    </div>
  );
}
