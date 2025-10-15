import { useState } from "react";
import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Mail, Calendar, Users, Target, TrendingUp, Award, CheckCircle } from "lucide-react";
import { useLocation } from "wouter";
import { useCounter } from "@/hooks/use-counter";
import { LeadFormDialog } from "@/components/LeadFormDialog";
import aiDashboard from "@assets/stock_images/modern_business_prof_66fe6da9.jpg";
import automation from "@assets/stock_images/automated_workflow_d_d41ad38e.jpg";
import infrastructure from "@assets/stock_images/futuristic_technolog_2c39519e.jpg";
import dataViz from "@assets/stock_images/futuristic_data_visu_72a9fc1b.jpg";
import mlProcess from "@assets/stock_images/artificial_intellige_2f43adbb.jpg";
import digitalTransform from "@assets/stock_images/digital_transformati_b71991f3.jpg";

const projectsData: Record<string, {
  title: string;
  client: string;
  industry: string;
  duration: string;
  team: string;
  image: string;
  overview: string;
  challenge: string;
  solution: string;
  implementation: string[];
  results: Record<string, string>;
  technologies: string[];
}> = {
  "major-bank-ai": {
    title: "AI-Powered Risk Assessment System",
    client: "Major International Bank",
    industry: "Financial Services",
    duration: "18 months",
    team: "25 specialists",
    image: aiDashboard,
    overview: "Transformed credit risk assessment for one of the world's leading financial institutions using advanced machine learning models and real-time data processing.",
    challenge: "The bank was facing increasing default rates and needed a more sophisticated approach to assess credit risk while maintaining regulatory compliance and processing speed.",
    solution: "We developed a comprehensive AI platform featuring ensemble machine learning models, real-time data integration, and explainable AI for regulatory compliance.",
    implementation: [
      "Data Integration: Connected 15+ data sources including credit bureaus, transaction history, and alternative data",
      "Model Development: Built ensemble of XGBoost, Random Forest, and Neural Network models",
      "Real-time Processing: Implemented Apache Kafka for streaming data processing",
      "Explainability: Integrated SHAP values for model interpretability and regulatory compliance",
      "Monitoring: Deployed MLflow for model versioning and performance tracking"
    ],
    results: {
      "Default Rate Reduction": "42%",
      "Processing Speed": "3x Faster",
      "Annual Savings": "$12 Million",
      "Model Accuracy": "94.2%",
      "False Positive Reduction": "58%",
      "Regulatory Compliance": "100%"
    },
    technologies: ["TensorFlow", "XGBoost", "Apache Kafka", "MLflow", "SHAP", "Python", "AWS SageMaker"]
  },
  "retail-automation": {
    title: "Autonomous Inventory Management System",
    client: "Leading Retail Chain",
    industry: "Retail & E-commerce",
    duration: "12 months",
    team: "18 specialists",
    image: automation,
    overview: "Revolutionized inventory management across 500+ stores with self-governing AI systems that predict demand, optimize stock levels, and automate reordering.",
    challenge: "The retail chain struggled with overstocking, stockouts, and waste, particularly in perishable goods, leading to significant revenue loss and customer dissatisfaction.",
    solution: "Implemented an end-to-end autonomous system using predictive analytics, computer vision for shelf monitoring, and reinforcement learning for optimization.",
    implementation: [
      "Demand Forecasting: LSTM networks analyzing 5 years of historical data",
      "Computer Vision: Deployed edge AI cameras for real-time shelf monitoring",
      "Optimization Engine: Reinforcement learning for multi-store inventory balancing",
      "Integration: Connected with existing ERP and POS systems",
      "Automation: Self-triggering reorder system with supplier integration"
    ],
    results: {
      "Waste Reduction": "35%",
      "Stockout Prevention": "89%",
      "Cost Savings": "$8 Million/year",
      "Forecast Accuracy": "89.5%",
      "Labor Hours Saved": "15,000/month",
      "Customer Satisfaction": "+22%"
    },
    technologies: ["PyTorch", "OpenCV", "Kubernetes", "Redis", "Apache Airflow", "Edge AI", "IoT"]
  },
  "healthcare-prediction": {
    title: "Predictive Patient Care Platform",
    client: "National Healthcare Provider",
    industry: "Healthcare",
    duration: "24 months",
    team: "30 specialists",
    image: infrastructure,
    overview: "Developed an AI-driven platform for early disease detection and intervention, monitoring over 100,000 patients in real-time across multiple facilities.",
    challenge: "High readmission rates and late detection of critical conditions were leading to poor patient outcomes and increased healthcare costs.",
    solution: "Created a comprehensive predictive analytics platform integrating EHR data, IoT devices, and clinical notes using NLP and deep learning.",
    implementation: [
      "Data Pipeline: FHIR-compliant integration with 20+ EHR systems",
      "NLP Engine: BERT-based model for clinical notes analysis",
      "Prediction Models: Ensemble models for 15+ conditions including sepsis, heart failure",
      "IoT Integration: Real-time vitals from 10,000+ connected devices",
      "Alert System: Intelligent triage and physician notification system"
    ],
    results: {
      "Early Detection": "48 hours earlier",
      "Readmission Reduction": "28%",
      "Lives Saved": "Est. 500+/year",
      "Prediction Accuracy": "91.3%",
      "Cost Reduction": "$45M annually",
      "Patient Monitoring": "100,000+"
    },
    technologies: ["BERT", "HL7 FHIR", "Apache Spark", "Elasticsearch", "Docker", "Azure ML", "IoT Hub"]
  },
  "manufacturing-optimization": {
    title: "Smart Factory AI Platform",
    client: "Global Manufacturing Corporation",
    industry: "Manufacturing",
    duration: "20 months",
    team: "22 specialists",
    image: dataViz,
    overview: "Transformed traditional manufacturing facilities into smart factories with AI-powered predictive maintenance, quality control, and production optimization.",
    challenge: "Frequent unplanned downtime, quality defects, and inefficient production scheduling were impacting profitability and customer satisfaction.",
    solution: "Deployed comprehensive IIoT sensors network with edge AI processing, coupled with cloud-based analytics for predictive maintenance and quality assurance.",
    implementation: [
      "Sensor Network: 5,000+ IIoT sensors across production lines",
      "Predictive Maintenance: Time-series analysis with LSTM for failure prediction",
      "Quality Control: Computer vision for defect detection at 120 items/minute",
      "Production Optimization: Genetic algorithms for scheduling optimization",
      "Digital Twin: Real-time simulation for scenario planning"
    ],
    results: {
      "Uptime Achievement": "99.7%",
      "Defect Reduction": "45%",
      "Production Increase": "38%",
      "Annual Savings": "$15 Million",
      "Energy Efficiency": "+25%",
      "ROI Period": "14 months"
    },
    technologies: ["TensorFlow", "Apache Flink", "Grafana", "InfluxDB", "MQTT", "Edge TPU", "Digital Twin"]
  },
  "insurance-claims": {
    title: "Intelligent Claims Processing System",
    client: "Fortune 500 Insurance Company",
    industry: "Insurance",
    duration: "15 months",
    team: "20 specialists",
    image: mlProcess,
    overview: "Automated 85% of claims processing using AI-powered document understanding, fraud detection, and intelligent routing systems.",
    challenge: "Manual claims processing was slow, error-prone, and vulnerable to fraud, leading to customer dissatisfaction and significant financial losses.",
    solution: "Built an end-to-end intelligent automation platform using computer vision, NLP, and advanced fraud detection algorithms.",
    implementation: [
      "Document Processing: OCR + NLP for 50+ document types",
      "Fraud Detection: Graph neural networks for pattern recognition",
      "Damage Assessment: Computer vision for auto/property damage evaluation",
      "Workflow Automation: RPA integration for legacy system interaction",
      "Customer Portal: Self-service AI chatbot for claim status"
    ],
    results: {
      "Automation Rate": "85%",
      "Processing Speed": "10x Faster",
      "Fraud Detection": "62% improvement",
      "Customer Satisfaction": "4.8/5 rating",
      "Cost Reduction": "$25M/year",
      "Accuracy": "97.5%"
    },
    technologies: ["Tesseract OCR", "spaCy", "Graph Neural Networks", "UiPath", "Dialogflow", "MongoDB", "Kafka"]
  },
  "telecom-network": {
    title: "Self-Healing Network Intelligence",
    client: "Leading Telecom Provider",
    industry: "Telecommunications",
    duration: "22 months",
    team: "28 specialists",
    image: digitalTransform,
    overview: "Created a self-healing network infrastructure serving 50M+ users with predictive outage prevention and automatic remediation capabilities.",
    challenge: "Network outages were causing significant customer churn and high operational costs due to reactive maintenance and manual troubleshooting.",
    solution: "Developed an AI-powered network operations center with predictive analytics, anomaly detection, and automated remediation workflows.",
    implementation: [
      "Telemetry Collection: Processing 10TB+ daily from network elements",
      "Anomaly Detection: Unsupervised learning for pattern recognition",
      "Predictive Analytics: Forecasting outages 72 hours in advance",
      "Auto-remediation: Closed-loop automation for common issues",
      "Capacity Planning: ML-driven network expansion recommendations"
    ],
    results: {
      "Network Uptime": "99.99%",
      "Outage Prediction": "72hrs advance",
      "Outage Reduction": "55%",
      "OPEX Savings": "$30M/year",
      "Customer Coverage": "50M+ users",
      "MTTR Improvement": "68%"
    },
    technologies: ["Apache Storm", "Prometheus", "TensorFlow", "Ansible", "ElasticSearch", "Kubernetes", "5G"]
  }
};

