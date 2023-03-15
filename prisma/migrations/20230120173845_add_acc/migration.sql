/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `CpReportCb` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updateAt` to the `CpReportCb` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `CpReportCb` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `CpReportCb` ADD COLUMN `updateAt` DATETIME(3) NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `acc` VARCHAR(191) NOT NULL,
    `provider` ENUM('phone', 'google', 'line') NOT NULL,
    `profileId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_acc_key`(`acc`),
    UNIQUE INDEX `User_profileId_key`(`profileId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Profile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `mobile` VARCHAR(191) NOT NULL,
    `fullName` VARCHAR(191) NOT NULL,
    `nickName` VARCHAR(191) NOT NULL,
    `birth` DATETIME(3) NOT NULL,
    `gender` ENUM('male', 'female', 'other') NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `area` VARCHAR(191) NOT NULL,
    `addr` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `updateAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Profile_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Car` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `brand` VARCHAR(191) NOT NULL,
    `model` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,
    `userId` INTEGER NULL,
    `profileId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `CpReportCb_userId_key` ON `CpReportCb`(`userId`);

-- AddForeignKey
ALTER TABLE `CpReportCb` ADD CONSTRAINT `CpReportCb_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Profile` ADD CONSTRAINT `Profile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Car` ADD CONSTRAINT `Car_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Car` ADD CONSTRAINT `Car_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `Profile`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
