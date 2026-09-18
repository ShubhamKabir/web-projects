import {
  ArrowUpRight,
  Brain,
  Layers3,
  MousePointer2,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Bring everything in",
    description:
      "Connect the projects, conversations, files, and workflows your team already uses.",
    icon: Layers3,
  },
  {
    number: "02",
    title: "NOVA connects the dots",
    description:
      "Your work becomes one connected system instead of a collection of disconnected tools.",
    icon: Brain,
  },
  {
    number: "03",
    title: "See what matters",
    description:
      "NOVA surfaces priorities, blockers, and opportunities so your team knows where to focus.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Move work forward",
    description:
      "Turn insight into action without jumping between tools or losing context.",
    icon: MousePointer2,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#0b0a0f] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#77727f]">
            <span className="h-px w-8 bg-[#c7f36b]" />
            How NOVA works
          </div>

          <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.055em] sm:text-5xl md:text-7xl">
            Less coordination.
            <br />
            <span className="text-[#8b5cf6]">More creation.</span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-7 text-[#a5a1ae] md:text-lg">
            NOVA turns the complexity behind modern teamwork into a simple flow.
            Bring your work in, connect the context, and keep moving.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-20 grid border-l border-t border-white/10 md:grid-cols-2">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="group relative min-h-[330px] border-b border-r border-white/10 p-7 transition-colors hover:bg-white/[0.025] md:p-10"
              >
                {/* Number */}
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs tracking-[0.2em] text-[#77727f]">
                    {step.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition-all group-hover:border-[#8b5cf6]/40 group-hover:bg-[#8b5cf6]/10">
                    <Icon
                      size={18}
                      className="text-[#a5a1ae] transition-colors group-hover:text-[#c7f36b]"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-20 max-w-md">
                  <h3 className="text-2xl font-black tracking-[-0.03em] md:text-3xl">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[#8f8996] md:text-base">
                    {step.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="absolute bottom-7 left-7 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 md:bottom-10 md:left-10">
                  <ArrowUpRight size={18} className="text-[#c7f36b]" />
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom visual */}
        <div className="relative mt-5 overflow-hidden rounded-[2rem] border border-white/10 bg-[#15131c] p-6 md:p-10">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#8b5cf6]/10 blur-[100px]" />

          <div className="relative flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#77727f]">
                One connected workspace
              </div>

              <div className="mt-3 text-2xl font-black tracking-tight md:text-4xl">
                Everything your team needs.
                <br />
                Nothing standing in the way.
              </div>
            </div>

            <a
              href="#use-cases"
              className="group flex shrink-0 items-center gap-2 text-sm font-bold"
            >
              See what you can build
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>

          {/* Flow line */}
          <div className="mt-12 hidden items-center md:flex">
            {["Projects", "Context", "Intelligence", "Action"].map(
              (item, index) => (
                <div key={item} className="flex flex-1 items-center">
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-bold ${
                        index === 3
                          ? "bg-[#c7f36b] text-[#0b0a0f]"
                          : "border border-white/10 bg-white/[0.04] text-[#a5a1ae]"
                      }`}
                    >
                      {index + 1}
                    </span>

                    <span className="text-xs font-semibold text-[#a5a1ae]">
                      {item}
                    </span>
                  </div>

                  {index < 3 && (
                    <div className="mx-5 h-px flex-1 bg-gradient-to-r from-white/10 to-[#8b5cf6]/40" />
                  )}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
