import { FC } from "react";
import { CardType } from "../../../../@types";
import {
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const Card: FC<CardType> = (props) => {
  const { _id, title, main_image, discount_price, price } = props;

  const style_icons: string =
    "bg-[#ffffff] w-[35px] h-[35px] flex rounded-lg justify-center items-center cursor-pointer text-xl transition  hover:text-[#46a358]";

  return (
    <div
      key={_id}
      className=" w-[270px] max-[400px]:w-full flex-col gap-3 cursor-pointer border-transparent border-t hover:border-[#46a358] transition duration-300"
    >
      <div className="h-[320px] group bg-[#f5f5f5] flex justify-center items-center relative transition duration-300">
        <img
          src={main_image}
          className="w-4/5 h-[80%] max-sm:h-[200px] transition duration-300"
          alt={title}
        />
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            transition: "all 10s ease-in-out " ,
          }}
          className="hidden items-center justify-center absolute bottom-0 gap-5 group-hover:flex transition !duration-500 w-full h-[40px]"
        >
          <div className={style_icons}>
            <ShoppingCartOutlined className="text-[22px] hover:text-[#46a358]" />
          </div>
          <div className={style_icons}>
            <HeartOutlined className="text-[22px] hover:text-[#46a358]" />
          </div>
          <div className={style_icons}>
            <SearchOutlined className="text-[22px] hover:text-[#46a358]" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <h3 className="text-[#3D3D3D] text-[16px] font-normal transition duration-300">
          {title}
        </h3>
        <div className="flex gap-3 items-center">
          <h3 className="text-[#46a358] text-[18px] font-bold transition duration-300">
            ${price}
          </h3>
          <h3 className="font-[300] text-[#a5a5a5] line-through transition duration-300">
            ${discount_price}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
