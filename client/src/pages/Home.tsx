import VideoHero from "@/components/VideoHero";
import FounderSection from "@/components/FounderSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ScrollingProjects from "@/components/ScrollingProjects";
import TechnologyStack from "@/components/TechnologyStack";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <VideoHero />
      <AboutSection />
      <ServicesSection />
      <ScrollingProjects />
      <TechnologyStack />
      <ContactSection />
      <FounderSection />
      <Footer />
    </div>
  );
}