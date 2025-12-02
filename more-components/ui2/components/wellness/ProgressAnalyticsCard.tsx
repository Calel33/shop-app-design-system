import React from 'react';

interface ProgressAnalyticsCardProps {
  hoursThisMonth: number;
  focusImprovement: number;
  stressReduction: number;
}

export const ProgressAnalyticsCard: React.FC<ProgressAnalyticsCardProps> = ({ hoursThisMonth, focusImprovement, stressReduction }) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white">
      <h3 className="text-lg font-semibold mb-2">Progress</h3>
      <div className="grid grid-cols-3 gap-3 text-center">
        <div>
          <div className="text-2xl font-semibold">{hoursThisMonth}h</div>
          <div className="text-xs text-white/70">This month</div>
        </div>
        <div>
          <div className="text-2xl font-semibold">{focusImprovement}%</div>
          <div className="text-xs text-white/70">Focus</div>
        </div>
        <div>
          <div className="text-2xl font-semibold">{stressReduction}%</div>
          <div className="text-xs text-white/70">Stress</div>
        </div>
      </div>
    </div>
  );
};

export default ProgressAnalyticsCard;
