import styles from "@/styles/verify-code.module.scss";
import Layout from "@/components/layout";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import StationItem from "@/components/station-item";

const StationList = () => {
  const router = useRouter();
  const navTo = (path) => {
    router.push(path);
  };

  const stations = [
    {
      id: 1,
      stationName: "SpacePark 敦北充電站",
      km: 1,
      spaces: 10,
    },
    {
      id: 2,
      stationName: "abc 充電站",
      km: 2,
      spaces: 5,
    },
  ];

  const handleNavClick = () => {};

  return (
    <div
      className="flex flex-col h-full 
      items-center text-center"
    >
      {stations.map((std) => (
        <StationItem key={std.id} station={std} navClick={handleNavClick} />
      ))}
    </div>
  );
};

export default StationList;

StationList.getLayout = function getLayout(page) {
  return (
    <Layout header={<Navbar />} paddingNo={0}>
      {page}
    </Layout>
  );
};
