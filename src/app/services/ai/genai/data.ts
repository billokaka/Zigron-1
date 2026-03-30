// GenAI Integration Service Page - Content Data
// Sourced from Knowledge Doc: Global Zigron AI Service Standards (Section 8)

export const pageMetadata = {
    title: "Generative AI Integration Services | Zigron",
    description:
        "Build GenAI features that are safe, testable, and production-operated: RAG, tool use, workflow agents, evaluation harnesses, and security controls.",
    keywords: [
        "generative AI",
        "LLM integration",
        "RAG",
        "AI copilot",
        "prompt engineering",
        "GenAI guardrails",
        "enterprise AI",
    ],
};

export const heroData = {
    badge: "Enterprise-Grade GenAI",
    headline: "Generative AI",
    headlineHighlight: "Integration",
    subheadline:
        "RAG pipelines, AI copilots, workflow agents, and enterprise guardrails—built for production safety, not just demos.",
    primaryCta: { label: "Talk to an engineer", href: "/contact" },
    secondaryCta: { label: "View case studies", href: "/work" },
    trustBadges: [
        { icon: "shield", label: "OWASP LLM Compliant", color: "green" },
        { icon: "brain", label: "Production Guardrails", color: "blue" },
        { icon: "checkCircle", label: "Eval-Driven Development", color: "purple" },
    ],
};

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
    | "sparkles"
    | "lock"
    | "fileText"
    | "bot";

export interface Deliverable {
    iconName: IconName;
    title: string;
    description: string;
}

export const deliverables: Deliverable[] = [
    {
        iconName: "brain",
        title: "Use-Case & Risk Analysis",
        description: "Abuse, safety, and data leakage analysis before writing a single prompt. Business value validated upfront.",
    },
    {
        iconName: "layers",
        title: "RAG Architecture",
        description: "Retrieval-Augmented Generation with grounding, caching, and source attribution for trustworthy outputs.",
    },
    {
        iconName: "sparkles",
        title: "Prompt & Tooling Design",
        description: "Versioned prompt templates, tool-calling schemas, and chain-of-thought strategies optimized for your use case.",
    },
    {
        iconName: "checkCircle",
        title: "Evaluation Harness",
        description: "Golden set testing, regression suites, red team scenarios, and automated quality gates for every release.",
    },
    {
        iconName: "shield",
        title: "Guardrails & Safety Controls",
        description: "Policy constraints, output validation, refusal behavior, and prompt injection protection aligned to OWASP LLM Top 10.",
    },
    {
        iconName: "barChart",
        title: "Production Monitoring",
        description: "Cost tracking, latency SLOs, safety signals, user feedback loops, and incident response automation.",
    },
];

export interface UseCase {
    title: string;
    problem: string;
    solution: string;
    outcome: string;
}

export const useCases: UseCase[] = [
    {
        title: "Knowledge Assistant / Copilot",
        problem:
            "Support teams waste hours searching internal docs and knowledge bases for answers.",
        solution:
            "RAG-powered copilot with source attribution, context-aware retrieval, and escalation to humans for edge cases.",
        outcome: "60% reduction in average resolution time for support queries.",
    },
    {
        title: "Internal Ops Automation",
        problem:
            "Repetitive tasks like ticket triage, report generation, and data extraction consume skilled engineering time.",
        solution:
            "LLM-driven workflow agents with tool calling, approval gates, and human-in-loop fallbacks for high-risk actions.",
        outcome: "40% automation rate with zero unsafe automated actions.",
    },
    {
        title: "Customer-Facing AI Features",
        problem:
            "Need to add AI to products but worried about hallucinations, data leakage, and prompt injection attacks.",
        solution:
            "Production GenAI with enterprise guardrails, sandboxed execution, output validation, and continuous red team evaluation.",
        outcome: "Launched AI features with zero security incidents post-deployment.",
    },
];

export interface ProcessStep {
    iconName: IconName;
    title: string;
    description: string;
}

export const processSteps: ProcessStep[] = [
    {
        iconName: "search",
        title: "Assess",
        description: "Map use cases, classify risks, evaluate data sources, and define success metrics",
    },
    {
        iconName: "layers",
        title: "Design",
        description: "Architecture for RAG, tool use, caching, and guardrails. Define evaluation strategy",
    },
    {
        iconName: "sparkles",
        title: "Build",
        description: "Implement prompts, retrieval pipeline, tool integrations, and evaluation harness",
    },
    {
        iconName: "checkCircle",
        title: "Validate",
        description: "Red team testing, golden set evaluation, security verification, and regression suites",
    },
    {
        iconName: "zap",
        title: "Deploy & Monitor",
        description: "Production rollout with cost tracking, safety monitoring, and continuous improvement",
    },
];

