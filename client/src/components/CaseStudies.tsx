import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import aiDashboard from "@assets/stock_images/modern_business_prof_66fe6da9.jpg";
import automation from "@assets/stock_images/automated_workflow_d_d41ad38e.jpg";
import infrastructure from "@assets/stock_images/futuristic_technolog_2c39519e.jpg";

const caseStudies = [
  {
    title: "AI-Powered Analytics Platform",
    description: "Revolutionized data insights for a Fortune 500 company with real-time predictive analytics and custom ML models.",
    image: aiDashboard,
    metrics: [
      { value: "85%", label: "Accuracy Increase" },
      { value: "60%", label: "Time Saved" },
    ],
  },
  {
    title: "Autonomous Workflow System",
    description: "Deployed self-governing intelligent systems that automated complex business processes across multiple departments.",
    image: automation,
    metrics: [
      { value: "70%", label: "Cost Reduction" },
      { value: "3x", label: "Faster Processing" },
    ],
  },
  {
    title: "Cloud Infrastructure AI",
    description: "Built scalable AI infrastructure on cloud platforms enabling seamless deployment and monitoring of ML models.",
    image: infrastructure,
    metrics: [
      { value: "99.9%", label: "Uptime" },
      { value: "50%", label: "Infrastructure Cost Saved" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section className="py-20 md:py-32 px-8" id="case-studies" data-testid="section-case-studies">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold" data-testid="text-case-studies-title">
            Proven <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">Results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-case-studies-description">
            Real-world impact across industries, powered by intelligent AI solutions
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="overflow-hidden border-primary/10 hover-elevate active-elevate-2 transition-all cursor-pointer group animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
              onClick={() => console.log(`${study.title} clicked`)}
              data-testid={`card-case-study-${index}`}
            >
              <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent z-10" />
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-testid={`img-case-study-${index}`}
                  />
                </div>
                
                <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold" data-testid={`text-case-study-title-${index}`}>
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-case-study-description-${index}`}>
                    {study.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {study.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="space-y-1" data-testid={`metric-${index}-${metricIndex}`}>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-primary" />
                          <span className="text-3xl font-bold text-primary" data-testid={`text-metric-value-${index}-${metricIndex}`}>
                            {metric.value}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground" data-testid={`text-metric-label-${index}-${metricIndex}`}>
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <Button 
                      variant="outline" 
                      className="group/btn"
                      data-testid={`button-learn-more-${index}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log(`Learn more about ${study.title}`);
                      }}
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
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