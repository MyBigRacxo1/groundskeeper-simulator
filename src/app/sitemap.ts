import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { servicePages } from "@/config/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "", "/services", ...servicePages.map((s) => `/services/${s.slug}`),
    "/tarifs", "/comment-ca-marche", "/faq", "/contact", "/reservation",
    "/mentions-legales", "/confidentialite", "/cgv",
  ];
  return paths.map((p) => ({ url: `${site.url}${p}`, lastModified: new Date(), priority: p === "" ? 1 : 0.7 }));
}
