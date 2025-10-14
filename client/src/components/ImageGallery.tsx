import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import image1 from "@assets/stock_images/digital_transformati_5203ee9d.jpg";
import image2 from "@assets/stock_images/futuristic_data_visu_72a9fc1b.jpg";
import image3 from "@assets/stock_images/artificial_intellige_2f43adbb.jpg";
import image4 from "@assets/stock_images/automated_workflow_d_d41ad38e.jpg";
import image5 from "@assets/stock_images/futuristic_technolog_2c39519e.jpg";
import image6 from "@assets/stock_images/modern_business_prof_66fe6da9.jpg";

const images = [
  { 
    src: image1, 
    title: "Neural Network Architecture", 
    category: "AI Infrastructure",
    description: "Advanced neural networks powering next-generation AI solutions. Our deep learning models process millions of data points in real-time, enabling predictive analytics and intelligent decision-making across enterprise systems."
  },
  { 
    src: image2, 
    title: "Real-Time Data Analytics", 
    category: "Business Intelligence",
    description: "Interactive dashboards and visualization tools that transform complex data into actionable insights. Our analytics platforms help executives make data-driven decisions with confidence and precision."
  },
  { 
    src: image3, 
    title: "Intelligent Automation", 
    category: "Machine Learning",
    description: "Self-learning systems that continuously improve performance. Our ML models adapt to changing business conditions, automating complex workflows while maintaining human-level accuracy."
  },
  { 
    src: image4, 
    title: "Workflow Orchestration", 
    category: "Process Automation",
    description: "End-to-end automation of business processes using intelligent agents. Our solutions reduce manual work by 85% while improving accuracy and compliance across operations."
  },
  { 
    src: image5, 
    title: "Cloud Infrastructure", 
    category: "Technology Platform",
    description: "Scalable, secure cloud architectures designed for AI workloads. Our infrastructure solutions handle billions of transactions daily with 99.99% uptime and enterprise-grade security."
  },
  { 
    src: image6, 
    title: "Strategic Consulting", 
    category: "Digital Transformation",
    description: "Expert guidance for your AI journey. Our consultants work closely with your team to identify opportunities, implement solutions, and ensure successful digital transformation."
  },
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage === null) return;
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") setSelectedImage(null);
  };

  return (
    <section className="py-20 md:py-32 px-8 relative overflow-hidden" data-testid="section-gallery">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-chart-2/5" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold" data-testid="text-gallery-title">
            Our <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-gallery-description">
            Discover how we've transformed businesses with cutting-edge AI solutions and delivered measurable impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden border-primary/10 group cursor-pointer animate-scale-in hover-elevate active-elevate-2"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedImage(index)}
              data-testid={`gallery-item-${index}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  data-testid={`gallery-image-${index}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-primary" data-testid={`gallery-category-${index}`}>
                      {image.category}
                    </p>
                    <h3 className="text-lg font-semibold text-foreground" data-testid={`gallery-title-${index}`}>
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog 
        open={selectedImage !== null} 
        onOpenChange={(open) => !open && setSelectedImage(null)}
      >
        <DialogContent 
          className="max-w-6xl p-0 gap-0 overflow-hidden"
          onKeyDown={handleKeyDown as any}
        >
          {selectedImage !== null && (
            <div className="relative">
              {/* Image Container */}
              <div className="relative bg-background">
                <img 
                  src={images[selectedImage].src} 
                  alt={images[selectedImage].title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                
                {/* Navigation Buttons */}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
                  onClick={handlePrevious}
                  data-testid="button-previous"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
                  onClick={handleNext}
                  data-testid="button-next"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>

                {/* Close Button */}
                <DialogClose asChild>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-4 top-4 bg-background/80 backdrop-blur-sm hover:bg-background/90"
                    data-testid="button-close"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </DialogClose>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-4 bg-card/95 backdrop-blur-sm border-t border-primary/10">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-primary">
                    {images[selectedImage].category}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {images[selectedImage].title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {images[selectedImage].description}
                </p>
                
                {/* Image Counter */}
                <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                  <span className="text-sm text-muted-foreground">
                    Image {selectedImage + 1} of {images.length}
                  </span>
                  <div className="flex gap-1">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === selectedImage 
                            ? 'bg-primary w-6' 
                            : 'bg-primary/30 hover:bg-primary/50'
                        }`}
                        data-testid={`dot-${index}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}