"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  FileText,
  MoreHorizontal,
  Sparkles,
} from "lucide-react";

const sections = [
  {
    id: "summary",
    number: "01",
    title: "Executive Summary",
  },
  {
    id: "market",
    number: "02",
    title: "Market Overview",
  },
  {
    id: "findings",
    number: "03",
    title: "Key Findings",
  },
  {
    id: "risks",
    number: "04",
    title: "Risks & Opportunities",
  },
  {
    id: "sources",
    number: "05",
    title: "Sources",
  },
];

const sectionContent: Record<
  string,
  {
    label: string;
    title: string;
    paragraphs: string[];
  }
> = {
  summary: {
    label: "Executive Summary",
    title: "AI adoption is entering a new phase.",
    paragraphs: [
      "Enterprise adoption continues to accelerate as organizations move from experimentation toward production-scale AI systems.",
      "Across the analyzed sources, infrastructure investment, enterprise demand, and improving model efficiency appear consistently as key growth drivers.",
    ],
  },
  market: {
    label: "Market Overview",
    title: "A market shaped by infrastructure and adoption.",
    paragraphs: [
      "The market is expanding across model providers, cloud platforms, and enterprise applications, with infrastructure remaining a major area of investment.",
      "Multiple sources indicate that enterprise demand is becoming an increasingly important contributor to overall market growth.",
    ],
  },
  findings: {
    label: "Key Findings",
    title: "Three signals stand out across the evidence.",
    paragraphs: [
      "Enterprise adoption is expanding rapidly, infrastructure spending continues to rise, and model efficiency is improving across the analyzed sources.",
      "Each finding remains linked to the underlying evidence inside the VERA workspace.",
    ],
  },
  risks: {
    label: "Risks & Opportunities",
    title: "Growth creates both opportunity and uncertainty.",
    paragraphs: [
      "Rapid market expansion creates opportunities across enterprise software and infrastructure while introducing uncertainty around competitive intensity and investment cycles.",
      "The strongest opportunities appear where adoption and infrastructure demand overlap.",
    ],
  },
  sources: {
    label: "Sources",
    title: "Every conclusion remains traceable.",
    paragraphs: [
      "This report draws from 18 indexed sources, including company filings, industry research, and annual reports.",
      "Evidence references remain attached to findings so readers can inspect the underlying material.",
    ],
  },
};

