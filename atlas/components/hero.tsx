import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[#ebe8df] md:min-h-[850px]">
      <div className="mx-auto flex min-h-[760px] max-w-[1440px] flex-col justify-between px-5 pb-8 pt-32 md:min-h-[850px] md:px-8 md:pb-10 md:pt-36">
        <div className="relative z-10">
          <p className="mb-8 text-[10px] font-bold uppercase tracking-[0.18em] text-black/45">
            Autumn / Winter 2026
          </p>

          <h1 className="max-w-5xl text-[17vw] font-black uppercase leading-[0.76] tracking-[-0.09em] sm:text-[14vw] md:text-[12vw]">
            Everyday
            <br />
            <span className="ml-[8vw]">Objects.</span>
          </h1>
        </div>

        {/* Editorial product composition */}
        <div className="absolute right-[7%] top-[27%] hidden h-[390px] w-[290px] rotate-[-5deg] bg-[#f5f3ee] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.12)] md:block">
          <div className="relative h-full overflow-hidden bg-[#d6d1c5]">
            <div className="absolute left-1/2 top-[12%] h-[68%] w-[58%] -translate-x-1/2 bg-[#6d7355]">
              <div className="absolute inset-x-0 top-[42%] h-px bg-black/20" />
              <div className="absolute left-1/2 top-[42%] h-24 w-px bg-black/20" />
            </div>

            <div className="absolute bottom-5 left-5 text-[9px] font-bold uppercase tracking-[0.14em] text-black/50">
              ATLAS / 001
            </div>
          </div>
        </div>

        <div className="relative z-10 grid gap-8 border-t border-black/15 pt-5 md:grid-cols-3">
          <p className="max-w-xs text-xs leading-5 text-black/60">
            Considered essentials for a quieter, more intentional everyday.
          </p>

          <div className="hidden items-center justify-center md:flex">
            <ArrowDownRight size={22} strokeWidth={1.2} />
          </div>

          <div className="flex items-end justify-between md:justify-end md:gap-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-black/45">
              New collection
            </span>

            <a
              href="/shop"
              className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em]"
            >
              Shop collection
              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
