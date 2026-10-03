import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Internal/legacy areas: kept working but not part of the public site.
      disallow: [
        "/api/",
        "/admin",
        "/dashboard",
        "/portal",
        "/login",
        "/barry-window-cleaners-beta",
        "/barry-window-cleaners-login",
        "/complete-options-beta",
        "/complete-options-login",
      ],
    },
    sitemap: "https://www.tradeconnectai.co.uk/sitemap.xml",
  };
}
