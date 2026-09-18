import { ArrowUpRight } from "lucide-react";
import { Product, formatPrice } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <a href={`/product/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#ebe8df]">
        <img
          src={`${product.images[0]}?auto=format&fit=crop&w=900&q=85`}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
        />

        {product.collection === "New Arrivals" && (
          <span className="absolute left-4 top-4 bg-[#f5f3ee] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.12em]">
            New
          </span>
        )}

        <span className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center bg-[#f5f3ee] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={16} strokeWidth={1.4} />
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
  );
}
