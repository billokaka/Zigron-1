// ML Development Service Page - Content Data

// ============================================================================
// PAGE METADATA
// ============================================================================

export const pageMetadata = {
  title: "ML / CV / NLP Development Services | Zigron",
  description:
    "Custom machine learning development for computer vision, natural language processing, and predictive analytics. From model training to production deployment.",
  keywords: [
    "machine learning development",
    "computer vision",
    "NLP services",
    "deep learning",
    "AI model training",
    "predictive analytics",
    "custom ML models",
  ],
};

// ============================================================================
// HERO SECTION
// ============================================================================

export const heroData = {
  badge: "Machine Learning",
  headline: "ML / CV / NLP",
  headlineHighlight: "Development Services",
  subheadline:
    "We build custom machine learning models that solve real business problems—from computer vision and NLP to predictive analytics and recommendation systems.",
  primaryCta: { label: "Discuss your ML project", href: "/contact" },
  secondaryCta: { label: "View ML case studies", href: "/work" },
  trustBadges: [
    { icon: "brain", label: "Custom Model Development", color: "purple" },
    { icon: "zap", label: "Production-Ready MLOps", color: "blue" },
    { icon: "shield", label: "Enterprise Security", color: "green" },
  ],
};

// ============================================================================
// ICON TYPES
// ============================================================================

export type IconName =
  | "brain"
  | "eye"
  | "messageSquare"
  | "trendingUp"
  | "search"
  | "layers"
  | "target"
  | "cpu"
  | "zap"
  | "shield"
  | "barChart"
  | "checkCircle"
  | "database"
  | "cloud"
  | "workflow"
  | "sparkles";

// ============================================================================
// ML CAPABILITIES
// ============================================================================

export interface MLCapability {
  iconName: IconName;
  title: string;
  description: string;
  techniques: string[];
}

export const mlCapabilities: MLCapability[] = [
  {
    iconName: "eye",
    title: "Computer Vision",
    description:
      "Visual AI systems for detection, classification, segmentation, and tracking.",
    techniques: [
      "Object Detection (YOLO, Faster R-CNN)",
      "Image Classification & Recognition",
      "Semantic & Instance Segmentation",
      "OCR & Document Processing",
      "Video Analytics & Tracking",
    ],
  },
  {
    iconName: "messageSquare",
    title: "Natural Language Processing",
    description:
      "Text understanding and generation for documents, conversations, and knowledge extraction.",
    techniques: [
      "Named Entity Recognition",
      "Sentiment & Intent Analysis",
      "Text Classification & Clustering",
      "Question Answering Systems",
      "Language Translation",
    ],
  },
  {
    iconName: "trendingUp",
    title: "Predictive Analytics",
    description:
      "Forecasting and prediction models for business intelligence and automation.",
    techniques: [
      "Time Series Forecasting",
      "Demand Prediction",
      "Churn & Risk Modeling",
      "Anomaly Detection",
      "Recommendation Systems",
    ],
  },
  {
    iconName: "search",
    title: "Search & Retrieval",
    description:
      "Intelligent search systems using embeddings and semantic understanding.",
    techniques: [
      "Vector Search & Embeddings",
      "Semantic Search",
      "Knowledge Graphs",
      "RAG Architectures",
      "Hybrid Search Systems",
    ],
  },
];

// ============================================================================
// USE CASES
// ============================================================================

export interface UseCase {
  title: string;
  industry: string;
  problem: string;
  solution: string;
  outcome: string;
}

export const useCases: UseCase[] = [
  {
    title: "Automated Quality Inspection",
    industry: "Manufacturing",
    problem:
      "Manual visual inspection was slow, inconsistent, and missed subtle defects.",
    solution:
      "Custom CNN model trained on defect images with real-time edge inference.",
    outcome: "99.5% defect detection with 10x faster inspection speed.",
  },
  {
    title: "Intelligent Document Processing",
    industry: "Financial Services",
    problem:
      "Manual document review created bottlenecks and high error rates.",
    solution:
      "Multi-modal model combining OCR, NER, and classification for automatic extraction.",
    outcome: "80% reduction in processing time with 95% accuracy.",
  },
  {
    title: "Predictive Equipment Maintenance",
    industry: "Energy & Utilities",
    problem:
      "Reactive maintenance led to costly unplanned downtime and safety risks.",
    solution:
      "LSTM-based anomaly detection on sensor data with 7-day failure prediction.",
    outcome: "40% reduction in unplanned downtime, $2M annual savings.",
  },
  {
    title: "Customer Intent Classification",
    industry: "E-commerce",
    problem:
      "Support tickets were manually routed, causing delays and misclassification.",
    solution:
      "Fine-tuned transformer model for multi-label intent classification.",
    outcome: "85% auto-routing accuracy, 50% faster resolution time.",
  },
];

// ============================================================================
// PROCESS STEPS
// ============================================================================

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Problem Definition & Data Assessment",
    description:
      "We clarify the business problem, success metrics, and evaluate your data assets for ML readiness.",
    deliverables: ["Problem statement", "Data audit report", "Feasibility assessment"],
  },
  {
    number: "02",
    title: "Data Engineering & Preparation",
    description:
      "We build data pipelines, handle labeling, and prepare training datasets with proper splits.",
    deliverables: ["Data pipeline", "Labeled dataset", "Feature engineering"],
  },
  {
    number: "03",
    title: "Model Development & Experimentation",
    description:
      "Iterative model training with systematic experimentation, hyperparameter tuning, and validation.",
    deliverables: ["Trained models", "Experiment logs", "Performance benchmarks"],
  },
  {
    number: "04",
    title: "Validation & Testing",
    description:
      "Rigorous testing including edge cases, bias detection, and real-world performance validation.",
    deliverables: ["Test reports", "Bias audit", "Edge case analysis"],
  },
  {
    number: "05",
    title: "Production Deployment",
    description:
      "Deploy models with proper MLOps infrastructure—APIs, monitoring, and automated retraining.",
    deliverables: ["Production API", "Monitoring dashboard", "CI/CD pipeline"],
  },
];

