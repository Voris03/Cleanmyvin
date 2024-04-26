const configEnv = {
  production: {
    url: "https://checkusavin.com/api",
    cdn: "https://cleanmyvin-production.fra1.cdn.digitaloceanspaces.com",
  },
  development: {
    url: "http://localhost:4545",
    cdn: "https://cleanmyvin-production.fra1.cdn.digitaloceanspaces.com",
  },
};

const env = configEnv["production"];

const ROUTES = {
  vin: {
    many: "/vin",
    one: "/vin/:vinId",
    files: "/vin/:vinId/files",
    clean: "/vin/:vinId/clean",
  },
} as const;

export type LotType = {
  id: string;
  source: string | null;
  vin: string;
  sourceId: string | null;
  lotId: string | null;
  title: string;
  make: string | null;
  model: string | null;
  series: string | null;
  year: string | null;
  fuel: string | null;
  cylinders: string | null;
  transmission: string | null;
  color: string | null;
  engine: string | null;
  airbags: string | null;
  odometer: string | null;
  odobrand: string | null;
  drive: string | null;
  seller: string | null;
  keys: boolean | null;
  loss: string | null;
  status: string | null;
  priceNew: string | null;
  priceOld: string | null;
  priceFuture: string | null;
  costPrice: string | null;
  costRepair: string | null;
  auctionStatus: string | null;
  auctionType: string | null;
  auctionDate: Date | null;
  bidOpen: boolean | null;
  bid: string | null;
  damagePr: string | null;
  damageSec: string | null;
  vehicleType: string | null;
  state: string | null;
  location: string | null;
  document: string | null;
  isArchived: boolean;
  createdAt: Date;
  updatedAt: Date;
};

function replaceKeysWithValue(str: string, obj: Record<string, string>) {
  Object.keys(obj).forEach((key) => {
    let regex = new RegExp(key, "g");
    str = str.replace(regex, obj[key]);
  });
  return str;
}

const buildQuery = (
  routeStr: string,
  params?: Record<string, string>,
  query?: Record<string, string | number>
) => {
  const route = params ? replaceKeysWithValue(routeStr, params) : routeStr;
  const queryParams = query
    ? `?${Object.entries(query)
        .map(([key, value]) => `${key}=${value}`)
        .join("&")}`
    : "";
  return `${env.url}${route}${queryParams}`;
};

export const parseImageUrl = (origin: string, path?: string) => {
  return path ? `${env.cdn}/${path}` : origin;
};

export const fetchLot = async (options: {
  vin: string;
}): Promise<LotType | undefined> => {
  const response = await fetch(
    buildQuery(ROUTES.vin.one, { ":vinId": options.vin }),
    {
      cache: "no-store",
    }
  );

  if (!response.ok) return undefined;

  const json = await response.json();

  return json.responseObject;
};

export const fetchLotFiles = async (options: {
  vin: string;
}): Promise<any[]> => {
  try {
    const response = await fetch(
      buildQuery(ROUTES.vin.files, { ":vinId": options.vin }),
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) throw new Error("Unable to fetch lot");

    const json = await response.json();

    if (!json.responseObject) throw new Error("Unable to fetch lot");

    return json.responseObject;
  } catch (error) {
    return [];
  }
};

type LotsWithPagination = {
  data: LotType[];
  total: number;
  offset: number;
  limit: number;
};

export const fetchLotsWithPagination = async ({
  offset,
  limit,
}: {
  offset: number;
  limit: number;
}): Promise<LotsWithPagination> => {
  const query = buildQuery(
    ROUTES.vin.many,
    {},
    {
      offset,
      limit,
    }
  );

  const response = await fetch(query, {
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) throw new Error("Unable to fetch lot");

  const json = await response.json();

  return json.responseObject;
};

export const fetchLots = async (): Promise<LotType[]> => {
  const query = buildQuery(ROUTES.vin.many);

  const response = await fetch(query, {
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) throw new Error("Unable to fetch lot");

  const json = await response.json();

  return json.responseObject.data;

  // const payload: LotType[] = [];

  // for (let offset = 0, limit = 1000; ; offset += limit) {
  //   const res = await fetchLotsWithPagination({ offset, limit });
  //   payload.push(...res.data);

  //   console.log(`${offset} / ${res.total}`);
  //   if (offset + limit >= res.total) {
  //     break;
  //   }
  // }

  // return payload;
};

export const fetchLotClean = async (options: { vin: string }) => {
  const response = await fetch(
    buildQuery(ROUTES.vin.clean, { ":vinId": options.vin }),
    {
      cache: "no-store",
      mode: "no-cors",
    }
  );

  if (!response.ok) throw new Error("Unable to fetch lot");
};
