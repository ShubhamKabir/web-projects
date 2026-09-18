"use client";

import { ShoppingBag } from "lucide-react";
import { useCart } from "./cart-provider";

export default function CartIndicator() {
  const { totalItems } = useCart();

  return (
    <a
      href="/cart"
      aria-label={`Shopping bag with ${totalItems} items`}
      className="relative flex h-10 w-10 items-center justify-center transition-colors hover:bg-black/5"
    >
      <ShoppingBag size={17} strokeWidth={1.5} />

      {totalItems > 0 && (
        <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center bg-[#171714] px-1 text-[8px] font-bold text-white">
          {totalItems > 9 ? "9+" : totalItems}
        </span>
      )}
    </a>
  );
}
