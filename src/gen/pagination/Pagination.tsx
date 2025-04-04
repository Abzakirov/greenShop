import React from "react";
import { Pagination } from "antd";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}

const Paginations: React.FC<PaginationProps> = ({ currentPage, totalItems, onPageChange }) => {
  return (
    <div className="flex justify-center float-right mt-7 max-[600px]:hidden ">
      <Pagination
        current={currentPage}
        total={totalItems}
        pageSize={4} 
        onChange={onPageChange}
      />
    </div>
  );
};

export default Paginations;
