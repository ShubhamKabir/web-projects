import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type SpecimenCardProps = {
  id: string;
  code: string;
  title: string;
  type: string;
  depth: string;
  zone: string;
  accent: string;
};

export default function SpecimenCard({
  id,
  code,
  title,
  type,
  depth,
  zone,
  accent,
}: SpecimenCardProps) {
  return (
    <Link
      href={`/specimen/${id}`}
      className="group block border border-[#e6eef2]/10 transition-colors hover:border-[#38e8d0]/50"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#020a12]">
        <div
          className="absolute inset-[12%] opacity-30 transition-all duration-700 group-hover:scale-105 group-hover:opacity-50"
          style={{
            background: `radial-gradient(circle, ${accent} 0%, transparent 68%)`,
          }}
        />

        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-1/2 top-0 h-full w-px bg-[#e6eef2]/10" />
          <div className="absolute left-0 top-1/2 h-px w-full bg-[#e6eef2]/10" />
        </div>

        <div className="absolute left-5 top-5 font-mono text-[8px] uppercase tracking-[0.2em] text-[#71838c]">
          {code}
        </div>

        <div className="absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center border border-[#e6eef2]/15 transition-colors group-hover:border-[#38e8d0] group-hover:text-[#38e8d0]">
          <ArrowUpRight size={14} strokeWidth={1.3} />
        </div>

        <div className="absolute bottom-5 left-5 font-mono text-[8px] uppercase tracking-[0.2em] text-[#38e8d0]">
          {zone}
        </div>
      </div>

      <div className="grid grid-cols-[1fr_auto] gap-5 border-t border-[#e6eef2]/10 p-5">
        <div>
          <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#71838c]">
            {type}
          </p>

          <h2 className="mt-2 font-serif text-2xl italic text-[#e6eef2]">
            {title}
          </h2>
        </div>

        <div className="text-right font-mono text-[8px] uppercase tracking-[0.18em]">
          <span className="block text-[#71838c]">Depth</span>
          <span className="mt-2 block text-[#e6eef2]">{depth}</span>
        </div>
      </div>
    </Link>
  );
}
