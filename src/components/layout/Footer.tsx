import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  solutions: [
    { label: "Smart Energy & Solar", href: "/solutions/smart-energy-solar" },
    { label: "Predictive Maintenance", href: "/solutions/predictive-maintenance" },
    { label: "Fleet & Logistics", href: "/solutions/fleet-logistics" },
  ],
  services: [
    { label: "IoT Services", href: "/services/iot" },
    { label: "AI & Data Services", href: "/services/ai" },
    { label: "Engineering Services", href: "/services/engineering" },
    { label: "Device & Firmware", href: "/services/iot/device-firmware" },
    { label: "Platform & Cloud", href: "/services/iot/platform-cloud" },
  ],
  industries: [
    { label: "Energy & Utilities", href: "/industries/energy" },
    { label: "Manufacturing", href: "/industries/manufacturing" },
    { label: "Smart Home", href: "/industries/smart-home" },
    { label: "Transportation", href: "/industries/transportation" },
    { label: "Healthcare", href: "/industries/healthcare" },
  ],
  company: [
    { label: "About Us", href: "/about-us" },
    { label: "Contact", href: "/contact" },
    { label: "Case Studies", href: "/work" },
    { label: "Blog", href: "/blog" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-surface-light dark:bg-surface-dark pt-16 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo Column */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <Image
                src="/logo.svg"
                alt="Zigron Logo"
                width={120}
                height={35}
                className="w-28 md:w-[120px] h-auto drop-shadow-sm transition-transform hover:scale-[1.02] dark:brightness-0 dark:invert"
              />
            </Link>
            <p className="text-xs text-gray-500 mb-4">
              Building Smart Solutions Of The Future.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-black dark:text-white">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs text-gray-500 dark:text-gray-400">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-black dark:text-white">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-gray-500 dark:text-gray-400">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-black dark:text-white">
              Industries
            </h4>
            <ul className="space-y-2 text-xs text-gray-500 dark:text-gray-400">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-black dark:text-white">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-gray-500 dark:text-gray-400">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 py-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Zigron Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              href="/privacy-policy"
              className="hover:text-black dark:hover:text-white transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-black dark:hover:text-white transition"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookie-policy"
              className="hover:text-black dark:hover:text-white transition"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
