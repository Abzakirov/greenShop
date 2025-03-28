

import React from "react";
import { Badge } from "antd";

interface BadgesProps {
  count: number;
  children: React.ReactNode;
  onClick?: () => void;
}

const Badges: React.FC<BadgesProps> = ({ count, children, onClick }) => (
  <button onClick={onClick} className="relative">
    <Badge count={count} offset={[0, 5]} color="green">
      <span className="flex items-center">{children}</span>
    </Badge>
  </button>
);

export default Badges;
