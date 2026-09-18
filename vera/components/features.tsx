import {
  ArrowUpRight,
  Check,
  FileSearch,
  GitBranch,
  Search,
  Sparkles,
} from "lucide-react";

const features = [
  {
    number: "01",
    icon: Search,
    title: "Collect",
    description:
      "Bring scattered information into one research workspace and keep your sources organized from the start.",
    points: ["Multi-source research", "Centralized workspace"],
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Verify",
    description:
      "Trace important findings directly back to their supporting evidence and understand where every claim comes from.",
    points: ["Evidence tracing", "Confidence signals"],
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Analyze",
    description:
      "Ask questions about your research and turn large collections of information into concise, grounded insights.",
    points: ["AI-assisted analysis", "Evidence-backed answers"],
  },
  {
    number: "04",
    icon: GitBranch,
    title: "Connect",
    description:
      "Map relationships between topics, findings, and sources to uncover patterns across your research.",
    points: ["Knowledge canvas", "Connected findings"],
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="border-t border-black/10 bg-[#f8f7f3] py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <span className="mono text-[9px] uppercase tracking-[0.16em] text-black/35">
              Platform
            </span>
          </div>

          <div>
            <h2 className="serif-display max-w-4xl text-[clamp(2.8rem,5.5vw,5.5rem)] leading-[0.92] tracking-[-0.045em]">
              Everything you need
              <br />
              <span className="text-[#3149a6]">
                to research with confidence.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-[15px] leading-7 text-black/50">
              VERA brings collection, verification, analysis, and knowledge
              management into one connected research environment.
            </p>
          </div>
        </div>

        {/* Feature list */}
        <div className="mt-20 border-t border-black/10">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.number}
                className="group grid border-b border-black/10 py-8 sm:py-10 lg:grid-cols-[100px_280px_1fr_220px] lg:items-center lg:gap-8"
              >
                {/* Number */}
                <div className="mono text-[8px] uppercase tracking-[0.12em] text-black/25">
                  {feature.number}
                </div>

                {/* Title */}
                <div className="mt-5 flex items-center gap-4 lg:mt-0">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white transition-transform duration-300 group-hover:-translate-y-1">
                    <Icon size={15} className="text-black/65" />
                  </span>

                  <h3 className="serif-display text-3xl tracking-[-0.035em] text-black/85">
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="mt-5 max-w-xl lg:mt-0">
                  <p className="text-[12px] leading-6 text-black/45">
                    {feature.description}
                  </p>
                </div>

                {/* Points */}
                <div className="mt-6 flex flex-col gap-2 lg:mt-0">
                  {feature.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-2 text-[9px] text-black/40"
                    >
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-black/[0.04]">
                        <Check size={9} className="text-black/45" />
                      </span>

                      {point}
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-black/15" />

            <span className="text-[10px] text-black/30">
              One connected research workflow.
            </span>
          </div>

          <button
            type="button"
            className="group flex w-fit items-center gap-2 text-[10px] font-semibold text-black/65"
          >
            Explore the platform
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              <ArrowUpRight size={11} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
