import { ArrowUpRight } from "lucide-react";

const navigation = [
  { label: "Shop", href: "/shop" },
  { label: "New Arrivals", href: "/category/new-arrivals" },
  { label: "Apparel", href: "/category/apparel" },
  { label: "Accessories", href: "/category/accessories" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
];

export default function Footer() {
  return (
    <footer className="bg-[#171714] text-[#f5f3ee]">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <div className="grid gap-14 py-20 md:grid-cols-[1.3fr_0.7fr_0.8fr] md:py-24">
          <div>
            <a href="/" className="text-3xl font-black tracking-[-0.08em]">
              ATLAS
            </a>

            <p className="mt-7 max-w-sm text-sm leading-6 text-white/40">
              Considered everyday objects designed around simplicity, function,
              and longevity.
            </p>

            <p className="mt-8 text-[9px] font-bold uppercase tracking-[0.15em] text-white/25">
              Independent lifestyle label / Portfolio concept
            </p>
          </div>

          <div>
            <p className="mb-6 text-[9px] font-bold uppercase tracking-[0.17em] text-white/30">
              Explore
            </p>

            <nav className="flex flex-col items-start gap-3">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-white/55 transition-colors hover:text-[#f5f3ee]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-6 text-[9px] font-bold uppercase tracking-[0.17em] text-white/30">
              Contact
            </p>

            <a
              href="mailto:hello@atlas-object.com"
              className="group flex w-fit items-center gap-2 text-sm text-white/55 transition-colors hover:text-[#f5f3ee]"
            >
              hello@atlas-object.com
              <ArrowUpRight
                size={14}
                strokeWidth={1.4}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <div className="mt-8 flex gap-2">
              {["IG", "PIN", "X"].map((label) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 min-w-9 items-center justify-center border border-white/10 px-2 text-[8px] font-bold text-white/35 transition-colors hover:border-white/30 hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-white/10 py-6 text-[9px] font-bold uppercase tracking-[0.14em] text-white/25 sm:flex-row">
          <span>© 2026 ATLAS</span>
          <span>Everyday objects / Considered design</span>
          <span>Portfolio concept</span>
        </div>
      </div>
    </footer>
  );
}
