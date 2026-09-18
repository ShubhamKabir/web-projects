const productLinks = [
  ["Workflow", "#workflow"],
  ["Evidence Matrix", "#evidence"],
  ["Knowledge Canvas", "#canvas"],
  ["AI Analysis", "#analysis"],
  ["Reports", "#reports"],
  ["Pricing", "#pricing"],
];

const solutionLinks = [
  ["Strategy & Research", "#solutions"],
  ["Product & Operations", "#solutions"],
  ["Consulting & Advisory", "#solutions"],
];

const companyLinks = [
  ["Features", "#features"],
  ["Trust", "#trust"],
  ["FAQ", "#faq"],
];

export default function Footer() {
  return (
    <footer className="bg-[#111214] px-6 pb-8 pt-16 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="serif-display text-3xl tracking-[-0.04em]">
              VERA
            </a>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/40">
              Research, connected.
              <br />A product concept for evidence-driven work.
            </p>
          </div>

          <div>
            <p className="mono text-[10px] uppercase tracking-[0.18em] text-white/30">
              Product
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {productLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="w-fit text-sm text-white/55 transition-colors hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mono text-[10px] uppercase tracking-[0.18em] text-white/30">
              Solutions
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {solutionLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="w-fit text-sm text-white/55 transition-colors hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mono text-[10px] uppercase tracking-[0.18em] text-white/30">
              Explore
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {companyLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="w-fit text-sm text-white/55 transition-colors hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-7 text-[11px] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 VERA — Product concept</p>

          <p className="mono uppercase tracking-[0.14em]">
            Designed for evidence-driven work
          </p>
        </div>
      </div>
    </footer>
  );
}
