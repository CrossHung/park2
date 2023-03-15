import { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/verify-code.module.scss";
import LayoutDark from "@/components/layout-dark";
import { useRouter } from "next/router";

const CpopCancel = () => {
  const router = useRouter();

  return (
    <div
      className="flex flex-col h-full gap-[30px] 
      items-center text-center
     "
    >
      <div className="mt-[100px] mb-[30px]">
        <div className="text-[18px] font-medium mb-[15px]">充電取消</div>
        <div>
          未偵測到充電槍，已取消此次充電...
          <br />
          <button
            onClick={() => {
              router.push("cpop-charging");
            }}
          >
            下一步
          </button>
        </div>
      </div>
      <Image
        src="/images/cp-cnn-cancel.png"
        alt="Picture of the author"
        width={250}
        height={250}
      />
    </div>
  );
};

export default CpopCancel;

CpopCancel.getLayout = function getLayout(page) {
  return <LayoutDark paddingNo={0}>{page}</LayoutDark>;
};
