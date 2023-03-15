import styles from "@/styles/verify-code.module.scss";
import Layout from "@/components/layout";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import ChargeItem from "@/components/charge-item";

const ChargeList = () => {
  const router = useRouter();
  const navTo = (path) => {
    router.push(path);
  };

  const charges = [
    {
      id: 1,
      dateTime: "2023-01-14 23:19:03",
      dt: ["2023-01-14", "23:19:03"],
      min: 199,
      points: 10,
    },
    {
      id: 2,
      dateTime: "2023-01-14 23:19:03",
      dt: ["2023-01-14", "23:19:03"],
      min: 299,
      points: 20,
    },
    {
      id: 3,
      dateTime: "2023-01-14 23:19:03",
      dt: ["2023-01-14", "23:19:03"],
      min: 399,
      points: 30,
    },
  ];

  const handleNavClick = () => {};

  return (
    <div
      className="flex flex-col h-full 
      items-center text-center"
    >
      {charges.map((chr) => (
        <ChargeItem key={chr.id} charge={chr} navClick={handleNavClick} />
      ))}
    </div>
  );
};

export default ChargeList;

ChargeList.getLayout = function getLayout(page) {
  return (
    <Layout header={<Navbar title={"充電紀錄"} />} paddingNo={0}>
      {page}
    </Layout>
  );
};
