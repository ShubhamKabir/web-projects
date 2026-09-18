import Navbar from "@/components/navbar";
import ShopGrid from "@/components/shop-grid";
import Footer from "@/components/footer";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ee]">
      <Navbar />

      <section className="mx-auto max-w-[1440px] px-5 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40">
        <div className="mb-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/40">
            ATLAS / Shop
          </p>

          <h1 className="mt-6 max-w-4xl text-6xl font-black uppercase leading-[0.82] tracking-[-0.075em] md:text-8xl">
            Everything
            <br />
            <span className="text-[#6d7355]">in its place.</span>
          </h1>

          <p className="mt-8 max-w-md text-sm leading-6 text-black/55">
            A considered collection of everyday apparel and accessories,
            designed around simplicity and longevity.
          </p>
        </div>

        <ShopGrid />
      </section>
      <Footer />
    </main>
  );
}
