"use client";

import { useEffect, useState } from "react";
import { getDepth } from "@/lib/depth";

const marks = [
  { depth: 0, label: "SURFACE" },
  { depth: 200, label: "200" },
  { depth: 1000, label: "1K" },
  { depth: 4000, label: "4K" },
  { depth: 6000, label: "6K" },
  { depth: 8000, label: "8K" },
  { depth: 10000, label: "10K" },
  { depth: 10924, label: "HADAL" },
];

export default function DepthIndicator() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress(maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0);
    };

    update();

    window.addEventListener("scroll", update, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", update);
  }, []);

  const depth = getDepth(progress);

  return (
    <div className="pointer-events-none fixed right-5 top-1/2 z-30 hidden h-72 -translate-y-1/2 md:right-8 md:block">
      <div className="relative h-full w-16">
        {/* SCALE */}
        <div className="absolute right-4 top-0 h-full w-px bg-[#e6eef2]/20" />

        {marks.map((mark) => {
          const position = mark.depth / 10924;

          return (
            <div
              key={mark.depth}
              className="absolute right-0 flex items-center gap-2"
              style={{
                top: `${position * 100}%`,
                transform: "translateY(-50%)",
              }}
            >
              <span className="font-mono text-[7px] tracking-[0.1em] text-[#71838c]">
                {mark.label}
              </span>

              <span className="h-px w-2 bg-[#e6eef2]/30" />
            </div>
          );
        })}

        {/* CURRENT POSITION */}
        <div
          className="absolute right-[11px] flex items-center"
          style={{
            top: `${progress * 100}%`,
            transform: "translateY(-50%)",
          }}
        >
          <div className="h-2 w-2 border border-[#38e8d0] bg-[#010307]" />
        </div>

        {/* CURRENT DEPTH */}
        <div
          className="absolute right-12 whitespace-nowrap"
          style={{
            top: `${progress * 100}%`,
            transform: "translateY(-50%)",
          }}
        >
          <span className="font-mono text-[8px] tracking-[0.12em] text-[#38e8d0]">
            {depth.toLocaleString()} M
          </span>
        </div>
      </div>
    </div>
  );
}
