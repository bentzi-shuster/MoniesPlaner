/*
  Warnings:

  - You are about to drop the column `user_image` on the `plan` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "plan_user_sub_key";

-- AlterTable
ALTER TABLE "plan" DROP COLUMN "user_image",
ADD COLUMN     "plan_image" TEXT;
