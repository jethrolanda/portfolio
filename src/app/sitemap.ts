import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://jethrolanda.vercel.app", changeFrequency: "monthly" }];
}
