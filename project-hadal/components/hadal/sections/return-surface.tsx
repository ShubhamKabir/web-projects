"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ReturnSurface() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden border-t border-[#e6eef2]/10 bg-[#010307] px-6 py-32 text-[#e6eef2]">
      {/* Subtle ascent line */}
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-[#38e8d0]/0 via-[#38e8d0]/10 to-[#38e8d0]/0" />

      <div className="relative z-10 w-full max-w-6xl">
        <div className="mb-20 flex items-center gap-4">
          <span className="h-px flex-1 bg-[#e6eef2]/10" />

          <span className="font-mono text-[8px] uppercase tracking-[0.35em] text-[#71838c]">
            Expedition complete
          </span>

          <span className="h-px flex-1 bg-[#e6eef2]/10" />
        </div>

        <div className="grid gap-16 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className="mb-6 font-mono text-[9px] uppercase tracking-[0.35em] text-[#38e8d0]">
              PROJECT HADAL / FINAL RECORD
            </p>

            <h2 className="max-w-4xl font-serif text-5xl italic leading-[0.9] text-[#e6eef2] md:text-8xl">
              The ocean is not empty.
            </h2>

            <p className="mt-8 max-w-xl font-mono text-[10px] uppercase leading-7 tracking-[0.18em] text-[#71838c]">
              We have only begun to look.
            </p>
          </div>

          <div className="border-l border-[#e6eef2]/10 pl-6 md:pl-10">
            <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#71838c]">
              FINAL DEPTH
            </p>

            <p className="mt-3 font-mono text-4xl tracking-[0.08em] text-[#e6eef2]">
              10,924 M
            </p>

            <div className="mt-8 space-y-4 border-t border-[#e6eef2]/10 pt-6">
              <div className="flex justify-between gap-6 font-mono text-[8px] uppercase tracking-[0.18em]">
                <span className="text-[#71838c]">Signal</span>
                <span className="text-[#38e8d0]">ACQUIRED</span>
              </div>

              <div className="flex justify-between gap-6 font-mono text-[8px] uppercase tracking-[0.18em]">
                <span className="text-[#71838c]">Archive</span>
                <span className="text-[#e6eef2]">UPDATED</span>
              </div>

              <div className="flex justify-between gap-6 font-mono text-[8px] uppercase tracking-[0.18em]">
                <span className="text-[#71838c]">Vehicle</span>
                <span className="text-[#e6eef2]">HADAL-07</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-4 border-t border-[#e6eef2]/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/archive"
            className="group inline-flex w-fit items-center gap-3 border border-[#e6eef2]/15 px-5 py-3 font-mono text-[9px] uppercase tracking-[0.25em] text-[#e6eef2] transition-colors hover:border-[#38e8d0]/60 hover:text-[#38e8d0]"
          >
            Explore archive
            <ArrowUpRight
              size={13}
              strokeWidth={1.5}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-fit border border-[#e6eef2]/10 px-5 py-3 font-mono text-[9px] uppercase tracking-[0.25em] text-[#71838c] transition-colors hover:border-[#38e8d0]/40 hover:text-[#38e8d0]"
          >
            Return to surface ↑
          </button>
        </div>
      </div>
    </section>
  );
}