// ============================================================================
// TECH STACK
// ============================================================================

export interface TechCategory {
  category: string;
  technologies: string[];
}

export const techStack: TechCategory[] = [
  {
    category: "Deep Learning",
    technologies: ["PyTorch", "TensorFlow", "Keras", "JAX", "ONNX"],
  },
  {
    category: "Computer Vision",
    technologies: ["OpenCV", "YOLO", "Detectron2", "MMDetection", "Ultralytics"],
  },
  {
    category: "NLP / LLM",
    technologies: ["Hugging Face", "spaCy", "LangChain", "OpenAI API", "Claude API"],
  },
  {
    category: "ML Engineering",
    technologies: ["Scikit-learn", "XGBoost", "LightGBM", "CatBoost", "Optuna"],
  },
  {
    category: "MLOps",
    technologies: ["MLflow", "Weights & Biases", "DVC", "BentoML", "Seldon"],
  },
  {
    category: "Cloud ML",
    technologies: ["AWS SageMaker", "Vertex AI", "Azure ML", "Databricks", "Modal"],
  },
];

// ============================================================================
// ARCHITECTURE COMPONENTS
// ============================================================================

export interface ArchitectureComponent {
  iconName: IconName;
  title: string;
  subtitle: string;
}

export const architectureComponents: ArchitectureComponent[] = [
  { iconName: "database", title: "Data Layer", subtitle: "Storage & Pipelines" },
  { iconName: "layers", title: "Feature Store", subtitle: "Preprocessing" },
  { iconName: "brain", title: "Model Training", subtitle: "Experimentation" },
  { iconName: "cloud", title: "Model Serving", subtitle: "API & Inference" },
  { iconName: "barChart", title: "Monitoring", subtitle: "Drift & Performance" },
];

// ============================================================================
// DIFFERENTIATORS
// ============================================================================

export interface Differentiator {
  iconName: IconName;
  title: string;
  description: string;
}

export const differentiators: Differentiator[] = [
  {
    iconName: "target",
    title: "Business-First Approach",
    description:
      "We start with the business problem, not the technology. Models are designed to create measurable value.",
  },
  {
    iconName: "zap",
    title: "Production Focus",
    description:
      "Every model we build is designed for production—with proper testing, monitoring, and maintainability.",
  },
  {
    iconName: "workflow",
    title: "End-to-End MLOps",
    description:
      "We deliver complete ML systems including data pipelines, training infrastructure, and deployment automation.",
  },
  {
    iconName: "shield",
    title: "Responsible AI",
    description:
      "We implement bias detection, explainability, and fairness testing as standard practice.",
  },
];

// ============================================================================
// CASE STUDIES
// ============================================================================

export interface CaseStudy {
  image: string;
  category: string;
  title: string;
  services: string;
  result: string;
  href: string;
}

export const caseStudies: CaseStudy[] = [
  { image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80", category: "Solar", title: "AI-Powered Solar Tracking Optimization",
    services: "Edge ML, Computer Vision",
    result: "+12% energy generation through ML-optimized sun tracking.",
    href: "/work/terratrak-ai",
  },
  { image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80", category: "Solar", title: "TerraSmart Solar ML Platform",
    services: "Predictive Models, Data Pipelines",
    result: "30% faster field deployment with ML-driven site analysis.",
    href: "/work/terrasmart-solar",
  },
  { image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80", category: "Smart Home", title: "Abode Smart Home Intelligence",
    services: "Anomaly Detection, Device ML Models",
    result: "99.99% uptime with ML-powered device health monitoring.",
    href: "/work/abode-smart-home",
  },
];

// ============================================================================
// FAQs
// ============================================================================

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "How much data do we need to train a custom model?",
    answer:
      "It depends on the problem complexity. Simple classification might need hundreds of examples, while complex vision tasks may require thousands. We can also leverage pre-trained models and transfer learning to reduce data requirements significantly.",
  },
  {
    question: "How long does it take to develop a custom ML model?",
    answer:
      "A proof-of-concept typically takes 4-8 weeks. Production-ready models with proper MLOps add another 4-8 weeks. We recommend starting with a focused PoC to validate feasibility before full investment.",
  },
  {
    question: "Can you work with our existing ML infrastructure?",
    answer:
      "Yes. We integrate with existing ML platforms (SageMaker, Vertex AI, Databricks) and can work within your data security perimeter. We adapt our tools and processes to your environment.",
  },
  {
    question: "How do you ensure model quality and reliability?",
    answer:
      "We implement comprehensive testing including unit tests, integration tests, and performance benchmarks. We also conduct bias audits, edge case analysis, and set up drift monitoring for production models.",
  },
  {
    question: "Do you provide model maintenance and retraining?",
    answer:
      "Yes. ML models often need periodic retraining as data distributions change. We offer maintenance packages that include drift monitoring, performance tracking, and automated or manual retraining pipelines.",
  },
];

// ============================================================================
// CTA SECTION
// ============================================================================

export const ctaData = {
  headline: "Ready to Build Custom ML Models?",
  subheadline:
    "Tell us about your use case and data. We'll assess feasibility and propose an approach.",
  email: "ai@zigron.com",
};
