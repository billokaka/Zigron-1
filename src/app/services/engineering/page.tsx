import Image from "next/image";
import { Header, Footer } from "@/components/layout";
import { Button, Badge, SectionHeader, Container, Section } from "@/components/ui";
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Ruler,
  PenTool,
  Building,
  FileCheck,
  Mountain,
  ClipboardList,
  Calculator,
  Compass,
  MapPin,
  Factory,
  Wind,
  Droplets,
  Sun,
} from "lucide-react";

export const metadata = {
  title: "Engineering Design & Analysis Services | Zigron",
  description: "Professional engineering services for CAD design, structural analysis, civil engineering, and project management.",
};

const engineeringServices = [
  {
    icon: PenTool,
    title: "CAD Design & Drafting",
    whenToUse: "Creating detailed technical drawings and 3D models.",
    features: ["2D/3D CAD Modeling", "As-Built Documentation", "Design Optimization"],
    href: "/services/engineering/cad-design",
  },
  {
    icon: Building,
    title: "Structural Analysis",
    whenToUse: "Ensuring structural integrity and code compliance.",
    features: ["Load Analysis & Calculations", "FEA Simulation", "Foundation Design"],
    href: "/services/engineering/structural",
  },
  {
    icon: MapPin,
    title: "Civil Engineering",
    whenToUse: "Site development, grading, and infrastructure.",
    features: ["Site Layout & Grading", "Drainage Design", "Utility Coordination"],
    href: "/services/engineering/civil",
  },
  {
    icon: Mountain,
    title: "Geotechnical Engineering",
    whenToUse: "Understanding soil conditions and foundation requirements.",
    features: ["Soil Analysis", "Foundation Recommendations", "Slope Stability"],
    href: "/services/engineering/geotechnical",
  },
  {
    icon: FileCheck,
    title: "Permitting & Compliance",
    whenToUse: "Navigating regulatory requirements and approvals.",
    features: ["Permit Applications", "Code Compliance Review", "AHJ Coordination"],
    href: "/services/engineering/permitting",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    whenToUse: "Coordinating complex multi-discipline projects.",
    features: ["Timeline Management", "Resource Allocation", "Stakeholder Communication"],
    href: "/services/engineering/project-management",
  },
];

const engineeringLifecycle = [
  { step: 1, title: "Requirements", links: ["Scope Definition", "Site Assessment"] },
  { step: 2, title: "Conceptual Design", links: ["Feasibility", "Options Analysis"] },
  { step: 3, title: "Detailed Design", links: ["CAD/BIM", "Calculations"] },
  { step: 4, title: "Review & Approval", links: ["QA/QC", "Stamping"] },
  { step: 5, title: "Permitting", links: ["Submissions", "Revisions"] },
  { step: 6, title: "Construction Support", links: ["RFIs", "Inspections"] },
];

const industries = [
  { icon: Sun, title: "Solar & Renewable Energy", description: "Ground-mount, rooftop, and tracker system design.", engRole: "Structural & Civil Design" },
  { icon: Factory, title: "Industrial & Manufacturing", description: "Facility design, equipment foundations, and layouts.", engRole: "Structural Analysis & MEP" },
  { icon: Building, title: "Commercial Construction", description: "Office buildings, retail spaces, and mixed-use.", engRole: "Full Building Design" },
  { icon: Wind, title: "Wind Energy", description: "Turbine foundations and access road design.", engRole: "Geotech & Structural" },
  { icon: Droplets, title: "Water & Utilities", description: "Treatment facilities and distribution systems.", engRole: "Civil & Process Design" },
];

const caseStudies = [
  {
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    title: "TerraSmart Solar Farm Engineering",
    category: "Renewable Energy",
    problem: "Complex terrain required custom foundation solutions.",
    approach: "Site-specific structural analysis with optimized pile designs.",
    outcome: "30% reduction in foundation costs with faster installation.",
    href: "/work/terrasmart-solar",
  },
  {
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80",
    title: "Industrial Facility Expansion",
    category: "Manufacturing",
    problem: "Tight timeline for production line expansion.",
    approach: "Parallel engineering streams with accelerated permitting.",
    outcome: "6-week design-to-permit cycle vs. industry 12-week average.",
    href: "/work",
  },
  {
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    title: "Multi-Site Rollout Engineering",
    category: "Commercial",
    problem: "50+ locations needed standardized but site-adapted designs.",
    approach: "Template-based design system with automated customization.",
    outcome: "80% reduction in per-site engineering time.",
    href: "/work",
  },
];

