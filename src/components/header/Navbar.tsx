import { useState } from "react";
import Search from "../../icons/Search";
import Shops from "../../icons/Shop";
import Badges from "../../gen/badge/Badge";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useReduxDispatch } from "../../hook/useRedux";
import { setModalAutchorization } from "../../store/modalSlice/Modal";
import LikeBadge from "../../gen/badge/like";
import { CiLogin } from "react-icons/ci";
import { IoMenuOutline, IoCloseSharp } from "react-icons/io5";
import { HeartOutlined } from "@ant-design/icons";
import Logo from "../../assets/logo.png";
import { cookieInfo } from "../../gen/cookie";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const dispatch = useReduxDispatch();
  const navigate = useNavigate();
  const { isAuthorization, getCookie } = cookieInfo();
  const user = isAuthorization ? getCookie("user") : null;

  return (
    <div>
      <header className="container2 borders">
        <div className="flex items-center justify-between !max-[300px]:gap-4 !gap-5">
          <button onClick={()=>navigate("/")} className="!w-[100px]">
            <img src={Logo} alt="Logo" />
          </button>
          <nav className="items-center max-[709px]:hidden">
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
          </nav>
          <div className="flex items-center gap-9 max-[500px]:gap-3">
            <div className="flex gap-7 max-[500px]:gap-5 items-center">
              <button className="max-[300px]:hidden">
                <Search />
              </button>
              <Badges onClick={() => navigate("/shop")} count={3}>
                <Shops />
              </Badges>
              <LikeBadge onClick={() => navigate("/like")} count={3}>
                <HeartOutlined className="text-2xl !text-black" />
              </LikeBadge>
            </div>
            <button
              onClick={() => {
                isAuthorization
                  ? navigate("profile")
                  : dispatch(setModalAutchorization());
              }}
              className="flex items-center justify-center gap-3 text-white text-[16px] w-[100px] h-[35px] bg-[#46A358] rounded-[6px] p-2 max-[550px]:hidden"
            >
              {isAuthorization ? (
                user?.name
              ) : (
                <>
                  <CiLogin /> Login
                </>
              )}
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
        <nav className="flex flex-col gap-5 text-center">
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
          <button
         onClick={() => {
          isAuthorization
            ? navigate("profile")
            : dispatch(setModalAutchorization());
        }}
            className="flex items-center justify-center gap-3 text-white text-[16px] w-[100px] h-[35px] bg-[#46A358] rounded-[6px] p-2"
          >
            {isAuthorization ? (
              user?.name
            ) : (
              <>
                <CiLogin /> Login
              </>
            )}
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
