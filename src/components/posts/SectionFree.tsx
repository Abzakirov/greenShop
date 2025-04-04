import { ArrowRightOutlined } from "@ant-design/icons";
import { PostItems } from "../../utils";

const SectionFree = () => {
  return (
    <div className="mt-10">
      <h1 className="text-[30px] text-[#3D3D3D] text-center font-bold ">
        Our Blog Posts
      </h1>
      <p className="text-[#727272] text-[14px] text-center font-[400] ">
        We are an online plant shop offering a wide range of cheap and trendy
        plants.
      </p>
      <div className="flex items-center !max-[1256px]:justify-center justify-between gap-5 mt-5 max-[1256px]:flex-wrap max-[1256px]:gap-7 ">
        {PostItems.map((item) => {
          return (
            <div className="w-[280px] flex flex-col max-[680px]:w-full " key={item.id}>
              <img src={item.img} alt={item.title} />
              <div className="bg-[#fbfbfb] flex flex-col gap-3 py-[11px] px-[20px]">
                <p className="text-[#46A358] text-[14px] font-[500]  max-[532px]:text-center">
                  {item.items}
                </p>
                <h2 className="w-[189px] max-[600px]:w-full flex items-center justify-center !max-[523px]:m-auto text-[#3d3d3d] text-[20px] font-[700]  !max-[532px]:text-center">
                  {item.title}
                </h2>
                <p className="text-[#727272] text-[14px] max-[532px]:text-center">{item.descr}</p>
                <button className="flex items-center gap-3 hover:text-[#46a358] text-[#3d3d3d] text-[14px] font-[500] max-[573px]:w-full max-[572px]:justify-center">
                  {item.more} <ArrowRightOutlined />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionFree;
