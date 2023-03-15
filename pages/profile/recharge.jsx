import styles from "@/styles/verify-code.module.scss";
import Layout from "@/components/layout";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";

const Recharge = () => {
  const router = useRouter();
  const navTo = (path) => {
    router.push(path);
  };

  return (
    <div
      className="flex flex-col h-full gap-[30px] 
      items-center text-center"
    >
      {/* <div className="text-[18px] font-medium mt-[50px] mb-[80px]">
        輸入充值點數
      </div> */}
      <input
        type="text"
        placeholder="請輸入充值點數"
        className="
          bg-gray-50 border 
          border-gray-300 text-gray-900 
          text-sm rounded-lg 
          focus:ring-blue-500 focus:border-blue-500 
          block w-full p-2.5 
          mt-[30px]
          "
      />

      <button
        type="button"
        className={`py-2 px-4 rounded-full w-full  ${styles["btn-primary"]}`}
        onClick={() => navTo("/profile")}
      >
        開始充值
      </button>
      <p className="text-[13px]">最低至少需充值100點</p>
    </div>
  );
};

export default Recharge;

Recharge.getLayout = function getLayout(page) {
  return <Layout header={<Navbar title="輸入充值點數" />}>{page}</Layout>;
};
