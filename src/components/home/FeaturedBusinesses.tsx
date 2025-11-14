import { ListingCard } from '@/components/business/ListingCard';
import { mockBusinesses } from '@/data/mockData';

export function FeaturedBusinesses() {
  const featured = mockBusinesses.filter(b => b.featured && b.status === 'approved');

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-h2 font-bold mb-8 text-center">Featured Businesses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((business) => (
            <ListingCard key={business.id} business={business} />
          ))}
        </div>
      </div>
    </section>
  );
}

