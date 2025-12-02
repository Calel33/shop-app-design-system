import React from 'react';
import { TrendingUp, Download, Upload } from 'lucide-react';
import { DepositsSidebarProps } from './types';
import { UtilizationBar } from './UtilizationBar';

/**
 * DepositsSidebar - Displays net deposits and utilization metrics
 * 
 * Features:
 * - Net deposits amount
 * - Utilization percentage with animated bar
 * - Weekly inflow/outflow metrics
 * - Add funds and withdraw actions
 * - Glass morphism card styling
 */
export const DepositsSidebar: React.FC<DepositsSidebarProps> = ({
  metrics,
  onAddFunds,
  onWithdraw
}) => {
  return (
    <aside className="sm:p-8 bg-white/5 ring-white/10 ring-1 rounded-2xl pt-6 pr-6 pb-6 pl-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-neutral-400">Net deposits</p>
          <p className="mt-1 text-2xl font-semibold tracking-tight text-white">
            {metrics.netDeposits}
          </p>
        </div>
        <div className="rounded-xl bg-neutral-900 ring-1 ring-white/10 p-3">
          <TrendingUp className="h-6 w-6 text-emerald-400" aria-hidden="true" />
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-neutral-300">Utilization</span>
          <span className="text-sm font-semibold text-white">{metrics.utilization}%</span>
        </div>
        <UtilizationBar utilization={metrics.utilization} />
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-neutral-300">7d Inflow</span>
          <span className="text-sm font-semibold text-emerald-400">{metrics.weeklyInflow}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-neutral-300">7d Outflow</span>
          <span className="text-sm font-semibold text-rose-400">{metrics.weeklyOutflow}</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-2">
        <button
          onClick={onAddFunds}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2 text-sm text-neutral-200 hover:bg-white/[0.08] transition"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          <span>Add funds</span>
        </button>
        <button
          onClick={onWithdraw}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2 text-sm text-neutral-200 hover:bg-white/[0.08] transition"
        >
          <Upload className="h-4 w-4" aria-hidden="true" />
          <span>Withdraw</span>
        </button>
      </div>
    </aside>
  );
};
