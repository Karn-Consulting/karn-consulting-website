import { Card } from "@/components/ui/card";
import { Brain, Cog, LineChart, Shield, Sparkles, Zap } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Custom AI models and ML solutions tailored to your business objectives, from predictive analytics to natural language processing.",
  },
  {
    icon: Cog,
    title: "Self-Governing Systems",
    description: "Autonomous intelligent systems that monitor, adapt, and optimize operations without human intervention.",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "Advanced analytics and forecasting models that transform data into actionable business insights.",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Intelligent automation solutions that streamline workflows and enhance operational efficiency.",
  },
  {
    icon: Shield,
    title: "AI Security & Compliance",
    description: "Secure AI implementations with built-in compliance and ethical AI governance frameworks.",
  },
  {
    icon: Sparkles,
    title: "Innovation Consulting",
    description: "Strategic guidance on AI adoption, technology roadmaps, and digital transformation initiatives.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-32 px-8 relative" id="services" data-testid="section-services">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold" data-testid="text-services-title">
            Our <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-description">
            Comprehensive AI and ML services designed to accelerate your digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 border-primary/10 hover-elevate active-elevate-2 transition-all duration-300 group cursor-pointer animate-scale-in bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => console.log(`${service.title} clicked`)}
                data-testid={`card-service-${index}`}
              >
                <div className="mb-6 relative">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3" data-testid={`text-service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`text-service-description-${index}`}>
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}