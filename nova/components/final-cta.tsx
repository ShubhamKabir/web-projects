import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-[#0b0a0f] py-28 md:py-40"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8b5cf6]/15 blur-[130px]" />

      <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">
        <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#a5a1ae]">
          <Sparkles size={12} className="text-[#c7f36b]" />
          Ready when you are
        </div>

        <h2 className="mt-8 text-5xl font-black leading-[0.88] tracking-[-0.065em] sm:text-6xl md:text-8xl">
          Make work
          <br />
          <span className="text-[#c7f36b]">move.</span>
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-base leading-7 text-[#8f8996] md:text-lg">
          Bring your team together, connect the context, and turn everyday work
          into momentum with NOVA.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#pricing"
            className="group flex items-center gap-2 rounded-xl bg-[#c7f36b] px-6 py-3.5 text-sm font-bold text-[#0b0a0f] transition-transform hover:-translate-y-1"
          >
            Start building
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>

          <a
            href="#faq"
            className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/[0.07]"
          >
            Learn more
          </a>
        </div>

        <div className="mt-8 text-[10px] uppercase tracking-[0.2em] text-[#55515c]">
          No credit card required · 14-day trial
        </div>
      </div>
    </section>
  );
}
