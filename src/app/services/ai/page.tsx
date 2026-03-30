import Image from "next/image";
import { Header, Footer } from "@/components/layout";
import { Button, Badge, SectionHeader, Container, Section } from "@/components/ui";
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Cloud,
  Brain,
  Cpu,
  Database,
  BarChart3,
  Eye,
  Workflow,
  Bot,
  Sparkles,
  LineChart,
  Layers,
  Factory,
  Heart,
  ShoppingCart,
  Building2,
  FileText,
} from "lucide-react";

export const metadata = {
  title: "AI & Data Services | Zigron",
  description: "End-to-end AI engineering - from data pipelines and ML models to production deployment and ongoing monitoring.",
};

const aiServices = [
  {
    icon: Database,
    title: "Data Engineering",
    whenToUse: "Building the data foundation for analytics and AI.",
    features: ["Data Pipeline Architecture", "ETL/ELT Development", "Data Lake & Warehouse Design"],
    href: "/services/ai/data-engineering",
  },
  {
    icon: Brain,
    title: "ML / CV / NLP Development",
    whenToUse: "Training custom models for prediction, vision, or language.",
    features: ["Model Design & Training", "Computer Vision Systems", "NLP & Text Analytics"],
    href: "/services/ai/ml-development",
  },
  {
    icon: Bot,
    title: "GenAI Integration",
    whenToUse: "Adding LLMs and generative AI to your products.",
    features: ["LLM Fine-tuning & RAG", "AI Copilot Development", "Prompt Engineering & Guardrails"],
    href: "/services/ai/genai",
  },
  {
    icon: Workflow,
    title: "MLOps & Model Management",
    whenToUse: "Deploying and maintaining models at scale.",
    features: ["CI/CD for ML Pipelines", "Model Versioning & Registry", "A/B Testing & Monitoring"],
    href: "/services/ai/mlops",
  },
  {
    icon: LineChart,
    title: "Analytics & Visualization",
    whenToUse: "Making data accessible to business stakeholders.",
    features: ["BI Dashboard Development", "Real-time Analytics", "Custom Reporting Tools"],
    href: "/services/ai/analytics",
  },
  {
    icon: Cpu,
    title: "Edge AI & Optimization",
    whenToUse: "Running AI on resource-constrained devices.",
    features: ["Model Compression & Quantization", "On-device Inference", "TinyML Development"],
    href: "/services/ai/edge-ai",
  },
];

const aiLifecycle = [
  { step: 1, title: "Data Strategy", links: ["Assessment", "Architecture"] },
  { step: 2, title: "Data Engineering", links: ["Pipelines", "Quality"] },
  { step: 3, title: "Model Development", links: ["Training", "Validation"] },
  { step: 4, title: "Deployment", links: ["MLOps", "Integration"] },
  { step: 5, title: "Monitoring", links: ["Drift Detection", "Retraining"] },
  { step: 6, title: "Optimization", links: ["Performance", "Cost"] },
];

const solutions = [
  { icon: Factory, title: "Predictive Maintenance", description: "Prevent equipment failures with ML-driven predictions.", aiRole: "Anomaly Detection & Forecasting" },
  { icon: Eye, title: "Computer Vision QA", description: "Automated visual inspection for manufacturing.", aiRole: "Object Detection & Classification" },
  { icon: Heart, title: "Clinical AI", description: "AI-assisted diagnostics and patient monitoring.", aiRole: "Medical Imaging & NLP" },
  { icon: ShoppingCart, title: "Demand Forecasting", description: "Optimize inventory with accurate predictions.", aiRole: "Time Series & Optimization" },
  { icon: FileText, title: "Document Intelligence", description: "Extract insights from unstructured documents.", aiRole: "OCR & Entity Extraction" },
];

