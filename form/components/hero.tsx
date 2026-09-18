import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f4f1eb] text-[#11110f]">
      <div className="mx-auto flex min-h-screen max-w-[1400px] flex-col px-5 pb-10 pt-32 md:px-8 md:pt-40">
        <div className="flex flex-1 flex-col justify-center">
          <div className="mb-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-black/50">
            <span className="h-2 w-2 bg-[#ff4d24]" />
            Independent creative studio
          </div>

          <h1 className="max-w-[1250px] text-[18vw] font-black leading-[0.76] tracking-[-0.09em] sm:text-[15vw] md:text-[13vw]">
            WE
            <br />
            <span className="ml-[8vw] text-[#ff4d24]">MAKE</span>
            <br />
            <span className="ml-[2vw]">THINGS.</span>
          </h1>

          <div className="mt-12 grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-end">
            <p className="max-w-xl text-lg font-medium leading-7 tracking-[-0.02em] md:text-xl">
              FORM is a creative studio building brands, websites, and digital
              experiences for ambitious ideas.
            </p>

            <div className="flex items-end justify-between gap-6 md:justify-end">
              <div className="max-w-xs text-xs leading-5 text-black/50">
                Strategy
                <br />
                Identity
                <br />
                Digital
                <br />
                Experience
              </div>

              <a
                href="#work"
                className="group flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform hover:-translate-y-1"
                aria-label="View selected work"
              >
                <ArrowDown
                  size={20}
                  className="transition-transform group-hover:translate-y-1"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-14 flex items-center justify-between border-t border-black/15 pt-5 text-[9px] font-bold uppercase tracking-[0.2em] text-black/45">
          <span>Based anywhere / working everywhere</span>

          <span className="hidden sm:block">Scroll to explore</span>

          <a
            href="#contact"
            className="group flex items-center gap-1 text-black"
          >
            Let's talk
            <ArrowUpRight
              size={11}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>

      {/* Decorative shape */}
      <div className="pointer-events-none absolute -bottom-24 -right-24 hidden h-72 w-72 rounded-full border-[40px] border-[#ff4d24] md:block" />
    </section>
  );
}
