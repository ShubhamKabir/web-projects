"use client";

import {
  ArrowUpRight,
  Bot,
  Check,
  Command,
  Layers3,
  Sparkles,
  Zap,
} from "lucide-react";
import { useState } from "react";

const features = [
  {
    id: "focus",
    number: "01",
    label: "Focus",
    title: "Know what deserves attention.",
    description:
      "NOVA turns scattered activity into a clear view of priorities, blockers, and work that needs your attention.",
    icon: Zap,
  },
  {
    id: "ai",
    number: "02",
    label: "AI",
    title: "Intelligence inside the workflow.",
    description:
      "Ask questions, summarize progress, find decisions, and uncover patterns without leaving your workspace.",
    icon: Bot,
  },
  {
    id: "systems",
    number: "03",
    label: "Systems",
    title: "Your tools finally work together.",
    description:
      "Connect the systems your team already uses and keep the important context in one place.",
    icon: Layers3,
  },
];

export default function Features() {
  const [active, setActive] = useState("focus");

  const current =
    features.find((feature) => feature.id === active) ?? features[0];

  const Icon = current.icon;

  return (
    <section className="relative overflow-hidden bg-[#f5f3ee] py-24 text-[#0b0a0f] md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Header */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#6f6977]">
              <span className="h-px w-8 bg-[#8b5cf6]" />
              Built for momentum
            </div>

            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.055em] sm:text-5xl md:text-7xl">
              Powerful where
              <br />
              <span className="text-[#8b5cf6]">work actually happens.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[#696470] md:pb-1">
            Every part of NOVA is designed to reduce the distance between
            understanding something and doing something about it.
          </p>
        </div>

        {/* Feature navigation */}
        <div className="mt-16 grid border-t border-black/10 md:grid-cols-3">
          {features.map((feature) => {
            const FeatureIcon = feature.icon;
            const isActive = active === feature.id;

            return (
              <button
                key={feature.id}
                type="button"
                onClick={() => setActive(feature.id)}
                className={`group border-b border-black/10 p-6 text-left transition-all md:border-r md:p-8 ${
                  isActive
                    ? "bg-[#0b0a0f] text-white"
                    : "hover:bg-black/[0.025]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-xs tracking-[0.2em] ${
                      isActive ? "text-[#77727f]" : "text-[#8d8792]"
                    }`}
                  >
                    {feature.number}
                  </span>

                  <FeatureIcon
                    size={18}
                    className={isActive ? "text-[#c7f36b]" : "text-[#8d8792]"}
                  />
                </div>

                <div
                  className={`mt-10 text-sm font-bold ${
                    isActive ? "text-[#c7f36b]" : "text-[#696470]"
                  }`}
                >
                  {feature.label}
                </div>

                <div
                  className={`mt-2 text-lg font-black tracking-tight ${
                    isActive ? "text-white" : "text-[#0b0a0f]"
                  }`}
                >
                  {feature.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Showcase */}
        <div className="mt-5 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Description */}
          <div className="flex min-h-[480px] flex-col justify-between rounded-[2rem] bg-[#0b0a0f] p-7 text-white md:p-10">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8b5cf6]/15">
                <Icon size={20} className="text-[#c7f36b]" />
              </div>

              <div className="mt-12 font-mono text-[10px] uppercase tracking-[0.25em] text-[#77727f]">
                {current.label} / NOVA
              </div>

              <h3 className="mt-4 max-w-md text-3xl font-black leading-tight tracking-[-0.04em] md:text-4xl">
                {current.title}
              </h3>

              <p className="mt-5 max-w-md text-sm leading-6 text-[#96919c] md:text-base">
                {current.description}
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 pt-6">
              <span className="text-xs text-[#77727f]">Explore capability</span>

              <ArrowUpRight size={18} className="text-[#c7f36b]" />
            </div>
          </div>

          {/* Dynamic product UI */}
          <div className="relative min-h-[480px] overflow-hidden rounded-[2rem] border border-black/10 bg-[#e9e6df] p-5 md:p-8">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#8b5cf6]/15 blur-[100px]" />

            {active === "focus" && (
              <div className="relative h-full rounded-2xl border border-black/10 bg-white p-5 shadow-xl shadow-black/5 md:p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-[#88818c]">
                      Today
                    </div>
                    <div className="mt-1 text-xl font-black">Your focus</div>
                  </div>

                  <div className="rounded-lg bg-[#c7f36b] px-3 py-2 text-[10px] font-black">
                    4 priorities
                  </div>
                </div>

                <div className="mt-7 space-y-3">
                  {[
                    ["Launch onboarding flow", "High priority", true],
                    ["Review product feedback", "Needs attention", false],
                    ["Finalize campaign assets", "On track", false],
                    ["Weekly team sync", "Today · 4:00 PM", false],
                  ].map(([title, status, done], index) => (
                    <div
                      key={title as string}
                      className={`flex items-center gap-4 rounded-xl border p-4 ${
                        index === 0
                          ? "border-[#8b5cf6]/30 bg-[#8b5cf6]/[0.06]"
                          : "border-black/10"
                      }`}
                    >
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                          done ? "bg-[#c7f36b]" : "bg-black/[0.04]"
                        }`}
                      >
                        {done ? (
                          <Check size={14} />
                        ) : (
                          <span className="h-2 w-2 rounded-full bg-[#8b5cf6]" />
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="truncate text-sm font-bold">
                          {title as string}
                        </div>
                        <div className="mt-1 text-[10px] text-[#8a8490]">
                          {status as string}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-[#0b0a0f] p-4 text-white md:bottom-7 md:left-7 md:right-7">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-[#c7f36b]">
                    <Sparkles size={12} />
                    NOVA recommends
                  </div>
                  <p className="mt-2 text-xs leading-5 text-[#aaa5ae]">
                    Finish the onboarding flow before reviewing new requests.
                  </p>
                </div>
              </div>
            )}

            {active === "ai" && (
              <div className="relative h-full rounded-2xl bg-[#0b0a0f] p-5 text-white shadow-xl md:p-7">
                <div className="flex items-center gap-3 border-b border-white/10 pb-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#8b5cf6]">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Ask NOVA</div>
                    <div className="text-[10px] text-[#77727f]">
                      Connected to your workspace
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center gap-2 text-[10px] text-[#77727f]">
                    <Command size={12} />
                    Ask anything about your work
                  </div>

                  <div className="mt-4 text-sm text-[#c8c3cc]">
                    “What is blocking the launch?”
                  </div>
                </div>

                <div className="mt-5 rounded-xl border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.07] p-5">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#b99cff]">
                    Analysis
                  </div>

                  <p className="mt-3 text-sm leading-6 text-[#d0cbd4]">
                    Two launch tasks are waiting on final copy approval. The
                    dependency affects the onboarding release scheduled for
                    Thursday.
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-lg border border-white/10 p-3">
                      <div className="text-[10px] text-[#77727f]">Blocked</div>
                      <div className="mt-1 font-bold">2 tasks</div>
                    </div>

                    <div className="rounded-lg border border-white/10 p-3">
                      <div className="text-[10px] text-[#77727f]">Impact</div>
                      <div className="mt-1 font-bold">High</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-center text-[10px] text-[#55515c] md:bottom-7">
                  AI responses are grounded in your workspace context.
                </div>
              </div>
            )}

            {active === "systems" && (
              <div className="relative h-full rounded-2xl border border-black/10 bg-white p-5 shadow-xl shadow-black/5 md:p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-[#88818c]">
                      Connected systems
                    </div>
                    <div className="mt-1 text-xl font-black">
                      Your stack, connected.
                    </div>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0b0a0f]">
                    <Layers3 size={16} className="text-[#c7f36b]" />
                  </div>
                </div>

                <div className="relative mt-10 flex min-h-[270px] items-center justify-center">
                  <div className="absolute h-44 w-44 rounded-full border border-[#8b5cf6]/20" />
                  <div className="absolute h-28 w-28 rounded-full border border-[#8b5cf6]/30" />

                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#0b0a0f] shadow-xl">
                    <span className="text-xl font-black text-[#c7f36b]">N</span>
                  </div>

                  {[
                    ["Slack", "left-4 top-8"],
                    ["Drive", "right-4 top-8"],
                    ["Linear", "bottom-8 left-8"],
                    ["GitHub", "bottom-8 right-8"],
                  ].map(([name, position]) => (
                    <div
                      key={name}
                      className={`absolute ${position} rounded-xl border border-black/10 bg-[#f5f3ee] px-4 py-3 text-xs font-bold shadow-sm`}
                    >
                      {name}
                    </div>
                  ))}
                </div>

                <div className="border-t border-black/10 pt-5 text-xs leading-5 text-[#77727f]">
                  Keep the tools you love. Give your team one connected layer
                  across them.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
