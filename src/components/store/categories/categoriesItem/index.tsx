import { FC } from "react";
import { CategoryType } from "../../../../@types";
import useSearchHandlerParams from "../../../../hook/useSeachParams";

const CategoriesItem: FC<CategoryType> = (props) => {
  const { setParam, getParam } = useSearchHandlerParams();
  const range_min = getParam("range_min") || 0;
  const range_max = getParam("range_max") || 1000;
  const sort = getParam("sort") || "default-sorting";
  const type = getParam("type") || "all-plants";
  const category = getParam("category") || "house-plants";

  return (
    <button
      onClick={() =>
        setParam({
          category: props.route_path,
          range_min,
          range_max,
          sort,
          type,
        })
      }
      className={`flex items-center justify-between w-full ${
        category === props.route_path && "font-bold !text-[#46a358]"
      }`}
    >
      <h3
        className={`   ${
          category === props.route_path && "font-[700] !text-[#46a358] underline"
        } text-[#3d3d3d]`}
      >
        {props?.title}
      </h3>
      <h3
        className={`   ${
          category === props.route_path && "font-[700] !text-[#46a358] underline"
        } text-[#3d3d3d]`}
      >
        ({Math.abs(props?.count || 0)})
      </h3>
    </button>
  );
};

export default CategoriesItem;
