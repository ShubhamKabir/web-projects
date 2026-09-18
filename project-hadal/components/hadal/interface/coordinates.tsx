"use client";

export default function Coordinates() {
  return (
    <div className="pointer-events-none fixed left-1/2 top-5 z-30 hidden -translate-x-1/2 md:block">
      <div className="flex items-center gap-4 font-mono text-[7px] uppercase tracking-[0.2em] text-[#71838c]">
        <span>11°22′N</span>

        <span className="h-px w-5 bg-[#71838c]/40" />

        <span>142°12′E</span>

        <span className="h-px w-5 bg-[#71838c]/40" />

        <span>PACIFIC / MARIANA</span>
      </div>
    </div>
  );
}
