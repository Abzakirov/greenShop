import { Skeleton } from "antd";

const SkeletonLoader = () => {
  const categoryLoader = () => {
    return Array.from({ length: 9 }).map((_, idx) => (
      <div className="!w-full">
        <Skeleton.Input key={idx} active className="!w-full h-[40px] mb-2" />
      </div>
    ));
  };

  const discountLoader = () => {
    return (
      <div className="w-full bg-[#eef7f1] text-center px-4 py-5 mt-3">
        <Skeleton.Input  active className="!w-full h-[40px] mb-2" />
        <Skeleton.Input  active className="!w-full h-[40px] mb-2" />

        <Skeleton.Image  active className="!w-full !h-[200px] mt-5" />
      </div>
    );
  };

  return { categoryLoader,discountLoader };
};

export default SkeletonLoader;
