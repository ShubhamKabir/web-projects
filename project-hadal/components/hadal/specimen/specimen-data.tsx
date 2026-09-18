"use client";

import { useState } from "react";

const observations = [
  {
    label: "MORPHOLOGY",
    value: "Segmented external structure",
  },
  {
    label: "EST. LENGTH",
    value: "18.4 cm",
  },
  {
    label: "MOTION",
    value: "Slow / undulatory",
  },
  {
    label: "LUMINESCENCE",
    value: "Active",
  },
  {
    label: "HABITAT",
    value: "Hydrothermal field",
  },
  {
    label: "DEPTH",
    value: "4,218 m",
  },
];

export default function SpecimenData() {
  const [activeTab, setActiveTab] = useState<
    "OBSERVATION" | "SIGNAL" | "CLASSIFICATION"
  >("OBSERVATION");

  return (
    <div className="pointer-events-auto w-full max-w-sm border border-[#e6eef2]/15 bg-[#010307]/80 backdrop-blur-sm">
      <div className="flex border-b border-[#e6eef2]/10">
        {["OBSERVATION", "SIGNAL", "CLASSIFICATION"].map((tab) => (
          <button
            key={tab}
            onClick={() =>
              setActiveTab(tab as "OBSERVATION" | "SIGNAL" | "CLASSIFICATION")
            }
            className={`flex-1 px-3 py-3 font-mono text-[8px] tracking-[0.18em] transition-colors ${
              activeTab === tab
                ? "bg-[#38e8d0] text-[#010307]"
                : "text-[#71838c] hover:text-[#e6eef2]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-5">
        {activeTab === "OBSERVATION" && (
          <div className="space-y-4">
            {observations.map((item) => (
              <div
                key={item.label}
                className="flex items-start justify-between gap-6 border-b border-[#e6eef2]/5 pb-3 last:border-0"
              >
                <span className="font-mono text-[8px] tracking-[0.16em] text-[#71838c]">
                  {item.label}
                </span>

                <span className="text-right font-mono text-[9px] tracking-[0.08em] text-[#e6eef2]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "SIGNAL" && (
          <div>
            <p className="font-mono text-[8px] tracking-[0.18em] text-[#71838c]">
              BIOLOGICAL SIGNAL PROFILE
            </p>

            <div className="mt-5 h-20 border border-[#38e8d0]/15 bg-[#38e8d0]/[0.02] p-3">
              <div className="flex h-full items-center gap-[3px]">
                {Array.from({ length: 48 }, (_, index) => {
                  const height = 12 + Math.abs(Math.sin(index * 1.7)) * 55;

                  return (
                    <div
                      key={index}
                      className="flex-1 bg-[#38e8d0]/50"
                      style={{
                        height: `${height}%`,
                      }}
                    />
                  );
                })}
              </div>
            </div>

            <div className="mt-4 flex justify-between font-mono text-[8px] tracking-[0.12em] text-[#71838c]">
              <span>LOW</span>
              <span>FREQUENCY</span>
              <span>HIGH</span>
            </div>
          </div>
        )}

        {activeTab === "CLASSIFICATION" && (
          <div className="space-y-5">
            <div>
              <p className="font-mono text-[8px] tracking-[0.18em] text-[#71838c]">
                CURRENT CLASSIFICATION
              </p>

              <p className="mt-2 font-serif text-xl italic text-[#e6eef2]">
                Unknown Biological Organism
              </p>
            </div>

            <div className="border-l border-[#f4a62a] pl-4">
              <p className="font-mono text-[8px] uppercase leading-5 tracking-[0.12em] text-[#71838c]">
                Classification withheld pending additional observations.
              </p>
            </div>

            <div className="font-mono text-[8px] tracking-[0.12em] text-[#f4a62a]">
              STATUS / UNRESOLVED
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
