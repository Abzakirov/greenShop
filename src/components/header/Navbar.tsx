// hooks
import { useState } from "react";

// components
import Search from "../../icons/Search";
import Shops from "../../icons/Shop";
import Badges from "../../gen/badge/Badge";

import { NavLink, useLocation } from "react-router-dom";

// icons
import { CiLogin } from "react-icons/ci";
import { IoMenuOutline, IoCloseSharp } from "react-icons/io5";

// images
import Logo from "../../assets/logo.png";
import { useReduxDispatch } from "../../hook/useRedux";
import { setModalAutchorization } from "../../store/modalSlice/Modal";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { pathname } = useLocation();
  const dispatch = useReduxDispatch();

  return (
    <div>
      <header className="container2 borders">
        <div className="flex items-center justify-between !max-[300px]:gap-4 !gap-5">
          <div className="!w-[100px]">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="items-center max-[709px]:hidden">
            <div className="flex items-center gap-5">
              {[
                { name: "Home", path: "/" },
                { name: "Shop", path: "/shop" },
                { name: "Plant Care", path: "/plant-care" },
                { name: "Blogs", path: "/blogs" },
              ].map(({ name, path }, index) => (
                <NavLink
                  key={index}
                  to={path}
                  className={`text-[#3D3D3D] text-[16px] font-sans ${
                    pathname === path
                      ? "text-[#46A358] font-bold underline"
                      : ""
                  }`}
                >
                  {name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-9">
            <div className="flex gap-7 items-center">
              <button>
                <Search />
              </button>
              <Badges count={3}>
                <Shops />
              </Badges>
            </div>
            <button
              onClick={() => dispatch(setModalAutchorization())}
              className="flex items-center gap-3 text-white text-[16px] w-[100px] h-[35px] bg-[#46A358] rounded-[6px] p-2 max-[550px]:hidden"
            >
              <CiLogin />
              Login
            </button>
            <button
              className="hidden max-[550px]:flex"
              onClick={() => setOpen(true)}
            >
              <IoMenuOutline size={30} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed top-0 left-0 w-full min-h-screen bg-green-500 z-50 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
          open
            ? "translate-y-0 opacity-100"
            : "translate-y-[-100%] opacity-0 pointer-events-none"
        }`}
      >
        <button
          className="absolute top-5 right-10"
          onClick={() => setOpen(false)}
        >
          <IoCloseSharp size={30} />
        </button>
        <div className="flex flex-col gap-5 text-center">
          <NavLink to="/" className="text-[#fff] text-[16px] font-sans">
            Home
          </NavLink>
          <NavLink to="/shop" className="text-[#fff] text-[16px] font-sans">
            Shop
          </NavLink>
          <NavLink
            to="/plant-care"
            className="text-[#fff] text-[16px] font-sans"
          >
            Plant Care
          </NavLink>
          <NavLink to="/blogs" className="text-[#fff] text-[16px] font-sans">
            Blogs
          </NavLink>
          <button className="flex items-center gap-3 text-white text-[16px] w-[100px] h-[35px] bg-[#46A358] rounded-[6px] p-2">
            <CiLogin />
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
