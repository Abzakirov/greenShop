import React from "react";
import { Badge } from "antd";

interface LikeBadgeProps {
  count: number;
  children: React.ReactNode;
  onClick?: () => void;
}

const LikeBadge: React.FC<LikeBadgeProps> = ({ count, children, onClick }) => (
  <div onClick={onClick} className="cursor-pointer">
    <Badge count={count} offset={[0, 5]} color="green">
      <span className="flex items-center">{children}</span>
    </Badge>
  </div>
);

export default LikeBadge;
