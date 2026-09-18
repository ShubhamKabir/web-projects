import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Kitchen() {
  return (
    <section
      id="kitchen"
      className="bg-[#171513] px-6 py-28 text-[#f2ede4] md:px-10 md:py-36 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-20">
          <div>
            <p className="mono text-[10px] uppercase tracking-[0.22em] text-white/40">
              Inside the kitchen
            </p>

            <h2 className="serif-display mt-5 max-w-xl text-4xl leading-[0.94] tracking-[-0.04em] md:text-6xl">
              Everything
              <br />
              starts with fire.
            </h2>

            <p className="mt-8 max-w-md text-sm leading-7 text-white/45 md:text-base">
              There is no hiding behind the flame. Every dish begins with heat,
              timing, and an ingredient worth putting on the grill.
            </p>

            <div className="mt-10">
              <a
                href="#reservations"
                className="group inline-flex items-center gap-3 border-b border-white/25 pb-2 text-[10px] uppercase tracking-[0.16em] transition-colors hover:border-white"
              >
                Experience the table
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.4}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1800&q=85"
              alt="Chef working in a warm restaurant kitchen"
              fill
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 65vw"
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute bottom-5 left-5 flex items-center gap-3">
              <span className="h-px w-8 bg-white/50" />

              <span className="mono text-[9px] uppercase tracking-[0.16em] text-white/65">
                The open kitchen
              </span>
            </div>
          </div>
        </div>

        <div className="mt-20 grid border-y border-white/10 md:grid-cols-3">
          <div className="border-b border-white/10 py-7 md:border-b-0 md:border-r md:pr-8">
            <span className="mono text-[9px] tracking-[0.16em] text-white/30">
              01
            </span>

            <h3 className="serif-display mt-4 text-2xl tracking-[-0.03em]">
              Direct heat
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/40">
              Wood, coal, and flame are treated as ingredients in their own
              right.
            </p>
          </div>

          <div className="border-b border-white/10 py-7 md:border-b-0 md:border-r md:px-8">
            <span className="mono text-[9px] tracking-[0.16em] text-white/30">
              02
            </span>

            <h3 className="serif-display mt-4 text-2xl tracking-[-0.03em]">
              Slow attention
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/40">
              The kitchen works patiently, giving every ingredient the time its
              character requires.
            </p>
          </div>

          <div className="py-7 md:pl-8">
            <span className="mono text-[9px] tracking-[0.16em] text-white/30">
              03
            </span>

            <h3 className="serif-display mt-4 text-2xl tracking-[-0.03em]">
              Seasonal instinct
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/40">
              The menu changes naturally as the best ingredients move through
              the season.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
