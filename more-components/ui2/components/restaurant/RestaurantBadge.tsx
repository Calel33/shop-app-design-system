import React from 'react';
import { BadgeItem } from './types';

interface RestaurantBadgeProps {
  item: BadgeItem;
}

export const RestaurantBadge: React.FC<RestaurantBadgeProps> = ({ item }) => {
  return (
    <span className="inline-flex items-center gap-2 ring-1 ring-neutral-200 text-xs text-slate-950 bg-neutral-200 rounded-full pt-1.5 pr-3 pb-1.5 pl-3">
      <span className="w-[14px] h-[14px]" dangerouslySetInnerHTML={{ __html: item.icon }} />
      {item.label}
    </span>
  );
};
