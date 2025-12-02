import { HealthDashboardGridProps } from './types';

export const HealthDashboardGrid = ({ 
  children
}: HealthDashboardGridProps) => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 lg:py-16">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {children}
      </div>
    </div>
  );
};
