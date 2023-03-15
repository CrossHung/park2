import styles from "@/styles/verify-code.module.scss";
import Layout from "@/components/layout";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import RechargeItem from "@/components/recharge-item";
import ProfileBanner from "@/image/icons/profile-banner.svg";

const RechargeList = () => {
  const router = useRouter();
  const navTo = (path) => {
    router.push(path);
  };

  const recharges = [
    {
      id: 1,
      dateTime: "2023-01-14 23:19:03",
      dt: ["2023-01-14", "23:19:03"],
      addPoints: 100,
      totalPoints: 100,
    },
    {
      id: 2,
      dateTime: "2023-01-14 23:19:03",
      dt: ["2023-01-14", "23:19:03"],
      addPoints: 100,
      totalPoints: 100,
    },
    {
      id: 3,
      dateTime: "2023-01-14 23:19:03",
      dt: ["2023-01-14", "23:19:03"],
      addPoints: 100,
      totalPoints: 100,
    },
  ];

  const handleNavClick = () => {};

  return (
    <>
      <style jsx>
        {`
          .btn-recharge {
            width: 60px;
            height: 26px;

            background: rgba(255, 255, 255, 0.3);
            border: 0.934579px solid rgba(255, 255, 255, 0.5);
            border-radius: 16px;
          }
        `}
      </style>
      <div className="p-[27px] w-full flex justify-center bg-[#F5F5F5]">
        <div className="inline-block relative">
          <ProfileBanner />
          <div className="absolute top-[20px] left-[20px] text-white">
            <div className="text-[12px]">目前點數</div>
            <div className="text-[24px] font-medium">4,678</div>
            <button className="text-[12px] btn-recharge mt-3"
            onClick={()=> router.push('recharge')}
            >充值</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full items-center text-center">
        {recharges.map((rechr) => (
          <RechargeItem
            key={rechr.id}
            recharge={rechr}
            navClick={handleNavClick}
          />
        ))}
      </div>
    </>
  );
};

export default RechargeList;

RechargeList.getLayout = function getLayout(page) {
  return (
    <Layout header={<Navbar title={"充值紀錄"} />} paddingNo={0}>
      {page}
    </Layout>
  );
};
