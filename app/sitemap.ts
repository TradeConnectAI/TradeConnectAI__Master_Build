import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.tradeconnectai.co.uk";

  // Launch surfaces only. Optional demos (/ai-call-demo, /customer-demo) omitted from sitemap.
  const routes = [
    "",
    "/pricing",
    "/operations-demo",
    "/book-demo",
    "/industries/plumbers",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
