import { fetchLots } from "lib/server";
import { MetadataRoute } from "next";

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  console.log("id", id);
  const data = await fetchLots();

  return data.map((lot) => ({
    url: `https://checkusavin.com/vin/${lot.vin}`,
    lastModified: new Date(lot.updatedAt),
  }));
}
