import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    number: "01",
    title: "Open fire",
    text: "Flame is our primary tool. Char, smoke, and heat bring depth to simple ingredients.",
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "02",
    title: "Seasonal produce",
    text: "Our menu changes with what is available, keeping the kitchen close to the rhythm of the season.",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "03",
    title: "The table",
    text: "An intimate dining room where long evenings, good food, and conversation belong together.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#171513] px-6 py-28 text-[#f2ede4] md:px-10 md:py-36 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mono text-[10px] uppercase tracking-[0.22em] text-white/40">
              The experience
            </p>

            <h2 className="serif-display mt-5 max-w-2xl text-4xl leading-[0.95] tracking-[-0.04em] md:text-6xl">
              Simple ingredients.
              <br />
              Serious heat.
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-6 text-white/45">
            Three elements shape every evening at EMBER.
          </p>
        </div>

        <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-3">
          {experiences.map((item) => (
            <article
              key={item.number}
              className="group relative overflow-hidden bg-[#171513]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                <div className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/15" />

                <div className="absolute left-5 top-5">
                  <span className="mono text-[10px] tracking-[0.15em] text-white/60">
                    {item.number}
                  </span>
                </div>
              </div>

              <div className="flex min-h-52 flex-col justify-between p-6">
                <div>
                  <h3 className="serif-display text-3xl tracking-[-0.03em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-white/45">
                    {item.text}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="mono text-[9px] uppercase tracking-[0.16em] text-white/30">
                    EMBER
                  </span>

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.4}
                    className="text-white/40 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
