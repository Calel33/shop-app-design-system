import React from 'react';
import { Rocket, Play, Download, ArrowLeftRight } from 'lucide-react';
import { PortfolioCardProps } from './types';
import { TokenIcon } from './TokenIcon';

/**
 * PortfolioCard - Main portfolio display with token stats and actions
 * 
 * Features:
 * - Token information with gradient icon
 * - Portfolio balance display
 * - Supply APY and balance stats
 * - Deposit and transfer actions
 * - Optional decorative image
 * - Glass morphism card styling
 */
export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  token,
  portfolio,
  stats,
  onDeposit,
  onTransfer,
  image
}) => {
  return (
    <section className="lg:col-span-2 overflow-hidden bg-white/5 ring-white/10 ring-1 rounded-2xl">
      <div className="relative flex flex-col md:flex-row gap-6 sm:p-8 pt-6 pr-6 pb-6 pl-6 items-stretch">
        {/* Left content */}
        <div className="flex-1">
          <h1 className="mt-4 text-3xl sm:text-4xl tracking-tight font-semibold text-white">
            {title}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-neutral-300">
            {description}
          </p>
          <div className="mt-5 flex items-center gap-3">
            <button
              onClick={onDeposit}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 text-neutral-950 px-4 py-2.5 text-sm font-medium hover:opacity-95 transition"
            >
              <Rocket className="h-4 w-4" aria-hidden="true" />
              <span>Start earning</span>
            </button>
            <button
              className="inline-flex items-center gap-2 rounded-lg bg-white/5 ring-1 ring-white/10 px-4 py-2.5 text-sm text-neutral-200 hover:bg-white/[0.08] transition"
            >
              <Play className="h-4 w-4" aria-hidden="true" />
              <span>Demo</span>
            </button>
          </div>
        </div>

        {/* Right card - Token portfolio */}
        <div className="relative md:w-[320px] lg:w-[380px] shrink-0">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-500/10 via-orange-600/10 to-fuchsia-500/10 blur-xl" aria-hidden="true" />
          <div className="relative rounded-xl overflow-hidden ring-1 ring-white/10 bg-neutral-900">
            {image && (
              <img
                src={image}
                alt="Token visualization"
                className="sm:h-48 md:h-56 w-full h-44 object-cover grayscale"
              />
            )}
            <div className="p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TokenIcon icon={token.icon} gradient={token.iconGradient} />
                  <div>
                    <p className="text-sm text-neutral-300">{token.symbol}</p>
                    <p className="text-xs text-neutral-400">{token.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-neutral-400">Portfolio</p>
                  <p className="text-base font-semibold tracking-tight text-white">
                    {portfolio.amount} {portfolio.symbol}
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
                  <p className="text-[11px] text-neutral-400">Supply APY</p>
                  <p className="text-sm font-semibold text-emerald-400">{stats.supplyAPY}</p>
                </div>
                <div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
                  <p className="text-[11px] text-neutral-400">Balance</p>
                  <p className="text-sm font-semibold text-white">{stats.balance}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <button
                  onClick={onDeposit}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 text-neutral-950 px-3 py-2 text-sm font-medium hover:opacity-95 transition"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>Deposit</span>
                </button>
                <button
                  onClick={onTransfer}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2 text-sm text-neutral-200 hover:bg-white/[0.08] transition"
                >
                  <ArrowLeftRight className="h-4 w-4" aria-hidden="true" />
                  <span>Transfer</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
