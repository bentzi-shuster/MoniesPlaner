/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Plan" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "rent" DOUBLE PRECISION NOT NULL,
    "groceries" DOUBLE PRECISION NOT NULL,
    "utilities" DOUBLE PRECISION NOT NULL,
    "transportation" DOUBLE PRECISION NOT NULL,
    "entertainment" DOUBLE PRECISION NOT NULL,
    "propertyTax" DOUBLE PRECISION,
    "insurance" DOUBLE PRECISION NOT NULL,
    "vehiclePayment" DOUBLE PRECISION NOT NULL,
    "vehicleInsurance" DOUBLE PRECISION NOT NULL,
    "personalCare" DOUBLE PRECISION NOT NULL,
    "income" DOUBLE PRECISION NOT NULL,
    "userSub" TEXT NOT NULL,
    "carMake" TEXT,
    "carModel" TEXT,
    "visibility" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifiedAt" TIMESTAMP(3),

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CachedData" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifiedAt" TIMESTAMP(3),

    CONSTRAINT "CachedData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CachedData_url_key" ON "CachedData"("url");
