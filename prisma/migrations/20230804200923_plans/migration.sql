-- CreateTable
CREATE TABLE "plan" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "rent" DOUBLE PRECISION NOT NULL,
    "groceries" DOUBLE PRECISION NOT NULL,
    "utilities" DOUBLE PRECISION NOT NULL,
    "transportation" DOUBLE PRECISION NOT NULL,
    "entertainment" DOUBLE PRECISION NOT NULL,
    "property_tax" DOUBLE PRECISION,
    "insurance" DOUBLE PRECISION NOT NULL,
    "vehicle_payment" DOUBLE PRECISION NOT NULL,
    "vehicle_insurance" DOUBLE PRECISION NOT NULL,
    "personal_care" DOUBLE PRECISION NOT NULL,
    "income" DOUBLE PRECISION NOT NULL,
    "user_sub" TEXT NOT NULL,
    "car_make" TEXT,
    "car_model" TEXT,
    "visibility" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMP(3),

    CONSTRAINT "plan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cached_data" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMP(3),

    CONSTRAINT "cached_data_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cached_data_url_key" ON "cached_data"("url");
