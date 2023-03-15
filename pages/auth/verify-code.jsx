import styles from "@/styles/verify-code.module.scss";
import Layout from "@/components/layout";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import AuthCode from "react-auth-code-input";
import { useState } from "react";
import InputCode from "@/components/InputCode";

const VerifyCode = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const navTo = (path) => {
    router.push(path);
  };
  const [result, setResult] = useState();
  const handleOnChange = (res) => {
    setResult(res);
  };

  return (
    <div
      className="flex flex-col h-full gap-[30px]
      items-center text-center"
    >
      <div className="my-[50px] ">
        <div className="text-[18px] font-medium mb-[15px]">請輸入驗證碼</div>
        <div>已經發送到 0936888888</div>
      </div>

      <div>
        <InputCode
          length={6}
          label="Code Label"
          loading={loading}
          onComplete={(code) => {
            setLoading(true);
            setTimeout(() => setLoading(false), 10000);
          }}
        />
      </div>

      <button
        type="button"
        className={`py-2 px-4 rounded-full w-full  ${styles["btn-primary"]}`}
        onClick={() => navTo("/cpop/station-map")}
      >
        確定
      </button>
      <a href="#" className="text-[13px] text-[#333333]">
        未收到驗證號碼？
      </a>
    </div>
  );
};

export default VerifyCode;

VerifyCode.getLayout = function getLayout(page) {
  return <Layout header={<Navbar />}>{page}</Layout>;
};
