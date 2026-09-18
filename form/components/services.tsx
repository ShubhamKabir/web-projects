import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Brand Strategy",
    text: "Positioning, naming, verbal direction, and the strategic foundation behind a brand.",
    tags: ["Positioning", "Naming", "Strategy"],
  },
  {
    number: "02",
    title: "Visual Identity",
    text: "Distinct visual systems that give ambitious ideas a recognizable point of view.",
    tags: ["Identity", "Art Direction", "Guidelines"],
  },
  {
    number: "03",
    title: "Digital Design",
    text: "Websites and digital experiences that turn brand thinking into something people can use.",
    tags: ["Web Design", "UX/UI", "Prototyping"],
  },
  {
    number: "04",
    title: "Creative Direction",
    text: "A clear creative vision across campaigns, launches, content, and every visual touchpoint.",
    tags: ["Campaigns", "Content", "Direction"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#11110f] py-24 text-white md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        {/* Header */}
        <div className="grid gap-10 border-b border-white/15 pb-10 md:grid-cols-[0.35fr_1fr] md:items-end">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">
            What we do
          </div>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="max-w-4xl text-5xl font-black leading-[0.86] tracking-[-0.065em] sm:text-6xl md:text-8xl">
              Strategy.
              <br />
              Design.
              <br />
              <span className="text-[#ff4d24]">Impact.</span>
            </h2>

            <p className="max-w-xs text-xs leading-5 text-white/45">
              We combine strategic thinking with visual craft to create brands
              that have something to say.
            </p>
          </div>
        </div>

        {/* Services list */}
        <div className="mt-14">
          {services.map((service) => (
            <article
              key={service.number}
              className="group grid border-b border-white/15 py-8 md:grid-cols-[0.18fr_0.8fr_1fr_auto] md:items-center md:gap-8 md:py-10"
            >
              <span className="font-mono text-[10px] tracking-[0.2em] text-white/35">
                {service.number}
              </span>

              <h3 className="mt-5 text-3xl font-black tracking-[-0.045em] transition-colors group-hover:text-[#ff4d24] md:mt-0 md:text-5xl">
                {service.title}
              </h3>

              <p className="mt-4 max-w-md text-sm leading-6 text-white/45 md:mt-0">
                {service.text}
              </p>

              <div className="mt-6 flex items-center gap-2 md:mt-0">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="hidden border border-white/15 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white/45 lg:block"
                  >
                    {tag}
                  </span>
                ))}

                <span className="ml-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-[#ff4d24] group-hover:bg-[#ff4d24] group-hover:text-black">
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-16 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-3xl text-2xl font-bold leading-tight tracking-[-0.03em] md:text-4xl">
            One studio from first thought to final pixel.
          </p>

          <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
            FORM / Capabilities
          </span>
        </div>
      </div>
    </section>
  );
}
