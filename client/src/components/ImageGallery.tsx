import { Card } from "@/components/ui/card";
import image1 from "@assets/stock_images/digital_transformati_5203ee9d.jpg";
import image2 from "@assets/stock_images/futuristic_data_visu_72a9fc1b.jpg";
import image3 from "@assets/stock_images/artificial_intellige_2f43adbb.jpg";
import image4 from "@assets/stock_images/automated_workflow_d_d41ad38e.jpg";
import image5 from "@assets/stock_images/futuristic_technolog_2c39519e.jpg";
import image6 from "@assets/stock_images/modern_business_prof_66fe6da9.jpg";

const images = [
  { src: image1, title: "Digital Innovation", category: "Transformation" },
  { src: image2, title: "Data Visualization", category: "Analytics" },
  { src: image3, title: "AI Integration", category: "Machine Learning" },
  { src: image4, title: "Workflow Automation", category: "Systems" },
  { src: image5, title: "Cloud Infrastructure", category: "Technology" },
  { src: image6, title: "Business Intelligence", category: "Solutions" },
];

export default function ImageGallery() {
  return (
    <section className="py-20 md:py-32 px-8 relative overflow-hidden" data-testid="section-gallery">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-chart-2/5" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold" data-testid="text-gallery-title">
            Visualizing <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">The Future</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-gallery-description">
            Explore our portfolio of AI-driven transformations and intelligent solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden border-primary/10 group cursor-pointer animate-scale-in hover-elevate active-elevate-2"
              style={{ animationDelay: `${index * 0.05}s` }}
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
    </section>
  );
}