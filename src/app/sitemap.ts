import type { MetadataRoute } from "next";
import { getPosts, getCategories, getTags } from "@/lib/wordpress";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://zigron.com";

  // ── Static pages ──────────────────────────────────────────────────────
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

  const buildDate = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    ...staticPages,
    ...servicePages,
    ...solutionPages,
    ...industryPages,
    ...workPages,
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: buildDate,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.split("/").length <= 2 ? 0.8 : 0.6,
  }));

  // ── Dynamic blog pages (from WordPress) ───────────────────────────────
  let blogEntries: MetadataRoute.Sitemap = [];

  try {
    const [posts, categories, tags] = await Promise.all([
      getPosts(1, 100),
      getCategories(),
      getTags(),
    ]);

    blogEntries = [
      {
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.8,
      },
      ...posts.data.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.modified),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      })),
      ...categories
        .filter((c) => c.count > 0)
        .map((cat) => ({
          url: `${baseUrl}/blog/category/${cat.slug}`,
          lastModified: new Date(),
          changeFrequency: "weekly" as const,
          priority: 0.5,
        })),
      ...tags
        .filter((t) => t.count > 0)
        .map((tag) => ({
          url: `${baseUrl}/blog/tag/${tag.slug}`,
          lastModified: new Date(),
          changeFrequency: "weekly" as const,
          priority: 0.4,
        })),
    ];
  } catch {
    // WordPress API unreachable — only include static blog hub
    blogEntries = [
      {
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.8,
      },
    ];
  }

  return [...staticEntries, ...blogEntries];
}