const techStack = {
  "CAD/BIM": ["AutoCAD", "Revit", "SolidWorks", "Civil 3D"],
  "Analysis": ["STAAD.Pro", "SAP2000", "RISA", "ETABS"],
  "Geotechnical": ["PLAXIS", "Slide", "GeoStudio", "LPILE"],
  "Project Mgmt": ["Procore", "Bluebeam", "PlanGrid", "MS Project"],
  "GIS/Mapping": ["ArcGIS", "QGIS", "Google Earth Pro", "Pix4D"],
};

const faqs = [
  {
    question: "What types of projects do you handle?",
    answer: "We support projects ranging from single-building designs to multi-site rollouts. Our sweet spot is renewable energy infrastructure, industrial facilities, and commercial construction. We also handle specialized work like equipment foundations and retrofit engineering.",
  },
  {
    question: "Do your engineers provide stamped drawings?",
    answer: "Yes. We have licensed Professional Engineers (PEs) across multiple states who can stamp and seal drawings for permit submission. For states where we're not licensed, we partner with local PEs.",
  },
  {
    question: "How do you handle multi-site or high-volume projects?",
    answer: "We use template-based design systems combined with automation to handle high-volume work efficiently. Our process includes standardized design packages that are customized per-site based on local conditions and requirements.",
  },
  {
    question: "Can you work with our existing design teams?",
    answer: "Yes. We often augment in-house teams for specific disciplines or peak workloads. We integrate with your workflows, tools, and standards to provide seamless support.",
  },
  {
    question: "What's your typical turnaround time?",
    answer: "It varies by project scope. Simple structural calculations might take days, while full permit sets for complex sites take weeks. We provide detailed timelines during scoping and have expedited options for urgent projects.",
  },
  {
    question: "Do you provide construction support?",
    answer: "Yes. We support projects through construction with RFI responses, site visits, and design clarifications. We can also provide inspection services and as-built documentation.",
  },
];

