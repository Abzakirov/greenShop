import { CardsItems } from "../../../utils";
import Advices from "../Advices/Advices";

const SectionFour = () => {
  return (
    <div className="flex items-center bg-[#fbfbfb] p-4 gap-5 mt-[100px] max-[1395px]:flex-wrap max-[800px]:justify-center  ">
      {CardsItems.map((item) => (
        <div className="flex items-center gap-5 ">
          <div className=" w-[250px] flex flex-col gap-4 items-start p-5 max-[800px]:w-[100%]">
            <img src={item.img} alt={item.title} />
            <h1 className="text-[#3d3d3d] text-[17px] font-bold">
              {item.title}
            </h1>
            <p className="max-w-[204px] text-[#727272] text-[15px] font-[400]">
              {item.descr}
            </p>
          </div>
          <div
            style={{ background: " rgba(70, 163, 88, 0.10)" }}
            className="h-[187px] w-[2px]  max-[800px]:hidden"
          ></div>
        </div>
      ))}
      <Advices />
    </div>
  );
};

export default SectionFour;
