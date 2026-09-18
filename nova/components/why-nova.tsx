import { ArrowUpRight, Brain, GitBranch, Layers3 } from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Context over clutter",
    description:
      "NOVA keeps the information around your work connected, so your team spends less time searching for the story behind a task.",
    icon: Layers3,
  },
  {
    number: "02",
    title: "Intelligence in the flow",
    description:
      "AI works alongside your team's existing workflow instead of forcing everyone into a separate destination.",
    icon: Brain,
  },
  {
    number: "03",
    title: "Progress you can see",
    description:
      "Make momentum visible with a shared understanding of priorities, dependencies, decisions, and outcomes.",
    icon: GitBranch,
  },
];

export default function WhyNova() {
  return (
    <section
      id="why-nova"
      className="relative overflow-hidden bg-[#f5f3ee] py-24 text-[#0b0a0f] md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Intro */}
        <div className="grid gap-12 lg:grid-cols-[0.55fr_1fr] lg:gap-24">
          <div>
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#6f6977]">
              <span className="h-px w-8 bg-[#8b5cf6]" />
              Why NOVA
            </div>
          </div>

          <div>
            <h2 className="max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.065em] sm:text-6xl md:text-8xl">
              Work shouldn't require
              <br />
              <span className="text-[#8b5cf6]">more work to manage.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[#696470] md:text-lg">
              Modern teams have more tools, more information, and more ways to
              communicate than ever. NOVA is built around a simpler idea:
              technology should remove coordination overhead, not create more of
              it.
            </p>
          </div>
        </div>

        {/* Principles */}
        <div className="mt-20 grid border-l border-t border-black/10 md:grid-cols-3">
          {principles.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group min-h-[360px] border-b border-r border-black/10 p-7 md:p-9"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs tracking-[0.2em] text-[#8a8490]">
                    {item.number}
                  </span>

                  <Icon
                    size={19}
                    className="text-[#8b5cf6] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>

                <div className="mt-24">
                  <h3 className="text-2xl font-black tracking-[-0.035em] md:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-6 text-[#696470]">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Large quote / statement */}
        <div className="relative mt-5 overflow-hidden rounded-[2rem] bg-[#0b0a0f] p-8 text-white md:p-14">
          <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-[#8b5cf6]/20 blur-[100px]" />

          <div className="relative">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#77727f]">
              The NOVA principle
            </div>

            <blockquote className="mt-8 max-w-5xl text-3xl font-black leading-[1.05] tracking-[-0.045em] sm:text-4xl md:text-6xl">
              “The best workflow is the one your team doesn't have to think
              about.”
            </blockquote>

            <div className="mt-10 flex flex-col justify-between gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
              <div className="text-xs text-[#77727f]">
                Less administration. More meaningful work.
              </div>

              <a
                href="#testimonials"
                className="group flex items-center gap-2 text-sm font-bold"
              >
                See what teams say
                <ArrowUpRight
                  size={16}
                  className="text-[#c7f36b] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
