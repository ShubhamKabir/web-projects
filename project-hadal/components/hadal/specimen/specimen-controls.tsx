"use client";

type Mode = "SURFACE" | "SCAN" | "X-RAY";

type SpecimenControlsProps = {
  active: boolean;
  mode: Mode;
  onModeChange: (mode: Mode) => void;
  onClose: () => void;
};

export default function SpecimenControls({
  active,
  mode,
  onModeChange,
  onClose,
}: SpecimenControlsProps) {
  if (!active) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-[#010307]/55" />
      {/* Inspection frame */}
      <div className="pointer-events-none absolute inset-5 border border-[#38e8d0]/20 md:inset-8">
        <div className="absolute left-0 top-0 h-8 w-8 border-l border-t border-[#38e8d0]/70" />

        <div className="absolute right-0 top-0 h-8 w-8 border-r border-t border-[#38e8d0]/70" />

        <div className="absolute bottom-0 left-0 h-8 w-8 border-b border-l border-[#38e8d0]/70" />

        <div className="absolute bottom-0 right-0 h-8 w-8 border-b border-r border-[#38e8d0]/70" />
      </div>

      {/* Header */}
      <div className="absolute left-8 top-8 md:left-12 md:top-10">
        <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#38e8d0]">
          Specimen Inspection
        </p>

        <h2 className="mt-3 font-mono text-xl tracking-[0.08em] text-[#e6eef2]">
          HAD-001
        </h2>

        <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.18em] text-[#71838c]">
          Unknown Biological Organism
        </p>
      </div>

      {/* Right status */}
      <div className="absolute right-8 top-8 text-right md:right-12 md:top-10">
        <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#71838c]">
          Inspection Mode
        </p>

        <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-[#38e8d0]">
          {mode}
        </p>
      </div>

      {/* Data */}
      <div className="absolute bottom-8 left-8 md:bottom-10 md:left-12">
        <div className="grid grid-cols-2 gap-x-10 gap-y-4 font-mono text-[8px] uppercase tracking-[0.16em]">
          <div>
            <span className="text-[#71838c]">Record</span>

            <p className="mt-1 text-[#e6eef2]">HAD-001</p>
          </div>

          <div>
            <span className="text-[#71838c]">Depth</span>

            <p className="mt-1 text-[#e6eef2]">0842 M</p>
          </div>

          <div>
            <span className="text-[#71838c]">Signal</span>

            <p className="mt-1 text-[#38e8d0]">Biological</p>
          </div>

          <div>
            <span className="text-[#71838c]">Status</span>

            <p className="mt-1 text-[#38e8d0]">Active</p>
          </div>
        </div>
      </div>

      {/* Mode controls */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-1 md:bottom-10">
        {(["SURFACE", "SCAN", "X-RAY"] as Mode[]).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onModeChange(item)}
            className={`border px-4 py-2 font-mono text-[8px] uppercase tracking-[0.18em] transition-colors ${
              mode === item
                ? "border-[#38e8d0] bg-[#38e8d0] text-[#010307]"
                : "border-[#71838c]/40 text-[#71838c] hover:border-[#38e8d0]/60 hover:text-[#e6eef2]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Return */}
      <button
        type="button"
        onClick={onClose}
        className="absolute right-8 top-24 border border-[#71838c]/40 px-3 py-2 font-mono text-[8px] uppercase tracking-[0.18em] text-[#71838c] transition-colors hover:border-[#e6eef2]/60 hover:text-[#e6eef2] md:right-12 md:top-24"
      >
        Return To Descent
      </button>
    </div>
  );
}
