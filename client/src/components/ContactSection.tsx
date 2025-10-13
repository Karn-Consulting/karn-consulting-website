import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-20 md:py-32 px-8 relative" id="contact" data-testid="section-contact">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold" data-testid="text-contact-title">
            Let's <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">Build the Future</span> Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-description">
            Ready to transform your business with AI? Get in touch with our team of experts
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-8 border-primary/10 text-center space-y-4 hover-elevate" data-testid="card-email">
            <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-2" data-testid="text-email-title">Email Us</h3>
              <p className="text-sm text-muted-foreground" data-testid="text-email-value">contact@karnconsulting.ai</p>
            </div>
          </Card>

          <Card className="p-8 border-primary/10 text-center space-y-4 hover-elevate" data-testid="card-phone">
            <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-2" data-testid="text-phone-title">Call Us</h3>
              <p className="text-sm text-muted-foreground" data-testid="text-phone-value">+1 (555) 123-4567</p>
            </div>
          </Card>

          <Card className="p-8 border-primary/10 text-center space-y-4 hover-elevate" data-testid="card-location">
            <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-2" data-testid="text-location-title">Visit Us</h3>
              <p className="text-sm text-muted-foreground" data-testid="text-location-value">San Francisco, CA</p>
            </div>
          </Card>
        </div>

        <Card className="p-8 md:p-12 border-primary/10 max-w-3xl mx-auto backdrop-blur-sm bg-card/50 animate-scale-in" data-testid="card-contact-form">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name *</label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border-primary/20 focus:border-primary"
                  data-testid="input-name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email *</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-primary/20 focus:border-primary"
                  data-testid="input-email"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium">Company</label>
              <Input
                id="company"
                placeholder="Your company name"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="border-primary/20 focus:border-primary"
                data-testid="input-company"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message *</label>
              <Textarea
                id="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="border-primary/20 focus:border-primary min-h-32"
                data-testid="input-message"
                required
              />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full md:w-auto"
              data-testid="button-submit"
            >
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}