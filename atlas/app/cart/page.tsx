"use client";

import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react";
import Navbar from "@/components/navbar";
import { formatPrice } from "@/lib/products";
import { useCart } from "@/components/cart-provider";
import Footer from "@/components/footer";

export default function CartPage() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();

  const shipping = subtotal >= 5000 || subtotal === 0 ? 0 : 250;
  const total = subtotal + shipping;

  return (
    <main className="min-h-screen bg-[#f5f3ee]">
      <Navbar />

      <section className="mx-auto max-w-[1440px] px-5 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40">
        <div className="mb-14">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/40">
            ATLAS / Bag
          </p>

          <h1 className="mt-6 text-6xl font-black uppercase leading-[0.82] tracking-[-0.075em] md:text-8xl">
            Your bag
          </h1>
        </div>

        {items.length === 0 ? (
          <div className="border-y border-black/15 py-24 text-center">
            <p className="text-2xl font-medium tracking-[-0.03em]">
              Your bag is empty.
            </p>

            <a
              href="/shop"
              className="mt-8 inline-flex items-center gap-2 bg-black px-6 py-4 text-[10px] font-bold uppercase tracking-[0.13em] text-white"
            >
              Continue shopping
            </a>
          </div>
        ) : (
          <div className="grid gap-16 lg:grid-cols-[1fr_380px]">
            <div>
              <div className="border-y border-black/15">
                {items.map((item, index) => (
                  <div
                    key={`${item.id}-${item.size}-${item.color}-${index}`}
                    className="grid grid-cols-[100px_1fr] gap-5 border-b border-black/15 py-6 last:border-b-0 sm:grid-cols-[120px_1fr_auto]"
                  >
                    <a
                      href={`/product/${item.slug}`}
                      className="aspect-[4/5] overflow-hidden bg-[#ebe8df]"
                    >
                      <img
                        src={`${item.image}?auto=format&fit=crop&w=400&q=85`}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </a>

                    <div className="flex flex-col justify-between">
                      <div>
                        <a
                          href={`/product/${item.slug}`}
                          className="text-sm font-bold"
                        >
                          {item.name}
                        </a>

                        <p className="mt-2 text-[10px] uppercase tracking-[0.1em] text-black/40">
                          {item.color}
                          {item.size && ` / ${item.size}`}
                        </p>
                      </div>

                      <div className="mt-5 flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(index, item.quantity - 1)
                          }
                          className="flex h-8 w-8 items-center justify-center border border-black/15"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>

                        <span className="w-5 text-center text-xs">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(index, item.quantity + 1)
                          }
                          className="flex h-8 w-8 items-center justify-center border border-black/15"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>

                    <div className="col-start-2 flex items-end justify-between sm:col-start-auto sm:flex-col sm:items-end sm:justify-between">
                      <span className="text-sm">
                        {formatPrice(item.price * item.quantity)}
                      </span>

                      <button
                        type="button"
                        onClick={() => removeItem(index)}
                        className="text-black/35 transition-colors hover:text-black"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 size={15} strokeWidth={1.4} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="/shop"
                className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.13em]"
              >
                <ArrowLeft size={14} strokeWidth={1.4} />
                Continue shopping
              </a>
            </div>

            <aside className="h-fit border-t border-black/15 pt-6 lg:sticky lg:top-28">
              <h2 className="text-lg font-bold">Summary</h2>

              <div className="mt-8 space-y-4 text-xs">
                <div className="flex justify-between">
                  <span className="text-black/45">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-black/45">Shipping</span>
                  <span>
                    {shipping === 0 ? "Complimentary" : formatPrice(shipping)}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex justify-between border-t border-black/15 pt-5">
                <span className="text-sm font-bold">Total</span>
                <span className="text-sm font-bold">{formatPrice(total)}</span>
              </div>

              <a
                href="/checkout"
                className="mt-7 flex h-14 items-center justify-center bg-black text-[10px] font-bold uppercase tracking-[0.13em] text-white transition-colors hover:bg-[#6d7355]"
              >
                Continue to checkout
              </a>

              <p className="mt-4 text-center text-[9px] uppercase tracking-[0.1em] text-black/35">
                Portfolio checkout concept
              </p>
            </aside>
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}
