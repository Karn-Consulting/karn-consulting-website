import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, CheckCircle2 } from "lucide-react";
import { useLocation } from "wouter";
import aiDashboard from "@assets/stock_images/modern_business_prof_66fe6da9.jpg";
import automation from "@assets/stock_images/automated_workflow_d_d41ad38e.jpg";
import infrastructure from "@assets/stock_images/futuristic_technolog_2c39519e.jpg";
import dataViz from "@assets/stock_images/futuristic_data_visu_72a9fc1b.jpg";
import mlProcess from "@assets/stock_images/artificial_intellige_2f43adbb.jpg";
import digitalTransform from "@assets/stock_images/digital_transformati_b71991f3.jpg";

const projects = [
  {
    id: "major-bank-ai",
    title: "AI-Powered Risk Assessment",
    client: "Major International Bank",
    description: "Revolutionized credit risk assessment with ML models, reducing default rates by 42%",
    image: aiDashboard,
    metric1: { icon: "check", label: "94% Accuracy" },
    metric2: { icon: "trending", label: "3x Faster Processing" },
    tags: ["Machine Learning", "Risk Management", "FinTech"]
  },
  {
    id: "retail-automation",
    title: "Autonomous Inventory Management",
    client: "Leading Retail Chain",
    description: "Deployed self-governing systems for inventory optimization across 500+ stores",
    image: automation,
    metric1: { icon: "check", label: "89% Accuracy" },
    metric2: { icon: "trending", label: "35% Less Waste" },
    tags: ["Automation", "Retail", "Supply Chain"]
  },
  {
    id: "healthcare-prediction",
    title: "Predictive Patient Care",
    client: "National Healthcare Provider",
    description: "AI-driven patient monitoring and early intervention system saving lives daily",
    image: infrastructure,
    metric1: { icon: "check", label: "91% Accuracy" },
    metric2: { icon: "trending", label: "48hrs Earlier Detection" },
    tags: ["Healthcare", "Predictive Analytics", "IoT"]
  },
  {
    id: "manufacturing-optimization",
    title: "Smart Factory Optimization",
    client: "Global Manufacturing Corporation",
    description: "End-to-end AI integration for predictive maintenance and quality control",
    image: dataViz,
    metric1: { icon: "check", label: "99.7% Uptime" },
    metric2: { icon: "trending", label: "45% Defect Reduction" },
    tags: ["Manufacturing", "IoT", "Quality Control"]
  },
  {
    id: "insurance-claims",
    title: "Automated Claims Processing",
    client: "Fortune 500 Insurance Company",
    description: "Intelligent document processing and fraud detection system",
    image: mlProcess,
    metric1: { icon: "check", label: "85% Automation" },
    metric2: { icon: "trending", label: "10x Faster Processing" },
    tags: ["Insurance", "NLP", "Fraud Detection"]
  },
  {
    id: "telecom-network",
    title: "Network Intelligence Platform",
    client: "Leading Telecom Provider",
    description: "Self-healing network infrastructure with predictive outage prevention",
    image: digitalTransform,
    metric1: { icon: "check", label: "99.99% Uptime" },
    metric2: { icon: "trending", label: "55% Fewer Outages" },
    tags: ["Telecom", "Infrastructure", "Predictive Maintenance"]
  }
];

export default function ScrollingProjects() {
  const [, setLocation] = useLocation();

  return (
    <section className="py-20 md:py-32 relative overflow-hidden" id="case-studies" data-testid="section-projects">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />
      
      <div className="relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-up px-8">
          <h2 className="text-4xl md:text-5xl font-bold" data-testid="text-projects-title">
            Our <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">Case Studies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-projects-description">
            Real success stories of AI transformation across diverse industries
          </p>
        </div>

        {/* Horizontal Auto-Scrolling Container */}
        <div className="relative px-8">
          {/* Gradient fade indicators on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="overflow-hidden">
            {/* Auto-scrolling animation wrapper - Right to Left */}
            <div className="case-studies-scroll-rtl flex gap-8">
              {/* Duplicate the cards twice for seamless infinite loop */}
              {[...projects, ...projects].map((project, index) => (
                <div
                  key={`${project.id}-${index}`}
                  className="flex-shrink-0 w-[380px] group cursor-pointer"
                  onClick={() => setLocation(`/case-studies/${project.id}`)}
                >
                  {/* Vertical Card */}
                  <div className="bg-card/50 border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 h-full flex flex-col backdrop-blur-sm hover:-translate-y-2">
                    
                    {/* Image Section - Full Width at Top */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/20 to-transparent" />
                      
                      {/* Client Badge Overlay - Top Left */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1.5 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold rounded-full shadow-lg">
                          {project.client}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content Section - Vertical Stack */}
                    <div className="p-6 flex-1 flex flex-col space-y-4">
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">
                        {project.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                        {project.description}
                      </p>
                      
                      {/* Metrics - Horizontal Row with Icons */}
                      <div className="flex items-center gap-6 py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            {project.metric1.icon === "check" ? (
                              <CheckCircle2 className="h-4 w-4 text-primary" />
                            ) : (
                              <TrendingUp className="h-4 w-4 text-primary" />
                            )}
                          </div>
                          <span className="text-sm font-semibold">{project.metric1.label}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            {project.metric2.icon === "check" ? (
                              <CheckCircle2 className="h-4 w-4 text-primary" />
                            ) : (
                              <TrendingUp className="h-4 w-4 text-primary" />
                            )}
                          </div>
                          <span className="text-sm font-semibold">{project.metric2.label}</span>
                        </div>
                      </div>
                      
                      {/* Tags - Pill-shaped Chips */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-full font-medium hover:bg-primary/20 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* CTA Button - Full Width */}
                      <div className="pt-2">
                        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary rounded-xl font-semibold text-sm transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                          View Case Study
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 px-8">
          <Button
            size="lg"
            className="group shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all"
            onClick={() => setLocation("/case-studies")}
          >
            View All Case Studies
            <TrendingUp className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
