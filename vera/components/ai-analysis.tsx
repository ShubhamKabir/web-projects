"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  FileText,
  Sparkles,
} from "lucide-react";

const questions = [
  {
    question: "What is driving growth across the market?",
    answer:
      "Three factors appear consistently across the analyzed sources: enterprise adoption, infrastructure investment, and improving model efficiency.",
    findings: [
      ["Enterprise adoption", "+24.6%"],
      ["Infrastructure investment", "+18.9%"],
      ["Model efficiency", "+13.4%"],
    ],
    sources: ["01", "04", "09"],
  },
  {
    question: "Which segment is expanding fastest?",
    answer:
      "Enterprise demand shows the strongest expansion across the available sources, with growth appearing consistently across multiple reports.",
    findings: [
      ["Enterprise demand", "+24.6%"],
      ["Cloud platforms", "+19.8%"],
      ["Consumer segment", "+11.2%"],
    ],
    sources: ["04", "09", "12"],
  },
  {
    question: "What evidence supports the growth trend?",
    answer:
      "The growth trend is supported by multiple independent sources, including company filings, industry research, and annual reports.",
    findings: [
      ["Sources analyzed", "18"],
      ["Findings verified", "96%"],
      ["Evidence matches", "142"],
    ],
    sources: ["01", "04", "12"],
  },
];

export default function AIAnalysis() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [analyzing, setAnalyzing] = useState(false);

  const current = questions[activeQuestion];

  function handleAnalyze() {
    setAnalyzing(true);

    window.setTimeout(() => {
      setAnalyzing(false);
    }, 900);
  }

  return (
    <section
      id="analysis"
      className="border-t border-black/10 bg-[#f8f7f3] py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Intro */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <span className="mono text-[9px] uppercase tracking-[0.16em] text-black/35">
              AI analysis
            </span>
          </div>

          <div>
            <h2 className="serif-display max-w-4xl text-[clamp(2.8rem,5.5vw,5.5rem)] leading-[0.92] tracking-[-0.045em]">
              Ask better questions.
              <br />
              <span className="text-[#3149a6]">Understand what matters.</span>
            </h2>

            <p className="mt-7 max-w-xl text-[15px] leading-7 text-black/50">
              Ask VERA questions about your research and get concise answers
              grounded in the evidence you've collected.
            </p>
          </div>
        </div>

        {/* Analysis workspace */}
        <div className="mt-20 overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-[0_30px_90px_rgba(0,0,0,0.07)]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-black/10 px-5 py-4 sm:px-6">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#171717]">
                <Sparkles size={13} className="text-white" />
              </span>

              <div>
                <div className="text-[11px] font-semibold">VERA Analysis</div>
                <div className="mono mt-0.5 text-[7px] uppercase tracking-[0.12em] text-black/25">
                  Grounded intelligence
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="hidden items-center gap-1.5 text-[8px] text-black/35 sm:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                18 sources available
              </span>

              <button
                type="button"
                onClick={handleAnalyze}
                className="flex items-center gap-1.5 rounded-lg bg-[#171717] px-3.5 py-2.5 text-[9px] font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                {analyzing ? "Analyzing..." : "Analyze"}
                <ArrowUpRight size={11} />
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-[0.7fr_1.3fr]">
            {/* Questions */}
            <div className="border-b border-black/10 p-5 sm:p-7 lg:border-b-0 lg:border-r">
              <div className="mono text-[8px] uppercase tracking-[0.14em] text-black/25">
                Suggested questions
              </div>

              <div className="mt-5 space-y-2">
                {questions.map((item, index) => {
                  const active = activeQuestion === index;

                  return (
                    <button
                      key={item.question}
                      type="button"
                      onClick={() => setActiveQuestion(index)}
                      className={`group flex w-full items-start justify-between rounded-xl border p-4 text-left transition-all ${
                        active
                          ? "border-black/10 bg-[#f3f2ee]"
                          : "border-transparent hover:border-black/8 hover:bg-black/[0.02]"
                      }`}
                    >
                      <span
                        className={`pr-4 text-[11px] leading-5 ${
                          active ? "font-medium text-black/75" : "text-black/45"
                        }`}
                      >
                        {item.question}
                      </span>

                      <ChevronRight
                        size={13}
                        className={`mt-0.5 shrink-0 ${
                          active ? "text-black/50" : "text-black/20"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 border-t border-black/8 pt-6">
                <div className="mono text-[8px] uppercase tracking-[0.14em] text-black/25">
                  Your question
                </div>

                <div className="mt-3 rounded-xl border border-black/10 bg-black/[0.018] p-3.5">
                  <div className="text-[10px] text-black/30">
                    Ask anything about this research...
                  </div>

                  <div className="mt-3 flex justify-end">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-black/5">
                      <ArrowUpRight size={12} className="text-black/30" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Answer */}
            <div className="relative overflow-hidden bg-[#111214] p-6 text-white sm:p-8">
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 80% 10%, rgba(113,134,229,0.16), transparent 28%), linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
                  backgroundSize: "auto, 48px 48px, 48px 48px",
                }}
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="mono text-[8px] uppercase tracking-[0.14em] text-white/25">
                    VERA response
                  </div>

                  <div className="flex items-center gap-1.5 text-[8px] text-emerald-400">
                    <Check size={10} />
                    Grounded in evidence
                  </div>
                </div>

                <div className="mt-8 max-w-2xl">
                  <div className="text-[11px] text-white/35">Question</div>

                  <h3 className="mt-2 text-xl font-medium leading-8 tracking-[-0.025em] text-white/90 sm:text-2xl">
                    {current.question}
                  </h3>

                  <p
                    className={`mt-5 max-w-xl text-[12px] leading-6 text-white/50 transition-opacity ${
                      analyzing ? "opacity-30" : "opacity-100"
                    }`}
                  >
                    {current.answer}
                  </p>
                </div>

                {/* Findings */}
                <div className="mt-9 grid gap-2 sm:grid-cols-3">
                  {current.findings.map(([label, value], index) => (
                    <div
                      key={label}
                      className="rounded-xl border border-white/8 bg-white/[0.035] p-4"
                    >
                      <div className="mono text-[7px] uppercase tracking-[0.12em] text-white/20">
                        0{index + 1}
                      </div>

                      <div className="mt-5 text-[10px] leading-4 text-white/45">
                        {label}
                      </div>

                      <div className="mt-2 text-sm font-medium text-white/75">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Sources */}
                <div className="mt-8 border-t border-white/8 pt-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2">
                      <FileText size={12} className="text-white/25" />

                      <span className="mono text-[8px] uppercase tracking-[0.12em] text-white/25">
                        Supporting sources
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {current.sources.map((source) => (
                        <button
                          key={source}
                          type="button"
                          className="rounded-md border border-white/10 px-2.5 py-1.5 text-[8px] text-[#9eafff] transition-colors hover:bg-white/5"
                        >
                          [{source}]
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col gap-2 border-t border-black/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <span className="text-[9px] text-black/30">
              Answers remain connected to the evidence used to produce them.
            </span>

            <span className="mono text-[7px] uppercase tracking-[0.12em] text-black/20">
              Analysis / grounded response
            </span>
          </div>
        </div>

        {/* Small supporting line */}
        <div className="mt-10 flex items-center gap-3">
          <span className="h-px w-8 bg-black/15" />
          <span className="text-[10px] text-black/30">
            From question to evidence-backed answer.
          </span>
        </div>
      </div>
    </section>
  );
}
