import React from 'react';
import { FeatureCard } from './FeatureCard';
import type { FeaturesGridLayoutProps, FeatureCardProps } from '../types/feature-grid.types';

const gridBase = 'grid gap-6';

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

// Arrange items into a bento pattern similar to the HTML reference:
// Row1: [1/4, 2/4 (highlight), 1/4]
// Row2: [1/4, 1/4, 1/4, 1/4]
function BentoGrid({ features }: { features: FeatureCardProps[] }) {
  const firstRow = features.slice(0, 4);
  const rest = features.slice(4);
  const rows = chunk(rest, 4);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {firstRow[0] && (
          <div className="md:col-span-1">
            <FeatureCard {...firstRow[0]} />
          </div>
        )}
        {firstRow[1] && (
          <div className="md:col-span-2">
            <FeatureCard {...firstRow[1]} variant={firstRow[1].variant ?? 'highlight'} />
          </div>
        )}
        {firstRow[2] && (
          <div className="md:col-span-1">
            <FeatureCard {...firstRow[2]} />
          </div>
        )}
        {/* If a 4th exists in firstRow, place it below as a start for uniformity on small screens */}
        {firstRow[3] && (
          <div className="md:hidden">
            <FeatureCard {...firstRow[3]} />
          </div>
        )}
      </div>

      {/* Remaining rows as 4-equal columns */}
      {rows.map((row, i) => (
        <div key={i} className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {row.map((f, idx) => (
            <FeatureCard key={idx} {...f} />
          ))}
        </div>
      ))}
    </div>
  );
}

function UniformGrid({ features, columns = 4 }: { features: FeatureCardProps[]; columns?: 3 | 4 }) {
  const gridCols = columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4';
  return (
    <div className={`${gridBase} grid-cols-1 ${gridCols}`}>
      {features.map((f, i) => (
        <FeatureCard key={i} {...f} />
      ))}
    </div>
  );
}

export const FeaturesGridLayout: React.FC<FeaturesGridLayoutProps> = ({
  features,
  columns = 4,
  gridStyle = 'bento',
  className = '',
}) => {
  return (
    <section className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {gridStyle === 'bento' ? (
        <BentoGrid features={features} />
      ) : (
        <UniformGrid features={features} columns={columns} />
      )}
    </section>
  );
};

export default FeaturesGridLayout;
