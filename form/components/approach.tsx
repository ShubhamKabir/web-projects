import {
  ArrowDownRight,
  ArrowUpRight,
  Compass,
  Eye,
  PenTool,
  Rocket,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding the idea, the audience, the ambition, and the problem worth solving.",
    detail: "Research / Positioning / Direction",
    icon: Compass,
  },
  {
    number: "02",
    title: "Define",
    description:
      "We turn the strategy into a clear creative territory — deciding what the brand should feel, say, and become.",
    detail: "Concept / Narrative / Visual Territory",
    icon: Eye,
  },
  {
    number: "03",
    title: "Create",
    description:
      "We build the identity and experience, testing ideas through design until every detail feels intentional.",
    detail: "Identity / Design / Prototyping",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Launch",
    description:
      "The final system comes together across every relevant touchpoint, ready to meet the real world.",
    detail: "Production / Launch / Evolution",
    icon: Rocket,
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-[#f4f1eb] py-24 text-[#11110f] md:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        {/* Header */}
        <div className="grid gap-10 md:grid-cols-[0.35fr_1fr]">
          <div>
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-black/45">
              <span className="h-2 w-2 bg-[#ff4d24]" />
              Our approach
            </div>
          </div>

          <div>
            <h2 className="max-w-5xl text-5xl font-black leading-[0.85] tracking-[-0.065em] sm:text-6xl md:text-8xl">
              Think first.
              <br />
              Make <span className="text-[#ff4d24]">bold.</span>
              <br />
              Refine everything.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-black/55 md:text-lg">
              A simple process keeps the work focused. We move from strategy to
              execution without losing the idea that made the project worth
              doing in the first place.
            </p>
          </div>
        </div>

        {/* Process */}
        <div className="relative mt-20">
          {/* Vertical line */}
          <div className="absolute bottom-0 left-[20px] top-0 w-px bg-black/15 md:left-[calc(25%+8px)]" />

          <div className="space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group relative grid min-h-[300px] grid-cols-[42px_1fr] gap-7 border-t border-black/10 py-12 md:grid-cols-[25%_1fr] md:gap-12 md:py-16"
                >
                  {/* Number / marker */}
                  <div className="relative z-10">
                    <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-black/15 bg-[#f4f1eb] font-mono text-[10px] font-bold transition-colors group-hover:border-[#ff4d24] group-hover:bg-[#ff4d24]">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="grid gap-8 md:grid-cols-[0.8fr_1fr_auto] md:items-start">
                    <div>
                      <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-black/40">
                        Phase {step.number}
                      </div>

                      <h3 className="text-4xl font-black tracking-[-0.055em] md:text-6xl">
                        {step.title}
                      </h3>
                    </div>

                    <div>
                      <p className="max-w-md text-sm leading-6 text-black/55 md:text-base">
                        {step.description}
                      </p>

                      <div className="mt-6 text-[9px] font-bold uppercase tracking-[0.15em] text-black/35">
                        {step.detail}
                      </div>
                    </div>

                    <div className="hidden h-12 w-12 items-center justify-center border border-black/15 md:flex">
                      <Icon
                        size={18}
                        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-10 grid gap-8 bg-[#11110f] p-7 text-white md:grid-cols-[1fr_auto] md:items-end md:p-10">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
              The goal
            </div>

            <p className="mt-4 max-w-4xl text-2xl font-black leading-tight tracking-[-0.035em] md:text-4xl">
              Make something people remember — and make sure it works.
            </p>
          </div>

          <ArrowDownRight size={28} className="text-[#ff4d24]" />
        </div>
      </div>
    </section>
  );
}
