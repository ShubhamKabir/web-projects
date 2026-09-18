"use client";

import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Product, formatPrice } from "@/lib/products";
import { useCart } from "./cart-provider";

export default function ProductInfo({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[1] ?? "");
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const { addItem } = useCart();

  const hasSizes = Boolean(product.sizes?.length);

  function addToBag() {
    addItem({
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: hasSizes ? selectedSize : undefined,
      color: selectedColor,
      quantity,
    });

    setAdded(true);

    window.setTimeout(() => {
      setAdded(false);
    }, 1800);
  }

  return (
    <div>
      <div className="border-b border-black/15 pb-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/40">
          {product.category}
        </p>

        <h1 className="mt-4 text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-6xl">
          {product.name}
        </h1>

        <p className="mt-5 text-lg">{formatPrice(product.price)}</p>
      </div>

      <div className="border-b border-black/15 py-8">
        <p className="max-w-xl text-sm leading-6 text-black/60">
          {product.description}
        </p>
      </div>

      <div className="border-b border-black/15 py-7">
        <div className="mb-4 flex justify-between">
          <span className="text-[10px] font-bold uppercase tracking-[0.14em]">
            Color
          </span>

          <span className="text-[10px] uppercase tracking-[0.12em] text-black/45">
            {selectedColor}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {product.colors.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() => setSelectedColor(color)}
              className={`border px-4 py-3 text-[10px] font-bold uppercase tracking-[0.1em] transition-colors ${
                selectedColor === color
                  ? "border-black bg-black text-white"
                  : "border-black/15 hover:border-black"
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      {hasSizes && (
        <div className="border-b border-black/15 py-7">
          <div className="mb-4 flex justify-between">
            <span className="text-[10px] font-bold uppercase tracking-[0.14em]">
              Size
            </span>

            <button
              type="button"
              className="text-[10px] uppercase tracking-[0.12em] text-black/45 underline underline-offset-4"
            >
              Size guide
            </button>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {product.sizes?.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`border py-3 text-[10px] font-bold transition-colors ${
                  selectedSize === size
                    ? "border-black bg-black text-white"
                    : "border-black/15 hover:border-black"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="py-7">
        <div className="flex gap-3">
          <div className="flex h-14 items-center border border-black/15">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="flex h-full w-12 items-center justify-center hover:bg-black/5"
              aria-label="Decrease quantity"
            >
              <Minus size={14} />
            </button>

            <span className="w-8 text-center text-sm">{quantity}</span>

            <button
              type="button"
              onClick={() => setQuantity(quantity + 1)}
              className="flex h-full w-12 items-center justify-center hover:bg-black/5"
              aria-label="Increase quantity"
            >
              <Plus size={14} />
            </button>
          </div>

          <button
            type="button"
            onClick={addToBag}
            className="flex h-14 flex-1 items-center justify-center gap-3 bg-black text-[10px] font-bold uppercase tracking-[0.13em] text-white transition-colors hover:bg-[#6d7355]"
          >
            <ShoppingBag size={16} strokeWidth={1.5} />
            {added ? "Added to bag" : "Add to bag"}
          </button>
        </div>
      </div>

      <div className="border-t border-black/15">
        {[
          ["Shipping", "Complimentary shipping on orders over ₹5,000."],
          ["Returns", "Easy returns within 14 days of delivery."],
          ["Materials", "Selected materials and construction details."],
        ].map(([title, text]) => (
          <div key={title} className="border-b border-black/15 py-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em]">
              {title}
            </p>

            <p className="mt-2 text-xs leading-5 text-black/50">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
