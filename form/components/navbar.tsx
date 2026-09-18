"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Studio", href: "#studio" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-[1400px] px-5 pt-5 md:px-8">
        <nav className="flex items-center justify-between">
          <a
            href="/"
            className="group flex items-center gap-3 text-lg font-black tracking-[-0.06em]"
          >
            <span className="flex h-9 w-9 items-center justify-center bg-[#ff4d24] text-sm text-black transition-transform group-hover:rotate-6">
              F
            </span>
            FORM
          </a>

          <div className="hidden items-center gap-9 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-bold uppercase tracking-[0.12em] text-black/60 transition-colors hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="group hidden items-center gap-2 bg-black px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white transition-transform hover:-translate-y-0.5 md:flex"
          >
            Start a project
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center border border-black/15 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </nav>

        {open && (
          <div className="mt-4 border border-black/10 bg-[#f4f1eb] p-4 md:hidden">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-black/10 py-4 text-xs font-bold uppercase tracking-[0.12em]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 block bg-black px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.08em] text-white"
            >
              Start a project
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
