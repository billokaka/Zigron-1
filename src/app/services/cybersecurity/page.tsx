import Image from "next/image";
import { Header, Footer } from "@/components/layout";
import { Button, Badge, SectionHeader, Container, Section } from "@/components/ui";
import {
  ArrowRight,
  Shield,
  Lock,
  Eye,
  Fingerprint,
  Bug,
  Server,
  Cloud,
  CheckCircle,
  ShieldCheck,
  Scan,
  KeyRound,
  GitBranch,
  Wifi,
  Database,
  AlertTriangle,
} from "lucide-react";

export const metadata = {
  title: "Cybersecurity Services | Zigron",
  description: "End-to-end cybersecurity — from IoT device hardening to cloud infrastructure protection, DevSecOps, IAM, and penetration testing.",
};

const cyberServices = [
  {
    icon: Shield,
    title: "IoT Security & Device Protection",
    whenToUse: "Securing connected devices, firmware, and edge networks.",
    features: ["Firmware Security Hardening", "Secure Boot & OTA", "Device Identity & Provisioning"],
    href: "/services/cybersecurity/iot-security",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure Security",
    whenToUse: "Protecting cloud workloads, networks, and data at rest.",
    features: ["Cloud Security Posture (CSPM)", "Network Segmentation", "Encryption & Key Management"],
    href: "/services/cybersecurity/cloud-infrastructure",
  },
  {
    icon: GitBranch,
    title: "DevSecOps & Secure CI/CD",
    whenToUse: "Embedding security into your development pipeline.",
    features: ["SAST/DAST Integration", "Container & Image Scanning", "Policy-as-Code Guardrails"],
    href: "/services/cybersecurity/devsecops",
  },
  {
    icon: KeyRound,
    title: "Identity & Access Management",
    whenToUse: "Controlling who accesses what, and when.",
    features: ["SSO & MFA Implementation", "RBAC/ABAC Policy Design", "Zero Trust Architecture"],
    href: "/services/cybersecurity/iam",
  },
  {
    icon: Bug,
    title: "Vulnerability Assessment & Pen Testing",
    whenToUse: "Finding and fixing weaknesses before attackers do.",
    features: ["Network & Web App Pen Testing", "IoT Device Pen Testing", "Compliance-Ready Reports"],
    href: "/services/cybersecurity/vapt",
  },
];

const lifecycleSteps = [
  { step: 1, title: "Threat Modeling", links: ["Asset Mapping", "Risk Assessment"] },
  { step: 2, title: "Architecture Review", links: ["Security Design", "Gap Analysis"] },
  { step: 3, title: "Implementation", links: ["Controls Deployment", "Hardening"] },
  { step: 4, title: "Testing & Validation", links: ["Pen Testing", "SAST/DAST"] },
  { step: 5, title: "Monitoring & Response", links: ["SIEM Integration", "Incident Response"] },
  { step: 6, title: "Compliance & Audit", links: ["Documentation", "Certification"] },
];

const solutions = [
  { icon: Wifi, title: "Connected Devices", description: "Secure firmware, OTA, and device-to-cloud communication.", expertise: "Hardware Root of Trust" },
  { icon: Server, title: "Cloud Platforms", description: "Protect multi-cloud workloads and serverless infrastructure.", expertise: "CSPM & Runtime Protection" },
  { icon: Database, title: "Data Pipelines", description: "Encrypt and audit sensitive data flows end-to-end.", expertise: "Encryption & DLP" },
  { icon: Fingerprint, title: "Identity Systems", description: "Zero-trust IAM for workforce and machine identities.", expertise: "SSO, MFA & ABAC" },
  { icon: AlertTriangle, title: "Incident Response", description: "Detect, contain, and recover from breaches fast.", expertise: "SIEM & Forensics" },
];

const caseStudies = [
  {
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
    title: "Scaling Abode's Smart Security to Millions",
    category: "IoT Security",
    problem: "Legacy backend couldn't handle device spike.",
    approach: "Serverless AWS architecture & firmware optimization.",
    outcome: "99.99% uptime & 50% infrastructure cost reduction.",
    href: "/work/abode-smart-home",
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    title: "Automating TerraSmart Solar Installation",
    category: "Cloud & IoT",
    problem: "Manual site surveys were slow and error-prone.",
    approach: "Custom high-precision GPS rovers & iPad app.",
    outcome: "30% faster field deployment speed.",
    href: "/work/terrasmart-solar",
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    title: "AI-Driven Solar Tracking Optimization",
    category: "AI + IoT",
    problem: "Standard trackers missed peak sun angles.",
    approach: "Machine learning edge model on tracker controllers.",
    outcome: "+12% energy generation boost.",
    href: "/work/terratrak-ai",
  },
];

