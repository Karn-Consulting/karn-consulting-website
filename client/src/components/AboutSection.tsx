import { Card } from "@/components/ui/card";
import { CheckCircle, Award, Users, Globe } from "lucide-react";
import { useCounter } from "@/hooks/use-counter";
import visionImage from "@assets/stock_images/futuristic_data_visu_72a9fc1b.jpg";
import teamImage from "@assets/stock_images/digital_transformati_b71991f3.jpg";

const stats = [
  { value: 500, suffix: "+", label: "AI Models Deployed" },
  { value: 95, suffix: "%", label: "Client Satisfaction" },
  { value: 50, suffix: "M+", label: "Data Points Processed Daily" },
  { value: 24, suffix: "/7", label: "Intelligent Monitoring" },
];

const values = [
  { icon: Award, title: "Excellence", description: "Commitment to delivering best-in-class AI solutions" },
  { icon: Users, title: "Collaboration", description: "Working closely with clients to understand their unique needs" },
  { icon: Globe, title: "Innovation", description: "Pioneering advanced AI technologies for global impact" },
];

export default function AboutSection() {
  // Create counter hooks for each stat
  const counter1 = useCounter({ end: 500, suffix: "+", duration: 2500 });
  const counter2 = useCounter({ end: 95, suffix: "%", duration: 2500 });
  const counter3 = useCounter({ end: 50, suffix: "M+", duration: 2500 });
  const counter4 = useCounter({ end: 24, suffix: "/7", duration: 2500 });

  const counters = [counter1, counter2, counter3, counter4];
  return (
    <section className="py-20 md:py-32 relative" id="about" data-testid="section-about">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234a90e2' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold" data-testid="text-about-title">
            Pioneering <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">AI Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-about-description">
            We're at the forefront of artificial intelligence innovation, transforming businesses worldwide
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="p-6 text-center border-primary/10 bg-card/50 backdrop-blur-sm animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`stat-card-${index}`}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2" data-testid={`stat-value-${index}`} ref={counters[index].ref as any}>
                {counters[index].value}
              </div>
              <div className="text-sm text-muted-foreground" data-testid={`stat-label-${index}`}>
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Vision and Mission with Images */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8 animate-fade-up">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={visionImage} 
                alt="Our Vision" 
                className="w-full h-64 object-cover"
                data-testid="img-vision"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-foreground">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-vision">
              To be the global leader in AI-driven transformation, enabling businesses to harness the full potential 
              of artificial intelligence and machine learning to solve complex challenges and drive innovation.
            </p>
          </div>

          <div className="space-y-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={teamImage} 
                alt="Our Mission" 
                className="w-full h-64 object-cover"
                data-testid="img-mission"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-foreground">Our Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-mission">
              To deliver cutting-edge, self-governing intelligent systems that empower organizations to operate 
              more efficiently, make data-driven decisions, and stay ahead in an increasingly competitive landscape.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center mb-8" data-testid="text-values-title">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="flex items-start gap-4 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  data-testid={`value-item-${index}`}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2" data-testid={`value-title-${index}`}>{value.title}</h4>
                    <p className="text-sm text-muted-foreground" data-testid={`value-description-${index}`}>{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}