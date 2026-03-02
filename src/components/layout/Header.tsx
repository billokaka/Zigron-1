"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Moon,
  Sun,
  Zap,
  ChevronDown,
  Settings,
  Lightbulb,
  Building2,
  SunIcon,
  Truck,
  Home,
  Heart,
  Factory,
  ArrowRight,
  Shield,
  Code,
  Globe,
  Database,
  Smartphone,
  Server,
} from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

// ============================================================================
// MEGA MENU DATA
// ============================================================================

const servicesMegaMenu = {
  featured: {
    title: "End-to-End Engineering",
    description:
      "We build with the seams in mind. From custom hardware and firmware to cloud platforms and AI models.",
    cta: "View all services",
    href: "/services",
    icon: Zap,
  },
  columns: [
    {
      title: "IoT & Platform",
      titleHref: "/services/iot",
      items: [
        { label: "Strategy & Consulting", href: "/services/iot/strategy-consulting" },
        { label: "Device & Firmware", href: "/services/iot/device-firmware" },
        { label: "Connectivity & Edge", href: "/services/iot/connectivity" },
        { label: "Platform & Cloud", href: "/services/iot/platform-cloud" },
        { label: "OEM Product Development", href: "/services/iot/oem-product-development" },
        { label: "Data & Analytics", href: "/services/iot/data-analytics" },
        { label: "Security & QA", href: "/services/iot/security-qa" },
      ],
    },
    {
      title: "AI & Data Systems",
      titleHref: "/services/ai",
      items: [
        { label: "Data Engineering", href: "/services/ai/data-engineering" },
        { label: "ML / CV / NLP", href: "/services/ai/ml-development" },
        { label: "GenAI Integration", href: "/services/ai/genai" },
        { label: "MLOps & Model Mgmt", href: "/services/ai/mlops" },
        { label: "Analytics & Visualization", href: "/services/ai/analytics" },
        { label: "Edge AI & Optimization", href: "/services/ai/edge-ai" },
      ],
    },
    {
      title: "Engineering Design",
      titleHref: "/services/engineering",
      items: [
        { label: "CAD Design & Drafting", href: "/services/engineering/cad-design" },
        { label: "Structural Analysis", href: "/services/engineering/structural" },
        { label: "Civil Engineering", href: "/services/engineering/civil" },
        { label: "Geotechnical", href: "/services/engineering/geotechnical" },
      ],
    },
  ],
};

const solutionsMegaMenu = {
  featured: {
    title: "100% Custom Built",
    description:
      "We don't sell products. We engineer bespoke solutions tailored to your exact operational requirements.",
    cta: "Explore all solutions",
    href: "/solutions",
    icon: Code,
  },
  columns: [
    {
      title: "Industrial & Energy",
      titleHref: "/solutions",
      items: [
        { label: "Smart Energy & Solar", href: "/solutions/smart-energy-solar", icon: SunIcon },
        { label: "Predictive Maintenance", href: "/solutions/predictive-maintenance", icon: Settings },
      ],
    },
    {
      title: "Mobility & Consumer",
      titleHref: "/solutions",
      items: [
        { label: "Fleet & Logistics", href: "/solutions/fleet-logistics", icon: Truck },
        { label: "Smart Home IoT", href: "/solutions/smart-home-automation", icon: Home },
      ],
    },
    {
      title: "Health & Compliance",
      titleHref: "/solutions",
      items: [
        { label: "Medical IoT Platform", href: "/solutions/medical-iot-platform", icon: Heart },
      ],
    },
  ],
};

const industriesMegaMenu = {
  featured: {
    title: "Industry Expertise",
    description:
      "We build systems tailored to regulated and operationally complex environments.",
    cta: "View all industries",
    href: "/industries",
    icon: Building2,
  },
  columns: [
    {
      title: "Operational Efficiency",
      titleHref: "/industries",
      items: [
        { label: "Manufacturing", href: "/industries/manufacturing", icon: Factory },
      ],
    },
    {
      title: "Asset Monitoring",
      titleHref: "/industries",
      items: [
        { label: "Energy & Utilities", href: "/industries/energy", icon: Zap },
        { label: "Transportation", href: "/industries/transportation", icon: Truck },
      ],
    },
    {
      title: "Compliance & Automation",
      titleHref: "/industries",
      items: [
        { label: "Healthcare", href: "/industries/healthcare", icon: Heart },
        { label: "Smart Home", href: "/industries/smart-home", icon: Home },
      ],
    },
  ],
};

