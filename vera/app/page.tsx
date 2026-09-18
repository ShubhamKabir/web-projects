import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Workflow from "@/components/workflow";
import EvidenceMatrix from "@/components/evidence-matrix";
import KnowledgeCanvas from "@/components/knowledge-canvas";
import AIAnalysis from "@/components/ai-analysis";
import ReportStudio from "@/components/report-studio";
import Features from "@/components/features";
import Solutions from "@/components/solutions";
import Trust from "@/components/trust";
import Pricing from "@/components/pricing";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <Hero />
      <Workflow />
      <EvidenceMatrix />
      <KnowledgeCanvas />
      <AIAnalysis />
      <ReportStudio />
      <Features />
      <Solutions />
      <Trust />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
