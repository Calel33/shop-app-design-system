import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Clock } from 'lucide-react';

export interface BusinessHour {
  day: string;
  time: string;
  isOpen?: boolean;
}

export interface BusinessHoursCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hours: BusinessHour[];
}

export function BusinessHoursCard({ hours, className, ...props }: BusinessHoursCardProps) {
  return (
    <Card className={cn('shadow-sm', className)} {...props}>
      <CardHeader className="flex flex-row items-center gap-2 pb-4">
        <CardTitle className="flex items-center gap-2 text-h4">
          <Clock className="h-5 w-5 text-destructive" aria-hidden="true" />
          <span>Hours</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-small">
        {hours.map((hour) => (
          <div key={hour.day} className="flex items-center justify-between">
            <span className="font-medium text-foreground">{hour.day}</span>
            <span
              className={cn(
                'text-muted-foreground',
                hour.isOpen && 'font-semibold text-emerald-600'
              )}
            >
              {hour.time}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
