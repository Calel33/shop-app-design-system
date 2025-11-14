import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { CalendarDays } from 'lucide-react';

export interface GymClass {
  time: string;
  name: string;
  spots: string;
}

export interface TodayClassesCardProps extends React.HTMLAttributes<HTMLDivElement> {
  classes: GymClass[];
}

export function TodayClassesCard({ classes, className, ...props }: TodayClassesCardProps) {
  return (
    <Card className={cn('shadow-sm', className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-between gap-2 pb-4">
        <CardTitle className="flex items-center gap-2 text-h4">
          <CalendarDays className="h-5 w-5 text-destructive" aria-hidden="true" />
          <span>Today's Classes</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-2">
          {classes.map((gymClass) => (
            <div
              key={`${gymClass.time}-${gymClass.name}`}
              className="flex items-center justify-between rounded-lg bg-muted px-3 py-2 text-small"
            >
              <div className="font-semibold text-destructive">{gymClass.time}</div>
              <div className="mx-3 flex-1 text-foreground">{gymClass.name}</div>
              <div className="text-xs text-muted-foreground">{gymClass.spots}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
