import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Clock, Target } from "lucide-react";
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
    metrics: {
      accuracy: "94%",
      processing: "3x Faster",
      savings: "$12M Annually",
      models: "15+ ML Models"
    },
    tags: ["Machine Learning", "Risk Management", "FinTech"]
  },
  {
    id: "retail-automation",
    title: "Autonomous Inventory Management",
    client: "Leading Retail Chain",
    description: "Deployed self-governing systems for inventory optimization across 500+ stores",
    image: automation,
    metrics: {
      accuracy: "89%",
      reduction: "35% Less Waste",
      savings: "$8M Saved",
      stores: "500+ Locations"
    },
    tags: ["Automation", "Retail", "Supply Chain"]
  },
  {
    id: "healthcare-prediction",
    title: "Predictive Patient Care",
    client: "National Healthcare Provider",
    description: "AI-driven patient monitoring and early intervention system saving lives daily",
    image: infrastructure,
    metrics: {
      accuracy: "91%",
      detection: "48hrs Earlier",
      patients: "100K+ Monitored",
      reduction: "28% Readmissions"
    },
    tags: ["Healthcare", "Predictive Analytics", "IoT"]
  },
  {
    id: "manufacturing-optimization",
    title: "Smart Factory Optimization",
    client: "Global Manufacturing Corporation",
    description: "End-to-end AI integration for predictive maintenance and quality control",
    image: dataViz,
    metrics: {
      uptime: "99.7%",
      quality: "45% Defect Reduction",
      efficiency: "38% Higher Output",
      savings: "$15M Yearly"
    },
    tags: ["Manufacturing", "IoT", "Quality Control"]
  },
  {
    id: "insurance-claims",
    title: "Automated Claims Processing",
    client: "Fortune 500 Insurance Company",
    description: "Intelligent document processing and fraud detection system",
    image: mlProcess,
    metrics: {
      automation: "85%",
      speed: "10x Faster",
      fraud: "62% Fraud Detection",
      satisfaction: "4.8/5 Rating"
    },
    tags: ["Insurance", "NLP", "Fraud Detection"]
  },
  {
    id: "telecom-network",
    title: "Network Intelligence Platform",
    client: "Leading Telecom Provider",
    description: "Self-healing network infrastructure with predictive outage prevention",
    image: digitalTransform,
    metrics: {
      uptime: "99.99%",
      prediction: "72hrs Advance",
      reduction: "55% Fewer Outages",
      coverage: "50M+ Users"
    },
    tags: ["Telecom", "Infrastructure", "Predictive Maintenance"]
  }
];

export default function ScrollingProjects() {
  const [, setLocation] = useLocation();

  return (
    <section className="py-20 md:py-32 relative overflow-hidden" id="projects" data-testid="section-projects">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />
      
      <div className="relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-up px-8">
          <h2 className="text-4xl md:text-5xl font-bold" data-testid="text-projects-title">
            Transforming <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">Industries</span> with AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-projects-description">
            Explore our portfolio of successful AI implementations across diverse sectors
          </p>
        </div>

        {/* Scrolling container */}
        <div className="relative">
          <div 
            className="flex gap-6 animate-scroll-left"
          >
            {/* Duplicate projects for infinite scroll */}
            {[...projects, ...projects].map((project, index) => (
              <Card
                key={`${project.id}-${index}`}
                className="flex-shrink-0 w-[400px] overflow-hidden border-primary/10 hover:border-primary/30 transition-all cursor-pointer group"
                onClick={() => setLocation(`/project/${project.id}`)}
                data-testid={`project-card-${index}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm text-xs font-medium text-primary border border-primary/30">
                      {project.client}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold" data-testid={`project-title-${index}`}>
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                      <div key={key} className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full group/btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLocation(`/project/${project.id}`);
                    }}
                    data-testid={`project-button-${index}`}
                  >
                    View Case Study
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}