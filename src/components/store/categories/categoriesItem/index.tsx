import { FC } from "react";
import { CategoryType } from "../../../../@types";

const CategoriesItem: FC<CategoryType> = (props) => {
  return (
    <div className="w-full">
      <button className="flex items-center justify-between w-full">
        <h3 className="text-[#3d3d3d]">{props?.title}</h3>
        <h3 className="text-[#3d3d3d]">({Math.abs(props?.count || 0)})</h3>
      </button>
    </div>
  );
};

export default CategoriesItem;
