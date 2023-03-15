/*
  Warnings:

  - You are about to drop the column `name` on the `Car` table. All the data in the column will be lost.
  - Added the required column `carNo` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Car` DROP COLUMN `name`,
    ADD COLUMN `carNo` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Station` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `available` BOOLEAN NOT NULL,
    `parkFee` VARCHAR(191) NOT NULL,
    `feeDesc` VARCHAR(191) NOT NULL,
    `addr` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CPile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `kW` DOUBLE NOT NULL,
    `parkStyle` VARCHAR(191) NOT NULL,
    `current_status` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,
    `stationId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChargingTx` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `stationId` INTEGER NOT NULL,
    `cpileId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `startTime` DATETIME(3) NOT NULL,
    `endTime` DATETIME(3) NOT NULL,
    `kW` DOUBLE NOT NULL,
    `fee` DECIMAL(65, 30) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RechargingTx` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `txId` VARCHAR(191) NOT NULL,
    `paymentName` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `points` INTEGER NOT NULL,
    `balance` INTEGER NOT NULL,
    `amount` DECIMAL(65, 30) NOT NULL,
    `txTime` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CPile` ADD CONSTRAINT `CPile_stationId_fkey` FOREIGN KEY (`stationId`) REFERENCES `Station`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChargingTx` ADD CONSTRAINT `ChargingTx_stationId_fkey` FOREIGN KEY (`stationId`) REFERENCES `Station`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChargingTx` ADD CONSTRAINT `ChargingTx_cpileId_fkey` FOREIGN KEY (`cpileId`) REFERENCES `CPile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChargingTx` ADD CONSTRAINT `ChargingTx_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RechargingTx` ADD CONSTRAINT `RechargingTx_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
