/*
  Warnings:

  - Added the required column `title` to the `ItemAsk` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ItemAsk" ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "title" TEXT NOT NULL;
