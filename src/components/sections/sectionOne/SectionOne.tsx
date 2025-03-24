import React from "react";
import { Carousel } from "antd";
import { swiperOptions } from "../../../utils/swiper";

const SectionOne: React.FC = () => {


  const { btn, greens, decr, imgchild, imgparent, makebatter, welcome } =
    swiperOptions;

  return (
    <div className="w-full mx-auto">
      <Carousel  autoplay className="bg-[#F5F5F580] p-5 overflow-hidden">
        {[...Array(3)].map((_, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-5 w-full">
              <div className="flex flex-col gap-4 max-w-full md:max-w-[50%] text-center md:text-left">
                <h2 className="text-[#3D3D3D] text-[12px] md:text-[14px] font-medium">{welcome}</h2>
                <h1 className="text-[#3D3D3D] max-[500px]:text-center text-[30px] md:text-[70px] font-medium leading-tight">
                  {makebatter.split("<Br/>").map((item, index) => (
                    <React.Fragment key={index}>
                      {item}
                      {index !== makebatter.split("<Br/>").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                  <span className="text-[30px] md:text-[70px] font-medium text-[#46A358]">{greens}</span>
                </h1>
                <p className="text-[#727272] text-[12px] md:text-[14px] font-medium">{decr}</p>
                <button className="bg-[#46A358] w-[100%] md:w-[140px] text-white text-[14px] md:text-[16px] font-medium px-4 py-2 rounded-md">
                  {btn}
                </button>
              </div>

              <div className="relative flex gap-2 md:gap-5 max-w-full md:max-w-[50%] justify-center md:justify-end">
                <img
                  src={imgchild}
                  alt="Child Plant"
                  className="w-[100px] md:w-[135px] h-[100px] md:h-[135px] rounded-md absolute bottom-0 right-[50px] md:right-[200px]"
                />
                <img
                  src={imgparent}
                  alt="Parent Plant"
                  className="w-[200px] md:w-[300px] h-auto rounded-md relative"
                />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SectionOne;
