import BrandTitle from "@/image/icons/brand-title.svg";
import NavBackIcon from "@/image/icons/nav-back.svg";
import { useRouter } from "next/router";

const NavBar = ({ title, onBackClick }) => {
  const router = useRouter();
  const navBack = () => {
    router.back();
  };

  return (
    <div
      className="h-[60px] bg-white  w-full
        flex justify-center items-center relative bg"
    >
      <style jsx>
        {`
          .bg {
            background: #ffffff;
            box-shadow: 0px 2px 8px rgba(228, 230, 232, 0.5);
          }
        `}
      </style>
      <button className="absolute left-0 top-0 p-[24px]" onClick={onBackClick || navBack}>
        <NavBackIcon />
      </button>

      {title || <BrandTitle />}
    </div>
  );
};

export default NavBar;
