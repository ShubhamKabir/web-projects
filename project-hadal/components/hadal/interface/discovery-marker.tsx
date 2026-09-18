"use client";

import { useEffect, useState } from "react";

type DiscoveryMarkerProps = {
  inspectionMode: boolean;
  onInspect: () => void;
};

export default function DiscoveryMarker({
  inspectionMode,
  onInspect,
}: DiscoveryMarkerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

      setVisible(progress > 0.09 && progress < 0.3);
    };

    update();

    window.addEventListener("scroll", update, { passive: true });

    return () => window.removeEventListener("scroll", update);
  }, []);

  if (!visible || inspectionMode) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-40 flex items-center justify-center">
      <div className="relative h-32 w-32">
        <div className="absolute left-1/2 top-0 h-5 w-px -translate-x-1/2 bg-[#38e8d0]/70" />

        <div className="absolute bottom-0 left-1/2 h-5 w-px -translate-x-1/2 bg-[#38e8d0]/70" />

        <div className="absolute left-0 top-1/2 h-px w-5 -translate-y-1/2 bg-[#38e8d0]/70" />

        <div className="absolute right-0 top-1/2 h-px w-5 -translate-y-1/2 bg-[#38e8d0]/70" />

        <div className="absolute inset-7 border border-[#38e8d0]/45" />

        <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#38e8d0]" />

        <div className="absolute left-[calc(100%+24px)] top-1/2 w-48 -translate-y-1/2">
          <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#38e8d0]">
            Specimen Detected
          </p>

          <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-[#e6eef2]">
            HAD-001
          </p>

          <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.18em] text-[#71838c]">
            Classification Unknown
          </p>

          <button
            type="button"
            onClick={onInspect}
            className="pointer-events-auto mt-5 border border-[#38e8d0]/50 px-3 py-2 font-mono text-[8px] uppercase tracking-[0.18em] text-[#38e8d0] transition-colors hover:bg-[#38e8d0] hover:text-[#010307]"
          >
            Inspect Specimen
          </button>
        </div>
      </div>
    </div>
  );
}
