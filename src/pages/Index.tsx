import Hero from "@/components/landing/Hero";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import HowItWorks from "@/components/landing/HowItWorks";
import Testimonials from "@/components/landing/Testimonials";
import Objections from "@/components/landing/Objections";
import Guarantee from "@/components/landing/Guarantee";
import Bonuses from "@/components/landing/Bonuses";
import Urgency from "@/components/landing/Urgency";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <Testimonials />
      <Objections />
      <Guarantee />
      <Bonuses />
      <Urgency />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
