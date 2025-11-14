import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { ListingCard } from '@/components/business/ListingCard';
import { mockBusinesses, categories, cities } from '@/data/mockData';
import { Search, SlidersHorizontal } from 'lucide-react';

export function SearchPage() {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredBusinesses = mockBusinesses.filter(business => {
    if (business.status !== 'approved') return false;
    if (keyword && !business.name.toLowerCase().includes(keyword.toLowerCase()) &&
        !business.description.toLowerCase().includes(keyword.toLowerCase())) return false;
    if (category && business.category !== category) return false;
    if (location && business.city !== location) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-h1 font-bold mb-2">Search Businesses</h1>
        <p className="text-body text-muted-foreground">
          Find the perfect business in Belize
        </p>
      </div>

      {/* Search Bar */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Search for businesses..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="h-5 w-5 mr-2" />
            Filters
          </Button>
        </div>

        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-border">
            <div>
              <label className="block text-small font-medium mb-2">Category</label>
              <Select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </Select>
            </div>
            <div>
              <label className="block text-small font-medium mb-2">Location</label>
              <Select value={location} onChange={(e) => setLocation(e.target.value)}>
                <option value="">All Locations</option>
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </Select>
            </div>
          </div>
        )}
      </div>

      {/* Results */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <p className="text-body text-muted-foreground">
            {filteredBusinesses.length} results found
          </p>
          <Select className="w-48">
            <option value="relevance">Sort by Relevance</option>
            <option value="name">Sort by Name</option>
            <option value="newest">Newest First</option>
          </Select>
        </div>

        {filteredBusinesses.length === 0 ? (
          <div className="text-center py-12">
            <Search className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-h3 font-semibold mb-2">No results found</h3>
            <p className="text-body text-muted-foreground">
              Try adjusting your search or filters
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBusinesses.map((business) => (
              <ListingCard key={business.id} business={business} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

