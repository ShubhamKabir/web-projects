import Image from "next/image";

export default function Introduction() {
  return (
    <section
      id="introduction"
      className="bg-[#f2ede4] px-6 py-28 md:px-10 md:py-36 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div>
            <p className="mono text-[10px] uppercase tracking-[0.22em] text-[#746b61]">
              Our philosophy
            </p>

            <h2 className="serif-display mt-6 max-w-xl text-4xl leading-[0.95] tracking-[-0.04em] md:text-6xl">
              Food shaped by
              <br />
              fire & season.
            </h2>

            <p className="mt-8 max-w-md text-sm leading-7 text-[#746b61] md:text-base">
              EMBER is built around a simple idea: exceptional ingredients need
              very little between them and the flame.
            </p>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#746b61] md:text-base">
              Our kitchen follows the seasons, working with local produce, open
              fire, and techniques that let each ingredient speak for itself.
            </p>

            <div className="mt-10 flex items-center gap-5">
              <span className="h-px w-12 bg-[#9b6046]" />

              <span className="mono text-[9px] uppercase tracking-[0.18em] text-[#746b61]">
                Est. / The dining room
              </span>
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden bg-[#d7cec1]">
            <Image
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1400&q=85"
              alt="Warmly lit restaurant dining room"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />

            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute bottom-5 left-5 border border-white/30 bg-black/20 px-3 py-2 backdrop-blur-sm">
              <span className="mono text-[9px] uppercase tracking-[0.16em] text-white/80">
                The dining room
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
