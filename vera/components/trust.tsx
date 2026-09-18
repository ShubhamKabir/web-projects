import { ArrowUpRight, Check, FileText, ShieldCheck } from "lucide-react";

const proofPoints = [
  {
    number: "18",
    label: "Sources indexed",
    description:
      "Research stays organized across reports, filings, studies, and other source material.",
  },
  {
    number: "142",
    label: "Findings connected",
    description:
      "Important findings remain linked to the research that supports them.",
  },
  {
    number: "96%",
    label: "Verified evidence",
    description:
      "Confidence signals make it easier to understand the strength of the underlying evidence.",
  },
];

const sources = [
  "Annual Report.pdf",
  "Industry Review.pdf",
  "Company Filing.pdf",
  "Market Research.pdf",
];

export default function Trust() {
  return (
    <section
      id="trust"
      className="border-t border-black/10 bg-[#f8f7f3] py-28 sm:py-36"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Statement */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="mono text-[9px] uppercase tracking-[0.16em] text-black/30">
            Built for evidence
          </span>

          <h2 className="serif-display mt-8 text-[clamp(2.8rem,6vw,5.8rem)] leading-[0.92] tracking-[-0.05em]">
            Every important answer
            <br />
            <span className="text-[#3149a6]">
              has a trail back to the source.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-[14px] leading-7 text-black/45">
            VERA is designed around traceability. Findings, analysis, and
            reports remain connected to the evidence behind them.
          </p>
        </div>

        {/* Proof metrics */}
        <div className="mt-20 grid overflow-hidden rounded-[24px] border border-black/10 bg-white sm:grid-cols-3">
          {proofPoints.map((point, index) => (
            <div
              key={point.label}
              className={`p-7 sm:p-8 ${
                index !== 0
                  ? "border-t border-black/10 sm:border-l sm:border-t-0"
                  : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="mono text-[8px] text-black/25">
                  0{index + 1}
                </span>

                <ShieldCheck size={14} className="text-black/20" />
              </div>

              <div className="serif-display mt-10 text-4xl tracking-[-0.04em] text-black/80 sm:text-5xl">
                {point.number}
              </div>

              <div className="mt-3 text-[11px] font-medium text-black/65">
                {point.label}
              </div>

              <p className="mt-3 text-[10px] leading-5 text-black/35">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Evidence strip */}
        <div className="mt-3 overflow-hidden rounded-[24px] border border-black/10 bg-[#171717] text-white">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="p-7 sm:p-9">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black">
                  <FileText size={13} />
                </span>

                <span className="mono text-[8px] uppercase tracking-[0.14em] text-white/30">
                  Evidence trail
                </span>
              </div>

              <h3 className="serif-display mt-8 max-w-sm text-3xl leading-tight tracking-[-0.035em] text-white/90 sm:text-4xl">
                Research that stays
                <br />
                <span className="text-[#7186e5]">auditable.</span>
              </h3>

              <p className="mt-5 max-w-md text-[11px] leading-5 text-white/35">
                Open a finding, inspect its source, review the supporting
                evidence, and understand how it contributed to the final answer.
              </p>
            </div>

            <div className="border-t border-white/8 p-5 sm:p-7 lg:border-l lg:border-t-0">
              <div className="mono px-2 text-[8px] uppercase tracking-[0.14em] text-white/20">
                Source library
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {sources.map((source, index) => (
                  <div
                    key={source}
                    className="group flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.025] p-4 transition-colors hover:bg-white/[0.05]"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.05]">
                      <FileText size={12} className="text-white/35" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="truncate text-[9px] text-white/55">
                        {source}
                      </div>

                      <div className="mt-1 flex items-center gap-1.5">
                        <Check size={9} className="text-emerald-400" />

                        <span className="text-[7px] text-white/25">
                          Verified source
                        </span>
                      </div>
                    </div>

                    <span className="mono text-[7px] text-white/20">
                      [{String(index + 1).padStart(2, "0")}]
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-white/8 pt-5">
                <span className="text-[8px] text-white/25">
                  18 sources available in this workspace
                </span>

                <button
                  type="button"
                  className="group flex items-center gap-1.5 text-[8px] font-medium text-white/45 hover:text-white/75"
                >
                  View sources
                  <ArrowUpRight
                    size={10}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-10 flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <span className="text-[10px] text-black/25">
            Evidence is part of the workflow, not an afterthought.
          </span>

          <span className="mono text-[7px] uppercase tracking-[0.14em] text-black/20">
            Traceability / 01
          </span>
        </div>
      </div>
    </section>
  );
}
