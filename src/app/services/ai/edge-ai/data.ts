// Edge AI & Optimization Service Page - Content Data
// Sourced from Knowledge Doc: Section 12 (model-optimization) + Section 5 (deep-learning edge)

export const pageMetadata = {
    title: "Edge AI & Model Optimization Services | Zigron",
    description:
        "Reduce inference cost/latency and deploy AI on constrained hardware: quantization, pruning, distillation, on-device inference, and TinyML.",
    keywords: ["edge AI", "model optimization", "TinyML", "quantization", "on-device inference", "model compression", "edge deployment"],
};

export const heroData = {
    badge: "AI at the Edge",
    headline: "Edge AI &",
    headlineHighlight: "Optimization",
    subheadline:
        "Model compression, on-device inference, and serving architecture tuning—AI that runs where it matters, on budget and on time.",
    primaryCta: { label: "Talk to an engineer", href: "/contact" },
    secondaryCta: { label: "View case studies", href: "/work" },
    trustBadges: [
        { icon: "shield", label: "100% IP Ownership", color: "green" },
        { icon: "cpu", label: "Edge-Optimized Models", color: "blue" },
        { icon: "checkCircle", label: "Accuracy Retained", color: "purple" },
    ],
};

export type IconName = "brain" | "eye" | "search" | "layers" | "target" | "cpu" | "zap" | "shield" | "barChart" | "checkCircle" | "database" | "cloud" | "workflow" | "sparkles" | "lock";

export interface Deliverable { iconName: IconName; title: string; description: string; }
export const deliverables: Deliverable[] = [
    { iconName: "barChart", title: "Performance Profiling", description: "CPU/GPU/memory analysis identifying bottlenecks and optimization opportunities in your inference pipeline." },
    { iconName: "zap", title: "Model Compression", description: "Quantization, pruning, and knowledge distillation—reducing model size while preserving accuracy on critical slices." },
    { iconName: "cloud", title: "Serving Optimization", description: "Batching, caching, concurrency tuning, and auto-scaling for cost-effective inference at any scale." },
    { iconName: "checkCircle", title: "Regression Evaluation", description: "Detailed accuracy vs performance trade-off analysis ensuring optimizations don't break critical behaviors." },
    { iconName: "cpu", title: "On-Device Inference", description: "Deploy models on edge devices, MCUs, and mobile hardware with TensorFlow Lite, ONNX, and TinyML frameworks." },
    { iconName: "layers", title: "Deployment-Ready Artifacts", description: "Optimized model binaries, runtime configs, and integration code ready for your target hardware." },
];

export interface UseCase { title: string; problem: string; solution: string; outcome: string; }
export const useCases: UseCase[] = [
    { title: "Model Too Slow for Real-Time", problem: "Computer vision model works well but can't meet latency SLOs for real-time inference.", solution: "Quantization + pruning + TensorRT optimization, maintaining mAP while cutting inference time to meet p95 latency targets.", outcome: "4x faster inference with <1% accuracy degradation." },
    { title: "Cloud Costs Spiraling", problem: "GPU inference costs growing faster than revenue as model usage scales.", solution: "Model distillation, batch optimization, intelligent caching, and right-sized serving infrastructure.", outcome: "65% cost reduction per inference with identical output quality." },
    { title: "Edge Deployment Required", problem: "Need AI on IoT devices with limited compute, memory, and connectivity.", solution: "TinyML optimization with quantized models, on-device inference runtime, and offline-capable architecture.", outcome: "ML models running on MCUs with 256KB RAM at 30fps." },
];

export interface ProcessStep { iconName: IconName; title: string; description: string; }
export const processSteps: ProcessStep[] = [
    { iconName: "search", title: "Profile", description: "Benchmark current model, identify bottlenecks, map hardware constraints and latency/cost targets" },
    { iconName: "target", title: "Plan", description: "Design optimization strategy: quantize, prune, distill, or re-architect based on trade-off analysis" },
    { iconName: "zap", title: "Optimize", description: "Apply optimization techniques with automated regression testing at every step" },
    { iconName: "checkCircle", title: "Validate", description: "Verify accuracy retention on critical slices, stress-test under real load patterns" },
    { iconName: "cpu", title: "Deploy", description: "Package optimized artifacts for target hardware with monitoring and rollback" },
];

