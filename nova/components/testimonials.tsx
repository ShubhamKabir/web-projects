import { ArrowUpRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "NOVA gives the team a shared picture of what's happening without another meeting to explain it.",
    name: "Maya Chen",
    role: "Product Lead",
    company: "Northstar",
  },
  {
    quote:
      "The biggest difference is how quickly we can go from a question to a decision. Everything we need is already there.",
    name: "Daniel Brooks",
    role: "Operations Director",
    company: "Frame",
  },
  {
    quote:
      "It feels less like another tool and more like a layer connecting the tools we already depend on.",
    name: "Priya Shah",
    role: "Head of Growth",
    company: "Orbit",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#0b0a0f] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Header */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#77727f]">
              <span className="h-px w-8 bg-[#c7f36b]" />
              From the people using it
            </div>

            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.055em] sm:text-5xl md:text-7xl">
              Less noise.
              <br />
              <span className="text-[#c7f36b]">More momentum.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[#77727f]">
            Illustrative customer perspectives created for the NOVA portfolio
            concept.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className={`relative flex min-h-[390px] flex-col justify-between rounded-[1.75rem] border p-7 md:p-9 ${
                index === 1
                  ? "border-[#8b5cf6]/40 bg-[#8b5cf6]/[0.08]"
                  : "border-white/10 bg-[#15131c]"
              }`}
            >
              <div>
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                    index === 1 ? "bg-[#c7f36b]" : "bg-white/[0.05]"
                  }`}
                >
                  <Quote
                    size={17}
                    className={
                      index === 1 ? "text-[#0b0a0f]" : "text-[#c7f36b]"
                    }
                  />
                </div>

                <blockquote className="mt-10 text-xl font-bold leading-[1.25] tracking-[-0.025em] text-white md:text-2xl">
                  “{testimonial.quote}”
                </blockquote>
              </div>

              <div className="border-t border-white/10 pt-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-bold text-white">
                      {testimonial.name}
                    </div>

                    <div className="mt-1 text-xs text-[#77727f]">
                      {testimonial.role} · {testimonial.company}
                    </div>
                  </div>

                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-black ${
                      index === 1
                        ? "bg-[#c7f36b] text-[#0b0a0f]"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    {testimonial.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom proof strip */}
        <div className="mt-5 grid border border-white/10 bg-[#15131c] sm:grid-cols-3">
          <div className="border-b border-white/10 p-6 sm:border-b-0 sm:border-r md:p-8">
            <div className="text-3xl font-black tracking-tight text-white">
              1 workspace
            </div>
            <div className="mt-2 text-xs text-[#77727f]">
              For projects, people, and context
            </div>
          </div>

          <div className="border-b border-white/10 p-6 sm:border-b-0 sm:border-r md:p-8">
            <div className="text-3xl font-black tracking-tight text-white">
              AI-native
            </div>
            <div className="mt-2 text-xs text-[#77727f]">
              Intelligence where the work happens
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="text-3xl font-black tracking-tight text-white">
              Built to connect
            </div>
            <div className="mt-2 text-xs text-[#77727f]">
              Designed around your existing stack
            </div>
          </div>
        </div>

        {/* Link */}
        <div className="mt-10 flex justify-end">
          <a
            href="#pricing"
            className="group flex items-center gap-2 text-sm font-bold text-white"
          >
            Explore plans
            <ArrowUpRight
              size={16}
              className="text-[#c7f36b] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
