"use client";

import { useState } from "react";

type SonarInterfaceProps = {
  active: boolean;
};

export default function SonarInterface({ active }: SonarInterfaceProps) {
  const [pinging, setPinging] = useState(false);
  const [detected, setDetected] = useState(false);

  if (!active) {
    return null;
  }

  const handlePing = () => {
    if (pinging) return;

    setPinging(true);
    setDetected(false);

    window.setTimeout(() => {
      setDetected(true);
      setPinging(false);
    }, 1400);
  };

  return (
    <div className="fixed inset-0 z-40 pointer-events-none">
      {/* Darken the midnight environment */}
      <div className="absolute inset-0 bg-[#010307]/30" />

      {/* Section label */}
      <div className="absolute left-8 top-24 md:left-12 md:top-28">
        <p className="font-mono text-[8px] uppercase tracking-[0.35em] text-[#f4a62a]">
          Active Sonar
        </p>

        <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-[#71838c]">
          Midnight Zone / 4,012 M
        </p>
      </div>

      {/* Sonar display */}
      <div className="absolute left-1/2 top-1/2 h-[min(62vw,520px)] w-[min(62vw,520px)] -translate-x-1/2 -translate-y-1/2">
        {/* Outer rings */}
        <div className="absolute inset-0 rounded-full border border-[#38e8d0]/20" />

        <div className="absolute inset-[12%] rounded-full border border-[#38e8d0]/15" />

        <div className="absolute inset-[24%] rounded-full border border-[#38e8d0]/15" />

        <div className="absolute inset-[36%] rounded-full border border-[#38e8d0]/10" />

        {/* Crosshair */}
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#38e8d0]/10" />

        <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#38e8d0]/10" />

        {/* Center */}
        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#38e8d0]" />

        {/* Ping pulse */}
        {pinging && (
          <div className="absolute inset-0 animate-ping rounded-full border border-[#38e8d0]/70" />
        )}

        {/* Detected return */}
        {detected && (
          <>
            <div className="absolute left-[67%] top-[31%] h-2 w-2 rounded-full bg-[#f4a62a] shadow-[0_0_18px_#f4a62a]" />

            <div className="absolute left-[70%] top-[27%] w-40">
              <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#f4a62a]">
                Return Detected
              </p>

              <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.16em] text-[#71838c]">
                Bearing 042°
              </p>

              <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.16em] text-[#71838c]">
                Range 183 M
              </p>
            </div>
          </>
        )}

        {/* Sweep */}
        <div
          className={`absolute left-1/2 top-1/2 h-1/2 w-px origin-bottom -translate-x-1/2 -translate-y-full bg-gradient-to-t from-[#38e8d0]/50 to-transparent ${
            pinging ? "animate-[spin_1.4s_linear]" : ""
          }`}
        />
      </div>

      {/* Readout */}
      <div className="absolute bottom-36 left-8 md:bottom-40 md:left-12">
        <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#71838c]">
          Acoustic Status
        </p>

        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#e6eef2]">
          {pinging
            ? "Transmitting..."
            : detected
              ? "Return Acquired"
              : "System Ready"}
        </p>
      </div>

      {/* Ping button */}
      <div className="pointer-events-auto absolute bottom-8 left-1/2 -translate-x-1/2">
        <button
          type="button"
          onClick={handlePing}
          disabled={pinging}
          className={`min-w-32 border px-7 py-3 font-mono text-[9px] uppercase tracking-[0.25em] transition-all ${
            pinging
              ? "border-[#f4a62a] bg-[#f4a62a] text-[#010307]"
              : "border-[#38e8d0]/60 text-[#38e8d0] hover:bg-[#38e8d0] hover:text-[#010307]"
          }`}
        >
          {pinging ? "PINGING" : "PING"}
        </button>
      </div>

      {/* Instructions */}
      {!detected && !pinging && (
        <p className="absolute bottom-8 right-8 font-mono text-[8px] uppercase tracking-[0.16em] text-[#71838c] md:right-12">
          Active acoustic survey
        </p>
      )}
    </div>
  );
}
