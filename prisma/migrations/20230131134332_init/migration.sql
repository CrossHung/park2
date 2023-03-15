/*
  Warnings:

  - You are about to drop the `cpreportcb` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `cpreportcb` DROP FOREIGN KEY `CpReportCb_userId_fkey`;

-- DropTable
DROP TABLE `cpreportcb`;

-- CreateTable
CREATE TABLE `CpReportCb_benson` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `apikey` VARCHAR(191) NULL,
    `cpid` VARCHAR(191) NULL,
    `cp_online` ENUM('online', 'offline') NULL,
    `cmd` ENUM('cmd_start_charging', 'cmd_stop_charging', 'get_cp_status', 'report_cp_status') NULL,
    `current_status` ENUM('Available', 'Preparing', 'Charging', 'Finishing') NULL,
    `data1` VARCHAR(191) NULL,
    `data2` VARCHAR(191) NULL,
    `data3` VARCHAR(191) NULL,
    `data4` VARCHAR(191) NULL,
    `data5` VARCHAR(191) NULL,
    `data6` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
