

import Icons from '../../../assets/icons.svg'
import mastercard from '../../../assets/mastercard.svg'
import visa from '../../../assets/visa.svg'
import america from '../../../assets/america.svg'

import { FaInstagram } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const FooterTwo = () => (
  <div className="flex items-center justify-between gap-5 mt-3 max-[976px]:flex-wrap max-[976px]:items-start p-3">
    <div className="flex items-start flex-col gap-2">
      <h3 className="text-[18px] text-[#3d3d3d] font-[700] hover:text-[#46a358] transition-colors duration-300 cursor-pointer ">
        My Account
      </h3>
      <div className="flex flex-col items-start gap-2">
        <h4 className="text-[14px] text-[#3d3d3d] font-[400] hover:text-[#46a358] transition-colors duration-300 cursor-pointer">
          My Account
        </h4>
        <h4 className="text-[14px] text-[#3d3d3d] font-[400] hover:text-[#46a358] transition-colors duration-300 cursor-pointer">
          Our stores
        </h4>
        <h4 className="text-[14px] text-[#3d3d3d] font-[400] hover:text-[#46a358] transition-colors duration-300 cursor-pointer">
          Contact us
        </h4>
        <h4 className="text-[14px] text-[#3d3d3d] font-[400] hover:text-[#46a358] transition-colors duration-300 cursor-pointer">
          Career
        </h4>
        <h4 className="text-[14px] text-[#3d3d3d] font-[400] hover:text-[#46a358] transition-colors duration-300 cursor-pointer">
          Specials
        </h4>
      </div>
    </div>
    <div className="flex items-start flex-col gap-2">
      <h3 className="text-[18px] text-[#3d3d3d] font-[700] hover:text-[#46a358] transition-colors duration-300 cursor-pointer ">
        Help & Guide
      </h3>
      <div className="flex flex-col items-start gap-2">
        <h4 className="text-[14px] text-[#3d3d3d] font-[400] hover:text-[#46a358] transition-colors duration-300 cursor-pointer">
          Help Center
        </h4>
        <h4 className="text-[14px] text-[#3d3d3d] font-[400] hover:text-[#46a358] transition-colors duration-300 cursor-pointer">
          How to Buy
        </h4>
        <h4 className="text-[14px] text-[#3d3d3d] font-[400] hover:text-[#46a358] transition-colors duration-300 cursor-pointer">
          Shipping & Delivery
        </h4>
        <h4 className="text-[14px] text-[#3d3d3d] font-[400] hover:text-[#46a358] transition-colors duration-300 cursor-pointer">
          Product Policy
        </h4>
        <h4 className="text-[14px] text-[#3d3d3d] font-[400] hover:text-[#46a358] transition-colors duration-300 cursor-pointer">
          How to Return
        </h4>
      </div>
    </div>
    <div className="flex items-start flex-col gap-2">
      <h3 className="text-[18px] text-[#3d3d3d] font-[700] hover:text-[#46a358] transition-colors duration-300 cursor-pointer ">
        Categories
      </h3>
      <div className="flex flex-col items-start gap-2">
        <h4 className="text-[14px] text-[#3d3d3d] font-[400] hover:text-[#46a358] transition-colors duration-300 cursor-pointer">
          House Plants
        </h4>
        <h4 className="text-[14px] text-[#3d3d3d] font-[400] hover:text-[#46a358] transition-colors duration-300 cursor-pointer">
          Potter Plants
        </h4>
        <h4 className="text-[14px] text-[#3d3d3d] font-[400] hover:text-[#46a358] transition-colors duration-300 cursor-pointer">
          Seeds
        </h4>
        <h4 className="text-[14px] text-[#3d3d3d] font-[400] hover:text-[#46a358] transition-colors duration-300 cursor-pointer">
          Small Plants
        </h4>
        <h4 className="text-[14px] text-[#3d3d3d] font-[400] hover:text-[#46a358] transition-colors duration-300 cursor-pointer">
          Accessories
        </h4>
      </div>
    </div>
    <div className="flex items-start flex-col gap-4">
      <div className="flex items-start flex-col gap-2">
        <h3 className=" text-[18px] text-[#3d3d3d] font-[700] hover:text-[#46a358] transition-colors duration-300 cursor-pointer ">
          Social Media
        </h3>
        <div className="flex items-center gap-3">
          <button className="border border-[rgba(70,163,88,0.20)] w-[30px] h-[30px] flex items-center justify-center rounded-[4px] text-[#3d3d3d] hover:text-[#46a358] transition-colors duration-300">
            <RiFacebookFill className="text-[18px]" />
          </button>
          <button className="border border-[rgba(70,163,88,0.20)] w-[30px] h-[30px] flex items-center justify-center rounded-[4px] text-[#3d3d3d] hover:text-[#46a358] transition-colors duration-300">
            <FaInstagram className="text-[18px]" />
          </button>
          <button className="border border-[rgba(70,163,88,0.20)] w-[30px] h-[30px] flex items-center justify-center rounded-[4px] text-[#3d3d3d] hover:text-[#46a358] transition-colors duration-300">
            <FaTwitter className="text-[18px]" />
          </button>
          <button className="border border-[rgba(70,163,88,0.20)] w-[30px] h-[30px] flex items-center justify-center rounded-[4px] text-[#3d3d3d] hover:text-[#46a358] transition-colors duration-300">
            <FaLinkedinIn className="text-[18px]" />
          </button>
          <button className="border border-[rgba(70,163,88,0.20)] w-[30px] h-[30px] flex items-center justify-center rounded-[4px] text-[#3d3d3d] hover:text-[#46a358] transition-colors duration-300">
            <FaYoutube className="text-[18px]" />
          </button>
        </div>
      </div>
      <div className="flex items-start gap-2 flex-col">
        <h3 className=" text-[18px] text-[#3d3d3d] font-[700] hover:text-[#46a358] transition-colors duration-300 cursor-pointer ">
          We accept
        </h3>
        <div className="flex items-center gap-4 max-[430px]:flex-wrap max-[430px]:justify-center">
            <img src={Icons} alt="" />
            <img src={mastercard} alt="" />
            <img src={visa} alt="" />
            <img src={america} alt="" />
        </div>
      </div>
    </div>
  </div>
);

export default FooterTwo;
