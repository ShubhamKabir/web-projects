import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Work from "@/components/work";
import Services from "@/components/services";
import Approach from "@/components/approach";
import Capabilities from "@/components/capabilities";
import Studio from "@/components/studio";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Work />
      <Services />
      <Approach />
      <Capabilities />
      <Studio />
      <Contact />
      <Footer />
    </main>
  );
}
