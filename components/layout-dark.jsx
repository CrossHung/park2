import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children, paddingNo = 27 }) {
  return (
    <div
      className="w-[375px] h-[812px] mx-auto bg-[#141B23]
            text-white overflow-hidden"
    >
      <Navbar />
      <main>
        <div className="h-[812px]" style={{ padding: paddingNo }}>
          {children}
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
