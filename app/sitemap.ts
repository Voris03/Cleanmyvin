// import { fetchLots } from "lib/server";
// import { MetadataRoute } from "next";

// export const revalidate = 3600;

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   const data = await fetchLots();

//   return data.map((lot) => ({
//     url: `https://checkusavin.com/vin/${lot.vin}`,
//     lastModified: new Date(lot.updatedAt),
//   }));
// }

import { fetchLots, fetchLotsWithPagination } from "lib/server";
import { MetadataRoute } from "next";

export const revalidate = 3600;

export async function generateSitemaps() {
  const data = await fetchLots();

  const offsets = Array.from(
    { length: Math.ceil(data.length / 50_000) },
    (_, offset) => ({
      id: offset,
    })
  );

  console.log("offsets", offsets);

  return offsets;
}

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  const { data } = await fetchLotsWithPagination({
    offset: id * 50_000,
    limit: 50_000,
  });

  return data.map((lot) => ({
    url: `https://checkusavin.com/vin/${lot.vin}`,
    lastModified: new Date(lot.updatedAt),
  }));
}
