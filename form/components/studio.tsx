export default function Studio() {
  return (
    <section id="studio" className="bg-[#f4f1eb]">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          {/* Intro */}
          <div>
            <p className="mb-8 text-[10px] font-bold uppercase tracking-[0.18em] text-black/45">
              06 / The Studio
            </p>

            <h2 className="max-w-xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.065em] sm:text-6xl md:text-7xl">
              Small
              <br />
              studio.
              <br />
              <span className="text-[#ff4d24]">Big intent.</span>
            </h2>
          </div>

          {/* Statement */}
          <div className="flex flex-col justify-between">
            <p className="max-w-2xl text-2xl font-medium leading-[1.15] tracking-[-0.035em] md:text-4xl">
              FORM is built around a simple idea: fewer layers, better thinking,
              stronger work.
            </p>

            <div className="mt-16 grid border-t border-black/15 pt-6 sm:grid-cols-2 sm:gap-10">
              <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-black/45">
                  Philosophy
                </p>
                <p className="max-w-sm text-sm leading-6 text-black/65">
                  Strategy and making happen together. Ideas are tested, shaped,
                  challenged, and refined through the process.
                </p>
              </div>

              <div className="mt-8 sm:mt-0">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-black/45">
                  Collaboration
                </p>
                <p className="max-w-sm text-sm leading-6 text-black/65">
                  We work closely with founders, teams, and ambitious projects
                  to turn a clear point of view into something people remember.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Studio composition */}
        <div className="mt-24 grid gap-3 md:grid-cols-12 md:gap-4">
          <div className="relative flex min-h-[320px] flex-col justify-between overflow-hidden bg-black p-7 text-white md:col-span-5 md:min-h-[430px] md:p-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
              FORM / 001
            </span>

            <div>
              <p className="text-7xl font-black uppercase leading-none tracking-[-0.07em] md:text-8xl">
                MAKE
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.14em] text-white/50">
                with intention
              </p>
            </div>

            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border-[28px] border-[#ff4d24]" />
          </div>

          <div className="relative min-h-[260px] overflow-hidden border border-black/15 bg-[#e7e2d9] p-7 md:col-span-3 md:min-h-[430px] md:p-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/45">
              MATERIAL
            </span>

            <div className="absolute inset-x-8 bottom-8">
              <div className="h-28 border border-black/20 bg-[#f4f1eb] p-5">
                <div className="h-2 w-16 bg-black" />
                <div className="mt-5 h-px w-full bg-black/15" />
                <div className="mt-3 h-px w-3/4 bg-black/15" />
                <div className="mt-3 h-px w-1/2 bg-black/15" />
              </div>
            </div>
          </div>

          <div className="flex min-h-[260px] flex-col justify-between bg-[#ff4d24] p-7 md:col-span-4 md:min-h-[430px] md:p-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/55">
              POINT OF VIEW
            </span>

            <div>
              <p className="text-3xl font-black uppercase leading-[0.95] tracking-[-0.05em] md:text-5xl">
                Distinct
                <br />
                by design.
              </p>

              <div className="mt-8 h-px w-full bg-black/20" />

              <p className="mt-4 max-w-xs text-xs font-bold uppercase leading-5 tracking-[0.08em] text-black/65">
                No templates. No noise. Just purposeful creative work.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-black/15 pt-5 text-[10px] font-bold uppercase tracking-[0.15em] text-black/45 sm:flex-row">
          <span>Independent creative studio</span>
          <span>Strategy / Design / Technology</span>
          <span>Portfolio concept</span>
        </div>
      </div>
    </section>
  );
}
