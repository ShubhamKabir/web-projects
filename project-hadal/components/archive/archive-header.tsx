"use client";

import Link from "next/link";
import { ArrowLeft, Database, Radio } from "lucide-react";

export default function ArchiveHeader() {
  return (
    <header className="border-b border-[#e6eef2]/10">
      <div className="mx-auto max-w-[1500px] px-6 py-5 md:px-10">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.25em] text-[#71838c] transition-colors hover:text-[#38e8d0]"
          >
            <ArrowLeft
              size={13}
              strokeWidth={1.5}
              className="transition-transform group-hover:-translate-x-1"
            />
            Return to expedition
          </Link>

          <div className="hidden items-center gap-8 font-mono text-[8px] uppercase tracking-[0.25em] text-[#71838c] md:flex">
            <span className="flex items-center gap-2">
              <Radio size={11} />
              Signal acquired
            </span>

            <span>Expedition 07</span>
          </div>
        </div>

        <div className="grid gap-10 py-20 md:grid-cols-[1fr_320px] md:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#38e8d0]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#38e8d0]">
                Project Hadal
              </span>
            </div>

            <h1 className="max-w-5xl text-6xl font-medium uppercase leading-[0.88] tracking-[-0.045em] md:text-8xl lg:text-[9rem]">
              Research
              <br />
              Archive.
            </h1>
          </div>

          <div className="border-l border-[#e6eef2]/10 pl-6">
            <div className="mb-5 flex items-center gap-2">
              <Database
                size={13}
                strokeWidth={1.3}
                className="text-[#38e8d0]"
              />

              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#71838c]">
                Archive status
              </span>
            </div>

            <p className="font-serif text-xl italic leading-tight text-[#b8c2c7]">
              Recorded observations from environments beyond the reach of
              sunlight.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-[#e6eef2]/10 pt-5 font-mono text-[8px] uppercase tracking-[0.18em]">
              <div>
                <span className="block text-[#71838c]">Records</span>
                <span className="mt-2 block text-[#e6eef2]">07</span>
              </div>

              <div>
                <span className="block text-[#71838c]">Max depth</span>
                <span className="mt-2 block text-[#e6eef2]">10,924 M</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
