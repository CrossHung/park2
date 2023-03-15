import styles from "@/styles/verify-code.module.scss";
import Layout from "@/components/layout";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import CarItem from "@/components/car-item";
import ProfileBanner from "@/image/icons/profile-banner.svg";
import React, { useState } from "react";
import SwipeToDelete from "react-swipe-to-delete-ios";

const color = () => Math.ceil(Math.random() * 250);

const CarList = () => {
  const [items, setItems] = useState(() => [
    {
      content: "Car 1",
      color: `rgba(${color()}, ${color()}, ${color()}, 1)`,
    },
    {
      content: "Car 2",
      color: `rgba(${color()}, ${color()}, ${color()}, 1)`,
    },
    {
      content: "Car 3",
      color: `rgba(${color()}, ${color()}, ${color()}, 1)`,
    },
    {
      content: "Car 4",
      color: `rgba(${color()}, ${color()}, ${color()}, 1)`,
    },
    {
      content: "Car 5",
      color: `rgba(${color()}, ${color()}, ${color()}, 1)`,
    },
    // {
    //   content: "Car 6",
    //   color: `rgba(${color()}, ${color()}, ${color()}, 1)`,
    // },
    // {
    //   content: "Car 7",
    //   color: `rgba(${color()}, ${color()}, ${color()}, 1)`,
    // },
    // {
    //   content: "Car 8",
    //   color: `rgba(${color()}, ${color()}, ${color()}, 1)`,
    // },
    // {
    //   content: "Car 9",
    //   color: `rgba(${color()}, ${color()}, ${color()}, 1)`,
    // },
    // {
    //   content: "Car 10",
    //   color: `rgba(${color()}, ${color()}, ${color()}, 1)`,
    // },
    // {
    //   content: "Car 11",
    //   color: `rgba(${color()}, ${color()}, ${color()}, 1)`,
    // },
    // {
    //   content: "Car 12",
    //   color: `rgba(${color()}, ${color()}, ${color()}, 1)`,
    // },
    // {
    //   content: "Car 13",
    //   color: `rgba(${color()}, ${color()}, ${color()}, 1)`,
    // },
    // {
    //   content: "Car 14",
    //   color: `rgba(${color()}, ${color()}, ${color()}, 1)`,
    // },
  ]);

  const router = useRouter();
  const navTo = (path) => {
    router.push(path);
  };

  return (
    <div>
      <style jsx>{`
        .dot {
          height: 25px;
          width: 25px;
          margin-right: 50px;
          border-radius: 50%;
        }
        .item {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          height: 50px;
          line-height: 50px;
          border-bottom: 1px solid grey;
          padding-left: 10px;
          background: white;
          width: 100%;
          box-sizing: border-box;
          position: relative;
        }
      `}</style>
      <div className="flex flex-col h-full text-center">
        {items.map((item) => (
          <SwipeToDelete
            key={item.content}
            onDelete={() =>
              setItems((items) =>
                items.filter((i) => i.content !== item.content)
              )
            }
            height={50} // required
            // optional
            transitionDuration={250} // default
            deleteWidth={75} // default
            deleteColor="rgba(252, 58, 48, 1.00)" // default
            deleteText="Delete" // default
            rtl={false} // default
          >
            <span className="item">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.content}</span>
            </span>
          </SwipeToDelete>
        ))}
      </div>
      <button
        type="button"
        className={`py-2 px-4 rounded-full w-full  ${styles["btn-primary"]}`}
        onClick={() => navTo("car-edit")}
      >
        + 新增您的愛車
      </button>
    </div>
  );
};

export default CarList;

CarList.getLayout = function getLayout(page) {
  return (
    <Layout header={<Navbar title={"車輛資料"} />} paddingNo={0}>
      {page}
    </Layout>
  );
};
