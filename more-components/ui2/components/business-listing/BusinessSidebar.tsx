import type { ReactNode } from "react";

interface BusinessSidebarProps {
  children: ReactNode;
}

const BusinessSidebar = ({ children }: BusinessSidebarProps) => {
  return <div className="space-y-6">{children}</div>;
};

export default BusinessSidebar;
