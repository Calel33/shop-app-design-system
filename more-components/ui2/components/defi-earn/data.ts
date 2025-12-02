// Sample data for DeFi Earn Dashboard demo
import { Vault } from './types';

export const SAMPLE_VAULTS: Vault[] = [
  {
    id: '1',
    name: 'Atlas BTC Hedge',
    symbol: 'LBTC',
    icon: 'Bitcoin',
    iconGradient: { from: 'amber-400', to: 'orange-600' },
    tvl: '$2.97m',
    tvlAmount: '24.6 LBTC',
    apy: 'Est 5–22%',
    apyRange: { min: 5, max: 22 },
    strategy: {
      label: 'BULLISH BTC',
      variant: 'bullish',
      icon: 'TrendingUp'
    },
    description: 'Auto-hedged'
  },
  {
    id: '2',
    name: 'Nebula stETH Rebalance',
    symbol: 'wstETH',
    icon: 'CircleDollarSign',
    iconGradient: { from: 'indigo-400', to: 'sky-500' },
    tvl: '$1.62m',
    tvlAmount: '9.1 wstETH',
    apy: 'Est 4–18%',
    strategy: {
      label: 'TRENDING ETH',
      variant: 'trending',
      icon: 'Sparkles'
    },
    description: 'Rehypothecated'
  },
  {
    id: '3',
    name: 'Quark ETH Harvest',
    symbol: 'rswETH',
    icon: 'Leaf',
    iconGradient: { from: 'fuchsia-400', to: 'violet-600' },
    tvl: '$7.92m',
    tvlAmount: '24.6 rswETH',
    apy: 'Est 6–25%',
    strategy: {
      label: 'TRENDING ETH',
      variant: 'trending',
      icon: 'Activity'
    },
    description: 'MEV capture'
  },
  {
    id: '4',
    name: 'Sigma Stable Boost',
    symbol: 'sUSDX',
    icon: 'ShieldCheck',
    iconGradient: { from: 'emerald-400', to: 'teal-500' },
    tvl: '$1.97m',
    tvlAmount: '24.6 sUSDX',
    apy: 'Est 5–12%',
    strategy: {
      label: 'BULLISH BTC',
      variant: 'bullish',
      icon: 'TrendingUp'
    },
    description: 'Delta neutral'
  },
  {
    id: '5',
    name: 'Photon XRP',
    symbol: 'XRP',
    icon: 'Waves',
    iconGradient: { from: 'cyan-400', to: 'sky-500' },
    tvl: '$0.89m',
    tvlAmount: '24.6 XRP',
    apy: 'Est 4–17%',
    strategy: {
      label: 'LIMITED DOWNSIDE',
      variant: 'limited-downside',
      icon: 'Shield'
    },
    description: 'LP range'
  },
  {
    id: '6',
    name: 'Vector Chain',
    symbol: 'VETX',
    icon: 'Link',
    iconGradient: { from: 'violet-500', to: 'purple-700' },
    tvl: '$1.53m',
    tvlAmount: '24.6 VETX',
    apy: 'Est 5–21%',
    strategy: {
      label: 'TRENDING ETH',
      variant: 'trending',
      icon: 'Sparkles'
    },
    description: 'Validator set'
  },
  {
    id: '7',
    name: 'StackerNet',
    symbol: 'STX',
    icon: 'Layers',
    iconGradient: { from: 'slate-400', to: 'slate-600' },
    tvl: '$3.10m',
    tvlAmount: '24.6 STX',
    apy: 'Est 5–26%',
    strategy: {
      label: 'BULLISH BTC',
      variant: 'bullish',
      icon: 'TrendingUp'
    },
    description: 'Ordinals'
  },
  {
    id: '8',
    name: 'RenderFlow',
    symbol: 'RNDRX',
    icon: 'Image',
    iconGradient: { from: 'rose-400', to: 'amber-500' },
    tvl: '$2.62m',
    tvlAmount: '24.6 RNDRX',
    apy: 'Est 5–23%',
    strategy: {
      label: 'LIMITED DOWNSIDE',
      variant: 'limited-downside',
      icon: 'Shield'
    },
    description: 'GPU staking'
  },
  {
    id: '9',
    name: 'Poly Edge',
    symbol: 'POL',
    icon: 'Hexagon',
    iconGradient: { from: 'blue-400', to: 'indigo-600' },
    tvl: '$5.31m',
    tvlAmount: '24.6 POL',
    apy: 'Est 6–24%',
    strategy: {
      label: 'BULLISH BTC',
      variant: 'bullish',
      icon: 'TrendingUp'
    },
    description: 'Liquidity loops'
  },
  {
    id: '10',
    name: 'MemePulse',
    symbol: 'PEPX',
    icon: 'Smile',
    iconGradient: { from: 'lime-400', to: 'green-600' },
    tvl: '$1.99m',
    tvlAmount: '24.6 PEPX',
    apy: 'Est 7–35%',
    strategy: {
      label: 'TRENDING ETH',
      variant: 'trending',
      icon: 'Activity'
    },
    description: 'Vol capture'
  },
  {
    id: '11',
    name: 'Gravity Pi',
    symbol: 'PI',
    icon: 'BadgeDollarSign',
    iconGradient: { from: 'yellow-400', to: 'amber-500' },
    tvl: '$4.01m',
    tvlAmount: '24.6 PI',
    apy: 'Est 5–20%',
    strategy: {
      label: 'TRENDING ETH',
      variant: 'trending',
      icon: 'Activity'
    },
    description: 'Options wheel'
  },
  {
    id: '12',
    name: 'Opti Surge',
    symbol: 'OP',
    icon: 'Zap',
    iconGradient: { from: 'red-400', to: 'rose-600' },
    tvl: '$3.67m',
    tvlAmount: '24.6 OP',
    apy: 'Est 5–19%',
    strategy: {
      label: 'BULLISH BTC',
      variant: 'bullish',
      icon: 'TrendingUp'
    },
    description: 'L2 rebates'
  }
];
