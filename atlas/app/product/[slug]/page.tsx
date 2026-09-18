import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import ProductGallery from "@/components/product-gallery";
import ProductInfo from "@/components/product-info";
import RelatedProducts from "@/components/related-products";
import { products, getProduct } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f5f3ee]">
      <Navbar />

      <section className="mx-auto max-w-[1440px] px-5 pb-24 pt-28 md:px-8 md:pb-32 md:pt-36">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <ProductGallery product={product} />

          <div className="lg:sticky lg:top-28 lg:h-fit">
            <ProductInfo product={product} />
          </div>
        </div>

        <RelatedProducts currentId={product.id} />
      </section>
    </main>
  );
}
