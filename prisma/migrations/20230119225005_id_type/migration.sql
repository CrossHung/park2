/*
  Warnings:

  - The primary key for the `CpReportCb` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `CpReportCb` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `BigInt`.

*/
-- DropIndex
DROP INDEX `CpReportCb_id_key` ON `CpReportCb`;

-- AlterTable
ALTER TABLE `CpReportCb` DROP PRIMARY KEY,
    MODIFY `id` BIGINT NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);
