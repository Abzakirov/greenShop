import { Modal } from "antd";
import { CategoryType, QueryType } from "../../../@types";
import { useQueryHandler } from "../../../hook/useQueryHandler";
import SkeletonLoader from "../../../gen/loader/Sceletton";
import CategoriesItem from "./categoriesItem";
import Price from "./price";
import Discount from "./discount";

interface CategoryModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const CategoryModal: React.FC<CategoryModalProps> = ({ open, setOpen }) => {
  const { data, isLoading, isError }: QueryType<CategoryType[]> =
    useQueryHandler({
      url: "flower/category",
      pathname: "category",
    });

  const { categoryLoader } = SkeletonLoader();

  return (
    <Modal
      footer={null}
      open={open}
      onCancel={() => setOpen(false)} 
      destroyOnClose={true} 
    >
      <div className="bg-[#FBFBFB] w-full overflow-hidden">
        <h3 className="text-[#3D3D3D] text-[18px] font-bold p-3">Categories</h3>
        <div className="flex items-center justify-center flex-col gap-3 p-4 w-full">
          {isLoading || isError
            ? categoryLoader()
            : data?.map((value) => (
                <CategoriesItem key={value._id} {...value} />
              ))}
          <Price />
          <Discount />
        </div>
      </div>
    </Modal>
  );
};

export default CategoryModal;
