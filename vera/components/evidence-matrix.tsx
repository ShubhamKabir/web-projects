"use client";

import { useState } from "react";
import {
  Check,
  ChevronRight,
  FileText,
  Filter,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";

const findings = [
  {
    id: "01",
    finding: "Revenue increased by 18.2%",
    source: "Annual Report.pdf",
    page: "24",
    confidence: "96%",
    category: "Revenue",
    evidence:
      "Revenue increased by 18.2% compared with the previous reporting period.",
  },
  {
    id: "04",
    finding: "Enterprise segment grew 24.6%",
    source: "Industry Review.pdf",
    page: "18",
    confidence: "91%",
    category: "Growth",
    evidence:
      "Enterprise demand accounted for the strongest growth during the reporting period, increasing by 24.6%.",
  },
  {
    id: "09",
    finding: "International revenue reached 41%",
    source: "Company Filing.pdf",
    page: "31",
    confidence: "97%",
    category: "Market",
    evidence:
      "International markets contributed 41% of total revenue during the fiscal year.",
  },
  {
    id: "12",
    finding: "Operating margin expanded by 3.4 pts",
    source: "Annual Report.pdf",
    page: "42",
    confidence: "94%",
    category: "Finance",
    evidence:
      "Operating margin expanded by 3.4 percentage points as operating leverage improved.",
  },
];

export default function EvidenceMatrix() {
  const [selectedFinding, setSelectedFinding] = useState(findings[0]);
  const [sourceOpen, setSourceOpen] = useState(false);

  return (
    <section
      id="evidence"
      className="overflow-hidden border-t border-black/10 bg-[#f8f7f3] py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Intro */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <span className="mono text-[9px] uppercase tracking-[0.16em] text-black/35">
              Evidence matrix
            </span>
          </div>

          <div>
            <h2 className="serif-display max-w-4xl text-[clamp(2.8rem,5.5vw,5.5rem)] leading-[0.92] tracking-[-0.045em]">
              See the evidence
              <br />
              <span className="text-[#3149a6]">behind every insight.</span>
            </h2>

            <p className="mt-7 max-w-xl text-[15px] leading-7 text-black/50">
              VERA organizes findings across your sources so important
              information stays structured, traceable, and easy to inspect.
            </p>
          </div>
        </div>

        {/* Product */}
        <div className="relative mt-20">
          <div className="absolute -inset-10 bg-black/[0.025] blur-3xl" />

          <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#111214] shadow-[0_35px_100px_rgba(0,0,0,0.14)]">
            {/* Top bar */}
            <div className="flex h-14 items-center justify-between border-b border-white/8 px-4 sm:px-6">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                </div>

                <span className="hidden text-[10px] text-white/30 sm:block">
                  vera / evidence-matrix
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="mono hidden text-[8px] uppercase tracking-[0.12em] text-white/25 sm:block">
                  18 sources
                </span>

                <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/15 bg-emerald-400/5 px-2.5 py-1.5 text-[8px] text-emerald-400/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  96% verified
                </span>
              </div>
            </div>

            {/* Toolbar */}
            <div className="flex flex-col justify-between gap-4 border-b border-white/8 px-4 py-4 sm:flex-row sm:items-center sm:px-6">
              <div>
                <div className="mono text-[8px] uppercase tracking-[0.14em] text-white/25">
                  Research project
                </div>

                <div className="mt-1 text-sm font-medium text-white/85">
                  Global AI Market 2026
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 rounded-lg border border-white/8 bg-white/[0.025] px-3 py-2">
                  <Search size={12} className="text-white/25" />
                  <span className="text-[9px] text-white/25">
                    Search findings
                  </span>
                </div>

                <button
                  type="button"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/8 text-white/30 transition-colors hover:bg-white/5 hover:text-white/60"
                  aria-label="Filter findings"
                >
                  <Filter size={13} />
                </button>

                <button
                  type="button"
                  className="hidden h-8 w-8 items-center justify-center rounded-lg border border-white/8 text-white/30 transition-colors hover:bg-white/5 hover:text-white/60 sm:flex"
                  aria-label="Adjust matrix"
                >
                  <SlidersHorizontal size={13} />
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-[1fr_310px]">
              {/* Matrix */}
              <div className="min-w-0 overflow-x-auto">
                <div className="min-w-[700px]">
                  {/* Headers */}
                  <div className="grid grid-cols-[2fr_1.1fr_0.7fr_0.7fr_0.7fr] border-b border-white/8 bg-white/[0.018] px-5 py-3">
                    <span className="mono text-[8px] uppercase tracking-[0.12em] text-white/25">
                      Finding
                    </span>

                    <span className="mono text-[8px] uppercase tracking-[0.12em] text-white/25">
                      Source
                    </span>

                    <span className="mono text-[8px] uppercase tracking-[0.12em] text-white/25">
                      Category
                    </span>

                    <span className="mono text-[8px] uppercase tracking-[0.12em] text-white/25">
                      Confidence
                    </span>

                    <span className="mono text-[8px] uppercase tracking-[0.12em] text-white/25">
                      Evidence
                    </span>
                  </div>

                  {/* Rows */}
                  {findings.map((item) => {
                    const selected = selectedFinding.id === item.id;

                    return (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => {
                          setSelectedFinding(item);
                          setSourceOpen(true);
                        }}
                        className={`grid w-full grid-cols-[2fr_1.1fr_0.7fr_0.7fr_0.7fr] border-b border-white/6 px-5 py-5 text-left transition-colors ${
                          selected
                            ? "bg-white/[0.055]"
                            : "hover:bg-white/[0.025]"
                        }`}
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <span className="mono shrink-0 text-[8px] text-white/25">
                            [{item.id}]
                          </span>

                          <span className="truncate text-[10px] text-white/70">
                            {item.finding}
                          </span>
                        </div>

                        <div className="flex min-w-0 items-center gap-2">
                          <FileText
                            size={11}
                            className="shrink-0 text-white/20"
                          />

                          <span className="truncate text-[9px] text-white/40">
                            {item.source}
                          </span>
                        </div>

                        <span className="text-[9px] text-white/35">
                          {item.category}
                        </span>

                        <span className="mono text-[9px] text-emerald-400/75">
                          {item.confidence}
                        </span>

                        <span className="flex items-center gap-1.5">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/10">
                            <Check size={9} className="text-emerald-400" />
                          </span>

                          <ChevronRight size={11} className="text-white/20" />
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Evidence panel */}
              <aside
                className={`border-t border-white/8 bg-[#151619] lg:border-l lg:border-t-0 ${
                  sourceOpen ? "block" : "hidden lg:block"
                }`}
              >
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div className="mono text-[8px] uppercase tracking-[0.14em] text-white/25">
                      Evidence trace
                    </div>

                    <button
                      type="button"
                      onClick={() => setSourceOpen(false)}
                      className="flex h-7 w-7 items-center justify-center rounded-md text-white/30 hover:bg-white/5 hover:text-white/70 lg:hidden"
                      aria-label="Close evidence panel"
                    >
                      <X size={14} />
                    </button>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white">
                        <FileText size={12} className="text-black" />
                      </span>

                      <div>
                        <div className="text-[10px] font-medium text-white/70">
                          {selectedFinding.source}
                        </div>

                        <div className="mono mt-0.5 text-[7px] text-white/25">
                          PAGE {selectedFinding.page}
                        </div>
                      </div>
                    </div>

                    <span className="flex items-center gap-1.5 text-[8px] text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Verified
                    </span>
                  </div>

                  {/* Document */}
                  <div className="mt-6 rounded-xl border border-white/8 bg-white/[0.025] p-4">
                    <div className="space-y-2">
                      <div className="h-1.5 w-2/3 rounded-full bg-white/10" />
                      <div className="h-1.5 w-full rounded-full bg-white/5" />
                      <div className="h-1.5 w-5/6 rounded-full bg-white/5" />
                    </div>

                    <div className="mt-6 rounded-lg border border-[#7186e5]/20 bg-[#7186e5]/5 p-3">
                      <p className="text-[9px] leading-5 text-white/65">
                        {selectedFinding.evidence}
                      </p>
                    </div>

                    <div className="mt-4 space-y-2">
                      <div className="h-1.5 w-full rounded-full bg-white/5" />
                      <div className="h-1.5 w-4/5 rounded-full bg-white/5" />
                    </div>
                  </div>

                  {/* Metadata */}
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    <div className="rounded-lg border border-white/8 p-3">
                      <div className="mono text-[7px] uppercase tracking-wider text-white/20">
                        Confidence
                      </div>
                      <div className="mt-1 text-[11px] font-medium text-white/70">
                        {selectedFinding.confidence}
                      </div>
                    </div>

                    <div className="rounded-lg border border-white/8 p-3">
                      <div className="mono text-[7px] uppercase tracking-wider text-white/20">
                        Source
                      </div>
                      <div className="mt-1 text-[11px] font-medium text-white/70">
                        {selectedFinding.id}
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            {/* Footer */}
            <div className="flex flex-col justify-between gap-3 border-t border-white/8 px-5 py-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="text-[9px] text-white/30">
                  All findings traceable to source evidence
                </span>
              </div>

              <span className="mono text-[8px] text-white/20">
                142 findings · 18 sources
              </span>
            </div>
          </div>
        </div>

        {/* Supporting statement */}
        <div className="mt-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <p className="max-w-lg text-[13px] leading-6 text-black/45">
            Click any finding to inspect its supporting source, page, and
            confidence score without leaving the research workspace.
          </p>

          <span className="mono text-[8px] uppercase tracking-[0.14em] text-black/25">
            Evidence trace / 01
          </span>
        </div>
      </div>
    </section>
  );
}
