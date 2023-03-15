import styles from "@/styles/verify-code.module.scss";
import Layout from "@/components/layout";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import ProfileBanner from "@/image/icons/profile-banner.svg";

const MyWallet = () => {
  const router = useRouter();
  const navTo = (path) => {
    router.push(path);
  };

  return (
    <div
      className="flex flex-col h-full gap-[30px] 
      items-center"
    >
      {/* <div className="text-[18px] font-medium mt-[50px] mb-[80px]">
        輸入充值點數
      </div> */}
      {/* <ProfileBanner /> */}
      <div className="inline-block relative">
          <ProfileBanner />
          <div className="absolute top-[40px] left-[20px] text-white">
            <div className="text-[12px]">目前點數</div>
            <div className="text-[24px] font-medium">0</div>
            {/* <button className="text-[12px] btn-recharge mt-3"
            onClick={()=> router.push('recharge')}
            >充值</button> */}
          </div>
        </div>

      <button
        type="button"
        className={`py-2 px-4 rounded-full w-full  ${styles["btn-primary"]}`}
        onClick={() => navTo("recharge")}
      >
        開始充值
      </button>
    </div>
  );
};

export default MyWallet;

MyWallet.getLayout = function getLayout(page) {
  return <Layout header={<Navbar title="我的錢包" />}>{page}</Layout>;
};
