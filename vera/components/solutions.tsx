"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  Lightbulb,
} from "lucide-react";

const solutions = [
  {
    id: "strategy",
    number: "01",
    icon: BarChart3,
    title: "Strategy & Research",
    description:
      "Build a clearer picture of markets, competitors, industries, and emerging opportunities.",
    items: ["Market intelligence", "Competitive research", "Industry analysis"],
    accent: "Research workspace",
  },
  {
    id: "product",
    number: "02",
    icon: Lightbulb,
    title: "Product & Operations",
    description:
      "Turn scattered customer and market information into evidence you can use to make product decisions.",
    items: ["Customer research", "Product discovery", "Decision support"],
    accent: "Decision intelligence",
  },
  {
    id: "consulting",
    number: "03",
    icon: BriefcaseBusiness,
    title: "Consulting & Advisory",
    description:
      "Move from source material to structured findings and polished deliverables for every engagement.",
    items: ["Client research", "Due diligence", "Executive briefs"],
    accent: "Client-ready output",
  },
];

export default function Solutions() {
  const [active, setActive] = useState("strategy");

  const activeSolution =
    solutions.find((solution) => solution.id === active) ?? solutions[0];

  return (
    <section
      id="solutions"
      className="border-t border-black/10 bg-[#171717] py-28 text-white sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <span className="mono text-[9px] uppercase tracking-[0.16em] text-white/30">
              Solutions
            </span>
          </div>

          <div>
            <h2 className="serif-display max-w-4xl text-[clamp(2.8rem,5.5vw,5.5rem)] leading-[0.92] tracking-[-0.045em]">
              Research built for
              <br />
              <span className="text-[#7186e5]">work that matters.</span>
            </h2>

            <p className="mt-7 max-w-xl text-[15px] leading-7 text-white/45">
              Whether you're exploring a market, shaping a product, or advising
              a client, VERA keeps the research behind your decisions connected.
            </p>
          </div>
        </div>

        {/* Solution cards */}
        <div className="mt-20 grid gap-3 lg:grid-cols-3">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            const isActive = active === solution.id;

            return (
              <button
                key={solution.id}
                type="button"
                onClick={() => setActive(solution.id)}
                className={`group min-h-[390px] rounded-[22px] border p-6 text-left transition-all duration-300 sm:p-7 ${
                  isActive
                    ? "border-white/15 bg-white/[0.075]"
                    : "border-white/8 bg-white/[0.025] hover:bg-white/[0.05]"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                      isActive
                        ? "bg-white text-black"
                        : "border border-white/10 bg-white/[0.035] text-white/50"
                    }`}
                  >
                    <Icon size={15} />
                  </span>

                  <span className="mono text-[8px] text-white/20">
                    {solution.number}
                  </span>
                </div>

                <div className="mt-20">
                  <span className="mono text-[7px] uppercase tracking-[0.14em] text-[#7186e5]">
                    {solution.accent}
                  </span>

                  <h3 className="serif-display mt-3 text-3xl tracking-[-0.035em] text-white/90">
                    {solution.title}
                  </h3>

                  <p className="mt-4 text-[11px] leading-5 text-white/40">
                    {solution.description}
                  </p>
                </div>

                <div className="mt-7 space-y-2">
                  {solution.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-[9px] text-white/45"
                    >
                      <Check size={10} className="text-white/30" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 text-[9px] font-medium text-white/50 transition-colors group-hover:text-white/80">
                  Explore solution
                  <ArrowUpRight size={11} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active solution detail */}
        <div className="mt-3 overflow-hidden rounded-[22px] border border-white/8 bg-[#111113]">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="border-b border-white/8 p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <span className="mono text-[8px] uppercase tracking-[0.14em] text-white/25">
                Selected solution
              </span>

              <div className="mt-8 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#7186e5]/10">
                  <activeSolution.icon size={14} className="text-[#7186e5]" />
                </span>

                <div>
                  <div className="text-[11px] font-medium text-white/75">
                    {activeSolution.title}
                  </div>

                  <div className="mono mt-1 text-[7px] uppercase tracking-[0.12em] text-white/20">
                    {activeSolution.accent}
                  </div>
                </div>
              </div>

              <p className="mt-6 max-w-md text-[11px] leading-5 text-white/40">
                {activeSolution.description}
              </p>
            </div>

            <div className="relative min-h-[230px] overflow-hidden p-6 sm:p-8">
              {/* Background grid */}
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
                  backgroundSize: "42px 42px",
                }}
              />

              <div className="relative grid gap-2 sm:grid-cols-3">
                {activeSolution.items.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/8 bg-white/[0.035] p-4"
                  >
                    <span className="mono text-[7px] text-white/20">
                      0{index + 1}
                    </span>

                    <div className="mt-8 text-[10px] leading-4 text-white/60">
                      {item}
                    </div>

                    <div className="mt-4 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span className="text-[7px] text-white/25">
                        Evidence connected
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-white/15" />

            <span className="text-[10px] text-white/25">
              One research system, different ways to work.
            </span>
          </div>

          <button
            type="button"
            className="flex w-fit items-center gap-2 text-[10px] font-medium text-white/50 transition-colors hover:text-white/80"
          >
            See all solutions
            <ArrowUpRight size={11} />
          </button>
        </div>
      </div>
    </section>
  );
}
