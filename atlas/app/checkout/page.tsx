import Navbar from "@/components/navbar";
import CheckoutForm from "@/components/checkout-form";
import Footer from "@/components/footer";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ee]">
      <Navbar />

      <section className="mx-auto max-w-[1440px] px-5 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40">
        <div className="mb-14">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/40">
            ATLAS / Checkout
          </p>

          <h1 className="mt-6 text-6xl font-black uppercase leading-[0.82] tracking-[-0.075em] md:text-8xl">
            Complete
            <br />
            <span className="text-[#6d7355]">your order.</span>
          </h1>
        </div>

        <CheckoutForm />
      </section>
      <Footer />
    </main>
  );
}
