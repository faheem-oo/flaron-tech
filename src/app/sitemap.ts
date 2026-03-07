import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://flarontech.com";

  const staticPages = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/contact",
    "/quote",
  ];

  const servicePages = [
    "/services/website-design-development",
    "/services/mobile-app-development",
    "/services/full-stack-development",
    "/services/documentation-services",
    "/services/domain-registration",
    "/services/web-hosting",
    "/services/email-hosting",
  ];

  const teamPages = [
    "/team/lokesh",
    "/team/thamil",
    "/team/aravind",
    "/team/ronak",
    "/team/faheem",
  ];

  const allPages = [...staticPages, ...servicePages, ...teamPages];

  return allPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services/") ? 0.8 : 0.7,
  }));
}
