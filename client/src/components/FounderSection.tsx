import { Card } from "@/components/ui/card";
import { Briefcase, Brain, TrendingUp, Award, Users, Target } from "lucide-react";
import { useCounter } from "@/hooks/use-counter";
import founderImage from "@assets/529770027_24300479449584050_4371908444917046077_n_1760332822611.jpg";

const expertise = [
  {
    icon: Brain,
    title: "AI & ML Integration",
    description: "Pioneering the convergence of digital marketing with AI, ML, and Agentic AI systems"
  },
  {
    icon: Target,
    title: "Performance Marketing",
    description: "10+ years optimizing multi-million dollar campaigns with data-driven ROAS strategies"
  },
  {
    icon: TrendingUp,
    title: "B2B Sales Funnel",
    description: "End-to-end funnel ownership across technology and SaaS industries"
  },
  {
    icon: Users,
    title: "Executive Advisory",
    description: "Strategic counsel to C-suite executives on digital transformation initiatives"
  }
];

const achievements = [
  { value: 40, suffix: "%", description: "Lead Generation Increase" },
  { value: 10, prefix: "$", suffix: "M+", description: "Ad Budget Managed" },
  { value: 25, suffix: "%", description: "Average ROI Improvement" },
  { value: 10, suffix: "K+", description: "Students Mentored" }
];

export default function FounderSection() {
  // Create counter hooks for each achievement
  const counter1 = useCounter({ end: 40, suffix: "%", duration: 2000 });
  const counter2 = useCounter({ end: 10, prefix: "$", suffix: "M+", duration: 2000 });
  const counter3 = useCounter({ end: 25, suffix: "%", duration: 2000 });
  const counter4 = useCounter({ end: 10, suffix: "K+", duration: 2000 });

  const counters = [counter1, counter2, counter3, counter4];

  return (
    <section className="py-20 md:py-32 px-8 relative" id="founder" data-testid="section-founder">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-chart-2/5" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold" data-testid="text-founder-title">
            Meet Our <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">Visionary Leader</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-founder-description">
            Bridging digital marketing excellence with cutting-edge AI innovation
          </p>
        </div>

        <Card className="overflow-hidden border-primary/10 bg-card/50 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative">
              <img 
                src={founderImage} 
                alt="Prateek Karn - Founder & CEO"
                className="w-full h-full object-cover"
                data-testid="img-founder"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2" data-testid="text-founder-name">
                  Prateek Karn
                </h3>
                <p className="text-primary font-medium" data-testid="text-founder-role">
                  Founder & CEO
                </p>
              </div>
            </div>

            <div className="p-8 md:p-12 space-y-8">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Pioneering AI-Driven Marketing
                </h4>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-founder-bio">
                  With over a decade of experience architecting high-impact growth strategies across 
                  international markets, Prateek brings a unique blend of digital marketing mastery and 
                  AI innovation. His expertise spans from managing multi-million dollar campaigns to 
                  developing custom AI agents that transform business workflows.
                </p>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-founder-vision">
                  At Karn Consulting, Prateek leads the charge in integrating advanced AI, ML, and 
                  Agentic AI systems with proven digital marketing strategies, creating unprecedented 
                  value for enterprise clients across diverse industries.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="space-y-1" data-testid={`achievement-${index}`}>
                    <div className="text-2xl font-bold text-primary" ref={counters[index].ref as any}>
                      {counters[index].value}
                    </div>
                    <div className="text-sm text-muted-foreground">{achievement.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {expertise.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="p-6 border-primary/10 bg-card/50 backdrop-blur-sm hover-elevate active-elevate-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`expertise-card-${index}`}
              >
                <Icon className="w-8 h-8 text-primary mb-4" />
                <h5 className="font-semibold mb-2" data-testid={`expertise-title-${index}`}>
                  {item.title}
                </h5>
                <p className="text-sm text-muted-foreground" data-testid={`expertise-description-${index}`}>
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}