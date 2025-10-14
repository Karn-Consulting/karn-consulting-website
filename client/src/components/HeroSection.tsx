import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logoImage from "@assets/image_1760332792562.png";
import heroImage from "@assets/stock_images/abstract_ai_neural_n_80bec60a.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: "linear-gradient(135deg, hsl(220 75% 12%) 0%, hsl(215 85% 55%) 100%)",
          backgroundSize: "200% 200%",
        }}
      />
      

      <div className="absolute top-0 left-0 right-0 z-10 p-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <img 
            src={logoImage} 
            alt="Karn Consulting" 
            className="h-16 md:h-20 w-auto object-contain"
            data-testid="img-logo" 
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Intelligent Solutions
            </span>
            <br />
            <span className="text-foreground">for Tomorrow</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl" data-testid="text-hero-description">
            Transform your business with cutting-edge AI, ML, and Self-Governing Intelligent Systems. 
            We deliver sophisticated solutions that adapt, learn, and evolve with your needs.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="group"
              data-testid="button-get-started"
              onClick={() => console.log('Get Started clicked')}
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="backdrop-blur-sm"
              data-testid="button-our-solutions"
              onClick={() => console.log('Our Solutions clicked')}
            >
              Our Solutions
            </Button>
          </div>
        </div>

        <div className="relative animate-scale-in" style={{ animationDelay: "0.2s" }}>
          <img 
            src={heroImage} 
            alt="AI Neural Network" 
            className="rounded-lg shadow-2xl border border-primary/20"
            data-testid="img-hero"
          />
        </div>
      </div>
    </section>
  );
}