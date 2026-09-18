"use client";

import { useState } from "react";
import { Product } from "@/lib/products";

export default function ProductGallery({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="grid gap-3 md:grid-cols-[88px_1fr]">
      <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col">
        {product.images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActiveImage(index)}
            className={`relative h-24 w-20 shrink-0 overflow-hidden bg-[#ebe8df] md:h-28 md:w-[88px] ${
              activeImage === index
                ? "ring-1 ring-black"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <img
              src={`${image}?auto=format&fit=crop&w=300&q=80`}
              alt={`${product.name} view ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

      <div className="order-1 aspect-[4/5] overflow-hidden bg-[#ebe8df] md:order-2">
        <img
          src={`${product.images[activeImage]}?auto=format&fit=crop&w=1200&q=90`}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
