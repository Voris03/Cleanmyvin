import { fetchLots, fetchLotsWithPagination } from "lib/server";
import { MetadataRoute } from "next";

export async function generateSitemaps() {
  const data = await fetchLots();

  const offsets = Array.from(
    { length: Math.ceil(data.length) },
    (_, offset) => ({
      offset,
    })
  );

  return offsets;
}

export default async function sitemap({
  offset,
}: {
  offset: number;
}): Promise<MetadataRoute.Sitemap> {
  const { data } = await fetchLotsWithPagination({
    offset: offset * 50_000,
    limit: 50_000,
  });

  return data.map((lot) => ({
    url: `https://checkusavin.com/vin/${lot.vin}`,
    lastModified: lot.updatedAt.toISOString(),
  }));
}
