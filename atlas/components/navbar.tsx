"use client";

import { Menu, Search, X } from "lucide-react";
import CartIndicator from "./cart-indicator";
import { useState } from "react";

const links = [
  { label: "Shop", href: "/shop" },
  { label: "New Arrivals", href: "/category/new-arrivals" },
  { label: "Apparel", href: "/category/apparel" },
  { label: "Accessories", href: "/category/accessories" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <nav className="flex h-20 items-center justify-between border-b border-black/10">
          <a href="/" className="text-xl font-black tracking-[-0.08em]">
            ATLAS
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] font-bold uppercase tracking-[0.12em] text-black/55 transition-colors hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <a
              href="/shop"
              aria-label="Browse products"
              className="flex h-10 w-10 items-center justify-center transition-colors hover:bg-black/5"
            >
              <Search size={17} strokeWidth={1.5} />
            </a>

            <CartIndicator />

            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="ml-1 flex h-10 w-10 items-center justify-center border border-black/10 md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="border-b border-black/10 bg-[#f5f3ee] px-2 py-3 md:hidden">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-black/10 px-3 py-4 text-[11px] font-bold uppercase tracking-[0.12em]"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
