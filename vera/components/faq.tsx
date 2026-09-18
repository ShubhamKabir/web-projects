"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is VERA?",
    answer:
      "VERA is a research workspace concept designed to help teams collect information, connect evidence, analyze findings, and turn research into structured reports.",
  },
  {
    question: "How does VERA keep answers connected to evidence?",
    answer:
      "VERA is designed around traceability. Findings can be connected back to the sources and evidence that support them, making it easier to review where an insight came from.",
  },
  {
    question: "What kinds of research can I bring into VERA?",
    answer:
      "The concept is designed for market research, competitive analysis, customer research, industry analysis, due diligence, and other evidence-heavy workflows.",
  },
  {
    question: "Can teams work together in VERA?",
    answer:
      "The Team and Enterprise concepts include collaborative workspaces, allowing research and findings to be organized around shared projects.",
  },
  {
    question: "Can I export reports and briefs?",
    answer:
      "Yes. The product concept includes structured report generation and document export so research can move from the workspace into a polished deliverable.",
  },
  {
    question: "How does VERA use AI?",
    answer:
      "AI is used as an analysis layer across collected research. It can help identify patterns, summarize evidence, connect related findings, and structure research into useful outputs.",
  },
  {
    question: "Is VERA a replacement for a researcher?",
    answer:
      "No. VERA is designed as a research and decision-support workspace. Human judgment remains important for interpreting evidence, validating conclusions, and making decisions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#f8f7f3] px-6 py-28 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-black/45">
              Questions
            </p>

            <h2 className="serif-display mt-5 max-w-md text-4xl leading-[0.95] tracking-[-0.035em] text-black md:text-5xl">
              Research without the black box.
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-6 text-black/55">
              A few answers about how the VERA product concept is designed to
              work.
            </p>
          </div>

          <div className="border-t border-black/10">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const panelId = `faq-panel-${index}`;

              return (
                <div key={faq.question} className="border-b border-black/10">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-8 py-6 text-left"
                  >
                    <span className="text-base font-medium tracking-[-0.01em] text-black md:text-lg">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown size={16} strokeWidth={1.5} />
                    </span>
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-7 pr-12 text-sm leading-6 text-black/55">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
