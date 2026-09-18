import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "For small teams getting organized.",
    price: "$12",
    suffix: "/ user / month",
    features: [
      "Up to 10 team members",
      "Unlimited projects",
      "Connected workspace",
      "AI summaries",
      "Basic insights",
    ],
    featured: false,
  },
  {
    name: "Growth",
    description: "For teams ready to move faster.",
    price: "$24",
    suffix: "/ user / month",
    features: [
      "Everything in Starter",
      "Advanced AI workflows",
      "Team insights",
      "Custom workflows",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Scale",
    description: "For larger teams with complex workflows.",
    price: "Custom",
    suffix: "",
    features: [
      "Everything in Growth",
      "Advanced permissions",
      "Enterprise integrations",
      "Dedicated support",
      "Custom onboarding",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#f5f3ee] py-24 text-[#0b0a0f] md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#6f6977]">
            <span className="h-px w-8 bg-[#8b5cf6]" />
            Simple pricing
            <span className="h-px w-8 bg-[#8b5cf6]" />
          </div>

          <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.055em] sm:text-5xl md:text-7xl">
            Start small.
            <br />
            <span className="text-[#8b5cf6]">Scale when ready.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-[#696470] md:text-lg">
            Flexible plans for teams at different stages. No unnecessary
            complexity, just the workspace you need.
          </p>

          <div className="mt-7 inline-flex rounded-full border border-black/10 bg-white p-1">
            <span className="rounded-full bg-[#0b0a0f] px-4 py-2 text-xs font-bold text-white">
              Monthly
            </span>
            <span className="px-4 py-2 text-xs font-semibold text-[#77727f]">
              Yearly · Save 20%
            </span>
          </div>
        </div>

        {/* Plans */}
        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex min-h-[570px] flex-col rounded-[1.75rem] border p-7 md:p-9 ${
                plan.featured
                  ? "border-[#8b5cf6] bg-[#0b0a0f] text-white shadow-2xl shadow-[#8b5cf6]/10"
                  : "border-black/10 bg-white"
              }`}
            >
              {plan.featured && (
                <div className="absolute right-7 top-7 rounded-full bg-[#c7f36b] px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-[#0b0a0f]">
                  Most popular
                </div>
              )}

              <div>
                <div
                  className={`text-xs font-bold uppercase tracking-[0.18em] ${
                    plan.featured ? "text-[#c7f36b]" : "text-[#8b5cf6]"
                  }`}
                >
                  {plan.name}
                </div>

                <p
                  className={`mt-3 max-w-xs text-sm leading-6 ${
                    plan.featured ? "text-[#96919c]" : "text-[#77727f]"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div
                className="mt-10 border-b pb-8"
                style={{
                  borderColor: plan.featured
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(0,0,0,0.1)",
                }}
              >
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-black tracking-[-0.05em]">
                    {plan.price}
                  </span>

                  {plan.suffix && (
                    <span
                      className={`pb-1 text-xs ${
                        plan.featured ? "text-[#77727f]" : "text-[#88818c]"
                      }`}
                    >
                      {plan.suffix}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-8 flex-1">
                <div
                  className={`mb-5 text-[10px] font-bold uppercase tracking-[0.2em] ${
                    plan.featured ? "text-[#77727f]" : "text-[#88818c]"
                  }`}
                >
                  Includes
                </div>

                <div className="space-y-4">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm"
                    >
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          plan.featured
                            ? "bg-[#c7f36b] text-[#0b0a0f]"
                            : "bg-[#0b0a0f] text-[#c7f36b]"
                        }`}
                      >
                        <Check size={11} strokeWidth={3} />
                      </span>

                      <span
                        className={
                          plan.featured ? "text-[#d0ccd4]" : "text-[#514d56]"
                        }
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#cta"
                className={`group mt-8 flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition-transform hover:-translate-y-0.5 ${
                  plan.featured
                    ? "bg-[#c7f36b] text-[#0b0a0f]"
                    : "bg-[#0b0a0f] text-white"
                }`}
              >
                {plan.name === "Scale" ? "Talk to us" : "Get started"}
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-black/10 pt-6 text-xs text-[#77727f] sm:flex-row">
          <span>All plans include a 14-day trial.</span>
          <span>No credit card required.</span>
        </div>

        <p className="mt-5 text-center text-[10px] uppercase tracking-[0.15em] text-[#9a949d]">
          Illustrative pricing for the NOVA portfolio concept.
        </p>
      </div>
    </section>
  );
}
