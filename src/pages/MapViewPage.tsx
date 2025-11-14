import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { ListingCard } from '@/components/business/ListingCard';
import { mockBusinesses, categories, cities } from '@/data/mockData';
import { Search } from 'lucide-react';

export function MapViewPage() {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');

  const filteredBusinesses = mockBusinesses.filter(business => {
    if (business.status !== 'approved') return false;
    if (keyword && !business.name.toLowerCase().includes(keyword.toLowerCase())) return false;
    if (category && business.category !== category) return false;
    if (location && business.city !== location) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-h1 font-bold mb-2">Map View</h1>
        <p className="text-body text-muted-foreground">
          Explore businesses on an interactive map
        </p>
      </div>

      {/* Search Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              type="text"
              placeholder="Search..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <Select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </Select>
            <Select value={location} onChange={(e) => setLocation(e.target.value)}>
              <option value="">All Locations</option>
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Map and List View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map */}
        <div className="lg:col-span-2">
          <Card className="h-[600px]">
            <CardContent className="h-full p-0">
              <div className="h-full bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-muted-foreground mb-2">Interactive Map with Clustering</p>
                  <p className="text-small text-muted-foreground">
                    Mapbox GL JS integration with {filteredBusinesses.length} pins
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Synchronized List */}
        <div className="lg:col-span-1">
          <Card className="h-[600px] overflow-hidden">
            <CardContent className="h-full p-4 overflow-y-auto">
              <div className="mb-4">
                <p className="text-small font-medium">
                  {filteredBusinesses.length} businesses found
                </p>
              </div>
              <div className="space-y-4">
                {filteredBusinesses.length === 0 ? (
                  <div className="text-center py-12">
                    <Search className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-body text-muted-foreground">
                      No businesses found
                    </p>
                  </div>
                ) : (
                  filteredBusinesses.map((business) => (
                    <ListingCard
                      key={business.id}
                      business={business}
                    />
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

