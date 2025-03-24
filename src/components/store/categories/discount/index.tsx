import type { DiscountType, QueryType } from "../../../../@types";
import SkeletonLoader from "../../../../gen/loader/Sceletton";
import { useQueryHandler } from "../../../../hook/useQueryHandler";

const Discount = () => {
  const { data, isLoading, isError }: QueryType<DiscountType> = useQueryHandler(
    {
      url: "features/discount",
      pathname: "discount",
    }
  );
  const { discountLoader } = SkeletonLoader();

  return (
    <div>
      {isLoading || isError ? (
        discountLoader()
      ) : (
        <div className="w-full bg-[#eef7f1] text-center px-4 py-5 mt-3">
          <h2 className="text-[#46a358] text-[30px] font-normal leading-[40px]">
            {data?.title}
          </h2>
          <h3>UP TO {data?.discoount_up_to} % OFF</h3>
          {data?.poster_image_url && (
            <img src={data.poster_image_url} alt="Discount Poster" />
          )}
        </div>
      )}
    </div>
  );
};

export default Discount;
