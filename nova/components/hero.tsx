import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-24 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#8b5cf6]/20 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="relative flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center pb-20 text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-[#a5a1ae]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c7f36b]" />
            The operating system for modern teams
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.065em] sm:text-6xl md:text-8xl">
            Turn busy work
            <br />
            into{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#c7f36b]">momentum.</span>
              <span className="absolute -bottom-1 left-0 right-0 h-3 bg-[#8b5cf6]/40 blur-md" />
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-[#a5a1ae] md:text-lg">
            NOVA brings your projects, people, and everyday workflows into one
            intelligent workspace — so your team can spend less time managing
            work and more time moving it forward.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#cta"
              className="group flex items-center gap-2 rounded-xl bg-[#c7f36b] px-6 py-3.5 text-sm font-bold text-[#0b0a0f] transition-transform hover:-translate-y-1"
            >
              Start building
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#product"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/[0.07]"
            >
              <Play size={15} />
              See how it works
            </a>
          </div>

          {/* Product visual */}
          <div className="relative mt-20 w-full max-w-5xl">
            <div className="absolute -inset-8 rounded-[2rem] bg-[#8b5cf6]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#15131c] text-left shadow-2xl shadow-black/40">
              {/* Browser bar */}
              <div className="flex h-11 items-center gap-2 border-b border-white/10 px-4">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />

                <div className="ml-4 h-6 flex-1 rounded-md bg-white/[0.04]" />
              </div>

              <div className="grid min-h-[360px] grid-cols-[190px_1fr]">
                {/* Sidebar */}
                <aside className="hidden border-r border-white/10 p-5 sm:block">
                  <div className="mb-8 text-xs font-bold tracking-wider text-white">
                    NOVA
                  </div>

                  <div className="space-y-1 text-xs">
                    <div className="rounded-lg bg-white/[0.07] px-3 py-2 text-white">
                      Overview
                    </div>
                    <div className="px-3 py-2 text-[#77727f]">Projects</div>
                    <div className="px-3 py-2 text-[#77727f]">Tasks</div>
                    <div className="px-3 py-2 text-[#77727f]">Team</div>
                  </div>
                </aside>

                {/* Main dashboard */}
                <div className="p-5 sm:p-7">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-[#77727f]">
                        Monday, June 16
                      </div>
                      <h2 className="mt-1 text-xl font-bold tracking-tight">
                        Good morning, team.
                      </h2>
                    </div>

                    <div className="hidden rounded-lg bg-[#c7f36b] px-3 py-2 text-xs font-bold text-[#0b0a0f] sm:block">
                      + New project
                    </div>
                  </div>

                  <div className="mt-7 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="text-[10px] uppercase tracking-widest text-[#77727f]">
                        Active projects
                      </div>
                      <div className="mt-3 text-2xl font-bold">12</div>
                      <div className="mt-1 text-xs text-[#8b5cf6]">
                        +3 this month
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="text-[10px] uppercase tracking-widest text-[#77727f]">
                        Tasks completed
                      </div>
                      <div className="mt-3 text-2xl font-bold">284</div>
                      <div className="mt-1 text-xs text-[#c7f36b]">
                        91% on track
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="text-[10px] uppercase tracking-widest text-[#77727f]">
                        Team focus
                      </div>
                      <div className="mt-3 text-2xl font-bold">87%</div>
                      <div className="mt-1 text-xs text-[#77727f]">
                        ↑ 12% this week
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold">
                        Product launch
                      </span>
                      <span className="text-[10px] text-[#77727f]">
                        78% complete
                      </span>
                    </div>

                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">
                      <div className="h-full w-[78%] rounded-full bg-[#8b5cf6]" />
                    </div>

                    <div className="mt-4 flex items-center justify-between text-[10px] text-[#77727f]">
                      <span>18 tasks remaining</span>
                      <span>Due in 9 days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-[10px] font-medium uppercase tracking-[0.25em] text-[#55515c]">
            Built for teams that move fast
          </div>
        </div>
      </div>
    </section>
  );
}
