import { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/verify-code.module.scss";
import LayoutDark from "@/components/layout-dark";
import { useRouter } from "next/router";

const CpopEndup = () => {
  const router = useRouter();

  useEffect(() => {
    // setTimeout(() => {
    //   router.push("cpop-charging");
    // }, 3000);
  }, []);
  return (
    <div
      className="flex flex-col h-full gap-[30px] 
      items-center text-center
     "
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
        <div className="text-[18px] font-medium mb-[15px]">充電完成</div>
        <Image
          src="/images/cp-done.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <div className="p-[27px]">
          <div
            className="charging-info text-center
        border-[1px] border-white/60
        flex justify-around items-center"
          >
            <div className="border-r-2 border-[#4F4F4F] flex-1">
              <div className="text-[22px]">720KW</div>
              <span className="text-[#01F2CF] text-[13px]">設備功率</span>
            </div>
            {/* <div className="border-r-2 border-[#4F4F4F] flex-1">
              <div className="text-[22px]">3.1度</div>
              <span className="text-[#01F2CF] text-[13px]">已充電量</span>
            </div> */}
            <div className="border-r-2 border-[#4F4F4F] flex-1">
              <div className="text-[22px]">800元</div>
              <span className="text-[#01F2CF] text-[13px]">預估金額</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-[13px] my-[30px]">
            <div className="flex justify-between">
              <span>一般費率</span> <span>830</span>
            </div>
            <div className="flex justify-between">
              <span>新會員優惠</span> <span>-30</span>
            </div>
            <div className="flex justify-between">
              <span>訂單金額</span> <span>800</span>
            </div>

            <hr />

            <div className="flex justify-between">
              <span>充電時間</span> <span>2023/02/04 12:41~13:20 </span>
            </div>
            <div className="flex justify-between">
              <span>充電站</span> <span>美麗華摩天輪</span>
            </div>
            <div className="flex justify-between">
              <span>充電樁編號</span> <span>W6888</span>
            </div>
          </div>

          <button
            type="button"
            className={`py-2 px-4 rounded-full w-full  ${styles["btn-primary"]}`}
            onClick={() => router.push("cpop-recharge")}
          >
            完成
          </button>
        </div>
      </div>
    </div>
  );
};

export default CpopEndup;

CpopEndup.getLayout = function getLayout(page) {
  return <LayoutDark paddingNo={0}>{page}</LayoutDark>;
};
