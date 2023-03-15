import { useEffect } from "react";
import clsx from "clsx";
import Image from "next/image";
import styles from "@/styles/verify-code.module.scss";
import LayoutDark from "@/components/layout-dark";
import { useRouter } from "next/router";

import PowerIcon from "@/image/icons/Power.svg";
import CpCharging from "@/image/icons/cp-charging.svg";

const CpopCharging = () => {
  const router = useRouter();

  return (
    <div
      className="flex flex-col gap-[30px] 
      items-center text-center h-full relative"
    >
      <style jsx>
        {`
          .charging-info {
            width: 322px;
            height: 90px;

            background: linear-gradient(
              107.95deg,
              rgba(255, 255, 255, 0.07) 0%,
              rgba(255, 250, 250, 0) 83.15%
            );
            filter: drop-shadow(0px 3px 32.25px rgba(0, 0, 0, 0.25));
            backdrop-filter: blur(5.78207px);
            /* Note: backdrop-filter has minimal browser support */

            border-radius: 12px;
          }
        `}
      </style>
      <div className="mt-[100px] mb-[30px]">
        <div className="flex justify-between mb-[10px]">
          <div className="flex">
            <CpCharging />
            &nbsp;&nbsp;充電中
          </div>
          <div>資料回傳可能延遲</div>
        </div>
        <div
          className="charging-info text-center
        border-[1px] border-white/60
        flex justify-around items-center"
        >
          <div className="border-r-2 border-[#4F4F4F] flex-1">
            <div className="text-[22px]">720KW</div>
            <span className="text-[#01F2CF] text-[13px]">設備功率</span>
          </div>
          <div className="border-r-2 border-[#4F4F4F] flex-1">
            <div className="text-[22px]">3.1度</div>
            <span className="text-[#01F2CF] text-[13px]">已充電量</span>
          </div>
          <div className="border-r-2 border-[#4F4F4F] flex-1">
            <div className="text-[22px]">800元</div>
            <span className="text-[#01F2CF] text-[13px]">預估金額</span>
          </div>
        </div>
      </div>
      <Image
        src="/images/cp-charging-car.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />

      <div className="absolute bottom-[20%]">
        <button
          className={`rounded-full w-full ${clsx(
            styles["btn-primary"],
            styles["round-wrapper-dark"]
          )} flex items-center text-[15px]`}
          onClick={() => router.push("cpop-endup")}
        >
          <PowerIcon />
          &nbsp;&nbsp;結束充電
        </button>
      </div>
    </div>
  );
};

export default CpopCharging;

CpopCharging.getLayout = function getLayout(page) {
  return <LayoutDark paddingNo={0}>{page}</LayoutDark>;
};
