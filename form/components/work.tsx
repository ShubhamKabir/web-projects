import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    name: "ARC",
    category: "Brand Identity / Digital",
    year: "2026",
    description:
      "A new visual identity and digital presence for a technology company building the future of urban infrastructure.",
    className: "bg-[#171714]",
    textClass: "text-white",
    accentClass: "text-[#ff4d24]",
    imageClass:
      "bg-[radial-gradient(circle_at_65%_35%,#ff6a43_0%,#ff4d24_18%,transparent_19%),linear-gradient(135deg,#29251f_0%,#11110f_65%)]",
  },
  {
    number: "02",
    name: "KIN",
    category: "Strategy / Digital Experience",
    year: "2026",
    description:
      "A digital platform designed around movement, community, and a more human approach to urban mobility.",
    className: "bg-[#d9d4ca]",
    textClass: "text-[#11110f]",
    accentClass: "text-[#ff4d24]",
    imageClass:
      "bg-[radial-gradient(ellipse_at_25%_75%,#11110f_0%,#11110f_24%,transparent_25%),linear-gradient(115deg,#eee9df_0%,#bdb7ad_100%)]",
  },
  {
    number: "03",
    name: "MONO",
    category: "Campaign / Art Direction",
    year: "2025",
    description:
      "A visual campaign built around contrast, repetition, and a deliberately reduced visual language.",
    className: "bg-[#ff4d24]",
    textClass: "text-[#11110f]",
    accentClass: "text-white",
    imageClass:
      "bg-[repeating-linear-gradient(45deg,#11110f_0px,#11110f_2px,#ff4d24_2px,#ff4d24_12px)]",
  },
  {
    number: "04",
    name: "FIELD",
    category: "Identity / Experience",
    year: "2025",
    description:
      "An identity system for a new creative platform connecting independent makers and curious audiences.",
    className: "bg-[#11110f]",
    textClass: "text-white",
    accentClass: "text-[#ff4d24]",
    imageClass:
      "bg-[radial-gradient(circle_at_30%_30%,#e8e1d6_0%,#e8e1d6_18%,transparent_19%),radial-gradient(circle_at_70%_70%,#ff4d24_0%,#ff4d24_16%,transparent_17%),#27251f]",
  },
];

export default function Work() {
  return (
    <section id="work" className="overflow-hidden bg-[#f4f1eb] py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        {/* Header */}
        <div className="grid gap-8 border-b border-black/15 pb-8 md:grid-cols-[0.35fr_1fr] md:items-end">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-black/50">
            Selected work
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-4xl text-5xl font-black leading-[0.85] tracking-[-0.065em] sm:text-6xl md:text-8xl">
              Ideas made
              <br />
              <span className="text-[#ff4d24]">visible.</span>
            </h2>

            <p className="max-w-xs text-xs leading-5 text-black/50">
              A selection of fictional projects created to demonstrate FORM's
              approach to brand, digital, and visual design.
            </p>
          </div>
        </div>

        {/* Projects */}
        <div className="mt-16 space-y-20 md:space-y-28">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className={`group ${index % 2 === 1 ? "md:pl-[10%]" : ""}`}
            >
              {/* Project image / visual */}
              <div
                className={`relative aspect-[4/3] overflow-hidden ${project.imageClass} md:aspect-[16/8]`}
              >
                {/* Abstract visual treatment */}
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.025]">
                  {index === 0 && (
                    <>
                      <div className="absolute left-[12%] top-[18%] h-[64%] w-[32%] border border-white/20" />
                      <div className="absolute left-[16%] top-[23%] h-[54%] w-[24%] border border-[#ff4d24]/60" />
                      <div className="absolute right-[14%] top-[20%] text-[20vw] font-black leading-none tracking-[-0.12em] text-white/10 md:text-[12vw]">
                        A
                      </div>
                    </>
                  )}

                  {index === 1 && (
                    <>
                      <div className="absolute left-[13%] top-[16%] h-[68%] w-[42%] rounded-full border-[2px] border-black/15" />
                      <div className="absolute left-[22%] top-[27%] h-[46%] w-[24%] rounded-full bg-[#11110f]" />
                      <div className="absolute right-[12%] top-[22%] text-[17vw] font-black leading-none tracking-[-0.12em] text-black/10 md:text-[11vw]">
                        K
                      </div>
                    </>
                  )}

                  {index === 2 && (
                    <>
                      <div className="absolute left-[8%] top-[15%] text-[30vw] font-black leading-[0.7] tracking-[-0.15em] text-black md:text-[18vw]">
                        M
                      </div>
                      <div className="absolute bottom-[12%] right-[8%] h-24 w-24 border-[12px] border-black md:h-36 md:w-36" />
                    </>
                  )}

                  {index === 3 && (
                    <>
                      <div className="absolute left-[12%] top-[18%] h-[64%] w-[26%] bg-[#e8e1d6]" />
                      <div className="absolute left-[16%] top-[23%] h-[54%] w-[18%] border-[8px] border-[#ff4d24]" />
                      <div className="absolute right-[12%] top-[18%] text-[20vw] font-black leading-none tracking-[-0.12em] text-white/10 md:text-[12vw]">
                        F
                      </div>
                    </>
                  )}
                </div>

                {/* Project number */}
                <div
                  className={`absolute left-5 top-5 font-mono text-[10px] font-bold tracking-[0.2em] md:left-7 md:top-7 ${project.textClass}`}
                >
                  {project.number}
                </div>

                {/* Arrow */}
                <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 md:right-7 md:top-7">
                  <ArrowUpRight size={17} />
                </div>
              </div>

              {/* Project info */}
              <div className="mt-5 grid gap-5 border-b border-black/15 pb-6 md:grid-cols-[0.35fr_1fr_auto] md:items-start">
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/40">
                  {project.category}
                </div>

                <div>
                  <h3 className="text-4xl font-black leading-none tracking-[-0.055em] md:text-6xl">
                    {project.name}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-6 text-black/55">
                    {project.description}
                  </p>
                </div>

                <div className="text-xs font-bold text-black/40 md:text-right">
                  {project.year}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* End marker */}
        <div className="mt-20 flex items-center justify-between border-t border-black/15 pt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
          <span>More work coming soon</span>
          <span>FORM / Selected work</span>
        </div>
      </div>
    </section>
  );
}
