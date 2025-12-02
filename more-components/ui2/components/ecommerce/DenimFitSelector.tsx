import React from 'react';

export interface DenimFit { name: string; href: string }

interface DenimFitSelectorProps {
  fits: DenimFit[];
}

export const DenimFitSelector: React.FC<DenimFitSelectorProps> = ({ fits }) => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="mb-4 text-xl font-semibold">Find your fit</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {fits.map((f) => (
          <a key={f.href} href={f.href} className="rounded-xl border border-zinc-200 bg-white px-4 py-6 text-center text-sm hover:bg-zinc-50">
            {f.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default DenimFitSelector;
