import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

type Specimen = {
  id: string;
  name: string;
  depth: string;
  habitat: string;
  classification: string;
  description: string;
};

const specimens: Record<string, Specimen> = {
  "HAD-001": {
    id: "HAD-001",
    name: "Unknown Biological Organism",
    depth: "842 M",
    habitat: "Mesopelagic",
    classification: "Unclassified",
    description:
      "A recorded biological signal observed during Expedition 07. Morphological characteristics remain unresolved and require further observation.",
  },

  "HAD-002": {
    id: "HAD-002",
    name: "Unknown Organism",
    depth: "4,218 M",
    habitat: "Hydrothermal Field",
    classification: "Unclassified",
    description:
      "A biological structure detected within a hydrothermal field. The specimen exhibits segmented external morphology and active luminescence.",
  },

  "HAD-003": {
    id: "HAD-003",
    name: "Bioluminescent Form",
    depth: "6,104 M",
    habitat: "Abyssal Plain",
    classification: "Unclassified",
    description:
      "A low-light biological signal recorded during deep-water observation. Further classification remains pending.",
  },
};

export default async function SpecimenPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const specimen = specimens[id.toUpperCase()] ?? specimens["HAD-001"];

  return (
    <main className="min-h-screen bg-[#010307] text-[#e6eef2]">
      <div className="pointer-events-none fixed inset-4 border border-[#e6eef2]/10" />

      {/* HEADER */}
      <header className="flex items-start justify-between px-6 py-8 md:px-10">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.3em]">
            PROJECT HADAL / ARCHIVE
          </p>

          <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.25em] text-[#71838c]">
            SPECIMEN RECORD
          </p>
        </div>

        <div className="text-right">
          <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#71838c]">
            EXPEDITION 07
          </p>

          <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.25em] text-[#38e8d0]">
            SIGNAL ACQUIRED
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 md:px-10 md:pt-24">
        {/* BACK */}
        <Link
          href="/archive"
          className="group mb-16 inline-flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.25em] text-[#71838c] transition-colors hover:text-[#38e8d0]"
        >
          <ArrowLeft size={13} strokeWidth={1.5} />
          Return to archive
        </Link>

        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* SPECIMEN VISUAL */}
          <div className="relative aspect-square overflow-hidden border border-[#e6eef2]/10 bg-[#020a12]">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 bg-[#38e8d0]/30" />

              <div className="absolute left-1/2 top-1/2 h-full w-px -translate-y-1/2 bg-[#38e8d0]/30" />
            </div>

            <div className="absolute left-6 top-6 font-mono text-[8px] uppercase tracking-[0.25em] text-[#71838c]">
              LIVE SPECIMEN VIEW
            </div>

            {/* ABSTRACT ORGANISM */}
            <div className="absolute left-1/2 top-1/2 h-40 w-28 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-[45%] border border-[#38e8d0]/50 bg-[#38e8d0]/5 shadow-[0_0_80px_rgba(56,232,208,0.08)]">
              <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#38e8d0]" />
            </div>

            <div className="absolute bottom-6 left-6 font-mono text-[8px] uppercase tracking-[0.2em] text-[#71838c]">
              MORPHOLOGY / UNRESOLVED
            </div>

            <div className="absolute bottom-6 right-6 font-mono text-[8px] uppercase tracking-[0.2em] text-[#38e8d0]">
              {specimen.id}
            </div>
          </div>

          {/* SPECIMEN DATA */}
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#38e8d0]">
              {specimen.id} / ARCHIVE RECORD
            </p>

            <h1 className="mt-6 max-w-2xl font-serif text-5xl italic leading-[0.9] md:text-7xl">
              {specimen.name}
            </h1>

            <p className="mt-8 max-w-xl font-mono text-[10px] uppercase leading-7 tracking-[0.15em] text-[#71838c]">
              {specimen.description}
            </p>

            <div className="mt-12 border-y border-[#e6eef2]/10">
              <DataRow label="DEPTH" value={specimen.depth} />

              <DataRow label="HABITAT" value={specimen.habitat} />

              <DataRow label="CLASSIFICATION" value={specimen.classification} />

              <DataRow label="STATUS" value="ACTIVE RECORD" />
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/"
                className="group inline-flex items-center gap-3 border border-[#38e8d0]/40 px-5 py-3 font-mono text-[9px] uppercase tracking-[0.25em] text-[#38e8d0] transition-colors hover:bg-[#38e8d0] hover:text-[#010307]"
              >
                Enter expedition
                <ArrowUpRight
                  size={13}
                  strokeWidth={1.5}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="/archive"
                className="border border-[#e6eef2]/10 px-5 py-3 font-mono text-[9px] uppercase tracking-[0.25em] text-[#71838c] transition-colors hover:border-[#e6eef2]/30 hover:text-[#e6eef2]"
              >
                All specimens
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function DataRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-8 border-b border-[#e6eef2]/10 py-5 font-mono text-[8px] uppercase tracking-[0.18em] last:border-b-0">
      <span className="text-[#71838c]">{label}</span>

      <span className="text-[#e6eef2]">{value}</span>
    </div>
  );
}
