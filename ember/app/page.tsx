import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Introduction from "@/components/introduction";
import Experience from "@/components/experience";
import Menu from "@/components/menu";
import SignatureDishes from "@/components/signature-dishes";
import Kitchen from "@/components/kitchen";
import Gallery from "@/components/gallery";
import Reservations from "@/components/reservations";
import Visit from "@/components/visit";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <Hero />
      <Introduction />
      <Experience />
      <Menu />
      <SignatureDishes />
      <Kitchen />
      <Gallery />
      <Reservations />
      <Visit />
      <Footer />
    </main>
  );
}
