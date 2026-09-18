import { ArrowUpRight } from "lucide-react";
import { featuredProducts, formatPrice } from "@/lib/products";

export default function Featured() {
  return (
    <section className="bg-[#f5f3ee]">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-32">
        <div className="mb-14 flex flex-col justify-between gap-5 border-t border-black/15 pt-5 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/40">
              01 / Selected pieces
            </p>

            <h2 className="mt-5 text-4xl font-black uppercase tracking-[-0.06em] md:text-6xl">
              New arrivals
            </h2>
          </div>

          <a
            href="/shop"
            className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em]"
          >
            View all products
            <ArrowUpRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <div className="grid gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <a
              key={product.id}
              href={`/product/${product.slug}`}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#ebe8df]">
                <img
                  src={`${product.images[0]}?auto=format&fit=crop&w=900&q=85`}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />

                <span className="absolute left-4 top-4 bg-[#f5f3ee] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.12em]">
                  New
                </span>
              </div>

              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-sm font-bold tracking-[-0.02em]">
                    {product.name}
                  </h3>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.1em] text-black/40">
                    {product.category}
                  </p>
                </div>

                <span className="text-sm">{formatPrice(product.price)}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
