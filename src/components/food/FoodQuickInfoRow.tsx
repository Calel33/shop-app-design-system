import React from 'react';
import { InfoStat } from '@/components/ui/InfoStat';

export interface FoodQuickInfoItem {
  id: string;
  label: string;
  value: string;
  icon?: React.ReactNode;
}

interface FoodQuickInfoRowProps {
  items: FoodQuickInfoItem[];
}

export function FoodQuickInfoRow({ items }: FoodQuickInfoRowProps) {
  if (!items.length) return null;

  return (
    <div className="grid gap-4 rounded-xl bg-muted/60 p-6 shadow-sm md:grid-cols-3">
      {items.map((item, index) => (
        <InfoStat
          key={item.id}
          icon={item.icon}
          label={item.label}
          value={item.value}
          tone={index === 0 ? 'accent' : 'primary'}
        />
      ))}
    </div>
  );
}