const techStack = {
  "Device Security": ["ARM TrustZone", "Secure Boot", "TPM 2.0", "ATECC608"],
  "Cloud Security": ["AWS GuardDuty", "Azure Defender", "Prisma Cloud", "Wiz"],
  "DevSecOps": ["Snyk", "SonarQube", "Trivy", "OPA/Gatekeeper"],
  "IAM": ["Okta", "Auth0", "Keycloak", "AWS IAM"],
  "Pen Testing": ["Burp Suite", "Metasploit", "OWASP ZAP", "Nessus"],
};

const faqs = [
  {
    question: "Do you provide ongoing security monitoring or just assessments?",
    answer: "Both. We can deliver point-in-time assessments (pen tests, audits) or build continuous monitoring with SIEM integration, alerting, and incident response playbooks.",
  },
  {
    question: "What compliance frameworks do you support?",
    answer: "We support SOC 2, ISO 27001, HIPAA, GDPR, NIST CSF, IEC 62443 (industrial IoT), and OWASP Top 10. We tailor the approach to your industry and regulatory requirements.",
  },
  {
    question: "Can you secure existing systems or only new builds?",
    answer: "Both. We perform security assessments on existing infrastructure and retrofit security controls. For new builds, we embed security from architecture through deployment.",
  },
  {
    question: "How do you handle IoT-specific security challenges?",
    answer: "IoT requires a different approach than traditional IT security. We address constrained device resources, firmware update mechanisms, physical tamper resistance, and device-to-cloud trust chains.",
  },
  {
    question: "What's the typical engagement timeline?",
    answer: "A pen test takes 2-4 weeks. A full security architecture review is 4-6 weeks. Ongoing DevSecOps integration is typically a 3-month engagement with handoff to your team.",
  },
  {
    question: "Do you provide compliance-ready documentation?",
    answer: "Yes. Every engagement produces auditor-ready deliverables including risk registers, control matrices, test evidence, and remediation tracking with clear ownership.",
  },
];

