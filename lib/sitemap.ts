import { fetchLots, fetchLotsWithPagination } from "lib/server";
import { MetadataRoute } from "next";

export async function generateSitemaps() {
  const data = await fetchLots();

  const offsets = Array.from(
    { length: Math.ceil(data.length / 50_000) },
    (_, offset) => ({
      id: offset,
    })
  );

  console.log("offsets", offsets);
  // return offsets;
  return [{ id: 0 }, { id: 1 }];
}

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  console.log("id", id);
  const { data } = await fetchLotsWithPagination({
    offset: id * 50_000,
    limit: 50_000,
  });

  return data.map((lot) => ({
    url: `https://checkusavin.com/vin/${lot.vin}`,
    lastModified: new Date(lot.updatedAt),
  }));
}
