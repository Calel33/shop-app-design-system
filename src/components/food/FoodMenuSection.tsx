import React from 'react';
import { Tabs, TabList, Tab } from '@/components/ui/Tabs';

export interface FoodMenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  isFamilyFavorite?: boolean;
}

export interface FoodMenuCategory {
  id: string;
  icon?: React.ReactNode;
  title: string;
  description?: string;
  items: FoodMenuItem[];
}

interface FoodMenuSectionProps {
  title: string;
  subtitle?: string;
  tabs: { id: string; label: string }[];
  activeTab: string;
  onTabChange: (id: string) => void;
  categories: FoodMenuCategory[];
}

export function FoodMenuSection({
  title,
  subtitle,
  tabs,
  activeTab,
  onTabChange,
  categories,
}: FoodMenuSectionProps) {
  return (
    <section className="mt-8">
      <header className="border-b border-amber-200 pb-5">
        <h2 className="flex items-center gap-3 font-display text-2xl font-semibold text-primary">
          {title}
        </h2>
        {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
      </header>

      <Tabs value={activeTab} onValueChange={onTabChange} className="mt-4">
        <TabList className="border-b-0 bg-transparent px-1">
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              value={tab.id}
              className="px-3 py-2 text-xs md:text-sm"
            >
              {tab.label}
            </Tab>
          ))}
        </TabList>
        <div className="mt-4 space-y-10">
          {categories.map((category) => (
            <div key={category.id} className="space-y-4">
              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-primary">
                  {category.icon && <span className="text-base">{category.icon}</span>}
                  <span>{category.title}</span>
                </h3>
                {category.description && (
                  <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
                )}
              </div>
              <div className="space-y-4">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="grid gap-3 border-b border-border/60 pb-4 last:border-b-0 md:grid-cols-[minmax(0,1fr)_auto]"
                  >
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <div className="text-sm font-medium text-foreground md:text-base">
                          {item.name}
                        </div>
                        {item.isFamilyFavorite && (
                          <span className="inline-flex items-center rounded-md bg-amber-100 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-amber-800">
                            Family Favorite
                          </span>
                        )}
                      </div>
                      <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">
                        {item.description}
                      </p>
                    </div>
                    <div className="text-sm font-semibold text-primary md:text-base">
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Tabs>
    </section>
  );
}
