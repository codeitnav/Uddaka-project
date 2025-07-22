import Header from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import AboutPage from "@/components/AboutSection"
import ServicesSection from "@/components/ServiceSection"
import HowItWorksSection from "@/components/HowItWorksSection"
import ContactSection from "@/components/ContactSection"
import FAQSection from "@/components/FAQ-section"
import Footer from "@/components/Footer"
import ScrollReveal from "@/components/Scroll-reveal"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      
      <ScrollReveal direction="up" delay={100} duration={800}>
        <AboutPage />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100} duration={800}>
        <ServicesSection />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100} duration={800}>
        <HowItWorksSection />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100} duration={800}>
        <ContactSection />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100} duration={800}>
        <FAQSection />
      </ScrollReveal>
      <Footer />
    </div>
  );
};

export default Index