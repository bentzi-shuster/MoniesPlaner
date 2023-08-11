/*
  Warnings:

  - You are about to drop the column `insurance` on the `plan` table. All the data in the column will be lost.
  - You are about to drop the column `rent` on the `plan` table. All the data in the column will be lost.
  - You are about to drop the column `transportation` on the `plan` table. All the data in the column will be lost.
  - You are about to drop the column `utilities` on the `plan` table. All the data in the column will be lost.
  - You are about to drop the column `vehicle_insurance` on the `plan` table. All the data in the column will be lost.
  - You are about to drop the column `vehicle_payment` on the `plan` table. All the data in the column will be lost.
  - You are about to drop the column `visibility` on the `plan` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_sub]` on the table `plan` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `car_expenses` to the `plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `car_insurance` to the `plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `car_payment` to the `plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mortgage` to the `plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `needs` to the `plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `savings` to the `plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `take_home_pay` to the `plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wants` to the `plan` table without a default value. This is not possible if the table is not empty.
  - Made the column `property_tax` on table `plan` required. This step will fail if there are existing NULL values in that column.
  - Made the column `modified_at` on table `plan` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "plan" DROP COLUMN "insurance",
DROP COLUMN "rent",
DROP COLUMN "transportation",
DROP COLUMN "utilities",
DROP COLUMN "vehicle_insurance",
DROP COLUMN "vehicle_payment",
DROP COLUMN "visibility",
ADD COLUMN     "car_expenses" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "car_insurance" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "car_payment" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "mortgage" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "needs" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "savings" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "take_home_pay" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "user_image" TEXT,
ADD COLUMN     "wants" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "property_tax" SET NOT NULL,
ALTER COLUMN "modified_at" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "plan_user_sub_key" ON "plan"("user_sub");
