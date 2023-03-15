-- CreateTable
CREATE TABLE `CpReportCb` (
    `id` VARCHAR(191) NOT NULL,
    `cp_res` ENUM('cp_status', 'stop_charging_now', 'start_charging_now') NULL,
    `apikey` VARCHAR(191) NULL,
    `cpid` VARCHAR(191) NULL,
    `cp_online` ENUM('online', 'offline') NULL,
    `cmd` ENUM('cmd_start_charging', 'cmd_stop_charging', 'get_cp_status', 'report_cp_status') NULL,
    `current_status` ENUM('Available', 'Preparing', 'Charging', 'Finishing') NOT NULL,
    `data1` VARCHAR(191) NULL,
    `data2` VARCHAR(191) NULL,
    `data3` VARCHAR(191) NULL,
    `data4` VARCHAR(191) NULL,
    `data5` VARCHAR(191) NULL,
    `data6` VARCHAR(191) NULL,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `CpReportCb_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
