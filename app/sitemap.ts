import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.tradeconnectai.co.uk";

  const routes = [
    "",
    "/pricing",
    "/ai-call-demo",
    "/customer-demo",
    "/complete-options-beta",
    "/ai-receptionist-for-trades",
    "/missed-call-software",
    "/trade-business-ai",
    "/quote-generator-for-trades",
    "/customer-updates-for-trades",
    "/trade-job-management",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
