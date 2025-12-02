/**
 * InfoGrid Component for KYRO Portfolio
 * Three-column responsive grid with location, availability, and role cards
 */

import React from 'react';
import { MapPin, Globe2, Cpu } from 'lucide-react';
import { InfoCard } from './InfoCard';

export const InfoGrid: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="mt-6 sm:mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <InfoCard
          icon={<MapPin className="w-5 h-5" />}
          iconColor="text-emerald-400"
          title="Based in Seattle, Washington"
          subtitle="Pacific Northwest • UTC−08:00"
        />
        <InfoCard
          icon={<Globe2 className="w-5 h-5" />}
          iconColor="text-cyan-400"
          title="Available Across Time Zones"
          subtitle="Remote-friendly • Worldwide"
        />
        <InfoCard
          icon={<Cpu className="w-5 h-5" />}
          iconColor="text-indigo-400"
          title="Creative Technologist"
          subtitle="Front‑end engineer + prototyper"
        />
      </div>
    </div>
  );
};

export default InfoGrid;
