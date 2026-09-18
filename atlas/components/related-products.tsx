import { products } from "@/lib/products";
import ProductCard from "./product-card";

export default function RelatedProducts({ currentId }: { currentId: number }) {
  const related = products
    .filter((product) => product.id !== currentId)
    .slice(0, 4);

  return (
    <section className="mt-24 border-t border-black/15 pt-16 md:mt-32">
      <div className="mb-10">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/40">
          You may also like
        </p>

        <h2 className="mt-4 text-3xl font-black uppercase tracking-[-0.05em] md:text-4xl">
          Complete the collection
        </h2>
      </div>

      <div className="grid gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {related.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
