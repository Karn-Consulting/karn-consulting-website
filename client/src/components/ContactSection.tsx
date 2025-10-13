import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { useState } from "react";
import { LeadFormDialog } from "./LeadFormDialog";
import ctaImage from "@assets/stock_images/business_team_collab_87805356.jpg";

export default function ContactSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section className="py-20 md:py-32 px-8 relative" id="contact" data-testid="section-contact">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold" data-testid="text-contact-title">
            Let's <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">Build the Future</span> Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-description">
            Ready to transform your business with Self-Governing Intelligent Solutions? Get in touch with our AI/ML experts
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-8 border-primary/10 text-center space-y-4 hover-elevate" data-testid="card-email">
            <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-2" data-testid="text-email-title">Email Us</h3>
              <p className="text-sm text-muted-foreground" data-testid="text-email-value">support@karnconsulting.co</p>
            </div>
          </Card>

          <Card className="p-8 border-primary/10 text-center space-y-4 hover-elevate" data-testid="card-phone">
            <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-2" data-testid="text-phone-title">Call Us</h3>
              <p className="text-sm text-muted-foreground" data-testid="text-phone-value">+91-7576956682</p>
            </div>
          </Card>

          <Card className="p-8 border-primary/10 text-center space-y-4 hover-elevate" data-testid="card-location">
            <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-2" data-testid="text-location-title">Visit Us</h3>
              <p className="text-sm text-muted-foreground" data-testid="text-location-value">India</p>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-12">
          <Button 
            size="lg" 
            className="group animate-scale-in"
            onClick={() => setIsDialogOpen(true)}
            data-testid="button-cta-primary"
          >
            Start Your AI Transformation
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* CTA Image */}
        <Card 
          className="max-w-4xl mx-auto overflow-hidden border-primary/10 cursor-pointer hover-elevate transition-all duration-300 animate-fade-up"
          onClick={() => setIsDialogOpen(true)}
          data-testid="card-cta-image"
        >
          <div className="relative group">
            <img 
              src={ctaImage} 
              alt="Transform your business with AI" 
              className="w-full h-[400px] object-cover"
              data-testid="image-cta"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <h3 className="text-2xl font-bold text-foreground">
                  Ready to Get Started?
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Join leading companies transforming their operations with our Self-Governing Intelligent Solutions
                </p>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="mt-4"
                  data-testid="button-cta-overlay"
                >
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Lead Form Dialog */}
        <LeadFormDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      </div>
    </section>
  );
}