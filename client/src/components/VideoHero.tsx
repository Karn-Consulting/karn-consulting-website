import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import logoImage from "@assets/image_1760332792562.png";
import heroImage from "@assets/stock_images/abstract_ai_neural_n_80bec60a.jpg";
import { useState } from "react";

export default function VideoHero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Fallback Image */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster={heroImage}
        >
          <source src="https://cdn.pixabay.com/video/2021/04/16/71612-543486644_large.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 opacity-40 z-20"
        style={{
          background: "linear-gradient(135deg, hsl(220 75% 12% / 0.9) 0%, hsl(215 85% 55% / 0.7) 100%)",
        }}
      />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 opacity-30 z-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/30 blur-3xl rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-40 h-40 bg-primary/20 blur-3xl rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-32 left-1/4 w-36 h-36 bg-primary/25 blur-3xl rounded-full animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Navigation Header */}
      <div className="absolute top-0 left-0 right-0 z-30 p-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-chart-2/30 blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-background/20 backdrop-blur-md rounded-lg px-4 py-2 border border-primary/10">
              <img 
                src={logoImage} 
                alt="Karn Consulting" 
                className="h-14 md:h-16 w-auto object-contain"
                style={{ 
                  filter: "brightness(1.3) contrast(1.2) drop-shadow(0 0 20px rgba(79, 172, 254, 0.5))"
                }}
                data-testid="img-logo" 
              />
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors" data-testid="nav-services">Services</a>
            <a href="#technology" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors" data-testid="nav-technology">Technology</a>
            <a href="#case-studies" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors" data-testid="nav-case-studies">Case Studies</a>
            <a href="#contact" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors" data-testid="nav-contact">Contact</a>
          </nav>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-8 py-20 text-center">
        <div className="space-y-8 animate-fade-up max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary" data-testid="text-badge">Leading AI & ML Innovation</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Intelligent Solutions
            </span>
            <br />
            <span className="text-foreground">for Tomorrow's Challenges</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto" data-testid="text-hero-description">
            Transform your business with cutting-edge AI, ML, and Self-Governing Intelligent Systems. 
            We deliver sophisticated solutions that adapt, learn, and evolve with your needs.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
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
              className="backdrop-blur-sm bg-background/10 border-foreground/20 hover:bg-background/20"
              data-testid="button-watch-demo"
              onClick={() => setIsVideoPlaying(!isVideoPlaying)}
            >
              <Play className="mr-2 w-4 h-4" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-3 bg-primary/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}