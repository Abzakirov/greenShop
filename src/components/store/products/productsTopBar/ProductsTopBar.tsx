import { Select } from "antd";
import { titleCategory } from "../../../../utils";
import useSearchHandlerParams from "../../../../hook/useSeachParams";
import {  UnorderedListOutlined } from "@ant-design/icons";
import CategoryModal from "../../categories/CategoryModal";
import { useState } from "react";

const ProductsTopBar = () => {
  const { setParam, getParam } = useSearchHandlerParams();
  const range_min = getParam("range_min") || 0;
  const range_max = getParam("range_max") || 1000;
  const category = getParam("category") || "house-plants";
  const sort = getParam("sort") || "default-sorting";
  const type = getParam("type") || "all-plants";

  const handleChange = (value: string) => {
    setParam({ category, range_min, range_max, sort: value, type });
  };

  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between max-[890px]:justify-center">
        <div className="flex items-center justify-center gap-8 max-[520px]:gap-3 max-[380px]:gap-2">
          {titleCategory.map((item) => (
            <button
              onClick={() =>
                setParam({
                  category,
                  range_min,
                  range_max,
                  sort,
                  type: item.label,
                })
              }
              key={item.id}
              className={`text-[15px] max-[360px]:text-[12px] font-normal ${
                type === item.label
                  ? "text-[#46a358] underline !font-[700]"
                  : "text-[#3D3D3D]"
              }`}
            >
              {item.title}
            </button>
          ))}
          <button
            className="hidden max-[890px]:flex"
            onClick={() => setOpen(true)}
          >
            <UnorderedListOutlined className="text-xl transform rotate-180" />
          </button>
        </div>

        <div className="flex items-center gap-2 max-[890px]:hidden">
          <h2 className="text-[15px] text-[#3D3D3D] font-medium">Sort by:</h2>
          <Select
            defaultValue={sort}
            style={{ padding: "5px", width: "165px", height: "40px" }}
            onChange={handleChange}
            options={[
              { value: "default-sorting", label: "Default sorting" },
              { value: "the-cheapest", label: "The Cheapest" },
              { value: "most-expensive", label: "Most Expensive" },
            ]}
          />
        </div>
      </div>

      <CategoryModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default ProductsTopBar;
