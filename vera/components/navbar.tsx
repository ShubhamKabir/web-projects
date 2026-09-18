import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-black/10 bg-[#f8f7f3]/85 px-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-xl">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="VERA home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#171717] text-[11px] font-semibold tracking-[-0.03em] text-white">
            V
          </span>

          <span className="text-[15px] font-semibold tracking-[-0.02em]">
            VERA
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#workflow"
            className="text-[13px] text-black/60 transition-colors hover:text-black"
          >
            Product
          </Link>

          <Link
            href="#solutions"
            className="text-[13px] text-black/60 transition-colors hover:text-black"
          >
            Solutions
          </Link>

          <Link
            href="#pricing"
            className="text-[13px] text-black/60 transition-colors hover:text-black"
          >
            Pricing
          </Link>

          <Link
            href="#faq"
            className="text-[13px] text-black/60 transition-colors hover:text-black"
          >
            Resources
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="#start"
            className="hidden px-3 py-2 text-[13px] font-medium text-black/60 transition-colors hover:text-black sm:block"
          >
            Log in
          </Link>

          <Link
            href="#start"
            className="group flex items-center gap-1.5 rounded-full bg-[#3149a6] px-4 py-2.5 text-[12px] font-semibold text-white transition-all hover:bg-[#263a89]"
          >
            Start researching
            <ArrowUpRight
              size={14}
              strokeWidth={1.8}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}
