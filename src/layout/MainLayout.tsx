import Navbar from "../components/header/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
