/// imgs
import Logo from "../../../assets/Logo.svg";
import Location from "../../../assets/icons/Location.svg";
import Message from "../../../assets/icons/message.svg";
import Calling from "../../../assets/icons/Calling.svg";

const FooterOne = () => {
  return (
    <div
      style={{ background: "rgba(70, 163, 88, 0.10)" }}
      className="flex items-center  gap-[90px] py-[27px] px-[25px] max-[1157px]:flex-wrap max-[1157px]:gap-5 max-[1157px]:justify-center"
    >
      <img src={Logo} alt="" />
      <div className="flex items-center gap-3 ">
        <img
          src={Location}
          alt=""
          className="max-[400px]:items-start flex items-center"
        />
        <h2 className="text-[#3d3d3d] text-[14px] font-[400] max-w-[176px] max-[290px]:text-[12px]">
          70 West Buckingham Ave. Farmingdale, NY 11735
        </h2>
      </div>
      <div className="flex items-center gap-3">
        <img
          src={Message}
          alt=""
          className="max-[400px]:items-start flex items-center"
        />
        <h2 className="text-[#3d3d3d] text-[14px] font-[400] max-w-[176px]">
          contact@greenshop.com
        </h2>
      </div>
      <div className="flex items-center gap-3">
        <img
          src={Calling}
          alt=""
          className="max-[400px]:items-start flex items-center"
        />
        <h2 className="text-[#3d3d3d] text-[14px] font-[400] max-w-[176px]">
          +88 01911 717 490
        </h2>
      </div>
    </div>
  );
};

export default FooterOne;
