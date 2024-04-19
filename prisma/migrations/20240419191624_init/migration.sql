-- CreateEnum
CREATE TYPE "cron_job_status" AS ENUM ('initialized', 'processing', 'error', 'done');

-- CreateEnum
CREATE TYPE "lot_source" AS ENUM ('copart', 'iaai');

-- CreateEnum
CREATE TYPE "payment_status" AS ENUM ('created', 'success', 'failed');

-- CreateEnum
CREATE TYPE "payment_currency" AS ENUM ('USD', 'RUB');

-- CreateTable
CREATE TABLE "Lot" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "source" "lot_source" DEFAULT 'copart',
    "vin" VARCHAR(250) NOT NULL,
    "source_id" VARCHAR(250),
    "lotId_id" VARCHAR(250),
    "title" VARCHAR(250) NOT NULL,
    "make" VARCHAR(250),
    "model" VARCHAR(250),
    "series" VARCHAR(250),
    "year" VARCHAR(250),
    "fuel" VARCHAR(250),
    "cylinders" VARCHAR(250),
    "transmission" VARCHAR(250),
    "color" VARCHAR(250),
    "engine" VARCHAR(250),
    "airbags" VARCHAR(250),
    "odometer" VARCHAR(250),
    "odobrand" VARCHAR(250),
    "drive" VARCHAR(250),
    "seller" VARCHAR(250),
    "keys" BOOLEAN,
    "loss" VARCHAR(250),
    "status" VARCHAR(250),
    "price_new" VARCHAR(250),
    "price_old" VARCHAR(250),
    "price_future" VARCHAR(250),
    "cost_price" VARCHAR(250),
    "cost_repair" VARCHAR(250),
    "auction_status" VARCHAR(250),
    "auction_type" VARCHAR(250),
    "auction_date" TIMESTAMPTZ(6),
    "bid_open" BOOLEAN,
    "bid" VARCHAR(250),
    "damage_pr" VARCHAR(250),
    "damage_sec" VARCHAR(250),
    "vehicle_type" VARCHAR(250),
    "state" VARCHAR(250),
    "location" VARCHAR(250),
    "document" VARCHAR(250),
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Lot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LotError" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "data" JSONB NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "LotError_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "files" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "path" VARCHAR(250),
    "origin" VARCHAR(250) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    "lotId" UUID NOT NULL,

    CONSTRAINT "files_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cron_jobs" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "title" VARCHAR(250) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "cron_job_status" NOT NULL DEFAULT 'initialized',
    "expression" VARCHAR(10) NOT NULL,
    "metadata" JSON,

    CONSTRAINT "cron_jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "shop_id" VARCHAR(20) NOT NULL,
    "order_id" VARCHAR(20) NOT NULL,
    "amount" REAL NOT NULL,
    "currency" "payment_currency" NOT NULL,
    "status" "payment_status" NOT NULL DEFAULT 'created',
    "lotId" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Lot_vin_key" ON "Lot"("vin");

-- CreateIndex
CREATE INDEX "Lot_source_id_idx" ON "Lot"("source_id");

-- CreateIndex
CREATE INDEX "Lot_lotId_id_idx" ON "Lot"("lotId_id");

-- CreateIndex
CREATE INDEX "Lot_vin_idx" ON "Lot"("vin");

-- CreateIndex
CREATE INDEX "Lot_vin_isArchived_idx" ON "Lot"("vin", "isArchived");

-- CreateIndex
CREATE UNIQUE INDEX "files_origin_key" ON "files"("origin");

-- CreateIndex
CREATE INDEX "files_lotId_idx" ON "files"("lotId");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_order_id_key" ON "Payment"("order_id");

-- CreateIndex
CREATE INDEX "Payment_order_id_idx" ON "Payment"("order_id");

-- AddForeignKey
ALTER TABLE "files" ADD CONSTRAINT "files_lotId_fkey" FOREIGN KEY ("lotId") REFERENCES "Lot"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_lotId_fkey" FOREIGN KEY ("lotId") REFERENCES "Lot"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
