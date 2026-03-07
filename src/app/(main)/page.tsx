import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="section-divider" />
      <ServicesSection />
      <div className="section-divider" />
      <PortfolioPreview />
      <div className="section-divider" />
      <IntroSection />
      <div className="section-divider" />
      <WhyChooseSection />
      <div className="section-divider" />
      <CTASection />
    </>
  );
}
