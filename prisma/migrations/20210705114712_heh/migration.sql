/*
  Warnings:

  - Added the required column `photo` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thum` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `size` on the `Item` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "photo" TEXT NOT NULL,
ADD COLUMN     "thum" TEXT NOT NULL,
ALTER COLUMN "color" SET NOT NULL,
ALTER COLUMN "color" SET DATA TYPE TEXT,
DROP COLUMN "size",
ADD COLUMN     "size" INTEGER NOT NULL,
ALTER COLUMN "category" SET NOT NULL,
ALTER COLUMN "category" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "auth" SET DEFAULT 2;
