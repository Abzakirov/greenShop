import Categories from "./categories/Categories";
import Products from "./products/Products";

const Store = () => {
  return (
    <div className="flex  justify-between max-[600px]:justify-center max-[1250px]:justify-center gap-[30px] !max-[600px]:gap-0 mt-7">
      <Categories />
      <Products />
    </div>
  );
};

export default Store;
