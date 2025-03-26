import { Skeleton } from "antd";

const SkeletonLoader = () => {
  const categoryLoader = () => {
    return Array.from({ length: 9 }).map((_, idx) => (
      <div key={idx} className="!w-full">
        <Skeleton.Input active className="!w-full h-[40px] mb-2" />
      </div>
    ));
  };

  const discountLoader = () => {
    return (
      <div className="w-full bg-[#eef7f1] text-center px-4 py-5 mt-3">
        <Skeleton.Input active className="!w-full h-[40px] mb-2" />
        <Skeleton.Input active className="!w-full h-[40px] mb-2" />
        <Skeleton.Image active className="!w-full !h-[200px] mt-5" />
      </div>
    );
  };

  const CardLoader = () => {
    return Array.from({ length: 6 }, (_, idx) => (
      <div
        key={idx}
        className="!w-[270px] sm:w-full flex flex-col gap-2 items-center"
      >
        <Skeleton.Image active className="!w-full !h-[300px] sm:h-auto" />
        <Skeleton active className="!w-full !h-[20px]" />
      </div>
    ));
  };
  return { categoryLoader, discountLoader, CardLoader };
};

export default SkeletonLoader;
