"use client";

import { useState } from "react";
import { ArrowUpRight, Check, FileText, Link2, Sparkles } from "lucide-react";

const nodes = [
  {
    id: "market",
    label: "AI Market",
    type: "INSIGHT",
    x: "50%",
    y: "22%",
    size: "large",
  },
  {
    id: "models",
    label: "Foundation Models",
    type: "TOPIC",
    x: "22%",
    y: "42%",
    size: "medium",
  },
  {
    id: "cloud",
    label: "Cloud Platforms",
    type: "TOPIC",
    x: "50%",
    y: "47%",
    size: "medium",
  },
  {
    id: "enterprise",
    label: "Enterprise Demand",
    type: "FINDING",
    x: "78%",
    y: "42%",
    size: "medium",
  },
  {
    id: "revenue",
    label: "Revenue Growth",
    type: "FINDING",
    x: "32%",
    y: "72%",
    size: "small",
  },
  {
    id: "investment",
    label: "Infrastructure Investment",
    type: "FINDING",
    x: "68%",
    y: "72%",
    size: "small",
  },
];

export default function KnowledgeCanvas() {
  const [selected, setSelected] = useState("market");

  const selectedNode = nodes.find((node) => node.id === selected) ?? nodes[0];

  return (
    <section
      id="canvas"
      className="border-t border-black/10 bg-[#171717] py-28 text-white sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Intro */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <span className="mono text-[9px] uppercase tracking-[0.16em] text-white/30">
              Knowledge canvas
            </span>
          </div>

          <div>
            <h2 className="serif-display max-w-4xl text-[clamp(2.8rem,5.5vw,5.5rem)] leading-[0.92] tracking-[-0.045em]">
              Connect the dots
              <br />
              <span className="text-[#7186e5]">across your research.</span>
            </h2>

            <p className="mt-7 max-w-xl text-[15px] leading-7 text-white/45">
              Move beyond isolated findings. VERA maps relationships between
              sources, topics, and insights so patterns become easier to see.
            </p>
          </div>
        </div>

        {/* Canvas */}
        <div className="mt-20 overflow-hidden rounded-[24px] border border-white/10 bg-[#101113]">
          {/* Toolbar */}
          <div className="flex h-14 items-center justify-between border-b border-white/8 px-4 sm:px-6">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-black">
                <Link2 size={13} />
              </span>

              <div>
                <div className="text-[10px] font-medium text-white/70">
                  Market Intelligence
                </div>

                <div className="mono mt-0.5 text-[7px] uppercase tracking-[0.12em] text-white/25">
                  18 sources · 24 relationships
                </div>
              </div>
            </div>

            <button
              type="button"
              className="flex items-center gap-2 rounded-lg border border-white/8 bg-white/[0.025] px-3 py-2 text-[9px] text-white/45 transition-colors hover:bg-white/5 hover:text-white/70"
            >
              <Sparkles size={11} />
              Analyze selected
            </button>
          </div>

          <div className="grid lg:grid-cols-[1fr_280px]">
            {/* Spatial canvas */}
            <div className="relative min-h-[560px] overflow-hidden border-b border-white/8 lg:border-b-0 lg:border-r">
              {/* Grid */}
              <div
                className="absolute inset-0 opacity-45"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />

              {/* Connection lines */}
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 900 560"
                preserveAspectRatio="none"
              >
                <line
                  x1="450"
                  y1="135"
                  x2="198"
                  y2="250"
                  stroke="rgba(113,134,229,0.35)"
                  strokeWidth="1"
                />

                <line
                  x1="450"
                  y1="135"
                  x2="450"
                  y2="275"
                  stroke="rgba(113,134,229,0.35)"
                  strokeWidth="1"
                />

                <line
                  x1="450"
                  y1="135"
                  x2="702"
                  y2="250"
                  stroke="rgba(113,134,229,0.35)"
                  strokeWidth="1"
                />

                <line
                  x1="198"
                  y1="250"
                  x2="288"
                  y2="410"
                  stroke="rgba(255,255,255,0.16)"
                  strokeWidth="1"
                />

                <line
                  x1="450"
                  y1="275"
                  x2="610"
                  y2="410"
                  stroke="rgba(255,255,255,0.16)"
                  strokeWidth="1"
                />

                <line
                  x1="702"
                  y1="250"
                  x2="610"
                  y2="410"
                  stroke="rgba(255,255,255,0.16)"
                  strokeWidth="1"
                />
              </svg>

              {/* Nodes */}
              {nodes.map((node) => {
                const isSelected = selected === node.id;

                return (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => setSelected(node.id)}
                    style={{
                      left: node.x,
                      top: node.y,
                      transform: "translate(-50%, -50%)",
                    }}
                    className={`absolute text-left transition-all duration-200 ${
                      node.size === "large"
                        ? "w-48 sm:w-56"
                        : node.size === "medium"
                          ? "w-40 sm:w-44"
                          : "w-36"
                    } ${isSelected ? "scale-[1.03]" : "hover:scale-[1.02]"}`}
                  >
                    <div
                      className={`rounded-2xl border p-4 backdrop-blur-md ${
                        isSelected
                          ? "border-[#7186e5]/50 bg-[#7186e5]/10 shadow-[0_0_40px_rgba(113,134,229,0.08)]"
                          : "border-white/10 bg-white/[0.035]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="mono text-[7px] uppercase tracking-[0.13em] text-white/25">
                          {node.type}
                        </span>

                        {isSelected && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[#7186e5]" />
                        )}
                      </div>

                      <div className="mt-3 text-[11px] font-medium text-white/75">
                        {node.label}
                      </div>

                      {node.id === "market" && (
                        <div className="mt-3 flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          <span className="text-[8px] text-white/35">
                            12 verified findings
                          </span>
                        </div>
                      )}

                      {node.id === "models" && (
                        <div className="mt-3 text-[8px] text-white/30">
                          6 connected sources
                        </div>
                      )}

                      {node.id === "cloud" && (
                        <div className="mt-3 text-[8px] text-white/30">
                          9 connected findings
                        </div>
                      )}

                      {node.id === "enterprise" && (
                        <div className="mt-3 text-[8px] text-white/30">
                          4 source clusters
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}

              {/* Canvas controls */}
              <div className="absolute bottom-5 left-5 flex items-center gap-1 rounded-lg border border-white/8 bg-[#17181b]/90 p-1 backdrop-blur">
                <button
                  type="button"
                  className="flex h-7 w-7 items-center justify-center rounded-md text-white/35 hover:bg-white/5 hover:text-white/70"
                >
                  +
                </button>

                <span className="mono px-1 text-[8px] text-white/25">100%</span>

                <button
                  type="button"
                  className="flex h-7 w-7 items-center justify-center rounded-md text-white/35 hover:bg-white/5 hover:text-white/70"
                >
                  −
                </button>
              </div>

              <div className="absolute bottom-5 right-5 hidden items-center gap-2 rounded-lg border border-white/8 bg-[#17181b]/90 px-3 py-2 backdrop-blur sm:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="text-[8px] text-white/30">
                  All connections traceable
                </span>
              </div>
            </div>

            {/* Insight panel */}
            <aside className="bg-[#151619] p-5 sm:p-6">
              <div className="mono text-[8px] uppercase tracking-[0.14em] text-white/25">
                Selected insight
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
                    <Sparkles size={13} className="text-black" />
                  </span>

                  <div>
                    <div className="text-[10px] font-medium text-white/70">
                      {selectedNode.label}
                    </div>

                    <div className="mono mt-0.5 text-[7px] text-white/25">
                      {selectedNode.type}
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-[11px] leading-5 text-white/50">
                  This cluster connects multiple findings across market,
                  infrastructure, and enterprise sources.
                </p>
              </div>

              <div className="mt-6 space-y-2">
                <div className="rounded-xl border border-white/8 bg-white/[0.025] p-4">
                  <div className="flex items-center justify-between">
                    <span className="mono text-[7px] uppercase tracking-wider text-white/20">
                      Connections
                    </span>

                    <span className="text-[10px] text-white/60">12</span>
                  </div>
                </div>

                <div className="rounded-xl border border-white/8 bg-white/[0.025] p-4">
                  <div className="flex items-center justify-between">
                    <span className="mono text-[7px] uppercase tracking-wider text-white/20">
                      Sources
                    </span>

                    <span className="text-[10px] text-white/60">8</span>
                  </div>
                </div>

                <div className="rounded-xl border border-white/8 bg-white/[0.025] p-4">
                  <div className="flex items-center justify-between">
                    <span className="mono text-[7px] uppercase tracking-wider text-white/20">
                      Verified
                    </span>

                    <span className="flex items-center gap-1.5 text-[9px] text-emerald-400">
                      <Check size={10} />
                      100%
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="mt-6 flex w-full items-center justify-between rounded-xl bg-white px-4 py-3 text-[10px] font-semibold text-black transition-transform hover:-translate-y-0.5"
              >
                Explore connections
                <ArrowUpRight size={13} />
              </button>
            </aside>
          </div>

          {/* Footer */}
          <div className="flex flex-col gap-2 border-t border-white/8 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <FileText size={11} className="text-white/20" />
              <span className="text-[8px] text-white/25">
                Every relationship remains connected to its source evidence.
              </span>
            </div>

            <span className="mono text-[7px] uppercase tracking-[0.12em] text-white/20">
              Knowledge graph / live workspace
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
