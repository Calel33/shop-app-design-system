import React, { useState } from 'react';
import { ApparelHeader } from './ApparelHeader';
import { SplitHero } from './SplitHero';
import { ProductGrid, SimpleProduct } from './ProductGrid';
import { DenimFitSelector, DenimFit } from './DenimFitSelector';
import { SearchOverlay } from './SearchOverlay';
import type { ApparelHeroProps } from '../types/ecommerce.types';

interface ApparelLandingProps {
  announcement?: string;
  headerPrimary: { label: string; href: string }[];
  headerSecondary: { label: string; href: string }[];
  hero: ApparelHeroProps;
  newArrivals: SimpleProduct[];
  craftsmanship: { image: string; title: string; description: string; cta: { label: string; href: string } };
  fits: DenimFit[];
}

export const ApparelLanding: React.FC<ApparelLandingProps> = ({ announcement, headerPrimary, headerSecondary, hero, newArrivals, craftsmanship, fits }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <div className="min-h-screen bg-zinc-50">
      <ApparelHeader announcement={announcement} primary={headerPrimary} secondary={headerSecondary} onSearchClick={() => setSearchOpen(true)} />

      <SplitHero {...hero} />

      <ProductGrid title="New arrivals" products={newArrivals} />

      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 px-4 py-12 md:grid-cols-2">
        <img src={craftsmanship.image} alt="" className="h-72 w-full rounded-2xl object-cover" />
        <div>
          <h3 className="text-xl font-semibold">{craftsmanship.title}</h3>
          <p className="mt-2 text-sm text-zinc-600">{craftsmanship.description}</p>
          <a href={craftsmanship.cta.href} className="mt-4 inline-flex rounded-full border px-3 py-1.5 text-sm">{craftsmanship.cta.label}</a>
        </div>
      </section>

      <DenimFitSelector fits={fits} />

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
};

export default ApparelLanding;
