import styles from "@/styles/verify-code.module.scss";
import Layout from "@/components/layout";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import MenuItem from "@/components/menu-item";

const ProfileMenu = () => {
  const router = useRouter();
  const navTo = (path) => {
    router.push(path);
  };

  const menus = [
    {
      id: 1,
      title: "個人資料設定",
      navPath: "/profile/profile-edit",
    },
    {
      id: 2,
      title: "車輛資料",
      navPath: "/profile/car-list",
    },
    {
      id: 3,
      title: "充值紀錄",
      navPath: "/profile/recharge-list",
    },
    {
      id: 4,
      title: "充電紀錄",
      navPath: "/profile/charge-list",
    },
    {
      id: 5,
      title: "我的錢包",
      navPath: "/profile/my-wallet",
    },
    {
      id: 6,
      title: "登出",
      navPath: "/auth/login",
    },
  ];

  const handleNavClick = () => {};

  return (
    <div
      className="flex flex-col h-full 
      items-center text-center"
    >
      {menus.map((mu) => (
        <MenuItem key={mu.id} menu={mu} navClick={handleNavClick} />
      ))}
    </div>
  );
};

export default ProfileMenu;

ProfileMenu.getLayout = function getLayout(page) {
  return (
    <Layout header={<Navbar title={"個人中心"} />} paddingNo={0}>
      {page}
    </Layout>
  );
};
