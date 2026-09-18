export default function FinalCTA() {
  return (
    <section
      id="start"
      className="bg-[#171717] px-6 py-28 text-[#f8f7f3] md:px-10 md:py-36 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <p className="mono text-[11px] uppercase tracking-[0.22em] text-white/40">
            Start researching
          </p>

          <h2 className="serif-display mt-6 text-5xl leading-[0.9] tracking-[-0.045em] md:text-7xl lg:text-[88px]">
            Turn information
            <br />
            into decisions.
          </h2>

          <p className="mt-8 max-w-xl text-base leading-7 text-white/50 md:text-lg">
            A research workspace concept built to connect sources, evidence,
            analysis, and the final answer.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <a
            href="#pricing"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#f8f7f3] px-7 text-sm font-medium text-black transition-transform duration-200 hover:-translate-y-0.5"
          >
            Start with VERA
          </a>

          <a
            href="#workflow"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 px-7 text-sm font-medium text-white transition-colors duration-200 hover:bg-white/5"
          >
            Explore the workflow
          </a>
        </div>

        <div className="mt-20 border-t border-white/10 pt-6">
          <p className="mono text-[10px] uppercase tracking-[0.18em] text-white/30">
            Evidence-first research · Traceable insights · Structured output
          </p>
        </div>
      </div>
    </section>
  );
}
