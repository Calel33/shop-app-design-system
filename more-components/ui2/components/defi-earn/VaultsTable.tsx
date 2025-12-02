import React from 'react';
import { Filter, SortDesc } from 'lucide-react';
import { VaultsTableProps } from './types';
import { VaultRow } from './VaultRow';

/**
 * VaultsTable - Display and manage vaults list
 * 
 * Features:
 * - Table header with column labels (hidden on mobile)
 * - Filter and sort controls
 * - Individual vault rows
 * - Glass morphism card styling
 * - Responsive grid layout
 */
export const VaultsTable: React.FC<VaultsTableProps> = ({
  vaults,
  onVaultClick,
  onFilterChange,
  onSortChange
}) => {
  return (
    <section className="md:mt-10 mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl sm:text-2xl tracking-tight font-semibold text-white">
          Vaults
        </h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onFilterChange && onFilterChange({})}
            className="inline-flex items-center gap-2 rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2 text-sm text-neutral-200 hover:bg-white/[0.08] transition"
            aria-label="Filter vaults"
          >
            <Filter className="h-4 w-4" aria-hidden="true" />
            <span>Filters</span>
          </button>
          <button
            onClick={() => onSortChange && onSortChange({ field: 'tvl', direction: 'desc' })}
            className="inline-flex items-center gap-2 rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2 text-sm text-neutral-200 hover:bg-white/[0.08] transition"
            aria-label="Sort vaults"
          >
            <SortDesc className="h-4 w-4" aria-hidden="true" />
            <span>Sort</span>
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
        {/* Table header (hidden on mobile) */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-3 text-xs text-neutral-400">
          <div className="col-span-5">Vault</div>
          <div className="col-span-2">TVL</div>
          <div className="col-span-2">APY</div>
          <div className="col-span-3 text-right md:text-left md:pl-4">Strategy</div>
        </div>

        {/* Vault rows */}
        <div className="divide-y divide-white/5">
          {vaults.length === 0 ? (
            <div className="px-4 py-8 text-center text-sm text-neutral-400">
              No vaults available
            </div>
          ) : (
            vaults.map((vault) => (
              <VaultRow key={vault.id} vault={vault} onClick={onVaultClick} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};
