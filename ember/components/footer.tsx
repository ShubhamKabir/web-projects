import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#171513] text-[#f2ede4]">
      {/* Final CTA */}
      <section className="px-6 py-28 md:px-10 md:py-36 lg:px-16">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.45fr] lg:items-end">
            <div>
              <p className="mono text-[10px] uppercase tracking-[0.22em] text-white/35">
                Your table awaits
              </p>

              <h2 className="serif-display mt-5 max-w-4xl text-5xl leading-[0.9] tracking-[-0.045em] md:text-7xl lg:text-8xl">
                Come hungry.
                <br />
                Leave with a story.
              </h2>
            </div>

            <div>
              <p className="max-w-sm text-sm leading-7 text-white/45">
                An evening of seasonal food, live fire, and good company at the
                EMBER table.
              </p>

              <Link
                href="#reservations"
                className="group mt-8 inline-flex items-center gap-3 border border-white/20 px-5 py-4 text-[10px] uppercase tracking-[0.16em] transition-colors hover:bg-[#f2ede4] hover:text-[#171513]"
              >
                Reserve your table
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="border-t border-white/10 px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl py-12">
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <Link href="/" className="inline-flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center border border-white/20 text-xs">
                  E
                </span>

                <span className="serif-display text-2xl tracking-[-0.03em]">
                  EMBER
                </span>
              </Link>

              <p className="mt-6 max-w-xs text-xs leading-6 text-white/35">
                Contemporary fire-led dining built around seasonal ingredients
                and the warmth of the table.
              </p>
            </div>

            <div>
              <p className="mono text-[9px] uppercase tracking-[0.16em] text-white/30">
                Explore
              </p>

              <div className="mt-5 space-y-3 text-xs text-white/55">
                <Link
                  href="#experience"
                  className="block transition-colors hover:text-white"
                >
                  Experience
                </Link>

                <Link
                  href="#menu"
                  className="block transition-colors hover:text-white"
                >
                  Menu
                </Link>

                <Link
                  href="#gallery"
                  className="block transition-colors hover:text-white"
                >
                  Gallery
                </Link>

                <Link
                  href="#visit"
                  className="block transition-colors hover:text-white"
                >
                  Visit
                </Link>
              </div>
            </div>

            <div>
              <p className="mono text-[9px] uppercase tracking-[0.16em] text-white/30">
                Reservations
              </p>

              <div className="mt-5 space-y-3 text-xs text-white/55">
                <Link
                  href="#reservations"
                  className="block transition-colors hover:text-white"
                >
                  Reserve a table
                </Link>

                <span className="block">Tue — Sat</span>
                <span className="block">6 — 11 PM</span>
              </div>
            </div>

            <div>
              <p className="mono text-[9px] uppercase tracking-[0.16em] text-white/30">
                Find us
              </p>

              <div className="mt-5 space-y-3 text-xs text-white/55">
                <span className="block">18 Ash Street</span>
                <span className="block">Old Quarter</span>

                <Link
                  href="#map"
                  className="group mt-2 inline-flex items-center gap-2 border-b border-white/15 pb-1 transition-colors hover:border-white/50 hover:text-white"
                >
                  Directions
                  <ArrowUpRight
                    size={12}
                    strokeWidth={1.5}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-[9px] text-white/25 md:flex-row md:items-center md:justify-between">
            <span className="mono uppercase tracking-[0.14em]">
              © 2026 EMBER — Portfolio Concept
            </span>

            <span className="mono uppercase tracking-[0.14em]">
              Fire · Food · People
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
