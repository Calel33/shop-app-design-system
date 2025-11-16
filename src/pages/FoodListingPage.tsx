import { useState } from 'react';
import { FoodHero } from '@/components/food/FoodHero';
import { FoodQuickInfoRow } from '@/components/food/FoodQuickInfoRow';
import { FoodMenuSection, FoodMenuCategory } from '@/components/food/FoodMenuSection';
import { FoodSidebar } from '@/components/food/FoodSidebar';

const heroImage =
  'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1200&auto=format&fit=crop&q=80';

const quickInfoItems = [
  {
    id: 'rating',
    label: 'Rating',
    value: '4.8/5 · 324 reviews',
    icon: '★',
  },
  {
    id: 'family',
    label: 'Family Owned',
    value: '3rd generation',
    icon: '👨‍👩‍👧‍👦',
  },
  {
    id: 'cuisine',
    label: 'Cuisine',
    value: 'Authentic Italian',
    icon: '🍝',
  },
];

const menuTabs = [
  { id: 'antipasti', label: 'Antipasti' },
  { id: 'pasta', label: 'Pasta' },
  { id: 'pizza', label: 'Pizza' },
  { id: 'dessert', label: 'Dolci' },
  { id: 'kids', label: 'Kids Menu' },
];

const coreCategories: FoodMenuCategory[] = [
  {
    id: 'antipasti',
    title: 'Antipasti',
    description: 'Start your meal with traditional Italian appetizers.',
    items: [
      {
        id: 'antipasto-casa',
        name: 'Antipasto della Casa',
        description:
          'Imported meats, cheeses, roasted peppers, olives, and marinated vegetables.',
        price: '$16.95',
        isFamilyFavorite: true,
      },
      {
        id: 'bruschetta-trio',
        name: 'Bruschetta Trio',
        description:
          'Traditional tomato basil, ricotta honey, and roasted pepper toppings.',
        price: '$12.95',
      },
      {
        id: 'calamari-fritti',
        name: 'Calamari Fritti',
        description:
          'Fresh squid rings lightly breaded and fried, served with marinara sauce.',
        price: '$14.95',
      },
    ],
  },
  {
    id: 'pasta',
    title: 'Pasta',
    description: 'House-made pasta with our signature sauces.',
    items: [
      {
        id: 'carbonara',
        name: 'Spaghetti alla Carbonara',
        description:
          'Fresh spaghetti with pancetta, eggs, Romano cheese, and cracked black pepper.',
        price: '$18.95',
        isFamilyFavorite: true,
      },
      {
        id: 'lasagna-nonna',
        name: 'Lasagna della Nonna',
        description:
          "Layers of pasta, meat sauce, ricotta, mozzarella, and parmesan – Grandma's recipe.",
        price: '$21.95',
      },
      {
        id: 'fettuccine-alfredo',
        name: 'Fettuccine Alfredo',
        description:
          'Fresh fettuccine with rich, creamy parmesan sauce. Add chicken +$5.',
        price: '$17.95',
      },
    ],
  },
];

const kidsCategory: FoodMenuCategory = {
  id: 'kids',
  title: 'Little Bambinos Menu (Ages 12 & Under)',
  description: 'Kid-sized portions of our most-loved dishes.',
  items: [
    {
      id: 'kids-spaghetti',
      name: 'Spaghetti & Meatballs',
      description: 'Kid-sized portion of our famous meatballs with spaghetti and marinara.',
      price: '$8.95',
    },
    {
      id: 'kids-pizza',
      name: 'Cheese Pizza',
      description: 'Personal 8" pizza with mozzarella cheese and tomato sauce.',
      price: '$7.95',
    },
    {
      id: 'kids-chicken',
      name: 'Chicken Fingers',
      description: 'Breaded chicken tenders served with fries and honey mustard.',
      price: '$9.95',
    },
  ],
};

const contact = {
  phone: '(555) 123-4567',
  address: '1234 Little Italy Street, Boston, MA 02109',
  website: 'www.mamarosas.com',
  email: 'info@mamarosas.com',
};

const hours = [
  { day: 'Monday', time: '4:00 PM – 10:00 PM' },
  { day: 'Tuesday', time: '4:00 PM – 10:00 PM' },
  { day: 'Wednesday', time: '4:00 PM – 10:00 PM' },
  { day: 'Thursday', time: '4:00 PM – 10:00 PM' },
  { day: 'Friday', time: '4:00 PM – 11:00 PM' },
  { day: 'Saturday', time: '12:00 PM – 11:00 PM' },
  { day: 'Sunday', time: '12:00 PM – 9:00 PM' },
];

const actions = [
  { id: 'call', label: 'Call for reservations' },
  { id: 'takeout', label: 'Order takeout' },
  { id: 'delivery', label: 'Delivery options' },
  { id: 'directions', label: 'Get directions' },
];

const notes = [
  'Parking: Free valet parking available.',
  'Reservations: Recommended for dinner service.',
  'Large groups: Private dining room seats up to 30 guests.',
  'Payment: Cash and all major credit cards accepted.',
  'Special diets: Gluten-free pasta options available.',
];

export function FoodListingPage() {
  const [activeTab, setActiveTab] = useState<string>('antipasti');

  const categoriesForTab: FoodMenuCategory[] =
    activeTab === 'kids' ? [kidsCategory] : coreCategories;

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <FoodHero
        name="Mama Rosa's Italian Kitchen"
        tagline="Authentic family Italian recipes since 1952."
        imageUrl={heroImage}
      />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)]">
        <section className="space-y-6">
          <FoodQuickInfoRow items={quickInfoItems} />

          <p className="text-sm leading-relaxed text-muted-foreground">
            Welcome to Mama Rosa&apos;s, where every dish tells the story of our Italian heritage. Using
            recipes passed down through three generations, we create authentic cuisine with the freshest
            ingredients and lots of love. Our warm, family-friendly atmosphere makes every guest feel
            like part of the famiglia.
          </p>

          <FoodMenuSection
            title="Our menu"
            subtitle="Made fresh daily with authentic Italian recipes."
            tabs={menuTabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            categories={categoriesForTab}
          />

          <section className="mt-6 space-y-4">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-xs text-emerald-900 dark:border-emerald-500/40 dark:bg-emerald-950/30 dark:text-emerald-50">
              <h3 className="mb-1 text-sm font-semibold">Family meal deals</h3>
              <p>
                Planning a family night in? Ask about our pasta trays, pizza packs, and Sunday dinner
                specials designed to feed 4–6 guests.
              </p>
            </div>
          </section>
        </section>

        <FoodSidebar
          contact={contact}
          hours={hours}
          actions={actions}
          notes={notes}
        />
      </div>
    </div>
  );
}
