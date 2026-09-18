"use client";

type AbyssProps = {
  active: boolean;
};

export default function Abyss({ active }: AbyssProps) {
  if (!active) return null;

  return (
    <section className="pointer-events-none fixed inset-0 z-20 flex items-center px-8 md:px-14">
      <div className="max-w-xl">
        <p className="font-mono text-[8px] uppercase tracking-[0.38em] text-[#71838c]">
          04 / ABYSSOPELAGIC
        </p>

        <h2 className="mt-7 max-w-lg text-5xl font-medium uppercase leading-[0.88] tracking-[-0.04em] text-[#e6eef2]/80 md:text-8xl">
          The light
          <br />
          is gone.
        </h2>

        <div className="mt-8 h-px w-16 bg-[#71838c]/40" />

        <p className="mt-7 max-w-sm font-mono text-[8px] uppercase leading-6 tracking-[0.16em] text-[#71838c]/80">
          5,104 M
          <br />
          NO NATURAL LIGHT
          <br />
          EXTERNAL ILLUMINATION ONLY
        </p>
      </div>
    </section>
  );
}
