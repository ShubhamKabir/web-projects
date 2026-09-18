import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const principles = [
  {
    number: "01",
    title: "Less, better",
    text: "We focus on the pieces that earn their place. Every detail has a reason to exist.",
  },
  {
    number: "02",
    title: "Made to last",
    text: "Materials, construction, and proportions are considered for repeated everyday use.",
  },
  {
    number: "03",
    title: "Quiet character",
    text: "ATLAS avoids unnecessary decoration in favor of recognizable, understated design.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ee]">
      <Navbar />

      <section className="mx-auto max-w-[1440px] px-5 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40">
        <div className="grid gap-16 lg:grid-cols-[0.35fr_1fr] lg:gap-24">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/40">
            ATLAS / About
          </p>

          <div>
            <h1 className="max-w-6xl text-6xl font-black uppercase leading-[0.82] tracking-[-0.075em] md:text-8xl lg:text-[9rem]">
              Objects
              <br />
              <span className="text-[#6d7355]">with purpose.</span>
            </h1>

            <p className="mt-12 max-w-2xl text-xl leading-8 tracking-[-0.02em] text-black/65 md:text-2xl">
              ATLAS is a fictional independent lifestyle label built around the
              idea that the things we use every day can be simple, functional,
              and considered.
            </p>
          </div>
        </div>

        <div className="mt-24 grid gap-3 md:grid-cols-12 md:gap-4">
          <div className="relative min-h-[420px] overflow-hidden bg-[#d9d5ca] md:col-span-7">
            <div className="absolute left-[18%] top-[12%] h-[72%] w-[42%] rotate-[-7deg] bg-[#6d7355] shadow-2xl">
              <div className="absolute inset-x-0 top-[43%] h-px bg-black/20" />
              <div className="absolute left-1/2 top-[43%] h-28 w-px bg-black/20" />
            </div>

            <span className="absolute bottom-6 left-6 text-[9px] font-bold uppercase tracking-[0.14em] text-black/40">
              ATLAS / MATERIAL STUDY 01
            </span>
          </div>

          <div className="flex min-h-[420px] flex-col justify-between bg-[#171714] p-8 text-[#f5f3ee] md:col-span-5 md:p-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
              The approach
            </span>

            <div>
              <p className="text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-6xl">
                Form
                <br />
                follows
                <br />
                function.
              </p>

              <p className="mt-8 max-w-sm text-sm leading-6 text-white/45">
                We start with what an object needs to do, then remove everything
                that gets in the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ebe8df]">
        <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-32">
          <div className="grid gap-16 md:grid-cols-[0.35fr_1fr] md:gap-24">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/40">
              Principles
            </p>

            <div className="divide-y divide-black/15 border-y border-black/15">
              {principles.map((principle) => (
                <div
                  key={principle.number}
                  className="grid gap-6 py-8 md:grid-cols-[80px_0.7fr_1fr] md:items-start"
                >
                  <span className="text-sm font-bold text-[#6d7355]">
                    {principle.number}
                  </span>

                  <h2 className="text-2xl font-black uppercase tracking-[-0.04em]">
                    {principle.title}
                  </h2>

                  <p className="max-w-md text-sm leading-6 text-black/55">
                    {principle.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#6d7355] text-[#f5f3ee]">
        <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-32">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">
            2026 / ATLAS
          </p>

          <p className="mt-8 max-w-5xl text-4xl font-medium leading-[1.05] tracking-[-0.05em] md:text-6xl lg:text-7xl">
            Designed for the everyday. Considered beyond the everyday.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
