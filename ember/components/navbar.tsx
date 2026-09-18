import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit", href: "#visit" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between border border-white/15 bg-[#171513]/75 px-5 text-[#f2ede4] shadow-[0_10px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="EMBER home"
        >
          <span className="flex h-8 w-8 items-center justify-center border border-white/20 text-[11px] font-semibold">
            E
          </span>

          <span className="serif-display text-xl tracking-[-0.03em]">
            EMBER
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[12px] uppercase tracking-[0.12em] text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="#reservations"
          className="group flex items-center gap-2 border border-white/20 px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.12em] transition-colors hover:bg-white hover:text-[#171513]"
        >
          Reserve
          <ArrowUpRight
            size={14}
            strokeWidth={1.5}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </nav>
    </header>
  );
}
