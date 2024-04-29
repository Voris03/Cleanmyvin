import { fetchLots } from "@/lib/server";
import { MetadataRoute } from "next";

const SITEMAP_CHUNK = 10_000;

// export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await fetchLots();
  const chunks = Math.ceil(data.length / SITEMAP_CHUNK);

  const sitemaps: MetadataRoute.Sitemap = Array.from(
    { length: chunks },
    (_, index) => ({
      url: `https://checkusavin.com/vin/sitemap.xml/${index}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    })
  );

  return [
    {
      url: "https://checkusavin.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...sitemaps,
  ];
}
