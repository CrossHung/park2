import Image from "next/image";
import React, { useState } from "react";

import BottomBarCp from "@/image/icons/bottom_bar_cp.svg";
import ProfileIcon from "@/image/icons/profile.svg";
import Layout from "@/components/layout";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import MapCpIcon from "@/image/icons/map-cp.svg";
import MapCenterIcon from "@/image/icons/map-center.svg";
import styles from "@/styles/login.module.scss";
import StationInfo from "@/components/station-info";
import CpInfoWrapper from "@/components/cp-info-wrapper";
import CpInfo from "@/components/cp-info";

import Map from "@/components/Map";

const StationMap = () => {
  const [currPark, setCurrPark] = useState(null);
  const [showCpInfo, setShowCpInfo] = useState(false);

  const router = useRouter();
  const navTo = (path) => {
    router.push(path);
  };

  // const showInfoModal = () => {
  //   alert();
  // };

  const handleParkSelect = (park) => {
    setCurrPark(park);
    setShowCpInfo(true);
  };

  const onBackClick = () => {
    setShowCpInfo(false);
  };

  return (
    <>
      <div className="h-full relative">
        <style jsx>{`
          .map-bg {
            background: url("/images/bg-map.png") no-repeat;
          }
          .bottom-bar {
            background: url("/images/bottom_bar.png") no-repeat;
             {
              /* background-position: bottom -20px left -27px; */
            }
             {
              /* border: 1px solid #4d4d4d; */
            }
          }
          .infoModal-box {
            box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.1);
            border-radius: 16px 16px 0px 0px;
          }
        `}</style>

        <div className="h-full w-full map-bg absolute">
          <Map />
          {/* <div className="absolute top-[150px] left-[50px]">
            <button onClick={() => showInfoModal()}>
              <MapCpIcon />
            </button>
          </div>
          <div className="absolute bottom-[130px] right-[20px]">
            <MapCenterIcon />
          </div> */}
        </div>

        <div className="flex flex-col h-full gap-[30px] items-center text-center">
          <div
            className="
              absolute bottom-0 left-0
              bottom-bar flex w-full h-[170px] text-[#BDBDBD] text-[12px]"
          >
            <div className="flex-1 relative">
              <div className="absolute top-[58px] left-[75px]">
                <button
                  className="flex flex-col items-center"
                  onClick={() => navTo("station-list")}
                >
                  <BottomBarCp />
                  <p className="mt-1">充電站</p>
                </button>
              </div>
            </div>
            <div className="flex-1 relative">
              <button className="mt-[4px]" onClick={() => navTo("cpop-code")}>
                <Image
                  src="/images/start_charge.png"
                  alt="Picture of the author"
                  width={200}
                  height={200}
                />
                <p className="-mt-[32px]">啟動充電</p>
              </button>
            </div>
            <div className="flex-1 relative">
              <div className="absolute top-[58px] right-[75px]">
                <button
                  className="flex flex-col items-center"
                  onClick={() => navTo("/profile")}
                >
                  <ProfileIcon />
                  <p className="mt-1">個人中心</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <StationInfo onParkSelect={(park) => handleParkSelect(park)} /> */}
      {showCpInfo && (
        <CpInfoWrapper onBackClick={onBackClick}>
          <CpInfo park={currPark} />
        </CpInfoWrapper>
      )}
    </>
  );
};

export default StationMap;

StationMap.getLayout = function getLayout(page) {
  return (
    <Layout header={<Navbar />} paddingNo={0}>
      {page}
    </Layout>
  );
};
