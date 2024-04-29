import { fetchLots, fetchLotsWithPagination } from "@/lib/server";
import { MetadataRoute } from "next";

const SITEMAP_CHUNK = 10_000;

export async function generateSitemaps() {
  try {
    // return [{ id: 0 }, { id: 1 }];

    const data = await fetchLots();

    const offsets = Array.from(
      { length: Math.ceil(data.length / SITEMAP_CHUNK) },
      (_, offset) => ({
        id: offset,
      })
    );

    return offsets;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  try {
    // return [
    //   {
    //     url: "1",
    //   },
    //   { url: "2" },
    // ];
    const { data } = await fetchLotsWithPagination({
      offset: id * SITEMAP_CHUNK,
      limit: SITEMAP_CHUNK,
    });

    return data.map((lot) => ({
      url: `https://checkusavin.com/vin/${lot.vin}`,
      lastModified: new Date(lot.updatedAt),
    }));
  } catch (error) {
    console.log(error);
    return [];
  }
}
