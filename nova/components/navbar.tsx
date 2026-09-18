"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Use cases", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-5 pt-4 md:px-8">
        <nav className="flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-[#0b0a0f]/85 px-5 backdrop-blur-xl md:px-6">
          <a
            href="/"
            className="flex items-center gap-2 text-lg font-black tracking-[-0.04em]"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#c7f36b] text-sm font-black text-[#0b0a0f]">
              N
            </span>
            NOVA
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[#a5a1ae] transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#pricing"
              className="px-3 py-2 text-sm font-medium text-[#a5a1ae] transition-colors hover:text-white"
            >
              Sign in
            </a>

            <a
              href="#cta"
              className="group flex items-center gap-2 rounded-xl bg-[#c7f36b] px-4 py-2.5 text-sm font-bold text-[#0b0a0f] transition-transform hover:-translate-y-0.5"
            >
              Get started
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {open && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-[#15131c] p-4 md:hidden">
            <div className="flex flex-col">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/5 px-3 py-4 text-sm text-[#a5a1ae] last:border-0 hover:text-white"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-xl bg-[#c7f36b] px-4 py-3 text-center text-sm font-bold text-[#0b0a0f]"
              >
                Get started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
