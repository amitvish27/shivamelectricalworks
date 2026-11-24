import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://shivamelectricalworks.com";
  const routes = [
    "",
    "/about/",
    "/services/",
    "/clients/",
    "/gallery/",
    "/contact/",
    "/privacy/",
    "/terms/",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1.0
        : route === "/services/" || route === "/contact/"
        ? 0.9
        : 0.8,
  }));
}
