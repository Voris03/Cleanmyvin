import { fetchLots } from "lib/server";
import { MetadataRoute } from "next";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await fetchLots();

  return data.map((lot) => ({
    url: `https://checkusavin.com/vin/${lot.vin}`,
    lastModified: new Date(lot.updatedAt),
  }));
}
