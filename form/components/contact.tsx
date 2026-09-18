export default function Contact() {
  return (
    <section id="contact" className="bg-[#11110f] text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr] lg:gap-24">
          <div>
            <p className="mb-8 text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
              07 / Start a project
            </p>

            <h2 className="max-w-4xl text-6xl font-black uppercase leading-[0.84] tracking-[-0.07em] sm:text-7xl md:text-8xl lg:text-[9rem]">
              Have an
              <br />
              idea?
              <br />
              <span className="text-[#ff4d24]">Let's make it.</span>
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="max-w-lg text-xl leading-7 text-white/65 md:text-2xl md:leading-8">
              Tell us what you're building, where you're going, and what needs
              to change. We'll figure out the rest together.
            </p>

            <a
              href="mailto:hello@form.studio"
              className="group mt-10 inline-flex w-fit items-center gap-4 border-b border-[#ff4d24] pb-3 text-sm font-bold uppercase tracking-[0.1em] transition-colors hover:text-[#ff4d24]"
            >
              hello@form.studio
              <span className="text-[#ff4d24] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>

            <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/35">
                  Projects
                </p>
                <p className="mt-2 text-sm text-white/65">
                  Brand / Digital / Creative
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/35">
                  Availability
                </p>
                <p className="mt-2 text-sm text-white/65">Selected projects</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-white/10 pt-6">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <p className="max-w-2xl text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">
              Good work starts with
              <br />
              <span className="text-[#ff4d24]">a good question.</span>
            </p>

            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/35">
              FORM / 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
