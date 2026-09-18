import Navbar from "@/components/navbar";
import ProductCard from "@/components/product-card";
import { products } from "@/lib/products";

export default function AccessoriesPage() {
  const accessories = products.filter(
    (product) => product.category === "Accessories",
  );

  return (
    <main className="min-h-screen bg-[#f5f3ee]">
      <Navbar />

      <section className="mx-auto max-w-[1440px] px-5 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40">
        <div className="mb-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/40">
            ATLAS / Category
          </p>

          <h1 className="mt-6 text-6xl font-black uppercase leading-[0.82] tracking-[-0.075em] md:text-8xl">
            Accessories
          </h1>

          <p className="mt-8 max-w-md text-sm leading-6 text-black/55">
            Functional objects and finishing pieces made for everyday use.
          </p>
        </div>

        <div className="grid gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {accessories.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
