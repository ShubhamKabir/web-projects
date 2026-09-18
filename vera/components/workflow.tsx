"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  FileText,
  Layers3,
  Search,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Collect",
    description: "Bring reports, documents, and research into one workspace.",
  },
  {
    number: "02",
    title: "Extract",
    description: "Pull the information you need across every source.",
  },
  {
    number: "03",
    title: "Verify",
    description: "Trace important findings directly back to their evidence.",
  },
  {
    number: "04",
    title: "Analyze",
    description: "Compare findings and uncover patterns across sources.",
  },
  {
    number: "05",
    title: "Deliver",
    description: "Turn verified research into decision-ready work.",
  },
];

export default function Workflow() {
  const [activeStep, setActiveStep] = useState(2);

  const step = steps[activeStep];

  return (
    <section
      id="workflow"
      className="border-t border-black/10 bg-[#f8f7f3] py-28 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Intro */}
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <span className="mono text-[9px] uppercase tracking-[0.16em] text-black/35">
              The VERA workflow
            </span>
          </div>

          <div>
            <h2 className="serif-display max-w-3xl text-[clamp(2.8rem,5.5vw,5.5rem)] leading-[0.92] tracking-[-0.04em]">
              Research is a process,
              <br />
              <span className="text-[#3149a6]">not a prompt.</span>
            </h2>

            <p className="mt-7 max-w-xl text-[15px] leading-7 text-black/50">
              VERA turns scattered information into structured, traceable
              research through a workflow designed for work where accuracy
              matters.
            </p>
          </div>
        </div>

        {/* Workflow visual */}
        <div className="mt-20 overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.06)]">
          {/* Steps */}
          <div className="grid border-b border-black/10 md:grid-cols-5">
            {steps.map((item, index) => {
              const isActive = activeStep === index;

              return (
                <button
                  key={item.number}
                  onClick={() => setActiveStep(index)}
                  className={`group border-b border-black/8 px-5 py-5 text-left transition-colors md:border-b-0 md:border-r md:last:border-r-0 ${
                    isActive
                      ? "bg-[#171717] text-white"
                      : "hover:bg-black/[0.025]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`mono text-[9px] tracking-[0.12em] ${
                        isActive ? "text-white/45" : "text-black/30"
                      }`}
                    >
                      {item.number}
                    </span>

                    <ArrowRight
                      size={13}
                      className={`transition-transform ${
                        isActive
                          ? "translate-x-0 text-white/60"
                          : "text-black/20 group-hover:translate-x-0.5"
                      }`}
                    />
                  </div>

                  <div className="mt-4 text-[14px] font-semibold">
                    {item.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active step */}
          <div className="grid min-h-[410px] lg:grid-cols-[0.8fr_1.2fr]">
            {/* Description */}
            <div className="flex flex-col justify-between border-b border-black/10 p-7 sm:p-10 lg:border-b-0 lg:border-r">
              <div>
                <span className="mono text-[9px] uppercase tracking-[0.14em] text-black/30">
                  Step {step.number}
                </span>

                <h3 className="serif-display mt-5 text-4xl tracking-[-0.04em] sm:text-5xl">
                  {step.title}
                </h3>

                <p className="mt-5 max-w-sm text-[14px] leading-6 text-black/50">
                  {step.description}
                </p>
              </div>

              <div className="mt-12 flex items-center gap-2 text-[11px] font-medium text-black/45">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/[0.05]">
                  <Check size={12} />
                </span>
                Designed around verifiable research
              </div>
            </div>

            {/* Product visualization */}
            <div className="relative min-h-[320px] overflow-hidden bg-[#111214] p-6 sm:p-10">
              <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:48px_48px]" />

              <div className="relative h-full">
                {activeStep === 0 && <CollectVisual />}
                {activeStep === 1 && <ExtractVisual />}
                {activeStep === 2 && <VerifyVisual />}
                {activeStep === 3 && <AnalyzeVisual />}
                {activeStep === 4 && <DeliverVisual />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CollectVisual() {
  const files = [
    "Annual Report.pdf",
    "Market Review.pdf",
    "Company Filing.pdf",
  ];

  return (
    <div className="mx-auto flex h-full max-w-lg flex-col justify-center">
      <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
        <div className="mono text-[8px] uppercase tracking-[0.14em] text-white/30">
          Sources
        </div>

        <div className="mt-4 space-y-2">
          {files.map((file, index) => (
            <div
              key={file}
              className="flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.025] p-3"
            >
              <div className="flex items-center gap-3">
                <FileText size={15} className="text-white/40" />
                <span className="text-[11px] text-white/65">{file}</span>
              </div>

              <span className="mono text-[8px] text-emerald-400/70">
                {index === 0 ? "INDEXED" : "READY"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExtractVisual() {
  return (
    <div className="mx-auto flex h-full max-w-lg flex-col justify-center">
      <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
        <div className="flex items-center justify-between">
          <span className="mono text-[8px] uppercase tracking-[0.14em] text-white/30">
            Extraction
          </span>

          <span className="rounded-full bg-[#7186e5]/10 px-2 py-1 text-[8px] text-[#9eafff]">
            142 findings
          </span>
        </div>

        <div className="mt-5 space-y-3">
          {["Revenue", "Market growth", "Enterprise exposure"].map(
            (label, index) => (
              <div
                key={label}
                className="grid grid-cols-[1fr_auto] items-center border-b border-white/8 pb-3"
              >
                <span className="text-[10px] text-white/55">{label}</span>

                <span className="mono text-[9px] text-white/70">
                  {index === 0 ? "$82.4M" : index === 1 ? "+18.2%" : "64%"}
                </span>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

function VerifyVisual() {
  return (
    <div className="mx-auto flex h-full max-w-lg flex-col justify-center">
      <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
        <div className="flex items-center justify-between">
          <span className="mono text-[8px] uppercase tracking-[0.14em] text-white/30">
            Evidence trace
          </span>

          <span className="flex items-center gap-1.5 text-[8px] text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Verified
          </span>
        </div>

        <div className="mt-5 rounded-xl border border-white/8 bg-white/[0.025] p-4">
          <p className="text-[11px] leading-5 text-white/65">
            Revenue increased by{" "}
            <span className="rounded bg-[#7186e5]/15 px-1 text-[#a9b7ff]">
              18.2%
            </span>{" "}
            compared with the previous reporting period.
          </p>

          <div className="mt-5 flex items-center justify-between border-t border-white/8 pt-3">
            <span className="mono text-[8px] text-white/25">
              Annual Report.pdf · page 24
            </span>

            <span className="mono text-[8px] text-emerald-400/75">
              96% confidence
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalyzeVisual() {
  return (
    <div className="mx-auto flex h-full max-w-lg flex-col justify-center">
      <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
        <div className="flex items-center gap-2">
          <Sparkles size={13} className="text-[#8fa1ff]" />

          <span className="mono text-[8px] uppercase tracking-[0.14em] text-white/30">
            VERA analysis
          </span>
        </div>

        <div className="mt-5 text-[11px] leading-5 text-white/60">
          Compare the growth strategies across the analyzed companies.
        </div>

        <div className="mt-4 space-y-2">
          {[
            "18 sources analyzed",
            "7 patterns identified",
            "3 strategic differences",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-lg border border-white/8 px-3 py-2.5"
            >
              <Check size={10} className="text-emerald-400" />
              <span className="text-[9px] text-white/50">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DeliverVisual() {
  return (
    <div className="mx-auto flex h-full max-w-lg items-center justify-center">
      <div className="w-full rounded-2xl border border-white/10 bg-[#f7f6f2] p-6 text-[#171717] shadow-2xl">
        <div className="flex items-center justify-between border-b border-black/10 pb-4">
          <div>
            <div className="mono text-[7px] uppercase tracking-[0.15em] text-black/30">
              Research brief
            </div>
            <div className="mt-1 text-sm font-semibold">
              Global AI Market 2026
            </div>
          </div>

          <FileText size={16} className="text-black/30" />
        </div>

        <div className="mt-5 space-y-2">
          <div className="h-2 w-3/4 rounded bg-black/10" />
          <div className="h-2 w-full rounded bg-black/[0.06]" />
          <div className="h-2 w-5/6 rounded bg-black/[0.06]" />
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2">
          <div className="rounded-lg bg-black/[0.035] p-3">
            <div className="mono text-[7px] text-black/30">FINDINGS</div>
            <div className="mt-1 text-sm font-semibold">142</div>
          </div>

          <div className="rounded-lg bg-black/[0.035] p-3">
            <div className="mono text-[7px] text-black/30">VERIFIED</div>
            <div className="mt-1 text-sm font-semibold">96%</div>
          </div>

          <div className="rounded-lg bg-black/[0.035] p-3">
            <div className="mono text-[7px] text-black/30">SOURCES</div>
            <div className="mt-1 text-sm font-semibold">18</div>
          </div>
        </div>
      </div>
    </div>
  );
}
