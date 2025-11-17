import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
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

        {/* CSS Auto-scrolling Container - Desktop Only */}
        <div className="relative px-8">
          {/* Gradient fade indicators on edges */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="overflow-x-auto scrollbar-hide">
            {/* Desktop: Auto-scrolling animation wrapper */}
            <div className="hidden md:block">
              <div className="case-studies-autoscroll flex gap-6">
                {/* Duplicate the cards for seamless loop */}
                {[...projects, ...projects].map((project, index) => (
                  <div
                    key={`${project.id}-${index}`}
                    className="flex-shrink-0 w-[380px] group cursor-pointer"
                    onClick={() => setLocation(`/case-studies/${project.id}`)}
                  >
                    <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      </div>
                      
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="text-sm text-muted-foreground mb-2">{project.client}</div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 flex-1">
                          {project.description}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          {Object.entries(project.metrics).map(([key, value]) => (
                            <div key={key} className="text-center p-2 bg-muted/50 rounded">
                              <div className="text-lg font-bold text-primary">{value}</div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <span key={tag} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          View Case Study
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile: Manual scroll */}
            <div className="md:hidden flex gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex-shrink-0 w-[320px] group cursor-pointer"
                  onClick={() => setLocation(`/case-studies/${project.id}`)}
                >
                  <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="text-sm text-muted-foreground mb-2">{project.client}</div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-1">
                        {project.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="text-center p-2 bg-muted/50 rounded">
                            <div className="text-lg font-bold text-primary">{value}</div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12 px-8">
          <Button
            size="lg"
            className="group"
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
