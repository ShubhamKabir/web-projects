import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#11110f] text-white">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="border-t border-white/10 py-12 md:py-16">
          <div className="grid gap-12 md:grid-cols-[1.4fr_0.6fr_0.8fr]">
            {/* Brand */}
            <div>
              <a
                href="#"
                className="group flex w-fit items-center gap-3 text-2xl font-black tracking-[-0.07em]"
              >
                <span className="flex h-10 w-10 items-center justify-center bg-[#ff4d24] text-sm text-black transition-transform group-hover:rotate-6">
                  F
                </span>
                FORM
              </a>

              <p className="mt-7 max-w-sm text-sm leading-6 text-white/45">
                Independent creative studio building brands, digital
                experiences, and ideas with intent.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.16em] text-white/30">
                Explore
              </p>

              <nav className="flex flex-col items-start gap-3">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-[#ff4d24]"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.16em] text-white/30">
                Get in touch
              </p>

              <a
                href="mailto:hello@form.studio"
                className="group flex w-fit items-center gap-2 text-sm text-white/65 transition-colors hover:text-[#ff4d24]"
              >
                hello@form.studio
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <div className="mt-7 flex gap-2">
                {["IN", "IG", "BE"].map((label) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center border border-white/10 text-[9px] font-bold text-white/40 transition-colors hover:border-[#ff4d24] hover:text-[#ff4d24]"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col justify-between gap-4 border-t border-white/10 py-6 text-[9px] font-bold uppercase tracking-[0.15em] text-white/25 sm:flex-row">
          <span>© 2026 FORM Studio</span>
          <span>Independent creative studio</span>
          <span>Portfolio concept — fictional studio</span>
        </div>
      </div>
    </footer>
  );
}
