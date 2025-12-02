import type { ReactNode } from "react";

interface BusinessCardGridProps {
  children: ReactNode;
}

const BusinessCardGrid = ({ children }: BusinessCardGridProps) => {
  return <div className="grid grid-cols-1 gap-6 lg:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">{children}</div>;
};

export default BusinessCardGrid;
