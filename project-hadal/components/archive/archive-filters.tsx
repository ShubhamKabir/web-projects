"use client";

import { useState } from "react";

const filters = [
  "ALL RECORDS",
  "SPECIMENS",
  "GEOLOGY",
  "VENT SYSTEMS",
  "EXPEDITIONS",
];

export default function ArchiveFilters() {
  const [active, setActive] = useState("ALL RECORDS");

  return (
    <div className="border-b border-[#e6eef2]/10 py-6">
      <div className="flex flex-wrap gap-x-8 gap-y-4">
        {filters.map((filter) => {
          const selected = active === filter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`font-mono text-[9px] uppercase tracking-[0.2em] transition-colors ${
                selected
                  ? "text-[#38e8d0]"
                  : "text-[#71838c] hover:text-[#e6eef2]"
              }`}
            >
              <span className="mr-2">{selected ? "●" : "○"}</span>
              {filter}
            </button>
          );
        })}
      </div>
    </div>
  );
}
