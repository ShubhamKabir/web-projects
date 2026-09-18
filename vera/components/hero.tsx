import Link from "next/link";
import { ArrowRight, Check, ChevronDown, FileText, Search } from "lucide-react";

const rows = [
  {
    source: "Market Report.pdf",
    revenue: "$82.4M",
    growth: "+18.2%",
    confidence: "96%",
  },
  {
    source: "Industry Review.pdf",
    revenue: "$76.1M",
    growth: "+14.7%",
    confidence: "91%",
  },
  {
    source: "Company Filing.pdf",
    revenue: "$91.8M",
    growth: "+21.3%",
    confidence: "97%",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36">
      <div className="absolute inset-0 hero-grid opacity-50" />

      <div className="relative mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/55 px-3.5 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3149a6]" />
            <span className="mono text-[10px] font-medium uppercase tracking-[0.14em] text-black/55">
              AI research & analysis
            </span>
          </div>

          <h1 className="serif-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.9] text-[#171717]">
            Turn complex research
            <br />
            <span className="text-[#3149a6]">into verified insight.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-[16px] leading-7 text-black/55 sm:text-[17px]">
            VERA helps professional teams extract, verify, analyze, and
            transform complex information into decision-ready work.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/app"
              className="group flex items-center gap-2 rounded-full bg-[#171717] px-6 py-3.5 text-[13px] font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Start researching
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>

            <a
              href="#workflow"
              className="rounded-full border border-black/12 bg-white/45 px-6 py-3.5 text-[13px] font-semibold text-black/70 transition-colors hover:bg-white"
            >
              See how it works
            </a>
          </div>
        </div>

        {/* Product preview */}
        <div className="relative mx-auto mt-20 max-w-6xl">
          <div className="absolute -inset-10 rounded-[40px] bg-[#3149a6]/5 blur-3xl" />

          <div className="relative overflow-hidden rounded-[20px] border border-black/12 bg-[#111214] shadow-[0_40px_100px_rgba(20,20,20,0.16)]">
            {/* Window header */}
            <div className="flex h-12 items-center justify-between border-b border-white/8 px-4 sm:px-5">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                </div>

                <span className="ml-3 text-[11px] text-white/35">
                  vera / research / market-analysis
                </span>
              </div>

              <span className="mono hidden text-[9px] uppercase tracking-[0.12em] text-white/30 sm:block">
                workspace
              </span>
            </div>

            <div className="flex min-h-[430px]">
              {/* Sidebar */}
              <aside className="hidden w-52 shrink-0 border-r border-white/8 p-4 md:block">
                <div className="mb-6 flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-[10px] font-bold text-black">
                    V
                  </div>
                  <span className="text-xs font-semibold text-white">VERA</span>
                </div>

                <div className="space-y-1">
                  {[
                    "Overview",
                    "Research",
                    "Evidence Matrix",
                    "Knowledge Canvas",
                    "Reports",
                    "Sources",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className={`rounded-lg px-3 py-2 text-[11px] ${
                        index === 2 ? "bg-white/8 text-white" : "text-white/38"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-t border-white/8 pt-5">
                  <div className="mono mb-2 text-[8px] uppercase tracking-[0.12em] text-white/25">
                    Sources indexed
                  </div>
                  <div className="text-sm font-medium text-white/75">
                    18 sources
                  </div>
                </div>
              </aside>

              {/* Main */}
              <div className="min-w-0 flex-1 p-5 sm:p-7">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <div className="mono mb-2 text-[8px] uppercase tracking-[0.14em] text-white/30">
                      Evidence matrix
                    </div>

                    <h2 className="text-lg font-medium tracking-[-0.025em] text-white">
                      Global AI Market 2026
                    </h2>

                    <p className="mt-1 text-[10px] text-white/35">
                      18 sources · 142 findings · 96 verified
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 rounded-lg border border-white/8 bg-white/4 px-3 py-2">
                      <Search size={12} className="text-white/30" />
                      <span className="text-[10px] text-white/25">
                        Ask VERA...
                      </span>
                    </div>
                  </div>
                </div>

                {/* Matrix */}
                <div className="mt-7 overflow-hidden rounded-xl border border-white/8">
                  <div className="grid grid-cols-[1.8fr_0.9fr_0.9fr_0.8fr] border-b border-white/8 bg-white/3 px-3 py-2.5">
                    <span className="mono text-[8px] uppercase tracking-wider text-white/25">
                      Source
                    </span>
                    <span className="mono text-[8px] uppercase tracking-wider text-white/25">
                      Revenue
                    </span>
                    <span className="mono text-[8px] uppercase tracking-wider text-white/25">
                      Growth
                    </span>
                    <span className="mono text-[8px] uppercase tracking-wider text-white/25">
                      Evidence
                    </span>
                  </div>

                  {rows.map((row) => (
                    <div
                      key={row.source}
                      className="matrix-row grid grid-cols-[1.8fr_0.9fr_0.9fr_0.8fr] items-center border-b border-white/6 px-3 py-4 last:border-b-0"
                    >
                      <div className="flex min-w-0 items-center gap-2">
                        <FileText
                          size={12}
                          className="shrink-0 text-white/25"
                        />
                        <span className="truncate text-[10px] text-white/65">
                          {row.source}
                        </span>
                      </div>

                      <span className="text-[10px] font-medium text-white/70">
                        {row.revenue}
                      </span>

                      <span className="text-[10px] font-medium text-white/70">
                        {row.growth}
                      </span>

                      <div className="flex items-center gap-1.5">
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400/10">
                          <Check size={9} className="text-emerald-400" />
                        </span>
                        <span className="mono text-[9px] text-emerald-400/75">
                          {row.confidence}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Status */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="text-[9px] text-white/30">
                      All findings verified
                    </span>
                  </div>

                  <span className="mono text-[8px] text-white/20">
                    Updated moments ago
                  </span>
                </div>
              </div>

              {/* Intelligence panel */}
              <aside className="hidden w-64 shrink-0 border-l border-white/8 p-5 xl:block">
                <div className="mono text-[8px] uppercase tracking-[0.14em] text-white/25">
                  VERA intelligence
                </div>

                <div className="mt-5 rounded-xl border border-white/8 bg-white/3 p-4">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#7186e5]" />
                    <span className="text-[9px] text-white/45">
                      Analysis complete
                    </span>
                  </div>

                  <p className="mt-4 text-[11px] leading-5 text-white/65">
                    Growth is accelerating across the three analyzed companies,
                    with the strongest expansion occurring in enterprise
                    segments.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    <span className="rounded-md border border-white/8 px-2 py-1 text-[8px] text-white/35">
                      [01]
                    </span>
                    <span className="rounded-md border border-white/8 px-2 py-1 text-[8px] text-white/35">
                      [04]
                    </span>
                    <span className="rounded-md border border-white/8 px-2 py-1 text-[8px] text-white/35">
                      [09]
                    </span>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-white/8 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] text-white/35">
                      Sources checked
                    </span>
                    <span className="mono text-[9px] text-white/55">18/18</span>
                  </div>

                  <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/6">
                    <div className="h-full w-full rounded-full bg-[#7186e5]" />
                  </div>
                </div>
              </aside>
            </div>
          </div>

          {/* Floating source card */}
          <div className="absolute -bottom-7 left-5 hidden w-60 rounded-xl border border-black/10 bg-[#f8f7f3] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.12)] sm:block lg:left-[-28px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#171717]">
                  <FileText size={11} className="text-white" />
                </span>
                <span className="text-[10px] font-medium">Evidence found</span>
              </div>

              <Check size={13} className="text-emerald-600" />
            </div>

            <div className="mt-3 rounded-lg bg-black/[0.035] p-2.5">
              <p className="text-[9px] leading-4 text-black/50">
                “Revenue increased by 18.2% compared with the previous reporting
                period.”
              </p>
            </div>

            <div className="mt-2 flex items-center justify-between">
              <span className="mono text-[7px] uppercase tracking-wider text-black/30">
                page 24 · source 01
              </span>

              <ChevronDown
                size={11}
                className="rotate-[-90deg] text-black/25"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
