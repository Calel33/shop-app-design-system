import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Avatar } from '@/components/ui/Avatar';
import { FilterChip, FilterChipGroup } from '@/components/ui/FilterChip';
import { Pagination } from '@/components/ui/Pagination';
import { NavMenu } from '@/components/layout/NavMenu';
import { Search, Bell } from 'lucide-react';

// Mock restaurant data
const restaurants = [
  {
    id: 1,
    name: 'The Cozy Corner Cafe',
    description: 'Casual dining with a focus on comfort food.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400',
  },
  {
    id: 2,
    name: 'Spice Route',
    description: 'Authentic Indian cuisine with a modern twist.',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400',
  },
  {
    id: 3,
    name: 'The Italian Table',
    description: 'Classic Italian dishes in a warm atmosphere.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400',
  },
  {
    id: 4,
    name: 'The Burger Joint',
    description: 'Gourmet burgers and craft beers.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
  },
  {
    id: 5,
    name: 'The Sushi Spot',
    description: 'Fresh and innovative sushi creations.',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400',
  },
  {
    id: 6,
    name: 'The Vegan Vine',
    description: 'Plant-based dining with a focus on organic ingredients.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400',
  },
];

const navItems = [
  { label: 'Home', href: '#', active: false },
  { label: 'Categories', href: '#', active: false },
  { label: 'Deals', href: '#', active: false },
  { label: 'Events', href: '#', active: false },
];

export function RestaurantsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background px-10 py-3">
        <div className="flex items-center justify-between">
          {/* Left: Logo + Navigation */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="size-4 text-foreground">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h2 className="text-lg font-bold">LocalBiz</h2>
            </div>

            {/* Navigation */}
            <NavMenu items={navItems} />
          </div>

          {/* Right: Search + Notifications + Avatar */}
          <div className="flex items-center gap-4">
            <Input
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              leftIcon={<Search className="h-5 w-5" />}
              className="w-64"
            />
            <Button variant="ghost" iconOnly>
              <Bell className="h-5 w-5" />
            </Button>
            <Avatar
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
              alt="User"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-[960px] px-4 py-5">
        {/* Page Header */}
        <div className="mb-6 p-4">
          <h1 className="text-h1 font-bold mb-2">Restaurants</h1>
          <p className="text-muted-foreground">
            Explore a variety of dining options in your area, from cozy cafes to upscale restaurants.
          </p>
        </div>

        {/* Filters */}
        <FilterChipGroup className="mb-6 px-4">
          <FilterChip label="Price" showDropdown />
          <FilterChip label="Cuisine" showDropdown />
          <FilterChip label="Rating" showDropdown />
          <FilterChip label="Open Now" showDropdown />
        </FilterChipGroup>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4 px-4 mb-8">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="flex flex-col gap-3">
              <div
                className="w-full aspect-square bg-cover bg-center bg-no-repeat rounded-xl"
                style={{ backgroundImage: `url(${restaurant.image})` }}
              />
              <div>
                <h3 className="text-base font-medium mb-1">{restaurant.name}</h3>
                <p className="text-small text-muted-foreground">{restaurant.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={5}
          onPageChange={setCurrentPage}
        />
      </main>
    </div>
  );
}

