import { HeroSearch } from '@/components/home/HeroSearch';
import { FeaturedCategories } from '@/components/home/FeaturedCategories';
import { FeaturedBusinesses } from '@/components/home/FeaturedBusinesses';
import { mockBusinesses } from '@/data/mockData';
import { ListingCard } from '@/components/business/ListingCard';

export function HomePage() {
  const latestListings = mockBusinesses
    .filter(b => b.status === 'approved')
    .slice(0, 6);

  return (
    <div>
      <HeroSearch />
      <FeaturedCategories />
      <FeaturedBusinesses />
      
      {/* Latest Listings */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-h2 font-bold mb-8 text-center">Latest Listings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestListings.map((business) => (
              <ListingCard key={business.id} business={business} />
            ))}
          </div>
        </div>
      </section>

      {/* Map Preview Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-h2 font-bold mb-8 text-center">Explore on Map</h2>
          <div className="bg-card rounded-lg border border-border p-8 text-center">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
              <p className="text-muted-foreground">Map Preview (Mapbox integration)</p>
            </div>
            <p className="text-body text-muted-foreground mb-4">
              View all businesses on an interactive map with clustering
            </p>
            <button className="text-primary hover:underline font-medium">
              View Full Map →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

