import { ArrowUpRight, Clock3, MapPin } from "lucide-react";

export default function Visit() {
  return (
    <section
      id="visit"
      className="bg-[#f2ede4] px-6 py-28 md:px-10 md:py-36 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="mono text-[10px] uppercase tracking-[0.22em] text-[#746b61]">
              Come find us
            </p>

            <h2 className="serif-display mt-5 max-w-xl text-5xl leading-[0.92] tracking-[-0.045em] md:text-7xl">
              Worth the
              <br />
              journey.
            </h2>

            <p className="mt-8 max-w-md text-sm leading-7 text-[#746b61] md:text-base">
              EMBER sits at the edge of the old quarter, where the evening
              settles in slowly and the kitchen stays warm late into the night.
            </p>

            <a
              href="#map"
              className="group mt-8 inline-flex items-center gap-2 border-b border-black/20 pb-2 text-[10px] uppercase tracking-[0.16em] transition-colors hover:border-black"
            >
              Get directions
              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <div className="grid gap-px bg-black/10 md:grid-cols-2">
            <div className="bg-[#e8e0d4] p-7 md:p-9">
              <MapPin size={18} strokeWidth={1.3} className="text-black/45" />

              <p className="mono mt-10 text-[9px] uppercase tracking-[0.16em] text-black/35">
                Address
              </p>

              <p className="serif-display mt-3 text-2xl leading-tight">
                18 Ash Street
                <br />
                Old Quarter
              </p>

              <p className="mt-4 text-xs leading-5 text-black/45">
                The corner with the warm lights.
              </p>
            </div>

            <div className="bg-[#e8e0d4] p-7 md:p-9">
              <Clock3 size={18} strokeWidth={1.3} className="text-black/45" />

              <p className="mono mt-10 text-[9px] uppercase tracking-[0.16em] text-black/35">
                Opening hours
              </p>

              <div className="mt-4 space-y-3 text-xs">
                <div className="flex justify-between gap-6 border-b border-black/10 pb-3">
                  <span className="text-black/45">Tue — Thu</span>
                  <span>6 — 11 PM</span>
                </div>

                <div className="flex justify-between gap-6 border-b border-black/10 pb-3">
                  <span className="text-black/45">Fri — Sat</span>
                  <span>6 — 11:30 PM</span>
                </div>

                <div className="flex justify-between gap-6">
                  <span className="text-black/45">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="map"
          className="relative mt-16 h-[420px] overflow-hidden bg-[#d8cec0] md:h-[500px]"
        >
          <div className="absolute inset-0 opacity-50">
            <div className="absolute left-[12%] top-[18%] h-px w-[76%] rotate-[7deg] bg-black/15" />
            <div className="absolute left-[8%] top-[48%] h-px w-[84%] -rotate-[9deg] bg-black/15" />
            <div className="absolute left-[18%] top-[72%] h-px w-[68%] rotate-[3deg] bg-black/15" />
            <div className="absolute left-[28%] top-[-10%] h-[120%] w-px rotate-[18deg] bg-black/15" />
            <div className="absolute left-[61%] top-[-10%] h-[120%] w-px -rotate-[12deg] bg-black/15" />
            <div className="absolute left-[80%] top-[-10%] h-[120%] w-px rotate-[24deg] bg-black/15" />
          </div>

          <div className="absolute left-[54%] top-[48%] -translate-x-1/2 -translate-y-1/2">
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#171513] text-[#f2ede4] shadow-xl">
              <MapPin size={20} strokeWidth={1.4} />

              <span className="absolute -bottom-7 whitespace-nowrap mono text-[8px] uppercase tracking-[0.16em] text-black/45">
                EMBER
              </span>
            </div>
          </div>

          <div className="absolute bottom-5 left-5 border border-black/10 bg-[#f2ede4]/90 px-4 py-3 backdrop-blur-sm">
            <p className="mono text-[8px] uppercase tracking-[0.16em] text-black/35">
              Old Quarter
            </p>

            <p className="mt-1 text-xs text-black/65">18 Ash Street</p>
          </div>

          <div className="absolute right-5 top-5 border border-black/10 bg-[#f2ede4]/90 px-4 py-3 backdrop-blur-sm">
            <p className="mono text-[8px] uppercase tracking-[0.16em] text-black/35">
              Location
            </p>

            <p className="mt-1 text-xs text-black/65">EMBER / 01</p>
          </div>
        </div>

        <p className="mt-5 text-[10px] leading-5 text-black/30">
          Location details shown here are part of the EMBER portfolio concept.
        </p>
      </div>
    </section>
  );
}
