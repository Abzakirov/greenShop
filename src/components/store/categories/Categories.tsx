import { CategoryType, QueryType } from "../../../@types";
import SkeletonLoader from "../../../gen/loader/Sceletton";
import { useQueryHandler } from "../../../hook/useQueryHandler";
import CategoriesItem from "./categoriesItem";
import Discount from "./discount";
import Price from "./price";

const Categories = () => {
  const { data, isLoading, isError }: QueryType<CategoryType[]> =
    useQueryHandler({
      url: "flower/category",
      pathname: "category",
    });
  const { categoryLoader } = SkeletonLoader();

  return (
    <div className="max-w-[30%] !max-[890px]:w-0">
      <div className="bg-[#FBFBFB] !w-full max-[1250px]:hidden overflow-hidden">
        <div>
          <div>
            <h3 className="text-[#3D3D3D] text-[18px] font-bold p-3">
              Categories
            </h3>
          </div>
          <div className="flex items-center justify-center flex-col gap-3 p-4 w-full">
            {isLoading || isError
              ? categoryLoader()
              : data?.map((value: any) => (
                  <CategoriesItem key={value?._id} {...value} />
                ))}
            <Price />
            <Discount />
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Categories;
