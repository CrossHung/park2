import { useState } from "react";
import clsx from "clsx";
import styles from "@/styles/verify-code.module.scss";
import Layout from "@/components/layout";
import ArrowDown from "@/image/icons/chevron-down.svg";
import DwopUp from "@/image/icons/dwop-up.svg";
import DwopDown from "@/image/icons/dwop-down.svg";
import ParkingIcon from "@/image/icons/parking.svg";
import TimeIcon from "@/image/icons/time.svg";
import CpIcon from "@/image/icons/list-cp.svg";
import ParkingFeeIcon from "@/image/icons/parking-outline.svg";
import ChargingIcon from "@/image/icons/charging.svg";
import StartNavIcon from "@/image/icons/start-nav.svg";
import SharedIcon from "@/image/icons/upload.svg";
import CpList from "@/components/cp-list";

const cpListData = [
  {
    cpNo: "J1877",
    kw: 110.0,
    parkStyle: "平面",
    pkNo: 1,
    fee: 100,
  },
  {
    cpNo: "J1878",
    kw: 110.0,
    parkStyle: "平面",
    pkNo: 2,
    fee: 200,
  },
  {
    cpNo: "J1879",
    kw: 110.0,
    parkStyle: "平面",
    pkNo: 3,
    fee: 300,
  },
];

const StationInfo = ({ onParkSelect }) => {
  const [infoModalSize, setInfoModal] = useState(false); // sm
  const [showBizHrs, setShowBizHrs] = useState(true); // show

  const toggleInfoModal = () => {
    setInfoModal(!infoModalSize);
  };

  return (
    <>
      <style jsx>{`
        .infoModal-box {
          box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.1);
          border-radius: 16px 16px 0px 0px;
        }
      `}</style>

      <div
        className={`
          infoModal-box 
          absolute 
          left-0
          bottom-0
          ${infoModalSize ? "h-full" : "h-[25%]"}  w-full bg-white
        `}
      >
        <div className="px-[27px] pt-[20px]">
          {infoModalSize && (
            <a
              onClick={() => toggleInfoModal()}
              className="inline-block p-[10px] p-0"
              href="#"
            >
              <ArrowDown />
            </a>
          )}

          <a
            onClick={() => {
              if (!infoModalSize) toggleInfoModal();
            }}
            className="block"
            href="#"
          >
            <h2 className="text-[20px] font-medium">雀客中清文心</h2>
            <div className="text-[13px] text-[#4F4F4F]">
              <span className="text-[18px] font-medium">10.6</span>{" "}
              公里．營業中．停車收費
            </div>
            <div className="text-[13px] text-[#4F4F4F]">
              <span className="text-[18px] font-medium">2</span> 空位
            </div>
          </a>
        </div>

        {infoModalSize && <hr />}

        <div className="p-[27px] pt-0">
          {infoModalSize && (
            <div className="mb-4">
              <div className="py-3 flex items-center">
                <CpIcon />
                &nbsp; 台中市西屯區台灣大道100號
              </div>
              <div className="border-t-[1px] py-3  flex items-center">
                <ParkingIcon />
                &nbsp; B7-9122-1223-100 號停車格
              </div>
              <div>
                <div className="border-t-[1px] py-3   flex justify-between pr-3">
                  <div className="flex items-center">
                    <TimeIcon />
                    &nbsp; 營業中．全天開放
                  </div>
                  <button onClick={() => setShowBizHrs(!showBizHrs)}>
                    {showBizHrs ? <DwopUp /> : <DwopDown />}
                  </button>
                </div>
                <div className={` ${showBizHrs ? "h-[200px]" : "h-0"}`}>
                  {showBizHrs ? <h1>open</h1> : <h1>close</h1>}
                </div>
              </div>
              <div className="border-t-[1px] py-3  flex items-center">
                <ParkingFeeIcon />
                &nbsp; 停車費
              </div>
              <div className="border-t-[1px] py-3  flex items-center">
                <ChargingIcon />
                &nbsp; 充電站
              </div>
              <CpList cpListData={cpListData} onParkSelect={onParkSelect} />
            </div>
          )}
        </div>
        <div className="px-[27px] flex gap-3 mt-2 w-full absolute bottom-5">
          <button
            className={`flex-[2] rounded-full  ${clsx(styles["btn-primary"])}`}
          >
            <div className="flex items-center justify-center">
              <StartNavIcon />
              &nbsp;&nbsp;立即導航
            </div>
          </button>

          <button
            className={`flex-1 rounded-full  ${clsx(
              styles["btn-primary"],
              styles["outline"]
            )}`}
          >
            <div className="flex items-center justify-center">
              <SharedIcon />
              &nbsp;&nbsp;分享
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default StationInfo;