export default function ProjectDetail() {
  const [match, params] = useRoute("/project/:id");
  const [, setLocation] = useLocation();
  const [showLeadForm, setShowLeadForm] = useState(false);
  
  if (!match || !params?.id || !projectsData[params.id]) {
    setLocation("/");
    return null;
  }

  const project = projectsData[params.id];

  return (
    <>
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-8 py-12 w-full">
            <div className="inline-block mb-6 p-2 bg-background/80 backdrop-blur-md rounded-lg">
              <Button 
                variant="default" 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover-elevate active-elevate-2 font-semibold"
                onClick={() => setLocation("/")}
                data-testid="button-back"
              >
                <ArrowLeft className="mr-2 w-5 h-5" />
                Back to Case Studies
              </Button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm text-sm font-medium text-primary border border-primary/30">
                  {project.client}
                </span>
                <span className="text-sm text-muted-foreground">{project.industry}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                {project.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.solution}
                </p>
                <Card className="p-6 bg-card/50 border-primary/10">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Implementation Highlights
                  </h3>
                  <ul className="space-y-3">
                    {project.implementation.map((item: string, index: number) => (
                      <li key={index} className="text-sm text-muted-foreground leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech: string) => (
                    <span 
                      key={tech}
                      className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium text-sm border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="p-6 border-primary/10 bg-card/50 sticky top-8">
                <h3 className="text-xl font-bold mb-6">Project Impact</h3>
                <div className="space-y-4">
                  {Object.entries(project.results).map(([key, value]) => (
                    <div key={key} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{key}</span>
                        <TrendingUp className="w-4 h-4 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-primary">{value as string}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-primary/10 space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Duration: {project.duration}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Team Size: {project.team}</span>
                  </div>
                </div>

                <Button 
                  className="w-full mt-6" 
                  data-testid="button-case-study"
                  onClick={() => setShowLeadForm(true)}
                >
                  <Mail className="mr-2 w-4 h-4" />
                  Send me full case study
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
    
    <LeadFormDialog 
      open={showLeadForm}
      onOpenChange={setShowLeadForm}
    />
    </>
  );
}