const BASE_URL = "https://checkusavin.com/api";
const BASE_URL_CDN =
  "https://cleanmyvin-production.fra1.cdn.digitaloceanspaces.com";

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

const buildQuery = (routeStr: string, params?: Record<string, string>) => {
  const route = params ? replaceKeysWithValue(routeStr, params) : routeStr;
  return `${BASE_URL}${route}`;
};

export const parseImageUrl = (origin: string, path?: string) => {
  return path ? `${BASE_URL_CDN}/${path}` : origin;
};

export const fetchLot = async (options: {
  vin: string;
}): Promise<LotType | undefined> => {
  try {
    const response = await fetch(
      buildQuery(ROUTES.vin.one, { ":vinId": options.vin }),
      {
        cache: "no-store",
      }
    );

    if (!response.ok) throw new Error("Unable to fetch lot");

    const json = await response.json();

    if (!json.responseObject) throw new Error("Unable to fetch lot");

    return json.responseObject;
  } catch (error) {
    return undefined;
  }
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

export const fetchLots = async (): Promise<LotType[]> => {
  const response = await fetch(buildQuery(ROUTES.vin.many), {
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) throw new Error("Unable to fetch lot");

  const json = await response.json();

  return json.responseObject;
};

export const fetchLotClean = async (options: { vin: string }) => {
  const response = await fetch(
    buildQuery(ROUTES.vin.clean, { ":vinId": options.vin }),
    {
      cache: "no-store",
    }
  );

  if (!response.ok) throw new Error("Unable to fetch lot");
};
