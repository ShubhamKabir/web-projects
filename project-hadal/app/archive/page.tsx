import ArchiveHeader from "@/components/archive/archive-header";
import ArchiveFilters from "../../components/archive/archive-filters";
import SpecimenGrid from "../../components/archive/specimen-grid";

export default function ArchivePage() {
  return (
    <main className="min-h-screen bg-[#010307] text-[#e6eef2]">
      <ArchiveHeader />

      <div className="mx-auto max-w-[1500px] px-6 pb-24 md:px-10">
        <ArchiveFilters />
        <SpecimenGrid />
      </div>
    </main>
  );
}
