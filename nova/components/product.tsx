import { ArrowUpRight, Check, Sparkles, Zap } from "lucide-react";

const benefits = [
  "One workspace for every project",
  "AI-assisted workflows that stay in context",
  "A clear view of what needs attention next",
];

export default function Product() {
  return (
    <section
      id="product"
      className="relative overflow-hidden border-t border-white/10 bg-[#f5f3ee] py-24 text-[#0b0a0f] md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* Copy */}
          <div>
            <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#6f6977]">
              <span className="h-px w-8 bg-[#8b5cf6]" />
              Everything in sync
            </div>

            <h2 className="max-w-xl text-4xl font-black leading-[0.95] tracking-[-0.055em] sm:text-5xl md:text-6xl">
              Your work shouldn't
              <br />
              feel <span className="text-[#8b5cf6]">fragmented.</span>
            </h2>

            <p className="mt-7 max-w-lg text-base leading-7 text-[#696470] md:text-lg">
              NOVA connects the moving pieces of your work into one focused
              system. Projects, conversations, tasks, and decisions stay
              connected so your team always knows what happens next.
            </p>

            <div className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0b0a0f]">
                    <Check size={13} className="text-[#c7f36b]" />
                  </span>

                  <span className="text-sm font-semibold">{benefit}</span>
                </div>
              ))}
            </div>

            <a
              href="#how-it-works"
              className="group mt-9 inline-flex items-center gap-2 text-sm font-bold"
            >
              Explore the workflow
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#8b5cf6]/15 blur-3xl" />

            <div className="relative rounded-[2rem] bg-[#0b0a0f] p-3 shadow-2xl shadow-black/20">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#15131c] p-5 sm:p-7">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#77727f]">
                      Workspace
                    </div>
                    <div className="mt-1 text-lg font-bold text-white">
                      Product Launch
                    </div>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#8b5cf6]/15">
                    <Sparkles size={16} className="text-[#8b5cf6]" />
                  </div>
                </div>

                {/* Progress */}
                <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-xs text-[#77727f]">
                        Overall progress
                      </div>
                      <div className="mt-1 text-3xl font-black text-white">
                        78%
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#c7f36b]">
                      <Zap size={13} />
                      On track
                    </div>
                  </div>

                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full w-[78%] rounded-full bg-[#8b5cf6]" />
                  </div>
                </div>

                {/* Connected items */}
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-widest text-[#77727f]">
                        Tasks
                      </span>
                      <span className="text-xs text-[#c7f36b]">18 / 24</span>
                    </div>

                    <div className="mt-4 space-y-2">
                      <div className="h-2 rounded-full bg-white/5">
                        <div className="h-full w-3/4 rounded-full bg-[#c7f36b]" />
                      </div>
                      <div className="h-2 w-4/5 rounded-full bg-white/5" />
                      <div className="h-2 w-3/5 rounded-full bg-white/5" />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-widest text-[#77727f]">
                        Decisions
                      </span>
                      <span className="text-xs text-[#8b5cf6]">7 open</span>
                    </div>

                    <div className="mt-4 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#8b5cf6]" />
                        <span className="h-2 flex-1 rounded-full bg-white/10" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#c7f36b]" />
                        <span className="h-2 w-3/4 rounded-full bg-white/10" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-white/20" />
                        <span className="h-2 w-2/3 rounded-full bg-white/10" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI suggestion */}
                <div className="mt-4 rounded-2xl border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.07] p-5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#b99cff]">
                    <Sparkles size={13} />
                    NOVA suggestion
                  </div>

                  <p className="mt-3 text-sm leading-6 text-[#c5c0ca]">
                    Three launch tasks are blocked by the same decision. Resolve
                    it today to keep the current timeline on track.
                  </p>

                  <button className="mt-4 text-xs font-bold text-white underline underline-offset-4">
                    Review recommendation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-24 border-t border-black/10 pt-7 md:mt-32">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <div className="text-3xl font-black tracking-tight">01</div>
              <p className="mt-2 text-sm leading-6 text-[#696470]">
                Bring your team's work together.
              </p>
            </div>

            <div>
              <div className="text-3xl font-black tracking-tight">02</div>
              <p className="mt-2 text-sm leading-6 text-[#696470]">
                Let NOVA surface what matters.
              </p>
            </div>

            <div>
              <div className="text-3xl font-black tracking-tight">03</div>
              <p className="mt-2 text-sm leading-6 text-[#696470]">
                Turn decisions into momentum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
