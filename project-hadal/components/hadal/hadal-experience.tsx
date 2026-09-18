"use client";

import { useEffect, useState } from "react";

import OceanScene from "./scene/ocean-scene";
import Telemetry from "./interface/telemetry";
import DepthIndicator from "./interface/depth-indicator";
import Coordinates from "./interface/coordinates";
import DiscoveryMarker from "./interface/discovery-marker";
import SpecimenControls from "./specimen/specimen-controls";
import SonarInterface from "./interface/sonar-interface";
import SpecimenLab from "./sections/specimen-lab";
import SectionFade from "./interface/section-fade";
import ReturnSurface from "./sections/return-surface";

export default function HadalExperience() {
  const [inspectionMode, setInspectionMode] = useState(false);

  const [specimenMode, setSpecimenMode] = useState<
    "SURFACE" | "SCAN" | "X-RAY"
  >("SURFACE");

  const [sonarActive, setSonarActive] = useState(false);
  const [ventActive, setVentActive] = useState(false);
  const [specimenLabActive, setSpecimenLabActive] = useState(false);
  const [abyssActive, setAbyssActive] = useState(false);
  const [hadalActive, setHadalActive] = useState(false);

  useEffect(() => {
    let frame = 0;

    const updateExperience = () => {
      frame = 0;

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        maxScroll > 0
          ? Math.min(Math.max(window.scrollY / maxScroll, 0), 1)
          : 0;

      const active = !inspectionMode;

      /*
       * These ranges control the 3D environment only.
       * Narrative copy is kept in normal document flow so fixed overlays
       * cannot sit on top of later sections.
       */
      setSonarActive(active && progress > 0.43 && progress < 0.58);

      setVentActive(active && progress > 0.58 && progress < 0.66);

      /*
       * Specimen Lab is intentionally shorter than the original 0.66–0.77
       * window. The following SPECIMEN TRANSFER section must have its own
       * visual space.
       */
      setSpecimenLabActive(active && progress > 0.4 && progress < 0.43);

      /*
       * These two states are still passed to OceanScene because they control
       * the underwater environment / lighting / geology.
       *
       * They are NOT rendered as fixed narrative overlays anymore.
       */
      setAbyssActive(active && progress > 0.7 && progress < 0.82);

      setHadalActive(active && progress > 0.82 && progress < 0.94);
    };

    const handleScroll = () => {
      if (!frame) {
        frame = requestAnimationFrame(updateExperience);
      }
    };

    updateExperience();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [inspectionMode]);

  return (
    <main className="relative min-h-[700vh] bg-[#010307]">
      <OceanScene
        inspectionMode={inspectionMode}
        specimenMode={specimenMode}
        ventActive={ventActive}
        abyssActive={abyssActive}
        hadalActive={hadalActive}
      />

      <Telemetry />
      <DepthIndicator />
      <Coordinates />

      <DiscoveryMarker
        inspectionMode={inspectionMode}
        onInspect={() => setInspectionMode(true)}
      />

      <SpecimenControls
        active={inspectionMode}
        mode={specimenMode}
        onModeChange={setSpecimenMode}
        onClose={() => {
          setInspectionMode(false);
          setSpecimenMode("SURFACE");
        }}
      />

      <SonarInterface
        key={sonarActive ? "sonar-active" : "sonar-inactive"}
        active={sonarActive}
      />

      <div
        className={`relative z-10 transition-opacity duration-500 ${
          inspectionMode ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        {/* ENTRY */}
        <section className="flex min-h-screen items-center justify-center px-6">
          <div className="w-full text-center">
            <div className="mb-8 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#0ea5b7]/50" />

              <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#71838c]">
                Project Hadal
              </p>

              <span className="h-px w-12 bg-[#0ea5b7]/50" />
            </div>

            <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.3em] text-[#f4a62a]">
              Deep-Submergence Archive / Expedition 07
            </p>

            <h1 className="w-full whitespace-nowrap text-5xl font-semibold uppercase leading-[0.88] tracking-[0.04em] text-[#e6eef2] sm:text-7xl md:text-[9rem]">
              Deep
              <br />
              <span className="text-[#38e8d0]">Submergence</span>
            </h1>

            <div className="mx-auto mt-12 max-w-md">
              <p className="font-mono text-[10px] uppercase leading-6 tracking-[0.22em] text-[#71838c]">
                Pacific Ocean
                <br />
                Surface → Challenger Deep
                <br />
                Maximum Recorded Depth: 10,924 M
              </p>
            </div>

            <div className="mt-16 flex items-center justify-center gap-4">
              <div className="h-1 w-1 rounded-full bg-[#38e8d0]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-[#e6eef2]">
                Scroll to begin descent
              </span>

              <div className="h-1 w-1 rounded-full bg-[#38e8d0]" />
            </div>
          </div>
        </section>

        {/* SURFACE */}
        <SectionFade className="flex min-h-screen items-end px-6 pb-24 md:px-12">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-[#f4a62a]">
              000 M / SURFACE
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-medium uppercase tracking-[-0.02em] text-[#e6eef2] md:text-7xl">
              Below
              <br />
              the surface.
            </h2>
          </div>
        </SectionFade>

        {/* DESCENT */}
        <section className="flex min-h-screen items-center px-6 md:px-12">
          <div className="max-w-xl">
            <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-[#38e8d0]">
              DESCENT / 001
            </p>

            <p className="mt-6 font-mono text-xs leading-7 text-[#71838c]">
              Natural light begins to disappear.
              <br />
              Pressure increases.
              <br />
              Visibility decreases.
            </p>
          </div>
        </section>

        {/* TWILIGHT */}
        <section className="flex min-h-screen items-center justify-end px-6 md:px-12">
          <div className="max-w-lg text-right">
            <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-[#38e8d0]">
              Biological Contact / HAD-001
            </p>

            <h2 className="mt-5 text-4xl uppercase tracking-tight text-[#e6eef2] md:text-6xl">
              Signal
              <br />
              acquired.
            </h2>

            <div className="mt-8 space-y-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[#71838c]">
              <p>Classification — Unknown</p>
              <p>Motion — Detected</p>
              <p>Bioluminescence — Active</p>
              <p>Visual record — Acquired</p>
            </div>

            <p className="mt-8 font-serif text-sm italic leading-6 text-[#71838c]">
              The first biological signal of the descent.
            </p>
          </div>
        </section>

        {/* DEEPER */}
        <section className="flex min-h-screen items-center justify-center px-6 text-center">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#71838c]">
              Continue descent
            </p>

            <p className="mt-5 font-mono text-xs tracking-[0.2em] text-[#e6eef2]">
              01,000 M
            </p>
          </div>
        </section>

        {/* MIDNIGHT ZONE */}
        <SectionFade className="flex min-h-screen items-center justify-center px-6 text-center">
          <div className="max-w-xl">
            <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#71838c]">
              01,000 — 04,000 M
            </p>

            <h2 className="mt-5 text-4xl font-medium uppercase tracking-[-0.02em] text-[#e6eef2] md:text-7xl">
              The
              <br />
              midnight zone.
            </h2>

            <p className="mx-auto mt-8 max-w-md font-mono text-[9px] uppercase leading-6 tracking-[0.16em] text-[#71838c]">
              No sunlight reaches this depth.
              <br />
              Vision gives way to instruments.
              <br />
              Sound becomes the primary signal.
            </p>
          </div>
        </SectionFade>

        {/* SONAR */}
        <section className="flex min-h-screen items-end justify-center px-6 pb-32 text-center">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#f4a62a]">
              Acoustic Survey / 004
            </p>

            <h2 className="mt-5 text-4xl uppercase tracking-tight text-[#e6eef2] md:text-6xl">
              Listen
              <br />
              into the dark.
            </h2>

            <p className="mx-auto mt-6 max-w-md font-mono text-[9px] uppercase leading-6 tracking-[0.16em] text-[#71838c]">
              Visual contact unavailable.
              <br />
              Active sonar required.
            </p>
          </div>
        </section>

        {/* HYDROTHERMAL VENT */}
        <section className="flex min-h-screen items-end px-6 pb-28 md:px-12 md:pb-32">
          <div className="max-w-xl">
            <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#f4a62a]">
              Acoustic Return / Target 004
            </p>

            <h2 className="mt-5 text-5xl font-medium uppercase leading-[0.9] tracking-[-0.03em] text-[#e6eef2] md:text-8xl">
              Life
              <br />
              without
              <br />
              sunlight.
            </h2>

            <div className="mt-8 h-px w-24 bg-[#f4a62a]/60" />

            <p className="mt-7 max-w-md font-mono text-[9px] uppercase leading-6 tracking-[0.16em] text-[#71838c]">
              Hydrothermal activity detected.
              <br />
              Mineral plume observed.
              <br />
              Biological signatures present.
            </p>
          </div>
        </section>

        {/* SPECIMEN LAB */}
        <SpecimenLab active={specimenLabActive} />

        {/* SPECIMEN TRANSFER */}
        <section className="flex min-h-screen items-center justify-center px-6">
          <div className="w-full max-w-5xl">
            <div className="mb-16 flex items-center gap-4">
              <span className="h-px flex-1 bg-[#e6eef2]/10" />

              <span className="font-mono text-[8px] tracking-[0.3em] text-[#71838c]">
                SPECIMEN TRANSFER
              </span>

              <span className="h-px flex-1 bg-[#e6eef2]/10" />
            </div>

            <div className="grid gap-12 md:grid-cols-[1fr_280px]">
              <div>
                <p className="font-mono text-[8px] tracking-[0.3em] text-[#38e8d0]">
                  HAD-002 / LIVE ANALYSIS
                </p>

                <h2 className="mt-6 max-w-3xl font-serif text-5xl italic leading-[0.9] text-[#e6eef2] md:text-8xl">
                  What lives
                  <br />
                  down here?
                </h2>

                <p className="mt-10 max-w-xl font-mono text-[9px] uppercase leading-7 tracking-[0.12em] text-[#71838c]">
                  The absence of sunlight does not mean the absence of life.
                  Chemical energy, pressure, heat and mineral-rich fluids create
                  ecosystems unlike those found at the surface.
                </p>
              </div>

              <div className="border-l border-[#e6eef2]/10 pl-6">
                <p className="font-mono text-[8px] tracking-[0.2em] text-[#71838c]">
                  ENVIRONMENT
                </p>

                <div className="mt-6 space-y-5 font-mono text-[9px]">
                  <div>
                    <span className="text-[#71838c]">OBSERVED AT</span>
                    <p className="mt-1 text-[#e6eef2]">4,218 M</p>
                  </div>

                  <div>
                    <span className="text-[#71838c]">PRESSURE</span>
                    <p className="mt-1 text-[#e6eef2]">422 BAR</p>
                  </div>

                  <div>
                    <span className="text-[#71838c]">LIGHT</span>
                    <p className="mt-1 text-[#f4a62a]">NONE</p>
                  </div>

                  <div>
                    <span className="text-[#71838c]">ENERGY SOURCE</span>
                    <p className="mt-1 text-[#38e8d0]">CHEMOSYNTHESIS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABYSS */}
        <SectionFade className="flex min-h-[120vh] items-center justify-center px-6 md:px-12">
          <div className="w-full max-w-6xl">
            <div className="mb-14 flex items-center gap-4">
              <span className="h-px flex-1 bg-[#e6eef2]/10" />

              <span className="font-mono text-[8px] tracking-[0.3em] text-[#71838c]">
                ABYSSOPELAGIC / 05
              </span>

              <span className="h-px flex-1 bg-[#e6eef2]/10" />
            </div>

            <div className="grid gap-16 md:grid-cols-[1.15fr_0.85fr] md:items-center">
              <div>
                <p className="font-mono text-[8px] tracking-[0.35em] text-[#38e8d0]">
                  DEPTH PROFILE / 05
                </p>

                <h2 className="mt-6 max-w-3xl font-serif text-5xl italic leading-[0.88] text-[#e6eef2]/85 md:text-8xl">
                  Beyond
                  <br />
                  the light.
                </h2>

                <p className="mt-10 max-w-lg font-mono text-[9px] uppercase leading-7 tracking-[0.14em] text-[#71838c]">
                  At abyssal depths, the absence of sunlight becomes absolute.
                  The vehicle&apos;s lights become the only visible reference in
                  an environment measured almost entirely in darkness.
                </p>

                <div className="mt-10 flex items-center gap-4">
                  <span className="h-px w-16 bg-[#f4a62a]/60" />

                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#f4a62a]">
                    NATURAL LIGHT / 0%
                  </span>
                </div>
              </div>

              <div className="border-l border-[#e6eef2]/10 pl-8 md:pl-10">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[8px] tracking-[0.25em] text-[#71838c]">
                    ENVIRONMENTAL RECORD
                  </p>

                  <span className="h-1.5 w-1.5 rounded-full bg-[#38e8d0]" />
                </div>

                <div className="mt-8 border-t border-[#e6eef2]/10">
                  <div className="flex items-center justify-between border-b border-[#e6eef2]/10 py-5">
                    <span className="font-mono text-[8px] tracking-[0.16em] text-[#71838c]">
                      REFERENCE DEPTH
                    </span>

                    <span className="font-mono text-[10px] tracking-[0.1em] text-[#e6eef2]">
                      5,104 M
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-[#e6eef2]/10 py-5">
                    <span className="font-mono text-[8px] tracking-[0.16em] text-[#71838c]">
                      NATURAL LIGHT
                    </span>

                    <span className="font-mono text-[10px] tracking-[0.1em] text-[#f4a62a]">
                      NONE
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-[#e6eef2]/10 py-5">
                    <span className="font-mono text-[8px] tracking-[0.16em] text-[#71838c]">
                      ILLUMINATION
                    </span>

                    <span className="font-mono text-[10px] tracking-[0.1em] text-[#e6eef2]">
                      VEHICLE
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-[#e6eef2]/10 py-5">
                    <span className="font-mono text-[8px] tracking-[0.16em] text-[#71838c]">
                      SIGNAL
                    </span>

                    <span className="font-mono text-[10px] tracking-[0.1em] text-[#38e8d0]">
                      STABLE
                    </span>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex items-center justify-between font-mono text-[7px] tracking-[0.18em]">
                    <span className="text-[#71838c]">4K</span>
                    <span className="text-[#71838c]">5,104 M</span>
                    <span className="text-[#71838c]">6K</span>
                  </div>

                  <div className="relative mt-3 h-px bg-[#e6eef2]/15">
                    <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 border border-[#38e8d0] bg-[#010307]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionFade>

        {/* HADAL DESCENT */}
        <SectionFade className="flex min-h-[140vh] items-center justify-center px-6 md:px-12">
          <div className="w-full max-w-6xl">
            <div className="mb-14 flex items-center gap-4">
              <span className="h-px flex-1 bg-[#e6eef2]/10" />

              <span className="font-mono text-[8px] tracking-[0.3em] text-[#71838c]">
                HADAL DESCENT / 06
              </span>

              <span className="h-px flex-1 bg-[#e6eef2]/10" />
            </div>

            <div className="grid gap-16 md:grid-cols-[1fr_340px] md:items-start">
              <div>
                <p className="font-mono text-[8px] tracking-[0.35em] text-[#38e8d0]">
                  HADAL THRESHOLD / 6,000 M
                </p>

                <h2 className="mt-7 max-w-4xl font-serif text-5xl italic leading-[0.88] text-[#e6eef2]/80 md:text-8xl">
                  A place
                  <br />
                  almost untouched.
                </h2>

                <p className="mt-10 max-w-xl font-mono text-[9px] uppercase leading-7 tracking-[0.13em] text-[#71838c]">
                  Below six thousand meters, the ocean enters its deepest
                  ecological zone.
                </p>

                <p className="mt-5 max-w-xl font-mono text-[9px] uppercase leading-7 tracking-[0.13em] text-[#71838c]">
                  Pressure increases. Temperature falls. The available light
                  remains zero.
                </p>

                <div className="mt-12 grid max-w-xl grid-cols-3 border-y border-[#e6eef2]/10">
                  <div className="border-r border-[#e6eef2]/10 py-5">
                    <p className="font-mono text-[7px] tracking-[0.16em] text-[#71838c]">
                      THRESHOLD
                    </p>

                    <p className="mt-2 font-mono text-sm text-[#e6eef2]">
                      6,000 M
                    </p>
                  </div>

                  <div className="border-r border-[#e6eef2]/10 px-4 py-5">
                    <p className="font-mono text-[7px] tracking-[0.16em] text-[#71838c]">
                      LIGHT
                    </p>

                    <p className="mt-2 font-mono text-sm text-[#f4a62a]">0%</p>
                  </div>

                  <div className="px-4 py-5">
                    <p className="font-mono text-[7px] tracking-[0.16em] text-[#71838c]">
                      SIGNAL
                    </p>

                    <p className="mt-2 font-mono text-sm text-[#38e8d0]">
                      WEAK
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l border-[#e6eef2]/10 pl-8 md:pt-10">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[8px] tracking-[0.25em] text-[#71838c]">
                    DESCENT PROFILE
                  </p>

                  <span className="font-mono text-[8px] text-[#38e8d0]">
                    HADAL
                  </span>
                </div>

                <div className="mt-8">
                  <div className="relative h-72 border-l border-[#e6eef2]/15">
                    <div className="absolute left-[-4px] top-0 h-2 w-2 border border-[#71838c] bg-[#010307]" />

                    <div className="absolute left-[-4px] top-1/2 h-2 w-2 border border-[#71838c] bg-[#010307]" />

                    <div className="absolute bottom-0 left-[-4px] h-2 w-2 border border-[#38e8d0] bg-[#010307]" />

                    <div className="absolute left-4 top-0 font-mono text-[7px] tracking-[0.16em] text-[#71838c]">
                      4,000 M
                    </div>

                    <div className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-[7px] tracking-[0.16em] text-[#71838c]">
                      6,000 M
                    </div>

                    <div className="absolute bottom-0 left-4 translate-y-1/2 font-mono text-[7px] tracking-[0.16em] text-[#38e8d0]">
                      HADAL ZONE
                    </div>

                    <div className="absolute left-[-1px] top-[52%] h-px w-20 bg-[#38e8d0]/50" />
                  </div>
                </div>

                <div className="mt-10 space-y-5 border-t border-[#e6eef2]/10 pt-6 font-mono text-[8px] tracking-[0.15em]">
                  <div className="flex justify-between gap-6">
                    <span className="text-[#71838c]">NATURAL LIGHT</span>
                    <span className="text-[#f4a62a]">NONE</span>
                  </div>

                  <div className="flex justify-between gap-6">
                    <span className="text-[#71838c]">TEMPERATURE</span>
                    <span className="text-[#e6eef2]">~3.5 °C</span>
                  </div>

                  <div className="flex justify-between gap-6">
                    <span className="text-[#71838c]">ENVIRONMENT</span>
                    <span className="text-[#38e8d0]">HADAL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionFade>

        {/* CHALLENGER DEEP */}
        <SectionFade className="flex min-h-[130vh] items-center justify-center px-6 md:px-12">
          <div className="w-full max-w-6xl">
            <div className="mb-16 flex items-center gap-4">
              <span className="h-px flex-1 bg-[#e6eef2]/10" />

              <span className="font-mono text-[8px] tracking-[0.4em] text-[#71838c]">
                FINAL DESCENT / 07
              </span>

              <span className="h-px flex-1 bg-[#e6eef2]/10" />
            </div>

            <div className="grid gap-16 md:grid-cols-[1fr_300px] md:items-center">
              <div>
                <p className="font-mono text-[8px] tracking-[0.4em] text-[#38e8d0]">
                  CHALLENGER DEEP
                </p>

                <p className="mt-6 font-mono text-[8px] tracking-[0.25em] text-[#71838c]">
                  MAXIMUM RECORDED DEPTH
                </p>

                <h2 className="mt-5 font-mono text-7xl font-light tracking-[-0.06em] text-[#e6eef2]/90 md:text-[10rem]">
                  10,924
                </h2>

                <div className="mt-5 flex items-center gap-4">
                  <span className="h-px w-20 bg-[#38e8d0]/50" />

                  <span className="font-mono text-[9px] tracking-[0.3em] text-[#71838c]">
                    METERS
                  </span>
                </div>

                <p className="mt-10 max-w-lg font-mono text-[9px] uppercase leading-7 tracking-[0.14em] text-[#71838c]">
                  The descent reaches Challenger Deep — the deepest recorded
                  point of the ocean.
                </p>
              </div>

              <div className="border-l border-[#e6eef2]/10 pl-8">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[8px] tracking-[0.25em] text-[#71838c]">
                    FINAL RECORD
                  </p>

                  <span className="h-1.5 w-1.5 rounded-full bg-[#38e8d0]" />
                </div>

                <div className="mt-8 space-y-6 font-mono text-[8px] tracking-[0.15em]">
                  <div className="border-t border-[#e6eef2]/10 pt-5">
                    <span className="text-[#71838c]">DEPTH</span>
                    <p className="mt-2 text-lg text-[#e6eef2]">10,924 M</p>
                  </div>

                  <div className="border-t border-[#e6eef2]/10 pt-5">
                    <span className="text-[#71838c]">NATURAL LIGHT</span>
                    <p className="mt-2 text-[#f4a62a]">NONE</p>
                  </div>

                  <div className="border-t border-[#e6eef2]/10 pt-5">
                    <span className="text-[#71838c]">SIGNAL</span>
                    <p className="mt-2 text-[#38e8d0]">DETECTED</p>
                  </div>

                  <div className="border-t border-[#e6eef2]/10 pt-5">
                    <span className="text-[#71838c]">LOCATION</span>
                    <p className="mt-2 text-[#e6eef2]">CHALLENGER DEEP</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 border-t border-[#e6eef2]/10 pt-8">
              <div className="flex items-center justify-between font-mono text-[7px] uppercase tracking-[0.2em]">
                <span className="text-[#71838c]">SURFACE</span>
                <span className="text-[#71838c]">4K</span>
                <span className="text-[#71838c]">6K</span>
                <span className="text-[#71838c]">8K</span>
                <span className="text-[#38e8d0]">10,924 M</span>
              </div>

              <div className="relative mt-4 h-px bg-[#e6eef2]/10">
                <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 border border-[#38e8d0] bg-[#010307]" />
              </div>
            </div>
          </div>
        </SectionFade>
      </div>

      <ReturnSurface />
    </main>
  );
}
