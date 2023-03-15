import styles from "@/styles/verify-code.module.scss";
import Layout from "@/components/layout";

const CpInfo = ({ park }) => {
  if (!park) return null;
  const { cpNo, kw, parkStyle, pkNo, fee } = park;

  return (
    <>
      {cpNo && (
        <div
          className="flex flex-col h-full gap-[30px]
        text-[#4F4F4F]
        "
        >
          <style jsx>
            {`
              .info-box {
                background: #f2f2f2;
                border-radius: 8px;
              }
            `}
          </style>
          <span className="text-[13px] text-[#333333]">充電槍</span>
          <div className="flex justify-between items-center w-full info-box p-5">
            <div>
              <div className="text-[14px]">
                <span className="text-[15px] font-medium text-[#333333]">
                  {cpNo}
                </span>{" "}
                {kw} kW
              </div>
              <div className="text-[14px] font-medium">
                {parkStyle} - {pkNo}號車格
              </div>
            </div>
            <div>編號 30043</div>
          </div>
          <span className="text-[13px] text-[#333333]">費用</span>
          <div
            className="w-full info-box p-5
              text-[14px] font-medium "
          >
            <span className="text-[22px] font-medium text-[#333333]">
              {fee}
            </span>{" "}
            / 度
          </div>
        </div>
      )}
    </>
  );
};

export default CpInfo;
