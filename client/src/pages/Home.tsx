import VideoHero from "@/components/VideoHero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import VideoShowcase from "@/components/VideoShowcase";
import TechnologyStack from "@/components/TechnologyStack";
import ImageGallery from "@/components/ImageGallery";
import CaseStudies from "@/components/CaseStudies";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <VideoHero />
      <AboutSection />
      <ServicesSection />
      <VideoShowcase />
      <TechnologyStack />
      <ImageGallery />
      <CaseStudies />
      <ContactSection />
      <Footer />
    </div>
  );
}