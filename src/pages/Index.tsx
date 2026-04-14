import { HeroSection } from "@/components/HeroSection";
import { PainPointsSection } from "@/components/PainPointsSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AuthoritySection } from "@/components/AuthoritySection";
import { FaqSection } from "@/components/FaqSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { FloatingWhatsApp } from "@/components/WhatsAppButton";

const Index = () => (
  <>
    <HeroSection />
    <PainPointsSection />
    <DifferentialsSection />
    <WhyChooseSection />
    <ServicesSection />
    <TestimonialsSection />
    <AuthoritySection />
    <FaqSection />
    <FinalCtaSection />
    <footer className="bg-foreground py-6 text-center text-sm text-background/60">
      <p>© {new Date().getFullYear()} C.F.C — Rio Verde, GO.</p>
    </footer>
    <FloatingWhatsApp />
  </>
);

export default Index;
