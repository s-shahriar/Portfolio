
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Layout() {
  return (
      <div className="mx-auto bg-gray-900">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
  );
}

export default Layout;
