import React from 'react';
import { ChevronRight } from 'lucide-react';
import { VaultRowProps } from './types';
import { TokenIcon } from './TokenIcon';
import { StrategyBadge } from './StrategyBadge';

/**
 * VaultRow - Individual vault display row
 * 
 * Features:
 * - Token icon with gradient
 * - Vault name and symbol
 * - TVL and APY display
 * - Strategy badge
 * - Hover state with navigation hint
 * - Responsive layout (stacks on mobile)
 */
export const VaultRow: React.FC<VaultRowProps> = ({ vault, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(vault.id);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 py-4 hover:bg-white/[0.03] transition cursor-pointer"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View ${vault.name} vault details`}
    >
      {/* Vault info */}
      <div className="md:col-span-5 flex items-center gap-3">
        <TokenIcon icon={vault.icon} gradient={vault.iconGradient} />
        <div>
          <p className="text-sm font-medium text-white">{vault.name}</p>
          <p className="text-xs text-neutral-400">{vault.symbol}</p>
        </div>
      </div>

      {/* TVL */}
      <div className="md:col-span-2">
        <p className="text-sm font-semibold text-white">{vault.tvl}</p>
        <p className="text-xs text-neutral-400">{vault.tvlAmount}</p>
      </div>

      {/* APY */}
      <div className="md:col-span-2">
        <p className="text-sm font-semibold text-emerald-400">{vault.apy}</p>
        <p className="text-xs text-neutral-400">{vault.description || 'Automated'}</p>
      </div>

      {/* Strategy */}
      <div className="md:col-span-3 md:pl-4 flex items-center justify-between md:justify-start">
        <StrategyBadge
          label={vault.strategy.label}
          variant={vault.strategy.variant}
          icon={vault.strategy.icon}
        />
        <ChevronRight className="h-4 w-4 text-neutral-400 md:ml-3" aria-hidden="true" />
      </div>
    </div>
  );
};
