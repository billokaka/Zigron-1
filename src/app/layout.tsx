import type { Metadata, Viewport } from "next";
import { Poppins, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CookieConsent } from "@/components/CookieConsent";
import "./globals.css";

// ============================================================================
// OPTIMIZED FONT LOADING (next/font — zero layout shift, auto-preload)
// ============================================================================

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
});

// ============================================================================
// METADATA
// ============================================================================

export const metadata: Metadata = {
  title: {
    default: "Zigron | IoT, AI & Engineering Solutions",
    template: "%s | Zigron",
  },
  description:
    "End-to-end IoT product engineering, AI systems, and engineering design services for OEMs and enterprises. Build secure connected products that drive operational efficiency.",
  keywords: [
    "IoT",
    "AI",
    "Engineering",
    "Product Development",
    "Firmware",
    "Cloud Platform",
    "Smart Energy",
    "Predictive Maintenance",
  ],
  authors: [{ name: "Zigron" }],
  creator: "Zigron",
  metadataBase: new URL("https://zigron.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zigron.com",
    siteName: "Zigron",
    title: "Zigron | IoT, AI & Engineering Solutions",
    description:
      "End-to-end IoT product engineering, AI systems, and engineering design services for OEMs and enterprises.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zigron | IoT, AI & Engineering Solutions",
    description:
      "End-to-end IoT product engineering, AI systems, and engineering design services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// ============================================================================
// ROOT LAYOUT
// ============================================================================

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${ibmPlexMono.variable}`} suppressHydrationWarning>
      <head>
        {/* DNS prefetch for external image domains */}
        <link rel="dns-prefetch" href="https://lh3.googleusercontent.com" />
      </head>
      <body className="font-sans antialiased">
        <div className="noise-overlay" />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[10000] focus:bg-zigron-red focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
        >
          Skip to main content
        </a>
        <div className="relative w-full overflow-x-hidden min-h-screen flex flex-col">
          <ThemeProvider>{children}</ThemeProvider>
          <CookieConsent />
        </div>
      </body>
    </html>
  );
}