import React from "react";
import { Badge } from "antd";

const Badges: React.FC<{ count: number; children: React.ReactNode }> = ({ count, children }) => (
  <Badge count={count} offset={[0, 5]} color="green">
    <a href="#" className="flex items-center">{children}</a>
  </Badge>
);

export default Badges;
