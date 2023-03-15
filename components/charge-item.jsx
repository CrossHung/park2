import styles from "@/styles/verify-code.module.scss";
import Layout from "@/components/layout";
import Navbar from "@/components/navbar";

// import DirectionIcon from "@/image/icons/direction.svg";
// import ListCpIcon from "@/image/icons/list-cp.svg";
// import ParkingIcon from "@/image/icons/parking.svg";

import { useRouter } from "next/router";

// {
//   id: 2,
//   stationName: "abc 充電站",
//   km: 2,
//   spaces: 5,
// },

const ChargeItem = ({ charge }) => {
  const router = useRouter();
  const navTo = (path) => {
    router.push(path);
  };

  const { dt, min, points } = charge;
  return (
    <div className="flex  p-[15px] border-b-2 justify-between items-center w-full bg-white">
      <div className="text-[#828282] text-[15px]">
        <div>{dt[0]}</div>
        <div>{dt[1]}</div>
      </div>
      <div>
        <div className="text-[17px] font-medium">充電 {min}分鐘</div>
        <p className="text-[15px] text-[#BDBDBD] ">花費點數 {points}</p>
      </div>
    </div>
  );
};

export default ChargeItem;
