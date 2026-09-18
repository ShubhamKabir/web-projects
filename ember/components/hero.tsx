import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#171513] text-[#f2ede4]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=2200&q=85')",
        }}
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#171513] via-transparent to-black/20" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 pb-8 pt-32 md:px-10 md:pb-10 lg:px-16">
        <div className="flex justify-end">
          <div className="mono border border-white/20 px-3 py-2 text-[9px] uppercase tracking-[0.18em] text-white/60">
            Fire · Season · Table
          </div>
        </div>

        <div className="pb-12 md:pb-16">
          <p className="mono mb-6 text-[10px] uppercase tracking-[0.24em] text-white/55">
            Contemporary fire-led dining
          </p>

          <h1 className="serif-display max-w-5xl text-[18vw] leading-[0.78] tracking-[-0.07em] sm:text-[15vw] md:text-[13vw] lg:text-[11rem]">
            EMBER
          </h1>

          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-sm leading-6 text-white/65 md:text-base">
              Seasonal ingredients, live fire, and a dining room built around
              the warmth of the table.
            </p>

            <Link
              href="#reservations"
              className="group flex w-fit items-center gap-3 border-b border-white/30 pb-2 text-[11px] uppercase tracking-[0.16em] text-white transition-colors hover:border-white"
            >
              Reserve your table
              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>

        <Link
          href="#introduction"
          className="flex w-fit items-center gap-3 text-white/45 transition-colors hover:text-white"
          aria-label="Scroll to introduction"
        >
          <ArrowDown size={15} strokeWidth={1.5} />
          <span className="mono text-[9px] uppercase tracking-[0.18em]">
            Discover
          </span>
        </Link>
      </div>
    </section>
  );
}
