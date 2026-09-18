import { ArrowUpRight } from "lucide-react";

const columns = [
  {
    title: "Product",
    links: [
      ["Overview", "#product"],
      ["How it works", "#how-it-works"],
      ["Features", "#features"],
      ["Pricing", "#pricing"],
    ],
  },
  {
    title: "Company",
    links: [
      ["Use cases", "#use-cases"],
      ["Why NOVA", "#why-nova"],
      ["Testimonials", "#testimonials"],
      ["FAQ", "#faq"],
    ],
  },
  {
    title: "Explore",
    links: [
      ["Get started", "#cta"],
      ["Contact", "#cta"],
      ["Sign in", "#pricing"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0a0f] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        {/* Top */}
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <a
              href="/"
              className="flex w-fit items-center gap-2 text-xl font-black tracking-[-0.04em]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#c7f36b] text-sm font-black text-[#0b0a0f]">
                N
              </span>
              NOVA
            </a>

            <p className="mt-6 max-w-sm text-sm leading-6 text-[#77727f]">
              An intelligent workspace concept for teams that want less
              coordination overhead and more momentum.
            </p>

            <div className="mt-7 flex items-center gap-2">
              {["GH", "IN", "X", "IG"].map((label) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-[10px] font-bold text-[#77727f] transition-colors hover:border-white/20 hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-3 gap-6">
            {columns.map((column) => (
              <div key={column.title}>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#77727f]">
                  {column.title}
                </div>

                <div className="mt-5 space-y-3">
                  {column.links.map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      className="block text-sm text-[#aaa5ae] transition-colors hover:text-white"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col justify-between gap-5 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.15em] text-[#55515c] sm:flex-row sm:items-center">
          <span>© 2026 NOVA. Product concept.</span>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="transition-colors hover:text-[#a5a1ae]">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-[#a5a1ae]">
              Terms
            </a>
            <a
              href="#"
              className="flex items-center gap-1 transition-colors hover:text-[#a5a1ae]"
            >
              Back to top
              <ArrowUpRight size={11} />
            </a>
          </div>
        </div>

        {/* Portfolio note */}
        <div className="mt-8 text-center text-[9px] uppercase tracking-[0.18em] text-[#3f3b44]">
          Fictional startup concept · Created for portfolio demonstration
        </div>
      </div>
    </footer>
  );
}
