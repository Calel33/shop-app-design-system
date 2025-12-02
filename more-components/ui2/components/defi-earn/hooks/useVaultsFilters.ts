import { useState, useMemo, useCallback } from 'react';
import { Vault, VaultFilters, VaultSort } from '../types';

/**
 * useVaultsFilters - Manage vault filtering and sorting
 */
export const useVaultsFilters = (vaults: Vault[]) => {
  const [filters, setFilters] = useState<VaultFilters>({});
  const [sort, setSort] = useState<VaultSort>({ field: 'tvl', direction: 'desc' });

  const filteredAndSortedVaults = useMemo(() => {
    let result = [...vaults];

    // Apply filters
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      result = result.filter(
        v => v.name.toLowerCase().includes(query) || v.symbol.toLowerCase().includes(query)
      );
    }

    if (filters.strategy && filters.strategy.length > 0) {
      result = result.filter(v => filters.strategy!.includes(v.strategy.variant));
    }

    if (filters.apyMin !== undefined) {
      result = result.filter(v => {
        const minApy = v.apyRange?.min || 0;
        return minApy >= filters.apyMin!;
      });
    }

    // Apply sorting
    result.sort((a, b) => {
      let aValue: number | string;
      let bValue: number | string;

      switch (sort.field) {
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'tvl':
          // Parse TVL string (e.g., "$2.97m" -> 2970000)
          aValue = parseFloat(a.tvl.replace(/[$,m]/g, '')) * 1000000;
          bValue = parseFloat(b.tvl.replace(/[$,m]/g, '')) * 1000000;
          break;
        case 'apy':
          aValue = a.apyRange?.max || 0;
          bValue = b.apyRange?.max || 0;
          break;
        default:
          return 0;
      }

      if (aValue < bValue) return sort.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sort.direction === 'asc' ? 1 : -1;
      return 0;
    });

    return result;
  }, [vaults, filters, sort]);

  const updateFilters = useCallback((newFilters: Partial<VaultFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  }, []);

  const updateSort = useCallback((newSort: VaultSort) => {
    setSort(newSort);
  }, []);

  return {
    filters,
    sort,
    filteredVaults: filteredAndSortedVaults,
    updateFilters,
    updateSort
  };
};