const caseStudies = [
  {
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    title: "AI-Powered Solar Tracking Optimization",
    category: "Edge AI + IoT",
    problem: "Standard sun trackers missed optimal angles, reducing energy output.",
    approach: "Custom ML model on tracker controllers for real-time adjustments.",
    outcome: "+12% energy generation boost.",
    href: "/work/terratrak-ai",
  },
  {
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80",
    title: "Manufacturing Quality Control",
    category: "Computer Vision",
    problem: "Manual inspection missed defects and slowed production.",
    approach: "Deep learning vision system for automated defect detection.",
    outcome: "99.5% accuracy with 10x faster inspection.",
    href: "/work",
  },
  {
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    title: "Intelligent Document Processing",
    category: "NLP / GenAI",
    problem: "Manual document review was slow and error-prone.",
    approach: "LLM-powered extraction with human-in-the-loop validation.",
    outcome: "80% reduction in processing time.",
    href: "/work",
  },
];

const techStack = {
  "ML Frameworks": ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost"],
  "GenAI / LLM": ["OpenAI API", "Claude API", "LangChain", "Hugging Face"],
  "Data Stack": ["Snowflake", "Databricks", "dbt", "Apache Spark"],
  "MLOps": ["MLflow", "Kubeflow", "Weights & Biases", "Vertex AI"],
  "Visualization": ["Grafana", "Metabase", "Streamlit", "Custom React"],
};

const faqs = [
  {
    question: "Do we need a lot of data to start an AI project?",
    answer: "It depends on the use case. Some problems require large datasets, while others can leverage pre-trained models, transfer learning, or synthetic data. We start with a data assessment to understand what's feasible with your current data assets.",
  },
  {
    question: "How do you ensure AI models are reliable in production?",
    answer: "We implement comprehensive MLOps practices including automated testing, model versioning, drift detection, and monitoring. We also design fallback mechanisms and human-in-the-loop workflows for critical applications.",
  },
  {
    question: "Can you work with our existing data infrastructure?",
    answer: "Absolutely. We integrate with existing data warehouses, lakes, and pipelines. Whether you're on Snowflake, Databricks, or a custom setup, we adapt our approach to your stack.",
  },
  {
    question: "How do you handle sensitive or regulated data?",
    answer: "We follow strict data handling protocols and can work within your security perimeter. For healthcare, finance, and other regulated industries, we ensure compliance with HIPAA, SOC2, GDPR, and other relevant standards.",
  },
  {
    question: "What's the typical timeline for an ML project?",
    answer: "A proof-of-concept typically takes 4-8 weeks. Production deployment adds another 4-8 weeks depending on integration complexity. We recommend starting with a focused use case to demonstrate value before scaling.",
  },
  {
    question: "Do you provide ongoing model maintenance?",
    answer: "Yes. AI models need continuous monitoring and periodic retraining. We offer maintenance packages that include drift monitoring, performance optimization, and model updates as your data evolves.",
  },
];

