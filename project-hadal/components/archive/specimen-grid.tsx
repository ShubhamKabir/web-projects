import SpecimenCard from "./specimen-card";

const records = [
  {
    id: "had-001",
    code: "HAD-001",
    title: "Unknown Organism",
    type: "Biological specimen",
    depth: "0842 M",
    zone: "Twilight",
    accent: "#38e8d0",
  },
  {
    id: "had-002",
    code: "HAD-002",
    title: "Vent-Dwelling Form",
    type: "Biological specimen",
    depth: "4218 M",
    zone: "Bathypelagic",
    accent: "#65f2b0",
  },
  {
    id: "geo-014",
    code: "GEO-014",
    title: "Basalt Formation",
    type: "Geological record",
    depth: "5104 M",
    zone: "Abyssal",
    accent: "#6366f1",
  },
  {
    id: "bio-031",
    code: "BIO-031",
    title: "Luminous Structure",
    type: "Biological specimen",
    depth: "6740 M",
    zone: "Hadal",
    accent: "#38e8d0",
  },
  {
    id: "vent-007",
    code: "VNT-007",
    title: "Hydrothermal Field",
    type: "Vent system",
    depth: "3982 M",
    zone: "Bathypelagic",
    accent: "#f4a62a",
  },
  {
    id: "had-009",
    code: "HAD-009",
    title: "Unknown Signal",
    type: "Unclassified",
    depth: "10,924 M",
    zone: "Challenger Deep",
    accent: "#ec4899",
  },
];

export default function SpecimenGrid() {
  return (
    <section className="py-12">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-[#38e8d0]">
            Expedition records
          </p>

          <h2 className="mt-3 text-2xl uppercase tracking-[-0.02em] md:text-3xl">
            Recorded encounters
          </h2>
        </div>

        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#71838c]">
          06 records
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {records.map((record) => (
          <SpecimenCard key={record.id} {...record} />
        ))}
      </div>
    </section>
  );
}