export interface ArchitectureLayer {
    iconName: IconName;
    title: string;
    subtitle: string;
}

export const architectureLayers: ArchitectureLayer[] = [
    { iconName: "database", title: "Knowledge", subtitle: "Docs, APIs, DBs" },
    { iconName: "search", title: "Retrieval", subtitle: "Embeddings, Search" },
    { iconName: "brain", title: "LLM", subtitle: "Prompt, Tools" },
    { iconName: "shield", title: "Guardrails", subtitle: "Safety, Validation" },
    { iconName: "sparkles", title: "Output", subtitle: "Response, Actions" },
];

export interface TechnicalPillar {
    iconName: IconName;
    title: string;
    description: string;
    color: "blue" | "green" | "red" | "purple";
}

export const technicalPillars: TechnicalPillar[] = [
    {
        iconName: "checkCircle",
        title: "Eval-Driven",
        description: "Every release passes automated quality and safety gates.",
        color: "blue",
    },
    {
        iconName: "shield",
        title: "Security-First",
        description: "OWASP LLM Top 10 mitigations built into every layer.",
        color: "green",
    },
    {
        iconName: "barChart",
        title: "Observable",
        description: "Cost, latency, quality, and safety signals in real-time.",
        color: "red",
    },
    {
        iconName: "workflow",
        title: "Composable",
        description: "Modular architecture for prompts, tools, and retrieval.",
        color: "purple",
    },
];

export interface TechCategory {
    category: string;
    technologies: string[];
}

export const techStack: TechCategory[] = [
    {
        category: "LLM & Frameworks",
        technologies: ["OpenAI GPT-4", "Anthropic Claude", "Google Gemini", "LangChain", "LlamaIndex", "Vercel AI SDK"],
    },
    {
        category: "Vector & Retrieval",
        technologies: ["Pinecone", "Weaviate", "Chroma", "pgvector", "Elasticsearch", "Redis"],
    },
    {
        category: "Safety & Ops",
        technologies: ["Guardrails AI", "OWASP ZAP", "LangSmith", "Weights & Biases", "Datadog", "Terraform"],
    },
];

export interface CaseStudy {
    image: string;
    category: string;
    title: string;
    services: string;
    result: string;
    href: string;
}

export const caseStudies: CaseStudy[] = [
    { image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80", category: "Smart Home", title: "Abode Smart Home AI Assistant",
        services: "RAG Pipeline, Guardrails, Device Integration",
        result: "99.99% uptime with AI-driven automation across 300K+ devices.",
        href: "/work/abode-smart-home",
    },
    { image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80", category: "Solar", title: "TerraSmart Solar Intelligence",
        services: "GenAI Reports, Data Summarization",
        result: "30% faster field deployment with AI-generated site insights.",
        href: "/work/terrasmart-solar",
    },
    { image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80", category: "AI + IoT", title: "TerraTrak AI Optimization Engine",
        services: "ML-Driven Automation, Intelligent Alerts",
        result: "+12% energy generation through AI-optimized tracking.",
        href: "/work/terratrak-ai",
    },
];

export interface FAQ {
    question: string;
    answer: string;
}

export const faqs: FAQ[] = [
    {
        question: "How do you prevent prompt injection and data leakage?",
        answer:
            "We implement multi-layered defenses: input sanitization, output validation, sandboxed execution, and role-based data access. Every deployment is tested against known prompt injection techniques from the OWASP LLM attack taxonomy.",
    },
    {
        question: "How do you measure hallucinations reliably?",
        answer:
            "We build evaluation harnesses with golden sets, source-attribution checking, and automated factuality verification. Hallucination rates are tracked as a production metric with alerting thresholds.",
    },
    {
        question: "When does RAG outperform fine-tuning?",
        answer:
            "RAG is better when your knowledge changes frequently, when you need source attribution, or when you can't afford fine-tuning compute costs. Fine-tuning wins for specialized tasks with stable domain knowledge. We help you choose the right approach.",
    },
    {
        question: "Can we use our own LLM or must we use OpenAI?",
        answer:
            "We're model-agnostic. We work with OpenAI, Anthropic, Google, open-source models, and on-premise deployments. We help you choose based on quality, cost, latency, and data residency requirements.",
    },
    {
        question: "How do you handle enterprise data security with LLMs?",
        answer:
            "We implement data classification, PII redaction before LLM processing, encrypted pipelines, audit logging, and strict access controls. For sensitive use cases, we support on-premise or private cloud deployments.",
    },
];

export const ctaData = {
    headline: "Ready to Add GenAI to Your Product?",
    subheadline:
        "Tell us about your use case. Our engineers will design a GenAI solution with enterprise-grade guardrails, not just a demo.",
    email: "ai@zigron.com",
};
