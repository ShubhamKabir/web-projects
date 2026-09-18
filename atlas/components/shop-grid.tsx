"use client";

import { SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { products } from "@/lib/products";
import ProductCard from "./product-card";

const filters = ["All", "Apparel", "Accessories"];

export default function ShopGrid({
  initialCategory = "All",
}: {
  initialCategory?: string;
}) {
  const [filter, setFilter] = useState(initialCategory);

  const filteredProducts = useMemo(() => {
    if (filter === "All") return products;

    return products.filter((product) => product.category === filter);
  }, [filter]);

  return (
    <div>
      <div className="mb-10 flex flex-col justify-between gap-5 border-y border-black/15 py-5 sm:flex-row sm:items-center">
        <div className="flex items-center gap-6">
          <SlidersHorizontal size={15} strokeWidth={1.4} />

          <div className="flex gap-5">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`text-[10px] font-bold uppercase tracking-[0.13em] transition-colors ${
                  filter === item
                    ? "text-black"
                    : "text-black/35 hover:text-black"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <p className="text-[10px] uppercase tracking-[0.12em] text-black/35">
          {filteredProducts.length} pieces
        </p>
      </div>

      <div className="grid gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
