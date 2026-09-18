import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Product from "@/components/product";
import HowItWorks from "@/components/how-it-works";
import Features from "@/components/features";
import ProductPreview from "@/components/product-preview";
import UseCases from "@/components/use-cases";
import WhyNova from "@/components/why-nova";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0a0f]">
      <Navbar />
      <Hero />
      <Product />
      <HowItWorks />
      <Features />
      <ProductPreview />
      <UseCases />
      <WhyNova />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