export interface ArchitectureLayer { iconName: IconName; title: string; subtitle: string; }
export const architectureLayers: ArchitectureLayer[] = [
    { iconName: "brain", title: "Base Model", subtitle: "Training Output" },
    { iconName: "zap", title: "Optimize", subtitle: "Quantize & Prune" },
    { iconName: "layers", title: "Package", subtitle: "Runtime & Config" },
    { iconName: "cpu", title: "Deploy", subtitle: "Edge or Cloud" },
    { iconName: "barChart", title: "Monitor", subtitle: "Perf & Quality" },
];

export interface TechnicalPillar { iconName: IconName; title: string; description: string; color: "blue" | "green" | "red" | "purple"; }
export const technicalPillars: TechnicalPillar[] = [
    { iconName: "zap", title: "Performance", description: "Measurable latency and throughput improvements.", color: "blue" },
    { iconName: "checkCircle", title: "Accuracy", description: "Critical-slice accuracy preserved through optimization.", color: "green" },
    { iconName: "cpu", title: "Hardware-Aware", description: "Optimizations tuned for your target deployment platform.", color: "red" },
    { iconName: "barChart", title: "Cost-Effective", description: "Right-sized serving that scales with your budget.", color: "purple" },
];

export interface TechCategory { category: string; technologies: string[]; }
export const techStack: TechCategory[] = [
    { category: "Optimization", technologies: ["TensorRT", "ONNX Runtime", "OpenVINO", "TFLite", "Core ML", "Apache TVM"] },
    { category: "Edge & Embedded", technologies: ["NVIDIA Jetson", "Qualcomm SNPE", "ARM NN", "ESP32", "Arduino", "Raspberry Pi"] },
    { category: "Profiling & Ops", technologies: ["NVIDIA Nsight", "PyTorch Profiler", "Weights & Biases", "MLflow", "Docker", "Kubernetes"] },
];

export interface CaseStudy { title: string; services: string; result: string; href: string; }
export const caseStudies: CaseStudy[] = [
    { title: "Solar Tracker Edge AI", services: "Model Quantization, Edge Deployment", result: "ML models running on-device at solar sites with 4x faster inference.", href: "/work/terratrak-ai" },
    { title: "Industrial Vision Optimization", services: "TensorRT, Pruning, Serving Optimization", result: "65% cost reduction while maintaining 99.2% detection accuracy.", href: "/work/industrial-predictive" },
    { title: "Smart Home On-Device AI", services: "TinyML, On-Device Inference", result: "Privacy-preserving AI running locally on smart home gateway devices.", href: "/work/abode-smart-home" },
];

export interface FAQ { question: string; answer: string; }
export const faqs: FAQ[] = [
    { question: "How much accuracy do we lose with quantization?", answer: "It depends on the model and task. INT8 quantization typically loses <1% accuracy for most vision and NLP tasks. We always measure on your critical test slices and only proceed when accuracy retention meets your threshold." },
    { question: "What's the best path for edge deployment?", answer: "It depends on your hardware constraints, connectivity, and latency requirements. We evaluate TFLite, ONNX, TensorRT, and custom runtimes to find the optimal path for your specific deployment target." },
    { question: "How do we validate performance under real load?", answer: "We run load tests that simulate your actual inference patterns—including burst traffic, concurrent requests, and edge cases. We measure p95/p99 latency, throughput, and resource utilization under realistic conditions." },
    { question: "Can you optimize models we didn't build?", answer: "Yes. We start with performance profiling of your existing model, identify optimization opportunities, and apply techniques that don't require retraining. For deeper optimization, we may recommend architecture changes." },
    { question: "What if we need both cloud and edge inference?", answer: "We design hybrid architectures with intelligent routing—simple/fast models at the edge and complex models in the cloud, with graceful fallback when connectivity is limited." },
];

export const ctaData = {
    headline: "Ready to Optimize Your AI for Production?",
    subheadline: "Tell us about your latency, cost, or deployment constraints. Our engineers will make your models run faster, cheaper, and closer to the data.",
    email: "ai@zigron.com",
};
