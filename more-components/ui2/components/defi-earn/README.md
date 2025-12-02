# DeFi Earn Dashboard Components

A comprehensive set of React components for building DeFi yield aggregation and earning platforms, featuring dark theme glass morphism, gradient token icons, and responsive layouts.

## Overview

The DeFi Earn component library provides production-ready UI components for cryptocurrency yield platforms, including:

- **Sticky Header** with wallet connection
- **Hero Banner** with image overlay
- **Portfolio Card** with token stats and actions
- **Deposits Sidebar** with utilization metrics
- **Vaults Table** with filtering and sorting
- **Footer** with social links
- **Custom Hooks** for wallet and data management

## Components

### DeFiHeader

Sticky navigation header with wallet connection button.

```tsx
<DeFiHeader
  navItems={navItems}
  walletAddress="0x3C...9D2"
  notifications={3}
  onWalletConnect={handleConnect}
  onWalletDisconnect={handleDisconnect}
/>
```

### HeroBanner

Full-width hero section with image and CTAs.

```tsx
<HeroBanner
  title="Unlock the Future of DeFi Earning"
  description="Experience institutional-grade yield strategies"
  image="/hero.jpg"
  imageAlt="DeFi growth"
  ctaPrimary={{ label: 'Start Earning', onClick: handleStart }}
  ctaSecondary={{ label: 'Learn More', href: '/docs' }}
/>
```

### PortfolioCard

Main dashboard card displaying token portfolio with stats.

```tsx
<PortfolioCard
  title="Earn"
  description="Multiply your assets with curated vaults"
  token={tokenData}
  portfolio={{ amount: '18,263,389', symbol: 'USDX' }}
  stats={{ supplyAPY: '+6.98%', balance: '$98,675' }}
  onDeposit={handleDeposit}
  onTransfer={handleTransfer}
/>
```

### DepositsSidebar

Sidebar with net deposits and utilization metrics.

```tsx
<DepositsSidebar
  metrics={{
    netDeposits: '$17,987,451',
    utilization: 72,
    weeklyInflow: '+$2.4m',
    weeklyOutflow: '-$1.1m'
  }}
  onAddFunds={handleAddFunds}
  onWithdraw={handleWithdraw}
/>
```

### VaultsTable

Filterable and sortable table of yield vaults.

```tsx
<VaultsTable
  vaults={vaults}
  onVaultClick={handleVaultClick}
  onFilterChange={handleFilterChange}
  onSortChange={handleSortChange}
/>
```

### TokenIcon

Gradient token icon component.

```tsx
<TokenIcon
  icon="Bitcoin"
  gradient={{ from: 'amber-400', to: 'orange-600' }}
  size="md"
/>
```

### StrategyBadge

Display strategy labels with icons.

```tsx
<StrategyBadge
  label="BULLISH BTC"
  variant="bullish"
  icon="TrendingUp"
/>
```

## Hooks

### useWallet

Mock wallet connection hook (replace with real Web3 provider).

```tsx
const { walletAddress, connect, disconnect, isConnected } = useWallet();
```

### useVaultsFilters

Manage vault filtering and sorting.

```tsx
const { filteredVaults, updateFilters, updateSort } = useVaultsFilters(vaults);
```

## Layout

### DeFiLayout

Main layout wrapper with dark theme background.

```tsx
<DeFiLayout>
  <DeFiHeader {...headerProps} />
  {/* Your content */}
  <DeFiFooter {...footerProps} />
</DeFiLayout>
```

## Features

- ✅ Dark theme with neutral-950 background
- ✅ Glass morphism (`bg-white/5 ring-1 ring-white/10`)
- ✅ Gradient token icons
- ✅ Responsive grid layouts (mobile-first)
- ✅ Sticky header with backdrop blur
- ✅ Animated utilization bar
- ✅ Keyboard navigation support
- ✅ WCAG 2.1 AA accessible
- ✅ TypeScript strict mode
- ✅ Lucide React icons

## Demo

See `src/DeFiEarnDemo.tsx` for a complete integration example with all components and sample data.

## Installation

```bash
npm install
```

## Usage

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

## Design System

All colors, typography, and spacing use design system tokens from `design-system/design.md`:

- Background: `bg-neutral-950`
- Cards: `bg-white/5 ring-1 ring-white/10`
- Accent Gradient: `bg-gradient-to-r from-amber-500 to-orange-600`
- Success: `text-emerald-400`
- Text: `text-neutral-200/300/400`

## Accessibility

- Semantic HTML (`<header>`, `<main>`, `<footer>`, `<nav>`)
- ARIA labels on icon buttons
- Keyboard navigation (Tab, Enter, Space)
- Focus-visible states
- Screen reader support
- Sufficient contrast ratios (WCAG AA)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- React 19+
- TypeScript 5+

## License

See project root LICENSE file.
