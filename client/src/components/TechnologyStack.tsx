import { SiTensorflow, SiPytorch, SiPython, SiAmazon, SiKubernetes, SiDocker, SiOpenai } from "react-icons/si";
import { Cloud } from "lucide-react";

const technologies = [
  { icon: SiTensorflow, name: "TensorFlow", color: "text-orange-500" },
  { icon: SiPytorch, name: "PyTorch", color: "text-red-500" },
  { icon: SiPython, name: "Python", color: "text-blue-400" },
  { icon: SiAmazon, name: "AWS", color: "text-orange-400" },
  { icon: Cloud, name: "Azure", color: "text-blue-500" },
  { icon: SiKubernetes, name: "Kubernetes", color: "text-blue-600" },
  { icon: SiDocker, name: "Docker", color: "text-blue-400" },
  { icon: SiOpenai, name: "OpenAI", color: "text-emerald-500" },
];

export default function TechnologyStack() {
  return (
    <section className="py-20 md:py-32 px-8 relative overflow-hidden" id="technology" data-testid="section-technology">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-chart-2/5" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold" data-testid="text-tech-title">
            Powered by <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">Cutting-Edge Technology</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-tech-description">
            We leverage industry-leading frameworks and platforms to deliver robust AI solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-4 p-8 rounded-lg border border-primary/10 hover-elevate active-elevate-2 transition-all cursor-pointer group animate-scale-in bg-card/30 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => console.log(`${tech.name} clicked`)}
                data-testid={`tech-item-${index}`}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Icon className={`w-16 h-16 ${tech.color} relative z-10`} />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors" data-testid={`text-tech-name-${index}`}>
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}