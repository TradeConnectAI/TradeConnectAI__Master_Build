import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.tradeconnectai.co.uk";

  // Public marketing pages. The app itself lives at tradeconnectai-beta.lovable.app.
  const routes = [
    "",
    "/pricing",
    "/feedback",
    "/book-demo",
    "/industries/plumbers",
    "/industries/electricians",
    "/industries/hvac",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
