// components
import { Empty } from "antd";
import type { CardType, QueryType } from "../../../@types";
import SkeletonLoader from "../../../gen/loader/Sceletton";
import { useQueryHandler } from "../../../hook/useQueryHandler";
import useSearchHandlerParams from "../../../hook/useSeachParams";
import Card from "./card";
import ProductsTopBar from "./productsTopBar/ProductsTopBar";

const Products = () => {
  const { CardLoader } = SkeletonLoader();
  const { getParam } = useSearchHandlerParams();
  const category = getParam("category") || "house-plants";
  const range_min = getParam("range_min") || 0;
  const range_max = getParam("range_max") || 1000;
  const sort = getParam("sort") || "default-sorting";
  const type = getParam("type") || "all-plants";
  const { data, isLoading, isError }: QueryType<CardType[]> = useQueryHandler({
    url: `flower/category/${category}`,
    pathname: `flowers-category${category}range_min=${range_min}-range_max=${range_max}-type=${type}-sort=${sort}`,
    params: { range_min, range_max, sort, type },
  });
  if (!data?.length && !isLoading && !isError) {
    return (
      <section className="w-[70%]">
        <ProductsTopBar />

        <Empty />
      </section>
    );
  }
  return (
    <div className="w-[70%] ">
      <ProductsTopBar />

      <div className="flex flex-wrap  gap-7 mt-7 w-full m-auto max-[400px]:flex-col max-[400px]:justify-center max-[437px]:items-center">
        {isLoading || isError
          ? CardLoader()
          : data?.map((value) => <Card key={value._id} {...value} />)}
      </div>
    </div>
  );
};

export default Products;
