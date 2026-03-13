import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://zigron.com";

  const staticPages = [
    "",
    "/about-us",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
    "/cookie-policy",
  ];

  const servicePages = [
    "/services",
    "/services/iot",
    "/services/iot/strategy-consulting",
    "/services/iot/device-firmware",
    "/services/iot/connectivity",
    "/services/iot/platform-cloud",
    "/services/iot/oem-product-development",
    "/services/iot/data-analytics",
    "/services/iot/security-qa",
    "/services/ai",
    "/services/ai/data-engineering",
    "/services/ai/ml-development",
    "/services/ai/genai",
    "/services/ai/mlops",
    "/services/ai/analytics",
    "/services/ai/edge-ai",
    "/services/engineering",
    "/services/engineering/cad-design",
    "/services/engineering/structural",
    "/services/engineering/civil",
    "/services/engineering/geotechnical",
  ];

  const solutionPages = [
    "/solutions",
    "/solutions/smart-energy-solar",
    "/solutions/smart-home-automation",
    "/solutions/fleet-logistics",
    "/solutions/medical-iot-platform",
    "/solutions/predictive-maintenance",
  ];

  const industryPages = [
    "/industries",
    "/industries/energy",
    "/industries/healthcare",
    "/industries/manufacturing",
    "/industries/smart-home",
    "/industries/transportation",
  ];

  const workPages = [
    "/work",
    "/work/terrasmart-solar",
    "/work/abode-smart-home",
    "/work/terratrak-ai",
  ];

  const allPages = [
    ...staticPages,
    ...servicePages,
    ...solutionPages,
    ...industryPages,
    ...workPages,
  ];

  return allPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
