"use client";

import { useState } from "react";
import { LockKeyhole } from "lucide-react";
import { useCart } from "./cart-provider";
import { formatPrice } from "@/lib/products";

export default function CheckoutForm() {
  const { items, subtotal, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    postalCode: "",
    country: "India",
    card: "",
    expiry: "",
    cvc: "",
  });

  const shipping = subtotal >= 5000 ? 0 : 250;
  const total = subtotal + shipping;

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (items.length === 0) return;

    setSubmitted(true);
    clearCart();
  }

  if (submitted) {
    return (
      <div className="border-t border-black/15 pt-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/40">
          ATLAS / Order confirmed
        </p>

        <h1 className="mt-6 max-w-3xl text-6xl font-black uppercase leading-[0.82] tracking-[-0.075em] md:text-8xl">
          Thank
          <br />
          <span className="text-[#6d7355]">you.</span>
        </h1>

        <p className="mt-8 max-w-lg text-sm leading-6 text-black/55">
          Your demonstration order has been placed successfully. This is a
          portfolio checkout concept and no real payment or order will be
          processed.
        </p>

        <a
          href="/shop"
          className="mt-10 inline-flex bg-black px-7 py-4 text-[10px] font-bold uppercase tracking-[0.13em] text-white"
        >
          Continue shopping
        </a>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="border-y border-black/15 py-24 text-center">
        <p className="text-2xl font-medium tracking-[-0.03em]">
          Your bag is empty.
        </p>

        <a
          href="/shop"
          className="mt-8 inline-flex bg-black px-6 py-4 text-[10px] font-bold uppercase tracking-[0.13em] text-white"
        >
          Return to shop
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-16 lg:grid-cols-[1fr_380px]">
        <div>
          {/* Contact */}
          <div>
            <div className="mb-6 flex items-end justify-between border-b border-black/15 pb-4">
              <h2 className="text-lg font-bold">Contact</h2>
              <span className="text-[9px] uppercase tracking-[0.12em] text-black/35">
                01
              </span>
            </div>

            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
              placeholder="Email address"
              className="h-13 w-full border border-black/15 bg-transparent px-4 text-sm outline-none placeholder:text-black/30 focus:border-black"
            />
          </div>

          {/* Delivery */}
          <div className="mt-14">
            <div className="mb-6 flex items-end justify-between border-b border-black/15 pb-4">
              <h2 className="text-lg font-bold">Delivery</h2>
              <span className="text-[9px] uppercase tracking-[0.12em] text-black/35">
                02
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <input
                required
                value={form.firstName}
                onChange={(e) => updateField("firstName", e.target.value)}
                placeholder="First name"
                className="h-13 border border-black/15 bg-transparent px-4 text-sm outline-none placeholder:text-black/30 focus:border-black"
              />

              <input
                required
                value={form.lastName}
                onChange={(e) => updateField("lastName", e.target.value)}
                placeholder="Last name"
                className="h-13 border border-black/15 bg-transparent px-4 text-sm outline-none placeholder:text-black/30 focus:border-black"
              />
            </div>

            <div className="mt-3 space-y-3">
              <input
                required
                value={form.address}
                onChange={(e) => updateField("address", e.target.value)}
                placeholder="Address"
                className="h-13 w-full border border-black/15 bg-transparent px-4 text-sm outline-none placeholder:text-black/30 focus:border-black"
              />

              <input
                value={form.apartment}
                onChange={(e) => updateField("apartment", e.target.value)}
                placeholder="Apartment, suite, etc. (optional)"
                className="h-13 w-full border border-black/15 bg-transparent px-4 text-sm outline-none placeholder:text-black/30 focus:border-black"
              />

              <div className="grid gap-3 sm:grid-cols-3">
                <input
                  required
                  value={form.city}
                  onChange={(e) => updateField("city", e.target.value)}
                  placeholder="City"
                  className="h-13 border border-black/15 bg-transparent px-4 text-sm outline-none placeholder:text-black/30 focus:border-black"
                />

                <input
                  required
                  value={form.state}
                  onChange={(e) => updateField("state", e.target.value)}
                  placeholder="State"
                  className="h-13 border border-black/15 bg-transparent px-4 text-sm outline-none placeholder:text-black/30 focus:border-black"
                />

                <input
                  required
                  value={form.postalCode}
                  onChange={(e) => updateField("postalCode", e.target.value)}
                  placeholder="PIN code"
                  className="h-13 border border-black/15 bg-transparent px-4 text-sm outline-none placeholder:text-black/30 focus:border-black"
                />
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="mt-14">
            <div className="mb-6 flex items-end justify-between border-b border-black/15 pb-4">
              <div>
                <h2 className="text-lg font-bold">Payment</h2>
                <p className="mt-1 text-[10px] uppercase tracking-[0.1em] text-black/35">
                  Demo payment interface
                </p>
              </div>

              <span className="text-[9px] uppercase tracking-[0.12em] text-black/35">
                03
              </span>
            </div>

            <div className="border border-black/15 p-4">
              <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.1em]">
                <LockKeyhole size={13} strokeWidth={1.5} />
                Secure checkout
              </div>

              <input
                required
                value={form.card}
                onChange={(e) => updateField("card", e.target.value)}
                placeholder="Card number"
                inputMode="numeric"
                className="h-13 w-full border border-black/15 bg-transparent px-4 text-sm outline-none placeholder:text-black/30 focus:border-black"
              />

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <input
                  required
                  value={form.expiry}
                  onChange={(e) => updateField("expiry", e.target.value)}
                  placeholder="MM / YY"
                  className="h-13 border border-black/15 bg-transparent px-4 text-sm outline-none placeholder:text-black/30 focus:border-black"
                />

                <input
                  required
                  value={form.cvc}
                  onChange={(e) => updateField("cvc", e.target.value)}
                  placeholder="CVC"
                  inputMode="numeric"
                  className="h-13 border border-black/15 bg-transparent px-4 text-sm outline-none placeholder:text-black/30 focus:border-black"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Order summary */}
        <aside className="h-fit border-t border-black/15 pt-6 lg:sticky lg:top-28">
          <h2 className="text-lg font-bold">Order summary</h2>

          <div className="mt-7 space-y-5">
            {items.map((item, index) => (
              <div
                key={`${item.id}-${item.size}-${item.color}-${index}`}
                className="flex gap-4"
              >
                <div className="relative h-20 w-16 shrink-0 overflow-hidden bg-[#ebe8df]">
                  <img
                    src={`${item.image}?auto=format&fit=crop&w=250&q=80`}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />

                  <span className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center bg-black px-1 text-[8px] text-white">
                    {item.quantity}
                  </span>
                </div>

                <div className="flex flex-1 justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold">{item.name}</p>
                    <p className="mt-1 text-[9px] uppercase tracking-[0.1em] text-black/35">
                      {item.color}
                      {item.size && ` / ${item.size}`}
                    </p>
                  </div>

                  <span className="text-xs">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4 border-t border-black/15 pt-5 text-xs">
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

          <div className="mt-5 flex justify-between border-t border-black/15 pt-5">
            <span className="text-sm font-bold">Total</span>
            <span className="text-sm font-bold">{formatPrice(total)}</span>
          </div>

          <button
            type="submit"
            className="mt-7 flex h-14 w-full items-center justify-center bg-black text-[10px] font-bold uppercase tracking-[0.13em] text-white transition-colors hover:bg-[#6d7355]"
          >
            Place demonstration order
          </button>

          <p className="mt-4 text-center text-[9px] uppercase leading-4 tracking-[0.1em] text-black/35">
            No real payment will be processed
          </p>
        </aside>
      </div>
    </form>
  );
}
