import { ArrowRightOutlined } from "@ant-design/icons";


import { BlogContent } from ".";

const Blogs = () => {
  return (
    <div className="flex items-center gap-8 max-[1347px]:flex-wrap max-[1347px]:justify-center">
      {BlogContent.map((item) => (
        <div
          key={item.id}
          className="bg-[#FBFBFB] w-[586px] max-[1347px]:w-[100%] flex items-center gap-8 p-6 max-[659px]:flex-col max-[659px]:gap-5"
        >
          <img className="w-[250px]" src={item.img} alt={item.title} />
          <div className="flex flex-col gap-4 text-center max-[650px]:items-center max-[650px]:justify-center items-end w-full">
            <h2 className="text-[#3D3D3D] text-[18px] font-[900] max-w-[160px]">
              {item.title}
            </h2>
            <p className="text-[#727272] text-[14px] font-[400]">{item.descr}</p>
            <button className="flex items-center max-[600px]:w-[100%] gap-3 justify-center w-[140px] h-[40px] bg-[#46a358] rounded-lg text-[#fff] ml-auto">
              {item.btn}
              <ArrowRightOutlined />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
