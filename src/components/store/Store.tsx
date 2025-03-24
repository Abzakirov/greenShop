import Categories from "./categories/Categories";
import Products from "./products/Products";

const Store = () => {
  return (
    <div className="flex items-start justify-between gap-[50px]">
      <Categories />
      <Products />
    </div>
  );
};

export default Store;
