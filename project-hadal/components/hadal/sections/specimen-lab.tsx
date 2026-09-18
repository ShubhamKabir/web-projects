"use client";

import SpecimenData from "../specimen/specimen-data";

type SpecimenLabProps = {
  active: boolean;
};

export default function SpecimenLab({ active }: SpecimenLabProps) {
  if (!active) return null;

  return (
    <section className="pointer-events-none fixed inset-0 z-30 flex items-end justify-between px-6 pb-24 md:px-10 md:pb-10">
      {/* Specimen analysis */}
      <div className="mb-20 max-w-lg md:mb-16">
        <p className="font-mono text-[8px] uppercase tracking-[0.35em] text-[#38e8d0]">
          Specimen Analysis / HAD-002
        </p>

        <h2 className="mt-4 font-serif text-4xl italic leading-none text-[#e6eef2] md:text-6xl">
          Unknown
          <br />
          Organism
        </h2>

        <div className="mt-5 flex items-center gap-3">
          <span className="h-px w-10 bg-[#38e8d0]" />

          <span className="font-mono text-[8px] tracking-[0.18em] text-[#71838c]">
            HYDROTHERMAL FIELD / 4,218 M
          </span>
        </div>

        <p className="mt-6 max-w-md font-mono text-[9px] uppercase leading-6 tracking-[0.12em] text-[#71838c]">
          A biological signature was detected within the vent field.
          Morphological characteristics do not correspond to the current
          expedition catalogue.
        </p>
      </div>

      {/* Observation data */}
      <div className="mb-10 mr-8 md:mb-8 md:mr-6">
        <SpecimenData />
      </div>
    </section>
  );
}
