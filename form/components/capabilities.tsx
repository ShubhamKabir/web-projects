import {
  ArrowUpRight,
  Box,
  Code2,
  Film,
  Layers3,
  PenTool,
  Type,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Identity",
    description: "Visual systems with a point of view.",
    icon: PenTool,
    size: "large",
  },
  {
    number: "02",
    title: "Web",
    description: "Digital experiences built to perform.",
    icon: Code2,
    size: "small",
  },
  {
    number: "03",
    title: "Motion",
    description: "Movement that gives ideas another dimension.",
    icon: Film,
    size: "small",
  },
  {
    number: "04",
    title: "Systems",
    description: "Flexible design systems made to grow.",
    icon: Layers3,
    size: "large",
  },
  {
    number: "05",
    title: "Typography",
    description: "Words and type treated as visual material.",
    icon: Type,
    size: "small",
  },
  {
    number: "06",
    title: "3D",
    description: "Objects, spaces, and worlds beyond the flat screen.",
    icon: Box,
    size: "small",
  },
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative overflow-hidden bg-[#ff4d24] py-24 text-[#11110f] md:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        {/* Header */}
        <div className="grid gap-8 md:grid-cols-[0.35fr_1fr]">
          <div className="text-xs font-bold uppercase tracking-[0.2em]">
            Capabilities
          </div>

          <div>
            <h2 className="max-w-5xl text-5xl font-black leading-[0.84] tracking-[-0.07em] sm:text-6xl md:text-8xl">
              Many tools.
              <br />
              One <span className="text-white">point of view.</span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-7 text-black/60 md:text-lg">
              From the first sketch to the final interaction, FORM brings
              strategy, design, technology, and motion together under one
              creative direction.
            </p>
          </div>
        </div>

        {/* Capability grid */}
        <div className="mt-20 grid gap-3 md:grid-cols-2">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            const large = capability.size === "large";

            return (
              <article
                key={capability.number}
                className={`group relative overflow-hidden border border-black/20 p-7 transition-all duration-300 hover:bg-[#11110f] hover:text-white md:p-9 ${
                  large ? "min-h-[360px]" : "min-h-[280px]"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] tracking-[0.2em]">
                    {capability.number}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center border border-black/20 transition-colors group-hover:border-white/20">
                    <Icon size={17} />
                  </div>
                </div>

                <div className="absolute bottom-7 left-7 right-7 md:bottom-9 md:left-9 md:right-9">
                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <h3
                        className={`font-black leading-none tracking-[-0.055em] ${
                          large
                            ? "text-5xl md:text-7xl"
                            : "text-4xl md:text-5xl"
                        }`}
                      >
                        {capability.title}
                      </h3>

                      <p className="mt-4 max-w-sm text-sm leading-5 text-black/55 transition-colors group-hover:text-white/50">
                        {capability.description}
                      </p>
                    </div>

                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-white transition-all group-hover:bg-[#ff4d24] group-hover:text-black">
                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </div>

                {/* Decorative line */}
                <div className="absolute left-0 top-1/2 h-px w-0 bg-[#ff4d24] transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>

        {/* Bottom label */}
        <div className="mt-10 flex flex-col justify-between gap-5 border-t border-black/20 pt-6 text-[10px] font-bold uppercase tracking-[0.2em] sm:flex-row">
          <span>Strategy × Design × Technology</span>
          <span>FORM / Capabilities</span>
        </div>
      </div>
    </section>
  );
}
