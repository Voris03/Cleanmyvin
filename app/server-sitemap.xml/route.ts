import { fetchLots } from "@/lib/server";

import { getServerSideSitemap } from "next-sitemap";

export async function GET(request: Request) {
  const data = await fetchLots();

  const fields = data.map((lot) => ({
    loc: `https://checkusavin.com/vin/${lot.vin}`,
    lastmod: new Date(lot.updatedAt).toISOString(),
  }));

  return getServerSideSitemap(fields);
}
