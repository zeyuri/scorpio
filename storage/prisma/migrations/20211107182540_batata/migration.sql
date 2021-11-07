/*
  Warnings:

  - The primary key for the `ExternalModule` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `ExternalModule` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "ExternalModule" DROP CONSTRAINT "ExternalModule_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "ExternalModule_pkey" PRIMARY KEY ("id");
