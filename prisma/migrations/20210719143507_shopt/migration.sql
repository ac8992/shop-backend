/*
  Warnings:

  - You are about to drop the column `isMe` on the `ItemAsk` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ItemAsk" DROP COLUMN "isMe",
ADD COLUMN     "onlyMe" BOOLEAN;
