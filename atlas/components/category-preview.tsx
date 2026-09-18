import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    number: "01",
    title: "Apparel",
    href: "/category/apparel",
    className: "bg-[#d9d5ca]",
  },
  {
    number: "02",
    title: "Accessories",
    href: "/shop",
    className: "bg-[#b9bea3]",
  },
  {
    number: "03",
    title: "Essentials",
    href: "/shop",
    className: "bg-[#ddd8cf]",
  },
];

export default function CategoryPreview() {
  return (
    <section className="bg-[#f5f3ee]">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-32">
        <div className="mb-12 border-t border-black/15 pt-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/40">
            03 / Explore
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <a
              key={category.number}
              href={category.href}
              className={`group relative flex aspect-[4/5] flex-col justify-between overflow-hidden p-6 md:p-8 ${category.className}`}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/45">
                {category.number}
              </span>

              <div className="flex items-end justify-between">
                <h3 className="text-4xl font-black uppercase tracking-[-0.06em] md:text-5xl">
                  {category.title}
                </h3>

                <span className="flex h-10 w-10 items-center justify-center border border-black/20 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight size={17} strokeWidth={1.4} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
