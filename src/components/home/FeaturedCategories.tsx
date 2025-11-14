import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { categories } from '@/data/mockData';
import { 
  UtensilsCrossed, 
  Hotel, 
  Compass, 
  ShoppingBag, 
  Wrench, 
  Heart, 
  GraduationCap, 
  Music 
} from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  'Restaurants': <UtensilsCrossed className="h-8 w-8" />,
  'Hotels': <Hotel className="h-8 w-8" />,
  'Tours & Activities': <Compass className="h-8 w-8" />,
  'Shopping': <ShoppingBag className="h-8 w-8" />,
  'Services': <Wrench className="h-8 w-8" />,
  'Healthcare': <Heart className="h-8 w-8" />,
  'Education': <GraduationCap className="h-8 w-8" />,
  'Entertainment': <Music className="h-8 w-8" />,
};

export function FeaturedCategories() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-h2 font-bold mb-8 text-center">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Card
              key={category}
              className="cursor-pointer hover:shadow-lg transition-all hover:scale-105"
            >
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <div className="text-primary mb-3">
                  {categoryIcons[category]}
                </div>
                <h3 className="font-semibold text-body">{category}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

