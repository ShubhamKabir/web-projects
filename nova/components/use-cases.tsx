import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Code2,
  Megaphone,
} from "lucide-react";

const useCases = [
  {
    number: "01",
    title: "Product teams",
    description:
      "Keep launches, decisions, feedback, and dependencies connected from the first idea to release.",
    metric: "Launch with clarity",
    icon: BriefcaseBusiness,
  },
  {
    number: "02",
    title: "Growth teams",
    description:
      "Bring campaigns, experiments, content, and performance signals into one shared operating view.",
    metric: "Move faster",
    icon: Megaphone,
  },
  {
    number: "03",
    title: "Engineering teams",
    description:
      "Connect technical work with priorities, product context, and the decisions behind every release.",
    metric: "Ship with context",
    icon: Code2,
  },
  {
    number: "04",
    title: "Leadership",
    description:
      "Understand what's moving, what's blocked, and where the team needs a decision without chasing updates.",
    metric: "See the whole picture",
    icon: BarChart3,
  },
];

export default function UseCases() {
  return (
    <section
      id="use-cases"
      className="relative overflow-hidden bg-[#c7f36b] py-24 text-[#0b0a0f] md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]">
              <span className="h-px w-8 bg-[#0b0a0f]" />
              Built around your team
            </div>

            <h2 className="max-w-4xl text-5xl font-black leading-[0.88] tracking-[-0.065em] sm:text-6xl md:text-8xl">
              Different teams.
              <br />
              <span className="text-[#8b5cf6]">Same momentum.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#34312a] md:text-base">
            NOVA adapts to the way different teams operate while keeping
            everyone connected to the same source of context.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid border-l border-t border-black/15 sm:grid-cols-2">
          {useCases.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group relative min-h-[340px] border-b border-r border-black/15 p-7 transition-colors hover:bg-black/[0.035] md:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs tracking-[0.2em]">
                    {item.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/15 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    <Icon size={18} />
                  </div>
                </div>

                <div className="mt-20">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#686258]">
                    {item.metric}
                  </div>

                  <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] md:text-4xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-6 text-[#514d45]">
                    {item.description}
                  </p>
                </div>

                <ArrowUpRight
                  size={20}
                  className="absolute bottom-7 right-7 opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100 md:bottom-10 md:right-10"
                />
              </article>
            );
          })}
        </div>

        {/* Statement */}
        <div className="mt-20 grid gap-8 border-t border-black/15 pt-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em]">
              One operating layer
            </div>

            <p className="mt-4 max-w-3xl text-2xl font-black leading-tight tracking-[-0.03em] md:text-4xl">
              From the people doing the work to the people making the decisions,
              everyone sees the same picture.
            </p>
          </div>

          <a
            href="#why-nova"
            className="group flex items-center gap-2 text-sm font-black"
          >
            Why NOVA
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
