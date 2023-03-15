// import Navbar from './navbar'
import Footer from "./footer";

export default function Layout({ children, header, paddingNo = 27 }) {
  return (
    <div
      className="w-[375px] h-[calc(812px-60px)]] mx-auto text-[#333333] 
    border-[1px]
    "
    >
      {/* <Navbar /> */}

      {header}
      <main>
        <div className="h-[812px]" style={{ padding: paddingNo }}>
          {children}
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
