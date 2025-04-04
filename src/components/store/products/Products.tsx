import { useState, useEffect } from "react";

// library
import { Empty } from "antd";

// components
import Card from "./card";
import type { CardType, QueryType } from "../../../@types";
import SkeletonLoader from "../../../gen/loader/Sceletton";
import { useQueryHandler } from "../../../hook/useQueryHandler";
import useSearchHandlerParams from "../../../hook/useSeachParams";
import ProductsTopBar from "./productsTopBar/ProductsTopBar";
import Paginations from "../../../gen/pagination/Pagination";

const Products = () => {
  const { CardLoader } = SkeletonLoader();
  const { getParam, setParam } = useSearchHandlerParams();

  const [currentPage, setCurrentPage] = useState(Number(getParam("page")) || 1);
  const limit = Number(getParam("limit")) || 4; // Дефолтное значение 4
  const [products, setProducts] = useState<CardType[]>([]);

  const category = getParam("category") || "house-plants";
  const range_min = getParam("range_min") || 0;
  const range_max = getParam("range_max") || 1000;
  const sort = getParam("sort") || "default-sorting";
  const type = getParam("type") || "all-plants";

  const { data, isLoading, isError }: QueryType<CardType[]> = useQueryHandler({
    url: `flower/category/${category}`,
    pathname: `flowers-category${category}range_min=${range_min}-range_max=${range_max}-type=${type}-sort=${sort}-page=${currentPage}-limit=${limit}`,
    params: { range_min, range_max, sort, type, page: currentPage, limit },
  });

  useEffect(() => {
    setParam({ page: currentPage.toString(), limit: limit.toString() });
  }, [currentPage, limit]);

  useEffect(() => {
    if (data) {
      setProducts((prev) => [...prev, ...data]); // Добавляем новые данные к старым
    }
  }, [data]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (!products.length && !isLoading && !isError) {
    return (
      <section className="w-[70%]">
        <ProductsTopBar />
        <Empty />
      </section>
    );
  }

  return (
    <div className="w-[70%]">
      <ProductsTopBar />

      <div className="flex flex-wrap gap-7 mt-7 w-full m-auto max-[400px]:flex-col max-[400px]:justify-center max-[437px]:items-center">
        {isLoading || isError
          ? CardLoader()
          : products.map((value) => <Card key={value._id} {...value} />)}
      </div>

      <Paginations
        currentPage={currentPage}
        totalItems={(products.length / limit) * limit} 
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Products;
