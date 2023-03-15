import styles from "@/styles/verify-code.module.scss";
import Layout from "@/components/layout";
import Navbar from "@/components/navbar";

import DirectionIcon from "@/image/icons/direction.svg";
import ListCpIcon from "@/image/icons/list-cp.svg";
import ParkingIcon from "@/image/icons/parking.svg";

import { useRouter } from "next/router";

// {
//   id: 2,
//   stationName: "abc 充電站",
//   km: 2,
//   spaces: 5,
// },

const StationItem = ({ station }) => {
  const router = useRouter();
  const navTo = (path) => {
    router.push(path);
  };

  const { stationName, km, spaces } = station;
  return (
    <div className="flex p-[15px] border-b-2 justify-between items-center w-full bg-white">
      <div>
        <div>{stationName}</div>
        <div className="flex gap-[15px]">
          <div className="flex items-center">
            <ListCpIcon /> &nbsp;{km} 公里
          </div>
          <div className="flex  items-center">
            <ParkingIcon />
            &nbsp;{spaces} 空位
          </div>
        </div>
      </div>
      <button onClick={() => navTo("cpop-code")}>
        <DirectionIcon />
      </button>
    </div>
  );
};

export default StationItem;
