import styles from "@/styles/verify-code.module.scss";
import Layout from "@/components/layout";
import Navbar from "@/components/navbar";

import ArrowRightIcon from "@/image/icons/chevron-left.svg";
import DotIcon from "@/image/icons/dot.svg";

<button className="flex justify-between">
  <DotIcon />
  <ArrowRightIcon />
</button>;

import { useRouter } from "next/router";

// {
//   id: 2,
//   stationName: "abc 充電站",
//   km: 2,
//   spaces: 5,
// },

const CpItem = ({ park, onParkSelect }) => {
  const router = useRouter();
  // const navTo = (path) => {
  //   router.push(path);
  // };

  const { cpNo, kw, parkStyle, pkNo } = park;
  return (
    <button
      className="flex p-[15px] border-b-2 justify-between items-center w-full bg-white"
      onClick={() => onParkSelect(park)}
    >
      <div>
        <div>
          <span>{cpNo}</span> {kw} kW
        </div>
        <div></div>
        <div>
          {parkStyle} - {pkNo}號車格
        </div>

        <div className="flex gap-[15px]"></div>
      </div>
      <div>
        <div className="flex  items-center">
          <DotIcon /> &nbsp;可使用
        </div>
        <ArrowRightIcon />
      </div>
    </button>
  );
};

export default CpItem;