// ============================================================================
// TYPES
// ============================================================================

interface MegaMenuColumnItem {
  label: string;
  href: string;
  icon?: React.ElementType;
}

interface MegaMenuColumn {
  title: string;
  titleHref: string;
  items: MegaMenuColumnItem[];
}

interface MegaMenuConfig {
  featured: {
    title: string;
    description: string;
    cta: string;
    href: string;
    icon: React.ElementType;
  };
  columns: MegaMenuColumn[];
}

// ============================================================================
// DESKTOP MEGA MENU COMPONENT
// ============================================================================

function DesktopMegaMenu({ config }: { config: MegaMenuConfig }) {
  const FeaturedIcon = config.featured.icon;

  return (
    <div className="absolute top-full left-0 w-full mt-0 pt-3 z-50">
      {/* Invisible hover bridge to prevent menu closing when moving mouse from link to panel */}
      <div className="absolute -top-3 left-0 w-full h-6 bg-transparent" />

      <div className="w-full bg-white dark:bg-surface-dark border-y border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-gray-100 dark:divide-gray-800">

            {/* Featured Section (Left, 1/4 width) */}
            <div className="p-8 lg:w-1/4 bg-gray-50/50 dark:bg-gray-900/30 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                  <FeaturedIcon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {config.featured.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {config.featured.description}
                </p>
              </div>
              <Link
                href={config.featured.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors group"
              >
                {config.featured.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Links Section (Right, 3/4 width) */}
            <div className="p-8 lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {config.columns.map((column, idx) => (
                  <div key={idx} className="space-y-4">
                    <Link
                      href={column.titleHref}
                      className="text-sm font-bold text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-1 group"
                    >
                      {column.title}
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                    </Link>
                    <ul className="space-y-3">
                      {column.items.map((item, itemIdx) => {
                        const ItemIcon = item.icon;
                        return (
                          <li key={itemIdx}>
                            <Link
                              href={item.href}
                              className="group flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                            >
                              {ItemIcon && (
                                <ItemIcon className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                              )}
                              <span className="relative overflow-hidden">
                                {item.label}
                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// NAV ITEM WITH MEGA MENU (DESKTOP)
// ============================================================================

function NavItemWithMegaMenu({
  label,
  href,
  config,
  activeDropdown,
  setActiveDropdown,
}: {
  label: string;
  href: string;
  config: MegaMenuConfig;
  activeDropdown: string | null;
  setActiveDropdown: (id: string | null) => void;
}) {
  const isOpen = activeDropdown === label;
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <div
      className="flex h-full items-center"
      onMouseEnter={() => setActiveDropdown(label)}
    >
      <Link
        href={href}
        className={`flex items-center gap-1.5 text-sm font-semibold transition-colors py-2 group ${isOpen || isActive
          ? "text-primary"
          : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
          }`}
      >
        <span>{label}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : "text-gray-400 group-hover:text-primary"}`}
        />
      </Link>

      {/* Mega Menu Panel bounds to the full screen width outside this div (controlled by Header container) */}
      <div
        className={`fixed left-0 w-full transition-all duration-300 origin-top ${isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        style={{ top: "80px" }} // Matches nav height
      >
        <DesktopMegaMenu config={config} />
      </div>
    </div>
  );
}

// ============================================================================
// MOBILE ACCORDION ITEM
// ============================================================================

function MobileAccordionItem({
  label,
  href,
  config,
  onClose,
}: {
  label: string;
  href: string;
  config: MegaMenuConfig;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 dark:border-gray-800 last:border-0">
      <div className="flex items-center justify-between py-3">
        <Link
          href={href}
          onClick={onClose}
          className="text-lg font-bold text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition"
        >
          {label}
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="p-2 -mr-2 rounded-lg text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary transition"
          aria-label={`Toggle ${label} submenu`}
        >
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-[800px] opacity-100 mb-4" : "max-h-0 opacity-0"
          }`}
      >
        <div className="space-y-6 pt-2 pb-4 px-2">
          {config.columns.map((column, idx) => (
            <div key={idx} className="space-y-3">
              <Link
                href={column.titleHref}
                onClick={onClose}
                className="text-sm font-bold text-gray-900 dark:text-white"
              >
                {column.title}
              </Link>
              <ul className="space-y-2.5 border-l-2 border-gray-100 dark:border-gray-800 pl-3">
                {column.items.map((item, itemIdx) => {
                  const ItemIcon = item.icon;
                  return (
                    <li key={itemIdx}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors py-1"
                      >
                        {ItemIcon && <ItemIcon className="w-4 h-4 text-primary/60" />}
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
          <Link
            href={config.featured.href}
            onClick={onClose}
            className="flex items-center gap-2 text-sm font-semibold text-primary mt-4 pt-4 border-t border-gray-100 dark:border-gray-800"
          >
            {config.featured.cta}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// MAIN HEADER
// ============================================================================

const simpleNavLinks = [
  { label: "Work", href: "/work" },
  { label: "Company", href: "/about-us" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  const navRef = useRef<HTMLElement>(null);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Close dropdown when mouse leaves the nav area entirely
  const handleNavMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Close on scroll
  useEffect(() => {
    const handleScroll = () => setActiveDropdown(null);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-black text-white text-[11px] py-1.5 px-4 text-center tracking-[0.2em] uppercase font-bold hidden md:block">
        <span className="opacity-90">
          OEM Product Engineering • AI Systems • Engineering Design
        </span>
      </div>

      {/* Main Navigation */}
      <nav
        ref={navRef}
        onMouseLeave={handleNavMouseLeave}
        className="sticky top-0 z-50 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-[80px] items-center">
            {/* Logo */}
            <Link
              href="/"
              className="flex-shrink-0 flex items-center gap-3 group"
              onClick={() => setActiveDropdown(null)}
            >
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center text-white shadow-md group-hover:bg-primary-dark group-hover:shadow-lg transition-all transform group-hover:-translate-y-0.5">
                <Zap className="w-5 h-5 fill-current" strokeWidth={2} />
              </div>
              <span className="text-2xl font-black tracking-tight text-gray-900 dark:text-white uppercase">
                ZIGRON
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex h-full space-x-8 lg:space-x-10 items-center">
              <NavItemWithMegaMenu
                label="Services"
                href="/services"
                config={servicesMegaMenu}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />
              <NavItemWithMegaMenu
                label="Solutions"
                href="/solutions"
                config={solutionsMegaMenu}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />
              <NavItemWithMegaMenu
                label="Industries"
                href="/industries"
                config={industriesMegaMenu}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />

              {/* Simple nav links */}
              {simpleNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/work"
                className="text-sm font-bold text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
              >
                View case studies
              </Link>
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary-dark text-white text-sm font-bold py-2.5 px-6 rounded-lg shadow-md focus:ring-4 focus:ring-primary/20 transition-all hover:-translate-y-0.5"
              >
                Book a consultation
              </Link>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors focus:ring-2 focus:ring-primary/50"
                aria-label={
                  theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Mobile Menu Button & Dark Mode */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 md:hidden transition-colors"
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden absolute top-[80px] left-0 w-full h-[calc(100vh-80px)] bg-white dark:bg-surface-dark overflow-y-auto transition-all duration-300 ease-in-out ${mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
            }`}
        >
          <div className="px-6 py-8 space-y-2">
            {/* Mega Menu Accordions */}
            <MobileAccordionItem
              label="Services"
              href="/services"
              config={servicesMegaMenu}
              onClose={closeMobileMenu}
            />
            <MobileAccordionItem
              label="Solutions"
              href="/solutions"
              config={solutionsMegaMenu}
              onClose={closeMobileMenu}
            />
            <MobileAccordionItem
              label="Industries"
              href="/industries"
              config={industriesMegaMenu}
              onClose={closeMobileMenu}
            />

            {/* Simple links */}
            <div className="py-2 border-b border-gray-100 dark:border-gray-800">
              {simpleNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="block text-lg font-bold text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition py-3"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-8 flex flex-col gap-4">
              <Link
                href="/work"
                onClick={closeMobileMenu}
                className="w-full text-center py-3.5 px-6 rounded-lg font-bold text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition"
              >
                View case studies
              </Link>
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="w-full text-center bg-primary text-white font-bold py-4 px-6 rounded-lg shadow-md hover:bg-primary-dark transition"
              >
                Book a consultation
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Screen darkening overlay when mega menu is open */}
      <div
        className={`hidden lg:block fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${activeDropdown ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        style={{ top: "112px" }} // Below nav (80px) + announcement bar (32px)
      />
    </>
  );
}
