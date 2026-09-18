import { ArrowRight, Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Explorer",
    description: "For individuals doing focused research.",
    price: "$19",
    period: "/ month",
    features: [
      "5 research projects",
      "100 sources per project",
      "Evidence Matrix",
      "AI Analysis",
      "PDF & document export",
    ],
  },
  {
    name: "Team",
    description: "For teams working together on research.",
    price: "$49",
    period: "/ user / month",
    featured: true,
    features: [
      "Unlimited research projects",
      "500 sources per project",
      "Knowledge Canvas",
      "Collaborative workspaces",
      "Advanced report generation",
      "Priority processing",
    ],
  },
  {
    name: "Enterprise",
    description: "For organizations with larger research needs.",
    price: "Custom",
    period: "",
    features: [
      "Unlimited sources",
      "Advanced permissions",
      "Dedicated workspaces",
      "SSO & security controls",
      "Custom data policies",
      "Dedicated support",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="border-t border-black/10 bg-[#ebeae5] py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <span className="mono text-[9px] uppercase tracking-[0.16em] text-black/35">
              Pricing
            </span>
          </div>

          <div>
            <h2 className="serif-display max-w-4xl text-[clamp(2.8rem,5.5vw,5.5rem)] leading-[0.92] tracking-[-0.045em]">
              Start with the way
              <br />
              <span className="text-[#3149a6]">you research.</span>
            </h2>

            <p className="mt-7 max-w-xl text-[15px] leading-7 text-black/50">
              Flexible plans for individual researchers, growing teams, and
              organizations working with larger volumes of information.
            </p>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="mt-20 grid gap-3 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex min-h-[500px] flex-col rounded-[22px] border p-6 sm:p-7 ${
                plan.featured
                  ? "border-[#3149a6]/25 bg-[#171717] text-white shadow-[0_25px_70px_rgba(0,0,0,0.12)]"
                  : "border-black/10 bg-white"
              }`}
            >
              {plan.featured && (
                <div className="absolute right-5 top-5 flex items-center gap-1.5 rounded-full border border-[#7186e5]/20 bg-[#7186e5]/10 px-2.5 py-1.5">
                  <Sparkles size={9} className="text-[#9eafff]" />
                  <span className="mono text-[7px] uppercase tracking-[0.12em] text-[#9eafff]">
                    Most flexible
                  </span>
                </div>
              )}

              <div>
                <div
                  className={`mono text-[8px] uppercase tracking-[0.14em] ${
                    plan.featured ? "text-white/25" : "text-black/25"
                  }`}
                >
                  {plan.name}
                </div>

                <p
                  className={`mt-4 max-w-[220px] text-[11px] leading-5 ${
                    plan.featured ? "text-white/40" : "text-black/40"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="mt-12">
                <div className="flex items-end gap-1">
                  <span
                    className={`serif-display text-4xl tracking-[-0.04em] ${
                      plan.featured ? "text-white/90" : "text-black/80"
                    }`}
                  >
                    {plan.price}
                  </span>

                  {plan.period && (
                    <span
                      className={`mb-1 text-[9px] ${
                        plan.featured ? "text-white/25" : "text-black/25"
                      }`}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <div
                className={`my-8 h-px ${
                  plan.featured ? "bg-white/8" : "bg-black/8"
                }`}
              />

              <div className="space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2.5">
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full ${
                        plan.featured ? "bg-white/8" : "bg-black/[0.035]"
                      }`}
                    >
                      <Check
                        size={10}
                        className={
                          plan.featured ? "text-white/60" : "text-black/45"
                        }
                      />
                    </span>

                    <span
                      className={`text-[10px] ${
                        plan.featured ? "text-white/50" : "text-black/45"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-10">
                <button
                  type="button"
                  className={`group flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-[10px] font-semibold transition-transform hover:-translate-y-0.5 ${
                    plan.featured
                      ? "bg-white text-black"
                      : "bg-[#171717] text-white"
                  }`}
                >
                  {plan.name === "Enterprise"
                    ? "Talk to our team"
                    : "Start free"}

                  <ArrowRight
                    size={12}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Fine print */}
        <div className="mt-8 flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <span className="text-[9px] text-black/25">
            Illustrative plans for the VERA product concept.
          </span>

          <span className="mono text-[7px] uppercase tracking-[0.12em] text-black/20">
            Pricing / 01
          </span>
        </div>
      </div>
    </section>
  );
}
