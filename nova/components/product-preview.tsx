"use client";

import {
  ArrowRight,
  Check,
  ChevronDown,
  Circle,
  Clock3,
  MoreHorizontal,
  Plus,
  Search,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const views = ["Overview", "Projects", "Timeline"];

export default function ProductPreview() {
  const [activeView, setActiveView] = useState("Overview");

  return (
    <section className="relative overflow-hidden bg-[#0b0a0f] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#77727f]">
            <span className="h-px w-8 bg-[#c7f36b]" />
            Inside NOVA
            <span className="h-px w-8 bg-[#c7f36b]" />
          </div>

          <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.055em] sm:text-5xl md:text-7xl">
            One place to see
            <br />
            <span className="text-[#c7f36b]">the whole picture.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#a5a1ae] md:text-lg">
            A workspace designed around how your team actually works. Switch
            views, understand the context, and act without losing momentum.
          </p>
        </div>

        {/* Product shell */}
        <div className="relative mt-16">
          <div className="absolute -inset-10 rounded-[3rem] bg-[#8b5cf6]/10 blur-[100px]" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#15131c] shadow-2xl shadow-black/50">
            {/* Top bar */}
            <div className="flex h-16 items-center justify-between border-b border-white/10 px-5 md:px-7">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#c7f36b] text-sm font-black text-[#0b0a0f]">
                  N
                </div>

                <span className="hidden text-sm font-bold sm:block">
                  Workspace
                </span>
              </div>

              <div className="hidden items-center gap-1 rounded-lg border border-white/10 bg-white/[0.03] p-1 sm:flex">
                {views.map((view) => (
                  <button
                    key={view}
                    type="button"
                    onClick={() => setActiveView(view)}
                    className={`rounded-md px-3 py-1.5 text-[10px] font-semibold transition-colors ${
                      activeView === view
                        ? "bg-white/10 text-white"
                        : "text-[#77727f] hover:text-white"
                    }`}
                  >
                    {view}
                  </button>
                ))}
              </div>

              <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-[#77727f]">
                <MoreHorizontal size={17} />
              </button>
            </div>

            <div className="grid min-h-[620px] lg:grid-cols-[210px_1fr]">
              {/* Sidebar */}
              <aside className="hidden border-r border-white/10 p-5 lg:block">
                <div className="mb-7 text-[10px] uppercase tracking-[0.2em] text-[#77727f]">
                  Workspace
                </div>

                <div className="space-y-1">
                  {["Overview", "Projects", "My tasks", "Team", "Insights"].map(
                    (item, index) => (
                      <div
                        key={item}
                        className={`rounded-lg px-3 py-2.5 text-xs ${
                          index === 0
                            ? "bg-white/[0.07] font-semibold text-white"
                            : "text-[#77727f]"
                        }`}
                      >
                        {item}
                      </div>
                    ),
                  )}
                </div>

                <div className="mt-10 border-t border-white/10 pt-7">
                  <div className="mb-3 text-[10px] uppercase tracking-[0.2em] text-[#77727f]">
                    Projects
                  </div>

                  {["Product Launch", "Website Redesign", "Q3 Campaign"].map(
                    (item, index) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 px-3 py-2.5 text-xs text-[#8d8794]"
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            index === 0 ? "bg-[#c7f36b]" : "bg-[#8b5cf6]"
                          }`}
                        />
                        {item}
                      </div>
                    ),
                  )}
                </div>

                <button className="mt-8 flex items-center gap-2 px-3 text-xs text-[#77727f]">
                  <Plus size={13} />
                  Add project
                </button>
              </aside>

              {/* Main */}
              <div className="min-w-0 p-5 md:p-8">
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#77727f]">
                      {activeView}
                    </div>

                    <h3 className="mt-1 text-2xl font-black tracking-[-0.035em]">
                      Product Launch
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="hidden items-center gap-2 rounded-lg border border-white/10 px-3 py-2 sm:flex">
                      <Search size={13} className="text-[#77727f]" />
                      <span className="text-[10px] text-[#77727f]">Search</span>
                    </div>

                    <button className="flex items-center gap-2 rounded-lg bg-[#c7f36b] px-3 py-2 text-[10px] font-bold text-[#0b0a0f]">
                      <Plus size={13} />
                      Add task
                    </button>
                  </div>
                </div>

                {/* Overview view */}
                {activeView === "Overview" && (
                  <div className="mt-8">
                    <div className="grid gap-3 sm:grid-cols-3">
                      {[
                        ["24", "Total tasks"],
                        ["18", "Completed"],
                        ["6", "In progress"],
                      ].map(([value, label]) => (
                        <div
                          key={label}
                          className="rounded-xl border border-white/10 bg-white/[0.025] p-4"
                        >
                          <div className="text-2xl font-black">{value}</div>
                          <div className="mt-1 text-[10px] text-[#77727f]">
                            {label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs font-bold">
                            Launch progress
                          </div>
                          <div className="mt-1 text-[10px] text-[#77727f]">
                            18 of 24 tasks completed
                          </div>
                        </div>

                        <span className="text-sm font-bold text-[#c7f36b]">
                          75%
                        </span>
                      </div>

                      <div className="mt-5 h-2 rounded-full bg-white/5">
                        <div className="h-full w-3/4 rounded-full bg-[#8b5cf6]" />
                      </div>
                    </div>

                    <div className="mt-4 grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
                      <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold">
                            Upcoming work
                          </span>

                          <span className="text-[10px] text-[#77727f]">
                            View all
                          </span>
                        </div>

                        <div className="mt-5 space-y-3">
                          {[
                            ["Finalize landing page", "Today", true],
                            ["Review analytics setup", "Tomorrow", false],
                            ["Prepare launch email", "Thu", false],
                          ].map(([task, date, active]) => (
                            <div
                              key={task as string}
                              className="flex items-center gap-3 border-b border-white/5 pb-3 last:border-0 last:pb-0"
                            >
                              <span
                                className={`flex h-7 w-7 items-center justify-center rounded-lg ${
                                  active
                                    ? "bg-[#c7f36b] text-[#0b0a0f]"
                                    : "bg-white/[0.05] text-[#77727f]"
                                }`}
                              >
                                {active ? (
                                  <Check size={13} />
                                ) : (
                                  <Circle size={11} />
                                )}
                              </span>

                              <span className="flex-1 text-xs font-medium">
                                {task as string}
                              </span>

                              <span className="text-[10px] text-[#77727f]">
                                {date as string}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-2xl border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06] p-5">
                        <div className="flex items-center gap-2 text-xs font-bold text-[#c7f36b]">
                          <Sparkles size={13} />
                          NOVA insight
                        </div>

                        <p className="mt-4 text-sm leading-6 text-[#c6c0ca]">
                          Launch progress is on track, but three tasks share a
                          dependency that should be resolved this week.
                        </p>

                        <button className="mt-5 flex items-center gap-2 text-[10px] font-bold text-white">
                          Explore insight
                          <ArrowRight size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Projects view */}
                {activeView === "Projects" && (
                  <div className="mt-8 grid gap-3 md:grid-cols-2">
                    {[
                      ["Product Launch", "78%", "18 tasks"],
                      ["Website Redesign", "52%", "31 tasks"],
                      ["Q3 Campaign", "91%", "14 tasks"],
                      ["Mobile Experience", "36%", "22 tasks"],
                    ].map(([name, progress, tasks]) => (
                      <div
                        key={name}
                        className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold">{name}</span>
                          <span className="text-xs text-[#c7f36b]">
                            {progress}
                          </span>
                        </div>

                        <div className="mt-5 h-1.5 rounded-full bg-white/5">
                          <div
                            className="h-full rounded-full bg-[#8b5cf6]"
                            style={{ width: progress }}
                          />
                        </div>

                        <div className="mt-4 text-[10px] text-[#77727f]">
                          {tasks}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Timeline view */}
                {activeView === "Timeline" && (
                  <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                    <div className="grid grid-cols-[150px_1fr] gap-4 border-b border-white/10 pb-4 text-[10px] text-[#77727f]">
                      <span>Workstream</span>
                      <div className="grid grid-cols-5">
                        <span>MON</span>
                        <span>TUE</span>
                        <span>WED</span>
                        <span>THU</span>
                        <span>FRI</span>
                      </div>
                    </div>

                    <div className="space-y-6 pt-6">
                      {[
                        ["Design", "20%", "68%"],
                        ["Development", "38%", "82%"],
                        ["Marketing", "10%", "55%"],
                        ["Launch", "55%", "92%"],
                      ].map(([name, left, width]) => (
                        <div
                          key={name}
                          className="grid grid-cols-[150px_1fr] items-center gap-4"
                        >
                          <span className="text-xs font-semibold">{name}</span>

                          <div className="relative h-8 rounded-lg bg-white/[0.03]">
                            <div
                              className="absolute top-1/2 h-6 -translate-y-1/2 rounded-md bg-[#8b5cf6]"
                              style={{
                                left,
                                width,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex items-center gap-2 text-[10px] text-[#77727f]">
                      <Clock3 size={12} />
                      Timeline automatically updates as work changes.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-10 flex flex-col justify-between gap-5 border-t border-white/10 pt-7 md:flex-row md:items-center">
          <p className="max-w-xl text-sm leading-6 text-[#77727f]">
            Designed to give teams the context they need without adding another
            layer of complexity.
          </p>

          <a
            href="#use-cases"
            className="group flex items-center gap-2 text-sm font-bold text-white"
          >
            See NOVA in action
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
