import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { Search } from 'lucide-react';
import { categories, cities } from '@/data/mockData';

export function HeroSearch() {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    console.log('Search:', { keyword, category, location });
  };

  return (
    <div className="bg-gradient-to-br from-primary to-secondary text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-h1 md:text-5xl font-bold mb-4">
          Discover Belize's Best Businesses
        </h1>
        <p className="text-body md:text-xl mb-8 opacity-90">
          Find restaurants, hotels, tours, and services across Belize
        </p>
        
        <div className="bg-white rounded-lg shadow-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <Input
                type="text"
                placeholder="Search for businesses..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="w-full"
              />
            </div>
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
          <Button
            onClick={handleSearch}
            size="lg"
            className="w-full md:w-auto mt-4"
          >
            <Search className="mr-2 h-5 w-5" />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}

