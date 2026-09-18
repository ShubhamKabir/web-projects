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

export default function JournalCard({
  article,
}: {
  article: (typeof articles)[number];
}) {
  return (
    <article className="group">
      <div className={`relative aspect-[4/3] overflow-hidden ${article.tone}`}>
        <div className="absolute left-[25%] top-[18%] h-[58%] w-[42%] rotate-[-6deg] bg-[#f5f3ee] shadow-xl transition-transform duration-500 group-hover:rotate-[-3deg] group-hover:scale-[1.03]">
          <div className="absolute left-5 top-5 h-2 w-12 bg-black" />
          <div className="absolute bottom-5 left-5 right-5 space-y-2">
            <div className="h-px bg-black/15" />
            <div className="h-px w-3/4 bg-black/15" />
            <div className="h-px w-1/2 bg-black/15" />
          </div>
        </div>

        <span className="absolute left-5 top-5 text-[9px] font-bold uppercase tracking-[0.14em] text-black/40">
          {article.number}
        </span>
      </div>

      <div className="mt-5">
        <div className="flex justify-between gap-4 text-[9px] font-bold uppercase tracking-[0.13em] text-black/40">
          <span>{article.category}</span>
          <span>{article.date}</span>
        </div>

        <h2 className="mt-4 max-w-md text-2xl font-bold leading-[1.05] tracking-[-0.04em]">
          {article.title}
        </h2>

        <span className="mt-5 inline-block text-[10px] font-bold uppercase tracking-[0.13em] underline underline-offset-4">
          Read article
        </span>
      </div>
    </article>
  );
}
