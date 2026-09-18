"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is NOVA?",
    answer:
      "NOVA is an intelligent workspace concept that brings projects, tasks, conversations, and team context together in one place.",
  },
  {
    question: "Who is NOVA built for?",
    answer:
      "NOVA is designed for modern product, growth, engineering, operations, and leadership teams that need a clearer way to coordinate work.",
  },
  {
    question: "Does NOVA replace our existing tools?",
    answer:
      "No. The concept is designed to sit across the tools your team already uses, connecting important context rather than forcing you to replace everything.",
  },
  {
    question: "How does the AI work?",
    answer:
      "NOVA's AI is designed to work from the context inside your workspace. Teams can ask questions, summarize activity, surface blockers, and identify important decisions.",
  },
  {
    question: "Can we customize NOVA?",
    answer:
      "Yes. The concept includes customizable workflows, connected systems, permissions, and workspace views so teams can shape NOVA around the way they work.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "The portfolio concept currently shows a 14-day trial across the plans. Actual pricing and availability would depend on a future production version of the product.",
  },
  {
    question: "Is NOVA a real product?",
    answer:
      "NOVA is a fictional startup concept created as part of this portfolio project. Product capabilities, customer examples, and pricing shown on this page are illustrative.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#f5f3ee] py-24 text-[#0b0a0f] md:py-32"
    >
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        {/* Header */}
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#6f6977]">
              <span className="h-px w-8 bg-[#8b5cf6]" />
              FAQ
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.055em] sm:text-5xl md:text-6xl">
              Questions,
              <br />
              <span className="text-[#8b5cf6]">answered.</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-6 text-[#696470] md:text-base">
              Everything you need to understand the NOVA concept before getting
              started.
            </p>
          </div>
        </div>

        {/* FAQ list */}
        <div className="mt-16 border-t border-black/10">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div key={faq.question} className="border-b border-black/10">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-8 py-6 text-left md:py-7"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-5">
                    <span className="pt-1 font-mono text-[10px] tracking-[0.15em] text-[#9a949d]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-base font-bold tracking-[-0.01em] md:text-lg">
                      {faq.question}
                    </span>
                  </div>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#0b0a0f] text-white" : ""
                    }`}
                  >
                    <ChevronDown size={15} />
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-7 pl-10 text-sm leading-6 text-[#696470] md:pl-[3.15rem] md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact prompt */}
        <div className="mt-12 flex flex-col justify-between gap-5 rounded-2xl border border-black/10 bg-white p-6 sm:flex-row sm:items-center md:p-7">
          <div>
            <div className="text-sm font-bold">Still have a question?</div>
            <div className="mt-1 text-xs text-[#77727f]">
              We'd be happy to help you understand the concept.
            </div>
          </div>

          <a
            href="#cta"
            className="rounded-xl bg-[#0b0a0f] px-5 py-3 text-center text-xs font-bold text-white transition-transform hover:-translate-y-0.5"
          >
            Talk to NOVA
          </a>
        </div>
      </div>
    </section>
  );
}
