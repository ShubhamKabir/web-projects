"use client";

type HadalProps = {
  active: boolean;
};

export default function Hadal({ active }: HadalProps) {
  if (!active) return null;

  return (
    <section className="pointer-events-none fixed inset-0 z-20 flex items-center justify-center">
      <div className="text-center">
        <p className="font-mono text-[8px] uppercase tracking-[0.45em] text-[#71838c]/70">
          HADALPELAGIC ZONE
        </p>

        <div className="mt-8">
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#71838c]">
            DESCENT CONTINUES
          </p>

          <h2 className="mt-5 font-mono text-6xl font-light tracking-[-0.04em] text-[#e6eef2]/85 md:text-9xl">
            6,000
          </h2>

          <p className="mt-3 font-mono text-[9px] tracking-[0.3em] text-[#71838c]">
            METERS
          </p>
        </div>

        <div className="mx-auto mt-10 h-20 w-px bg-[#e6eef2]/10" />

        <p className="mt-8 font-mono text-[8px] uppercase tracking-[0.25em] text-[#71838c]/70">
          PRESSURE RISING
        </p>
      </div>
    </section>
  );
}
