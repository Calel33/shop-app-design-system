# DeFi Earn Dashboard - Installation Guide

## Prerequisites

- Node.js v20.12.1 or higher
- npm v10.5.0 or higher
- React 18.3.1 or higher
- TypeScript 5.2.2 or higher

## Installation

The DeFi Earn components are part of the project-componets library. No separate installation needed.

```bash
# Install project dependencies
npm install
```

## Quick Start

### 1. Import Components

```tsx
import {
  DeFiHeader,
  DeFiLayout,
  HeroBanner,
  PortfolioCard,
  DepositsSidebar,
  VaultsTable,
  DeFiFooter,
  useWallet,
  useVaultsFilters,
  SAMPLE_VAULTS
} from '@/ui/components/defi-earn';
```

### 2. Basic Usage

```tsx
import React from 'react';
import { DeFiLayout, DeFiHeader, VaultsTable, SAMPLE_VAULTS } from '@/ui/components/defi-earn';

export const MyDeFiPage = () => {
  const navItems = [
    { id: '1', label: 'Markets', href: '#', isActive: false },
    { id: '2', label: 'Earn', href: '#', isActive: true }
  ];

  return (
    <DeFiLayout>
      <DeFiHeader navItems={navItems} />
      <VaultsTable vaults={SAMPLE_VAULTS} />
    </DeFiLayout>
  );
};
```

### 3. Run Dev Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your page.

## Full Example

See `src/DeFiEarnDemo.tsx` for a complete working example with all components integrated.

## Component Setup

### DeFiHeader with Wallet

```tsx
import { DeFiHeader, useWallet } from '@/ui/components/defi-earn';

export const MyHeader = () => {
  const { walletAddress, connect, disconnect } = useWallet();

  return (
    <DeFiHeader
      navItems={[/* your nav items */]}
      walletAddress={walletAddress}
      onWalletConnect={connect}
      onWalletDisconnect={disconnect}
    />
  );
};
```

### VaultsTable with Filtering

```tsx
import { VaultsTable, useVaultsFilters, SAMPLE_VAULTS } from '@/ui/components/defi-earn';

export const MyVaults = () => {
  const { filteredVaults, updateFilters, updateSort } = useVaultsFilters(SAMPLE_VAULTS);

  return (
    <VaultsTable
      vaults={filteredVaults}
      onFilterChange={updateFilters}
      onSortChange={updateSort}
    />
  );
};
```

### PortfolioCard with Custom Data

```tsx
import { PortfolioCard } from '@/ui/components/defi-earn';

export const MyPortfolio = () => {
  const tokenData = {
    symbol: 'USDC',
    name: 'USD Coin',
    icon: 'DollarSign',
    iconGradient: { from: 'blue-400', to: 'cyan-500' },
    balance: '10,000',
    balanceUSD: '$10,000',
    supplyAPY: '+5.2%'
  };

  return (
    <PortfolioCard
      title="My Portfolio"
      description="Earn yield on your stablecoins"
      token={tokenData}
      portfolio={{ amount: '10,000', symbol: 'USDC' }}
      stats={{ supplyAPY: '+5.2%', balance: '$10,000' }}
      onDeposit={() => console.log('Deposit')}
      onTransfer={() => console.log('Transfer')}
    />
  );
};
```

## TypeScript Configuration

The components are fully typed. Import types as needed:

```tsx
import type {
  DeFiHeaderProps,
  Vault,
  VaultFilters,
  VaultSort
} from '@/ui/components/defi-earn';
```

## Styling

All components use Tailwind CSS classes. Ensure your `tailwind.config.js` includes:

```js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
```

## Dark Theme Setup

The components are designed for dark backgrounds. Wrap your app:

```tsx
import { DeFiLayout } from '@/ui/components/defi-earn';

export const App = () => (
  <DeFiLayout>
    {/* Your content */}
  </DeFiLayout>
);
```

Or apply the background manually:

```tsx
<div className="min-h-screen bg-neutral-950 text-neutral-200">
  {/* Your content */}
</div>
```

## Custom Icons

To use custom Lucide icons in TokenIcon or StrategyBadge:

```tsx
import { TokenIcon } from '@/ui/components/defi-earn';

// Icon name must match Lucide React export exactly
<TokenIcon
  icon="Bitcoin"        // Uses lucide-react's Bitcoin icon
  gradient={{ from: 'orange-400', to: 'red-600' }}
/>
```

Available icon names: https://lucide.dev/icons

## Replacing Mock Wallet

The `useWallet` hook is a mock. To integrate real Web3:

```tsx
// hooks/useWeb3Wallet.ts
import { useAccount, useConnect, useDisconnect } from 'wagmi';

export const useWeb3Wallet = () => {
  const { address } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();

  return {
    walletAddress: address ? `${address.slice(0, 6)}...${address.slice(-4)}` : undefined,
    connect: () => connect(/* config */),
    disconnect,
    isConnected: !!address
  };
};
```

Then use it instead of the mock:

```tsx
import { useWeb3Wallet } from './hooks/useWeb3Wallet';
import { DeFiHeader } from '@/ui/components/defi-earn';

export const MyHeader = () => {
  const { walletAddress, connect, disconnect } = useWeb3Wallet();

  return <DeFiHeader walletAddress={walletAddress} onWalletConnect={connect} onWalletDisconnect={disconnect} />;
};
```

## Troubleshooting

### Icons Not Rendering

**Issue**: TokenIcon or StrategyBadge icons don't show  
**Fix**: Ensure icon name matches Lucide React exports exactly (case-sensitive)

```tsx
// ✅ Correct
<TokenIcon icon="Bitcoin" ... />

// ❌ Wrong
<TokenIcon icon="bitcoin" ... />  // lowercase
<TokenIcon icon="BTC" ... />      // not a Lucide icon
```

### Gradient Colors Not Working

**Issue**: Gradient backgrounds don't display  
**Fix**: Use Tailwind color names exactly as documented

```tsx
// ✅ Correct
gradient={{ from: 'amber-400', to: 'orange-600' }}

// ❌ Wrong
gradient={{ from: '#fbbf24', to: '#ea580c' }}  // hex not supported
gradient={{ from: 'amber', to: 'orange' }}     // missing shade
```

### Type Errors

**Issue**: TypeScript errors about missing types  
**Fix**: Import types from the package

```tsx
import type { Vault, VaultFilters } from '@/ui/components/defi-earn';
```

## Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## Next Steps

1. Read [README.md](./README.md) for component API documentation
2. Explore [DeFiEarnDemo.tsx](../../src/DeFiEarnDemo.tsx) for integration examples
3. Check [INTEGRATION_SUMMARY.md](./INTEGRATION_SUMMARY.md) for technical details

## Support

For issues or questions:
1. Check the README.md for usage examples
2. Review src/DeFiEarnDemo.tsx for working code
3. Inspect component source files for implementation details