export default function CybersecurityServicesPage() {
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
                  Cybersecurity <br />
                  <span className="text-primary">Built Into Every Layer</span>
                </h1>

                <p className="text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark mb-8 max-w-lg leading-relaxed font-light">
                  From IoT firmware to cloud infrastructure to CI/CD pipelines—we embed security at every stage, not bolt it on after.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-center mb-10">
                  <Button size="lg" href="/contact">
                    Talk to a security engineer
                  </Button>
                  <Button variant="ghost" href="#case-studies">
                    See security case studies
                  </Button>
                </div>

                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: ShieldCheck, text: "Zero-trust architecture" },
                    { icon: Scan, text: "Continuous assessment" },
                    { icon: Eye, text: "Threat detection & response" },
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

              {/* Visual — Shield Dashboard */}
              <div className="relative h-96 w-full hidden lg:flex items-center justify-center">
                <div className="relative w-full max-w-md aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-white dark:from-surface-dark dark:to-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col p-6 overflow-hidden">
                    <div className="relative flex justify-between items-center mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                      <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">Security Posture</span>
                      <span className="flex items-center gap-2 text-xs text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded font-medium border border-green-100 dark:border-green-800">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        All Systems Secure
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 flex-1 relative">
                      <div className="bg-surface-light dark:bg-black/40 rounded-lg p-4 border border-gray-200 dark:border-gray-700 flex flex-col justify-center items-center gap-3 transition hover:border-primary/50">
                        <div className="w-10 h-10 rounded-full bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center text-teal-600 dark:text-teal-400">
                          <Shield className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">Threat Score</span>
                        <span className="text-[10px] text-gray-400 font-mono">Low Risk</span>
                      </div>

                      <div className="bg-surface-light dark:bg-black/40 rounded-lg p-4 border border-gray-200 dark:border-gray-700 flex flex-col justify-center items-center gap-3 transition hover:border-primary/50">
                        <div className="w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                          <Lock className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">Endpoints</span>
                        <span className="text-[10px] text-gray-400 font-mono">12,847 protected</span>
                      </div>

                      <div className="bg-surface-light dark:bg-black/40 rounded-lg p-4 border border-gray-200 dark:border-gray-700 flex flex-col justify-center items-center gap-2 col-span-2">
                        <div className="w-full flex items-center justify-between px-2">
                          <span className="text-[10px] text-gray-400 font-mono">Compliance</span>
                          <span className="text-[10px] text-green-500 font-mono font-bold">98.4%</span>
                        </div>
                        <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-teal-500 to-green-500 rounded-full" style={{ width: "98.4%" }}></div>
                        </div>
                        <span className="text-xs font-semibold text-gray-600 dark:text-gray-300 mt-1">Security Controls Active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>


        {/* Services Grid */}
        <Section>
          <Container>
            <SectionHeader
              label="Security Services"
              title="Choose What You Need"
              description="Select a specialized domain to see how our security teams protect your systems."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cyberServices.map((service) => (
                <div
                  key={service.title}
                  className="group bg-white dark:bg-surface-dark p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all duration-300 hover:shadow-xl relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="w-12 h-12 bg-red-50 dark:bg-red-900/20 rounded-lg flex items-center justify-center mb-6 text-primary">
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

        {/* Security Lifecycle */}
        <Section background="surface">
          <Container>
            <h2 className="text-3xl font-bold text-center mb-16 text-black dark:text-white">
              The Security Lifecycle
            </h2>

            <div className="relative">
              <div className="hidden lg:block absolute top-[26px] left-[5%] w-[90%] h-0.5 bg-gray-200 dark:bg-gray-700"></div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-10 relative z-10">
                {lifecycleSteps.map((item, index) => (
                  <div key={item.step} className="flex flex-col items-center text-center group">
                    <div className={`w-12 h-12 bg-white dark:bg-surface-dark border-4 ${index === 0 ? 'border-primary text-primary' : 'border-gray-100 dark:border-gray-800 text-gray-400 group-hover:border-primary/30 group-hover:text-primary'
                      } rounded-full flex items-center justify-center font-black text-lg mb-4 relative z-10 transition-all duration-300 shadow-sm`}>
                      {item.step}
                    </div>

                    <h4 className="font-extrabold text-sm md:text-base text-black dark:text-white mb-3 h-auto min-h-[40px] flex items-center justify-center w-full px-1 leading-tight">
                      {item.title}
                    </h4>

                    <div className="flex flex-col gap-1.5 w-full px-1">
                      {item.links.map((link) => (
                        <div key={link} className="bg-gray-50 dark:bg-gray-800/50 rounded px-1.5 py-1 text-xs font-medium text-gray-500 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                          {link}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Solutions Powered by Security */}
        <Section>
          <Container>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <Badge className="mb-4">Applications</Badge>
                <h2 className="text-3xl font-bold text-black dark:text-white">What We Secure</h2>
                <p className="mt-2 text-text-muted-light dark:text-text-muted-dark font-light">
                  Security applied to real-world systems across industries.
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
                  className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-transparent hover:border-gray-200 dark:hover:border-gray-600 transition-colors group h-full flex flex-col"
                >
                  <div className="mb-4">
                    <solution.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="font-bold text-base mb-2 text-black dark:text-white leading-tight">{solution.title}</h4>
                  <p className="text-xs text-gray-500 mb-6 leading-relaxed flex-grow">{solution.description}</p>
                  <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                    <div className="text-[10px] uppercase font-bold text-gray-400 mb-1">Our Expertise</div>
                    <div className="text-xs font-semibold text-gray-700 dark:text-gray-300">{solution.expertise}</div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Case Studies */}
        <Section background="surface" id="case-studies">
          <Container>
            <h2 className="text-3xl font-bold mb-12 text-black dark:text-white">Security in Action</h2>

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
              title="Our Security Stack"
              description="We use best-in-class tools across every security domain."
            />

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
                  title: "Security Assessment",
                  subtitle: "Point-in-Time",
                  bestFor: "Pre-launch audits, compliance readiness, or periodic security health checks.",
                  includes: ["Pen test & vulnerability scan", "Risk register & remediation plan", "Executive summary report"],
                  featured: false,
                },
                {
                  title: "Security Partnership",
                  subtitle: "Ongoing Retainer",
                  bestFor: "Teams needing embedded security expertise across the product lifecycle.",
                  includes: ["Continuous monitoring & alerting", "DevSecOps pipeline integration", "Quarterly security reviews"],
                  featured: true,
                },
                {
                  title: "Compliance Program",
                  subtitle: "Framework-Specific",
                  bestFor: "Organizations pursuing SOC 2, ISO 27001, HIPAA, or IEC 62443 certification.",
                  includes: ["Gap analysis & roadmap", "Control implementation", "Auditor-ready documentation"],
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
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-gray-200 dark:bg-gray-800 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute -left-20 bottom-0 w-72 h-72 bg-red-100 dark:bg-red-900/10 rounded-full opacity-30 blur-3xl"></div>
          <Container size="narrow" className="relative z-10 text-center">
            <h2 className="text-4xl font-bold mb-4 text-black dark:text-white tracking-tight">
              Secure what you&apos;re building.
            </h2>
            <p className="text-gray-500 mb-10 max-w-2xl mx-auto font-light">
              Whether it&apos;s connected devices, a cloud platform, or a CI/CD pipeline—our security team is ready to protect it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" href="/contact">
                Talk to Security <ArrowRight className="w-4 h-4 ml-2" />
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
