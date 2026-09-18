export default function Statement() {
  return (
    <section className="bg-[#171714] text-[#f5f3ee]">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-16 md:grid-cols-[0.35fr_1fr] md:gap-20">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
            02 / The idea
          </p>

          <div>
            <p className="max-w-5xl text-4xl font-medium leading-[1.05] tracking-[-0.05em] md:text-6xl lg:text-7xl">
              We believe everyday objects should be{" "}
              <span className="text-[#9b9d82]">
                useful, lasting, and quietly distinctive.
              </span>
            </p>

            <div className="mt-16 grid gap-8 border-t border-white/10 pt-6 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-black tracking-[-0.06em]">01</p>
                <p className="mt-3 text-xs leading-5 text-white/45">
                  Thoughtful materials
                </p>
              </div>

              <div>
                <p className="text-3xl font-black tracking-[-0.06em]">02</p>
                <p className="mt-3 text-xs leading-5 text-white/45">
                  Considered proportions
                </p>
              </div>

              <div>
                <p className="text-3xl font-black tracking-[-0.06em]">03</p>
                <p className="mt-3 text-xs leading-5 text-white/45">
                  Designed to endure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
