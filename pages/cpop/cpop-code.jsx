import styles from "@/styles/verify-code.module.scss";
import Layout from "@/components/layout";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import AuthCode from "react-auth-code-input";
import { useState } from "react";
import InputCode from "@/components/InputCode";

const CpopCode = () => {
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
      <div className="text-[18px] font-medium mt-[50px] mb-[80px]">
        請輸入充電槍編號
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
        onClick={() => navTo("cpop-conn")}
      >
        確定
      </button>
    </div>
  );
};

export default CpopCode;

CpopCode.getLayout = function getLayout(page) {
  return <Layout header={<Navbar />}>{page}</Layout>;
};
