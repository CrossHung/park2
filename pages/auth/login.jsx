import clsx from "clsx";
import Logo from "@/image/icons/logo.svg";
import Google from "@/image/icons/google.svg";
import Line from "@/image/icons/line.svg";
import Layout from "@/components/layout";
import Divider from "@/components/divider";
import styles from "@/styles/login.module.scss";
import { useRouter } from "next/router";

const Login = () => {

  const router = useRouter();

  const navTo = (path) => {
    router.push(path);
  };
  return (
    <div
      className="
    flex flex-col h-full gap-[30px] 
       text-center
    "
    >
      <div className="logo w-[80%] mx-auto">
        <Logo />
      </div>
      <div>
        <input
          type="text"
          placeholder="請輸入您的手機號碼"
          className="
          bg-gray-50 border 
          border-gray-300 text-gray-900 
          text-sm rounded-lg 
          focus:ring-blue-500 focus:border-blue-500 
          block w-full p-2.5 
          "
        />
      </div>
      
      <button
        type="button"
        className={`py-2 px-4 rounded-full w-full ${clsx(
          styles["btn-primary"],
          // styles.disabled
        )}`}
        onClick={() => navTo("verify-code")}
      >{/* disabled */}
        登入或註冊
      </button>
      <div className="my-[30px]">
        <Divider>或使用其他方式登入</Divider>
      </div>

      <div className="flex justify-between gap-5">
        <button
          className={`rounded-full w-full ${clsx(
            styles["btn-primary"],
            styles["round-wrapper"]
          )} flex items-center text-[15px]`}
          onClick={() => navTo("/cpop/station-map")}
        >
          <Google />
          &nbsp;&nbsp;Google登入
        </button>
        <button
          className={`rounded-full w-full ${clsx(
            styles["btn-primary"],
            styles["round-wrapper"]
          )} flex items-center text-[15px]`}
          onClick={() => navTo("/cpop/station-map")}
        >
          <Line />
          &nbsp;&nbsp;Line登入
        </button>
      </div>
      <div>
        <input type="checkbox" />
        <span> 我已詳閱並同意《使用條款與隱私條款》</span>
      </div>
    </div>
  );
};

export default Login;

Login.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