export default function AIServicesPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <Section background="gradient" padding="hero" className="relative overflow-hidden">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-black dark:text-white tracking-tight">
                  AI & Data Systems <br />
                  <span className="text-primary">That Ship to Production</span>
                </h1>

                <p className="text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark mb-8 max-w-lg leading-relaxed font-light">
                  From robust data pipelines to deployed ML models—we build AI that creates real business value, not just demos.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-center mb-10">
                  <Button size="lg" href="/contact">
                    Talk to an AI engineer
                  </Button>
                  <Button variant="ghost" href="#case-studies">
                    See AI case studies
                  </Button>
                </div>

                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: Database, text: "Data-first approach" },
                    { icon: Zap, text: "Production-ready MLOps" },
                    { icon: Shield, text: "Enterprise security" },
                  ].map((badge) => (
                    <div
                      key={badge.text}
                      className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2 shadow-sm"
                    >
                      <badge.icon className="w-4 h-4 text-primary" />
                      {badge.text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Dashboard */}
              <div className="relative h-96 w-full hidden lg:flex items-center justify-center">
                <div className="relative w-full max-w-md aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-white dark:from-surface-dark dark:to-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col p-6 overflow-hidden">
                    <div className="relative flex justify-between items-center mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                      <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">ML Pipeline</span>
                      <span className="flex items-center gap-2 text-xs text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded font-medium border border-green-100 dark:border-green-800">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Training Active
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 flex-1 relative">
                      <div className="bg-surface-light dark:bg-black/40 rounded-lg p-4 border border-gray-200 dark:border-gray-700 flex flex-col justify-center items-center gap-3 transition hover:border-primary/50">
                        <div className="w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                          <Brain className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">Model Accuracy</span>
                        <span className="text-[10px] text-gray-400 font-mono">94.7%</span>
                      </div>

                      <div className="bg-surface-light dark:bg-black/40 rounded-lg p-4 border border-gray-200 dark:border-gray-700 flex flex-col justify-center items-center gap-3 transition hover:border-primary/50">
                        <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                          <Database className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">Data Processed</span>
                        <span className="text-[10px] text-gray-400 font-mono">2.4M rows/hr</span>
                      </div>

                      <div className="bg-surface-light dark:bg-black/40 rounded-lg p-4 border border-gray-200 dark:border-gray-700 flex flex-col justify-center items-center gap-2 col-span-2">
                        <div className="w-full h-16 flex items-end gap-1 px-4 justify-center">
                          {[4, 6, 8, 12, 10, 14, 11].map((h, i) => (
                            <div
                              key={i}
                              className="w-3 bg-purple-500 dark:bg-purple-400 rounded-t-sm"
                              style={{ height: `${h * 4}px`, opacity: 0.3 + i * 0.1 }}
                            ></div>
                          ))}
                        </div>
                        <span className="text-xs font-semibold text-gray-600 dark:text-gray-300 mt-1">Inference Latency (ms)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Trust Strip */}
        <div className="bg-surface-light dark:bg-surface-dark border-y border-gray-200 dark:border-gray-800 py-8">
          <Container>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                  Trusted by data-driven enterprises
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 items-center">
                  <span className="text-xl font-extrabold text-gray-400 dark:text-gray-500 tracking-tight">NVIDIA</span>
                  <span className="text-xl font-extrabold text-gray-400 dark:text-gray-500 font-serif italic">Tesla</span>
                  <span className="text-xl font-extrabold text-gray-400 dark:text-gray-500 font-mono">Databricks</span>
                  <span className="text-xl font-extrabold text-gray-400 dark:text-gray-500">Snowflake</span>
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center gap-8 lg:gap-12 border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-gray-700 pt-6 lg:pt-0 lg:pl-12">
                <div className="text-center">
                  <p className="text-3xl font-bold text-black dark:text-white tracking-tight">50+</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wide font-semibold mt-1">Models in Production</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-black dark:text-white tracking-tight">10B+</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wide font-semibold mt-1">Predictions/Month</p>
                </div>
                <div className="text-center hidden sm:flex flex-col gap-2">
                  <span className="text-[10px] font-bold bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 px-3 py-1 rounded-full text-gray-600 dark:text-gray-300">SOC2 Type II</span>
                  <span className="text-[10px] font-bold bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 px-3 py-1 rounded-full text-gray-600 dark:text-gray-300">HIPAA Ready</span>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Services Grid */}
        <Section>
          <Container>
            <SectionHeader
              label="AI Services"
              title="Full-Stack AI Capabilities"
              description="Select a specialized domain to see how our AI teams can accelerate your initiatives."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service) => (
                <div
                  key={service.title}
                  className="group bg-white dark:bg-surface-dark p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all duration-300 hover:shadow-xl relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
                    <service.icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{service.title}</h3>

                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                    When to use: <span className="font-normal normal-case text-gray-600 dark:text-gray-300">{service.whenToUse}</span>
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button variant="ghost" href={service.href} className="p-0">
                    Explore {service.title.split(" ")[0]} <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* AI Lifecycle */}
        <Section background="surface">
          <Container>
            <h2 className="text-3xl font-bold text-center mb-16 text-black dark:text-white">
              The AI Development Lifecycle
            </h2>

            <div className="relative">
              <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>

              <div className="grid grid-cols-2 md:grid-cols-6 gap-y-12 gap-x-4 relative z-10">
                {aiLifecycle.map((item, index) => (
                  <div key={item.step} className="text-center group">
                    <div className={`w-12 h-12 mx-auto bg-white dark:bg-surface-dark border-2 ${index === 0 ? 'border-primary text-primary' : 'border-gray-300 dark:border-gray-600 text-gray-500'} group-hover:border-primary rounded-full flex items-center justify-center font-bold mb-4 relative z-10 shadow-sm group-hover:scale-110 transition-transform`}>
                      {item.step}
                    </div>
                    <h4 className="font-bold text-sm text-black dark:text-white mb-3 h-10 flex items-center justify-center">
                      {item.title}
                    </h4>
                    <div className="flex flex-col gap-1 text-xs">
                      {item.links.map((link) => (
                        <span key={link} className="text-gray-500 hover:text-primary transition cursor-pointer">• {link}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Solutions Powered by AI */}
        <Section>
          <Container>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <Badge className="mb-4">Solutions</Badge>
                <h2 className="text-3xl font-bold text-black dark:text-white">AI Powers These Solutions</h2>
                <p className="mt-2 text-text-muted-light dark:text-text-muted-dark font-light">
                  See how our AI capabilities manifest in industry-specific applications.
                </p>
              </div>
              <Button variant="ghost" href="/solutions">
                View all solutions <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {solutions.map((solution) => (
                <div
                  key={solution.title}
                  className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-transparent hover:border-gray-200 dark:hover:border-gray-600 transition-colors group"
                >
                  <solution.icon className="w-10 h-10 text-purple-500 dark:text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-base mb-2 text-black dark:text-white">{solution.title}</h4>
                  <p className="text-xs text-gray-500 mb-4 leading-relaxed">{solution.description}</p>
                  <div className="text-[10px] font-mono bg-white dark:bg-black p-2 rounded border border-dashed border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400">
                    <strong>AI Role:</strong> {solution.aiRole}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Case Studies */}
        <Section background="surface" id="case-studies">
          <Container>
            <h2 className="text-3xl font-bold mb-12 text-black dark:text-white">AI in Action</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.title}
                  className="bg-white dark:bg-background-dark rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-800 flex flex-col group hover:shadow-lg transition-all"
                >
                  <div className="h-56 relative overflow-hidden">
                    <Image src={study.image} alt={study.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4 bg-black/80 backdrop-blur text-white px-3 py-1 text-[10px] font-bold rounded uppercase tracking-wide">
                      {study.category}
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="font-bold text-lg mb-4 text-black dark:text-white leading-tight">{study.title}</h3>

                    <div className="space-y-4 mb-8 flex-1 border-t border-gray-100 dark:border-gray-800 pt-4">
                      <div className="flex gap-4 text-xs">
                        <span className="font-bold text-gray-400 uppercase w-16 shrink-0">Problem</span>
                        <span className="text-gray-600 dark:text-gray-300">{study.problem}</span>
                      </div>
                      <div className="flex gap-4 text-xs">
                        <span className="font-bold text-gray-400 uppercase w-16 shrink-0">Approach</span>
                        <span className="text-gray-600 dark:text-gray-300">{study.approach}</span>
                      </div>
                      <div className="flex gap-4 text-xs">
                        <span className="font-bold text-primary uppercase w-16 shrink-0">Outcome</span>
                        <span className="text-gray-800 dark:text-white font-bold">{study.outcome}</span>
                      </div>
                    </div>

                    <Button variant="ghost" href={study.href} className="p-0">
                      Read case study <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Tech Stack */}
        <Section>
          <Container>
            <SectionHeader
              label="Technology"
              title="Our AI & Data Stack"
              description="We work with modern, proven tools to build production-grade AI systems."
            />

            {/* Architecture Flow */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16 text-center text-xs font-bold text-gray-600 dark:text-gray-300 overflow-x-auto py-4 px-2">
              {[
                { icon: Database, label: "Data Sources" },
                { icon: Layers, label: "Data Platform" },
                { icon: Brain, label: "ML Pipeline", highlight: true },
                { icon: Workflow, label: "MLOps" },
                { icon: BarChart3, label: "Applications" },
              ].map((item, index, arr) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className={`min-w-[140px] p-6 border rounded-lg flex flex-col items-center shadow-sm ${item.highlight
                    ? "border-2 border-purple-500 border-dashed bg-purple-50 dark:bg-purple-900/10 transform scale-105 shadow-md"
                    : "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-surface-dark"
                    }`}>
                    <item.icon className={`w-8 h-8 mb-3 ${item.highlight ? "text-purple-500" : "text-gray-400"}`} />
                    <span>{item.label}</span>
                  </div>
                  {index < arr.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-gray-300 hidden md:block" />
                  )}
                </div>
              ))}
            </div>

            {/* Tech Categories */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-t border-gray-200 dark:border-gray-800 pt-12">
              {Object.entries(techStack).map(([category, items]) => (
                <div key={category}>
                  <h4 className="font-bold text-sm mb-4 text-black dark:text-white uppercase tracking-wider">{category}</h4>
                  <ul className="text-xs text-gray-500 space-y-3 font-medium">
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Engagement Models */}
        <Section background="surface">
          <Container>
            <h2 className="text-3xl font-bold text-center mb-16 text-black dark:text-white">Engagement Models</h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "AI Proof of Concept",
                  subtitle: "Fixed Scope",
                  bestFor: "Validating feasibility before full investment—typically 4-8 weeks.",
                  includes: ["Data assessment", "Model prototype", "Technical report"],
                  featured: false,
                },
                {
                  title: "Production AI Build",
                  subtitle: "Project Delivery",
                  bestFor: "End-to-end development of production ML systems with full MLOps.",
                  includes: ["Full pipeline development", "Production deployment", "Monitoring setup"],
                  featured: true,
                },
                {
                  title: "AI Team Extension",
                  subtitle: "Dedicated Resources",
                  bestFor: "Augmenting your team with specialized AI/ML engineers.",
                  includes: ["Embedded experts", "Knowledge transfer", "Flexible scaling"],
                  featured: false,
                },
              ].map((model) => (
                <div
                  key={model.title}
                  className={`bg-white dark:bg-background-dark p-8 rounded-lg shadow-sm border transition relative ${model.featured
                    ? "border-2 border-primary shadow-xl transform md:-translate-y-4 z-10"
                    : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600"
                    }`}
                >
                  {model.featured && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      Most Popular
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-black dark:text-white mb-1">{model.title}</h3>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-6">{model.subtitle}</p>

                  <hr className="border-gray-100 dark:border-gray-800 mb-6" />

                  <p className="text-xs font-bold uppercase text-primary mb-3">Best For:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{model.bestFor}</p>

                  <p className="text-xs font-bold uppercase text-primary mb-3">Includes:</p>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                    {model.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* FAQ */}
        <Section>
          <Container size="narrow">
            <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white">Common Questions</h2>

            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="border-b border-gray-200 dark:border-gray-800 pb-6">
                  <h4 className="font-bold text-base text-black dark:text-white mb-2">{faq.question}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <Section background="surface" className="relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute -left-20 bottom-0 w-72 h-72 bg-purple-100 dark:bg-purple-900/10 rounded-full opacity-30 blur-3xl"></div>

          <Container size="narrow" className="relative z-10 text-center">
            <h2 className="text-4xl font-bold mb-4 text-black dark:text-white tracking-tight">
              Ready to put AI to work?
            </h2>
            <p className="text-gray-500 mb-10 max-w-2xl mx-auto font-light">
              Whether you&apos;re exploring a first AI use case or scaling existing models, our team can help you build production-grade solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" href="/contact">
                Talk to AI Engineering <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" href="/work">
                View case studies
              </Button>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