export default function ReportStudio() {
  const [activeSection, setActiveSection] = useState("summary");

  const content = sectionContent[activeSection];

  return (
    <section
      id="reports"
      className="border-t border-black/10 bg-[#ebeae5] py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Intro */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <span className="mono text-[9px] uppercase tracking-[0.16em] text-black/35">
              Report studio
            </span>
          </div>

          <div>
            <h2 className="serif-display max-w-4xl text-[clamp(2.8rem,5.5vw,5.5rem)] leading-[0.92] tracking-[-0.045em]">
              From research
              <br />
              <span className="text-[#3149a6]">to something you can use.</span>
            </h2>

            <p className="mt-7 max-w-xl text-[15px] leading-7 text-black/50">
              Turn verified findings into polished briefs, reports, and
              decision-ready documents without rebuilding your research from
              scratch.
            </p>
          </div>
        </div>

        {/* Studio */}
        <div className="mt-20 overflow-hidden rounded-[24px] border border-black/10 bg-[#d9d8d3] shadow-[0_35px_100px_rgba(0,0,0,0.1)]">
          {/* Application header */}
          <div className="flex h-14 items-center justify-between border-b border-black/10 bg-[#f5f4f0] px-4 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#171717]">
                <FileText size={12} className="text-white" />
              </div>

              <div>
                <div className="text-[10px] font-semibold">
                  Global AI Market 2026
                </div>

                <div className="mono mt-0.5 text-[7px] uppercase tracking-[0.12em] text-black/25">
                  Report draft · saved moments ago
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="hidden items-center gap-1.5 rounded-lg border border-black/10 px-3 py-2 text-[9px] font-medium text-black/50 transition-colors hover:bg-black/[0.03] sm:flex"
              >
                Share
              </button>

              <button
                type="button"
                className="flex items-center gap-1.5 rounded-lg bg-[#171717] px-3.5 py-2.5 text-[9px] font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Export
                <ArrowUpRight size={11} />
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-[220px_1fr]">
            {/* Outline */}
            <aside className="border-b border-black/10 bg-[#efeee9] p-4 lg:border-b-0 lg:border-r">
              <div className="flex items-center justify-between px-2">
                <span className="mono text-[8px] uppercase tracking-[0.14em] text-black/30">
                  Outline
                </span>

                <MoreHorizontal size={13} className="text-black/25" />
              </div>

              <div className="mt-4 space-y-1">
                {sections.map((section) => {
                  const active = activeSection === section.id;

                  return (
                    <button
                      key={section.id}
                      type="button"
                      onClick={() => setActiveSection(section.id)}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
                        active
                          ? "bg-white text-black shadow-sm"
                          : "text-black/40 hover:bg-white/50 hover:text-black/65"
                      }`}
                    >
                      <span className="mono text-[7px] text-black/25">
                        {section.number}
                      </span>

                      <span className="flex-1 text-[9px] font-medium">
                        {section.title}
                      </span>

                      {active && (
                        <ChevronRight size={11} className="text-black/30" />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 border-t border-black/10 pt-5">
                <div className="mono text-[7px] uppercase tracking-[0.12em] text-black/25">
                  Report status
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10">
                    <Check size={10} className="text-emerald-600" />
                  </span>

                  <span className="text-[9px] text-black/45">
                    Research verified
                  </span>
                </div>
              </div>
            </aside>

            {/* Document area */}
            <div className="min-w-0 bg-[#c9c8c3] p-5 sm:p-8 lg:p-12">
              <div className="mx-auto max-w-3xl bg-[#faf9f5] px-7 py-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] sm:px-12 sm:py-14">
                {/* Document top */}
                <div className="flex items-start justify-between border-b border-black/10 pb-7">
                  <div>
                    <div className="mono text-[7px] uppercase tracking-[0.16em] text-black/30">
                      VERA Research Brief
                    </div>

                    <h3 className="serif-display mt-3 text-3xl leading-tight tracking-[-0.04em] sm:text-4xl">
                      Global AI Market
                      <br />
                      2026
                    </h3>
                  </div>

                  <div className="hidden text-right sm:block">
                    <div className="mono text-[7px] uppercase tracking-[0.12em] text-black/25">
                      Prepared with VERA
                    </div>

                    <div className="mt-2 text-[9px] text-black/35">
                      September 2026
                    </div>
                  </div>
                </div>

                {/* Active section */}
                <div className="mt-9">
                  <div className="mono text-[7px] uppercase tracking-[0.14em] text-[#3149a6]">
                    {content.label}
                  </div>

                  <h4 className="mt-3 max-w-2xl text-xl font-medium leading-7 tracking-[-0.025em] text-black/85 sm:text-2xl">
                    {content.title}
                  </h4>

                  <div className="mt-5 space-y-4">
                    {content.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="max-w-2xl text-[11px] leading-6 text-black/50 sm:text-[12px]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Findings */}
                <div className="mt-9 grid gap-2 sm:grid-cols-3">
                  <FindingCard
                    number="01"
                    title="Enterprise adoption"
                    value="+24.6%"
                  />

                  <FindingCard
                    number="02"
                    title="Infrastructure"
                    value="+18.9%"
                  />

                  <FindingCard
                    number="03"
                    title="Model efficiency"
                    value="+13.4%"
                  />
                </div>

                {/* Evidence note */}
                <div className="mt-8 rounded-xl border border-[#3149a6]/15 bg-[#3149a6]/[0.035] p-4">
                  <div className="flex items-center gap-2">
                    <Sparkles size={11} className="text-[#3149a6]" />

                    <span className="mono text-[7px] uppercase tracking-[0.13em] text-[#3149a6]/70">
                      VERA evidence note
                    </span>
                  </div>

                  <p className="mt-2 text-[9px] leading-5 text-black/45">
                    Key claims in this section are connected to verified
                    findings in the underlying research workspace.
                  </p>

                  <div className="mt-3 flex items-center gap-1.5">
                    {["01", "04", "09"].map((source) => (
                      <span
                        key={source}
                        className="rounded-md border border-black/10 bg-white px-2 py-1 text-[7px] text-[#3149a6]"
                      >
                        [{source}]
                      </span>
                    ))}
                  </div>
                </div>

                {/* Document footer */}
                <div className="mt-10 flex items-center justify-between border-t border-black/10 pt-4">
                  <span className="mono text-[7px] uppercase tracking-[0.12em] text-black/25">
                    VERA / Research Brief
                  </span>

                  <span className="mono text-[7px] text-black/25">01 / 12</span>
                </div>
              </div>
            </div>
          </div>

          {/* Studio footer */}
          <div className="flex flex-col gap-2 border-t border-black/10 bg-[#f5f4f0] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

              <span className="text-[9px] text-black/35">
                All report claims connected to source evidence
              </span>
            </div>

            <span className="mono text-[7px] uppercase tracking-[0.12em] text-black/25">
              12 pages · 18 sources · 142 findings
            </span>
          </div>
        </div>

        {/* Supporting line */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-[12px] leading-5 text-black/40">
            Edit your research like a document while keeping the underlying
            evidence connected to every important claim.
          </p>

          <span className="mono text-[7px] uppercase tracking-[0.14em] text-black/25">
            Report studio / 01
          </span>
        </div>
      </div>
    </section>
  );
}

function FindingCard({
  number,
  title,
  value,
}: {
  number: string;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-black/8 bg-black/[0.025] p-3.5">
      <div className="mono text-[7px] text-black/25">{number}</div>

      <div className="mt-4 text-[9px] leading-4 text-black/45">{title}</div>

      <div className="mt-1.5 text-sm font-medium text-black/70">{value}</div>
    </div>
  );
}
