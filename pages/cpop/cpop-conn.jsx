import { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/verify-code.module.scss";
import LayoutDark from "@/components/layout-dark";
import { useRouter } from "next/router";

const CpopStart = () => {
  const router = useRouter();

  return (
    <div
      className="flex flex-col h-full gap-[30px] 
      items-center text-center
     "
    >
      <div className="mt-[100px] mb-[30px]">
        <div className="text-[18px] font-medium mb-[15px]">等待連線</div>
        <div>
          裝置正在連線請耐心等待...
          <br />
          <button onClick={()=> {router.push("cpop-cancel")}}>
            下一步
          </button>
        </div>
      </div>
      <Image
        src="/images/cp-conn.png"
        alt="Picture of the author"
        width={250}
        height={250}
      />
    </div>
  );
};

export default CpopStart;

CpopStart.getLayout = function getLayout(page) {
  return <LayoutDark paddingNo={0}>{page}</LayoutDark>;
};
