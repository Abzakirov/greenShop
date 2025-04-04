import FooterOne from "./footerOne/FooterOne";
import FooterTwo from "./footerTwo/FooterTwo";

const Footer = () => {
  return (
    <div className="container2">
      <div style={{ borderBottom: "1px solid rgba(70, 163, 88, 0.20)" }}>
          <FooterOne />
        <div className="bg-[#FBFBFB]">
            <FooterTwo />
        </div>
      </div>
      <h3 className="text-[#3d3d3d] text-[14px] font-[400] text-center mt-2">
        © 2021 GreenShop. All Rights Reserved.
      </h3>
    </div>
  );
};

export default Footer;
