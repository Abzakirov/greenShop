import { Slider } from "antd";
import { useState } from "react";
import useSearchHandlerParams from "../../../../hook/useSeachParams";

const Price = () => {
  const { setParam, getParam } = useSearchHandlerParams();

  const range_min = getParam("range_min") || 0;
  const range_max = getParam("range_max") || 1000;
  const category = getParam("category") || "house-plants";
  const sort = getParam("sort") || "default-sorting";
  const type = getParam("type") || "all-plants";

  const [price, setPrice] = useState<number[]>([+range_min, +range_max]);

  return (
    <div className="w-full mt-4">
      <h2 className="text-[18px] text-[#3D3D3D] font-medium">Price Range</h2>
      <Slider
        range
        min={0}
        max={1000}
        defaultValue={price}
        onChange={(value) => setPrice(value as number[])}
      />
      <div className="flex items-center gap-2 mt-2">
        <h2 className="!text-[#3d3d3d] !text-[18px] !font-medium">Price:</h2>
        <div className="flex items-center gap-[3px] ">
          <h2 className="text-[#46A358] text-[15px] font-medium">${price[0]}</h2>
          <h2 className="w-[10px] h-[1px] bg-[#46A358]"></h2>
          <h2 className="text-[#46A358] text-[15px] font-medium">${price[1]}</h2>
        </div>
      </div>
      <button
        onClick={() =>
          setParam({
            category,
            range_min: price[0],
            range_max: price[1],
            sort,
            type,
          })
        }
        className="mt-3 w-[90px] h-[35px] flex items-center justify-center bg-[#46a358] text-white font-bold text-[16px] rounded-lg"
      >
        Filter
      </button>
    </div>
  );
};

export default Price;
