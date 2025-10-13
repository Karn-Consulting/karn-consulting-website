import VideoHero from "@/components/VideoHero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ScrollingProjects from "@/components/ScrollingProjects";
import VideoShowcase from "@/components/VideoShowcase";
import TechnologyStack from "@/components/TechnologyStack";
import ImageGallery from "@/components/ImageGallery";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <VideoHero />
      <AboutSection />
      <ServicesSection />
      <ScrollingProjects />
      <VideoShowcase />
      <TechnologyStack />
      <ImageGallery />
      <ContactSection />
      <Footer />
    </div>
  );
}