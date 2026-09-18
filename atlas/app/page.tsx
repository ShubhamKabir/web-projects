import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Featured from "@/components/featured";
import Statement from "@/components/statement";
import CategoryPreview from "@/components/category-preview";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Featured />
      <Statement />
      <CategoryPreview />
      <Footer />
    </main>
  );
}
