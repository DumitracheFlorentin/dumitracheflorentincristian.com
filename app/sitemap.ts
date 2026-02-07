import type { MetadataRoute } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://dumitracheflorentincristian.com";

const routes = [
  "",
  "/projects/circle-resume",
  "/projects/unde-stau-studentii",
  "/work-experience/luxoft",
  "/work-experience/decathlon",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "monthly" : "yearly",
    priority: path === "" ? 1 : 0.8,
  }));
}
