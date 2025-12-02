/**
 * Networks Section Component
 * Displays supported blockchain networks in a grid layout
 * @module NetworksSection
 */

'use client';

import React from 'react';
import type { NetworksSectionProps } from '../types/web3.types';

export const NetworksSection: React.FC<NetworksSectionProps> = ({
  title,
  description,
  networks
}) => {
  return (
    <section className="py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl tracking-tight mb-4 font-geist font-light">
            {title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-geist">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
          {networks.map((network, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto bg-white/5 rounded-2xl flex items-center justify-center mb-2 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200">
                <span className="font-semibold text-sm tracking-tight font-geist">
                  {network.symbol}
                </span>
              </div>
              <span className="text-xs text-gray-500 font-geist">
                {network.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

NetworksSection.displayName = 'NetworksSection';

export default NetworksSection;
