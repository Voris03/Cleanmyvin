const StatusEnRu = {
  "RUNS AND DRIVES": "заводится и едет",
  "Run & Drive": "заводится и едет",
  "ENGINE START PROGRAM": "двигатель запускается",
  "ENHANCED VEHICLES": "улучшенные транспортные средства",
  STATIONARY: "стационарный",
  STARTS: "Запускается",
} as const;

const LossEnRu = {
  COLLISION: "Столкновение",
  Collision: "Столкновение",
  "CDS VEHICLE": "Дилерские услуги Copart",
  "OTHER COMPREHENSIVE": "Неизвестно",
  Other: "Неизвестно",
  "WATER/FLOOD": "Вода/Наводнение",
  HAIL: "Град",
  DONATION: "Пожертвование",
  THEFT: "Кража",
  RENTAL: "Аренда",
  IMPOUND: "Конфискат",
  VANDALISM: "Вандализм",
  REPOSSESSION: "Изьятие",
  Fire: "Пожар",
} as const;

export const translateStatus = (value?: string | null) => {
  return value && value in StatusEnRu
    ? StatusEnRu[value as keyof typeof StatusEnRu]
    : value;
};

export const translateLoss = (value?: string | null) => {
  return value && value in LossEnRu
    ? LossEnRu[value as keyof typeof LossEnRu]
    : value;
};

export const translateAuctionStatus = (value?: string | null) => {
  return value && value in LossEnRu
    ? LossEnRu[value as keyof typeof LossEnRu]
    : value;
};

export const buildAuctionHref = (
  source?: string | null,
  lotId?: string | null
) => {
  if (!source || !lotId) return undefined;
  if (source === "copart") return `https://www.copart.com/lot/${lotId}`;
  if (source === "iaai")
    return `https://www.iaai.com/VehicleDetail/39212767${lotId}~US`;
};