export default function EngineeringServicesPage() {
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
                  Engineering Design <br />
                  <span className="text-primary">& Analysis Services</span>
                </h1>

                <p className="text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark mb-8 max-w-lg leading-relaxed font-light">
                  Practical engineering that supports product development and infrastructure delivery—designed for accuracy, speed, and cost efficiency.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-center mb-10">
                  <Button size="lg" href="/contact">
                    Talk to an engineer
                  </Button>
                  <Button variant="ghost" href="#case-studies">
                    See engineering projects
                  </Button>
                </div>

                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: Ruler, text: "PE-stamped deliverables" },
                    { icon: Zap, text: "Fast turnaround" },
                    { icon: Shield, text: "Code compliant" },
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

              {/* Visual */}
              <div className="relative h-96 w-full hidden lg:flex items-center justify-center">
                <div className="relative w-full max-w-md aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-white dark:from-surface-dark dark:to-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col p-6 overflow-hidden">
                    <div className="flex justify-between items-center mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                      <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">Project Dashboard</span>
                      <span className="flex items-center gap-2 text-xs text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded font-medium">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        On Track
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 flex-1">
                      <div className="bg-white dark:bg-black/40 rounded-lg p-4 border border-gray-200 dark:border-gray-700 flex flex-col justify-center items-center gap-2">
                        <PenTool className="w-8 h-8 text-orange-500" />
                        <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">Drawings</span>
                        <span className="text-2xl font-bold text-orange-600">147</span>
                      </div>

                      <div className="bg-white dark:bg-black/40 rounded-lg p-4 border border-gray-200 dark:border-gray-700 flex flex-col justify-center items-center gap-2">
                        <Calculator className="w-8 h-8 text-blue-500" />
                        <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">Calcs</span>
                        <span className="text-2xl font-bold text-blue-600">32</span>
                      </div>

                      <div className="col-span-2 bg-white dark:bg-black/40 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                        <div className="flex justify-between text-xs text-gray-500 mb-2">
                          <span>Design Phase Progress</span>
                          <span>75%</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full w-3/4 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></div>
                        </div>
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
                  Trusted by developers, EPCs, and OEMs
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 items-center">
                  <span className="text-xl font-extrabold text-gray-400 dark:text-gray-500 tracking-tight">AECOM</span>
                  <span className="text-xl font-extrabold text-gray-400 dark:text-gray-500 font-serif italic">Bechtel</span>
                  <span className="text-xl font-extrabold text-gray-400 dark:text-gray-500 font-mono">Fluor</span>
                  <span className="text-xl font-extrabold text-gray-400 dark:text-gray-500">Jacobs</span>
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center gap-8 lg:gap-12 border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-gray-700 pt-6 lg:pt-0 lg:pl-12">
                <div className="text-center">
                  <p className="text-3xl font-bold text-black dark:text-white tracking-tight">500+</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wide font-semibold mt-1">Projects Completed</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-black dark:text-white tracking-tight">30+</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wide font-semibold mt-1">PE States</p>
                </div>
                <div className="text-center hidden sm:flex flex-col gap-2">
                  <span className="text-[10px] font-bold bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 px-3 py-1 rounded-full text-gray-600 dark:text-gray-300">ISO 9001</span>
                  <span className="text-[10px] font-bold bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 px-3 py-1 rounded-full text-gray-600 dark:text-gray-300">AISC Certified</span>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Services Grid */}
        <Section>
          <Container>
            <SectionHeader
              label="Engineering Services"
              title="Full-Spectrum Engineering Capabilities"
              description="Select a discipline to see how our engineering teams can support your projects."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {engineeringServices.map((service) => (
                <div
                  key={service.title}
                  className="group bg-white dark:bg-surface-dark p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all duration-300 hover:shadow-xl relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mb-6 text-orange-600 dark:text-orange-400">
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

        {/* Engineering Lifecycle */}
        <Section background="surface">
          <Container>
            <h2 className="text-3xl font-bold text-center mb-16 text-black dark:text-white">
              The Engineering Lifecycle
            </h2>

            <div className="relative">
              <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>

              <div className="grid grid-cols-2 md:grid-cols-6 gap-y-12 gap-x-4 relative z-10">
                {engineeringLifecycle.map((item, index) => (
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

        {/* Industries Served */}
        <Section>
          <Container>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <Badge className="mb-4">Industries</Badge>
                <h2 className="text-3xl font-bold text-black dark:text-white">Industries We Serve</h2>
                <p className="mt-2 text-text-muted-light dark:text-text-muted-dark font-light">
                  Engineering expertise across key infrastructure sectors.
                </p>
              </div>
              <Button variant="ghost" href="/industries">
                View all industries <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {industries.map((industry) => (
                <div
                  key={industry.title}
                  className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-transparent hover:border-gray-200 dark:hover:border-gray-600 transition-colors group"
                >
                  <industry.icon className="w-10 h-10 text-orange-500 dark:text-orange-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-base mb-2 text-black dark:text-white">{industry.title}</h4>
                  <p className="text-xs text-gray-500 mb-4 leading-relaxed">{industry.description}</p>
                  <div className="text-[10px] font-mono bg-white dark:bg-black p-2 rounded border border-dashed border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400">
                    <strong>Focus:</strong> {industry.engRole}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Case Studies */}
        <Section background="surface" id="case-studies">
          <Container>
            <h2 className="text-3xl font-bold mb-12 text-black dark:text-white">Engineering in Action</h2>

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
              title="Our Engineering Toolset"
              description="Industry-standard software for precision engineering and efficient delivery."
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
                  title: "Project-Based",
                  subtitle: "Fixed Scope",
                  bestFor: "Defined deliverables like permit sets, structural calcs, or design packages.",
                  includes: ["Fixed timeline & budget", "PE-stamped deliverables", "Full documentation"],
                  featured: false,
                },
                {
                  title: "Staff Augmentation",
                  subtitle: "Flexible Resources",
                  bestFor: "Augmenting your team for peak workloads or specialized skills.",
                  includes: ["Dedicated engineers", "Your tools & workflows", "Flexible scaling"],
                  featured: true,
                },
                {
                  title: "Program Support",
                  subtitle: "Multi-Site / Ongoing",
                  bestFor: "High-volume or multi-site programs needing consistent engineering.",
                  includes: ["Template-based design", "Volume pricing", "Dedicated team"],
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
                      Most Flexible
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
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-orange-200 dark:bg-orange-900/20 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute -left-20 bottom-0 w-72 h-72 bg-orange-100 dark:bg-orange-900/10 rounded-full opacity-30 blur-3xl"></div>

          <Container size="narrow" className="relative z-10 text-center">
            <h2 className="text-4xl font-bold mb-4 text-black dark:text-white tracking-tight">
              Ready to start your project?
            </h2>
            <p className="text-gray-500 mb-10 max-w-2xl mx-auto font-light">
              Tell us about your engineering needs and we&apos;ll scope a solution that fits your timeline and budget.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" href="/contact">
                Request Engineering Quote <ArrowRight className="w-4 h-4 ml-2" />
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
