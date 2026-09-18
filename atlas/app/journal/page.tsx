import Navbar from "@/components/navbar";
import JournalCard from "@/components/journal-card";
import Footer from "@/components/footer";

const articles = [
  {
    number: "01",
    category: "Materials",
    title: "Why texture changes the way we experience an object",
    date: "12.09.26",
    tone: "bg-[#d5d0c4]",
  },
  {
    number: "02",
    category: "Design",
    title: "The case for buying fewer, better things",
    date: "04.09.26",
    tone: "bg-[#b8bea2]",
  },
  {
    number: "03",
    category: "Process",
    title: "Inside the making of the ATLAS essentials",
    date: "28.08.26",
    tone: "bg-[#c6c1b7]",
  },
];

export default function JournalPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ee]">
      <Navbar />

      <section className="mx-auto max-w-[1440px] px-5 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40">
        <div className="mb-20 grid gap-10 md:grid-cols-[0.35fr_1fr] md:gap-24">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/40">
            ATLAS / Journal
          </p>

          <div>
            <h1 className="text-6xl font-black uppercase leading-[0.82] tracking-[-0.075em] md:text-8xl">
              Notes on
              <br />
              <span className="text-[#6d7355]">everyday life.</span>
            </h1>

            <p className="mt-8 max-w-lg text-sm leading-6 text-black/55">
              Thoughts on materials, design, process, and the objects that
              become part of our everyday routines.
            </p>
          </div>
        </div>

        <div className="grid gap-x-5 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <JournalCard key={article.number} article={article} />
          ))}
        </div>
      </section>

      <section className="bg-[#171714] text-[#f5f3ee]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28">
          <p className="max-w-4xl text-3xl font-medium leading-[1.05] tracking-[-0.04em] md:text-5xl">
            A slower look at the things we use, make, and keep.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
