import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Dumbbell } from 'lucide-react';

export interface EquipmentFeature {
  icon: React.ReactNode;
  label: string;
}

export interface EquipmentFeaturesCardProps extends React.HTMLAttributes<HTMLDivElement> {
  features: EquipmentFeature[];
}

export function EquipmentFeaturesCard({ features, className, ...props }: EquipmentFeaturesCardProps) {
  return (
    <Card className={cn('shadow-sm', className)} {...props}>
      <CardHeader className="flex flex-row items-center gap-2 pb-4">
        <CardTitle className="flex items-center gap-2 text-h4">
          <Dumbbell className="h-5 w-5 text-destructive" aria-hidden="true" />
          <span>Equipment &amp; Features</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2 text-small">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="flex items-center gap-2 rounded-md bg-muted px-3 py-2"
            >
              <span className="text-destructive" aria-hidden="true">{feature.icon}</span>
              <span className="text-foreground">{feature.label}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
