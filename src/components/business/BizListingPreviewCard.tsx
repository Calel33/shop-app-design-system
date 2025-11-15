import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { cn } from '@/lib/utils';
import { MapPin, Clock, Phone, Globe, Tag } from 'lucide-react';

interface BizListingPreviewCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function BizListingPreviewCard({ className, ...props }: BizListingPreviewCardProps) {
  return (
    <Card className={cn('overflow-hidden rounded-xl shadow-sm', className)} {...props}>
      <div className="flex h-40 items-center justify-center bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <span className="text-5xl font-semibold">CC</span>
      </div>
      <CardContent className="space-y-4 pt-6">
        <div>
          <h3 className="text-h3 font-semibold">The Corner Café</h3>
          <div className="text-small font-medium text-primary">Restaurant &amp; Dining</div>
        </div>
        <p className="text-small text-muted-foreground leading-relaxed">
          A cozy neighborhood café serving freshly roasted coffee, homemade pastries, and light meals.
          Perfect spot for meetings, studying, or catching up with friends in a warm, welcoming atmosphere.
        </p>
        <div className="space-y-2 text-small text-muted-foreground">
          <DetailRow icon={<MapPin className="h-4 w-4" />}>123 Main Street, Downtown</DetailRow>
          <DetailRow icon={<Clock className="h-4 w-4" />}>Open • Closes at 8:00 PM</DetailRow>
          <DetailRow icon={<Phone className="h-4 w-4" />}>(555) 123-4567</DetailRow>
          <DetailRow icon={<Globe className="h-4 w-4" />}>www.cornercafe.com</DetailRow>
          <DetailRow icon={<Tag className="h-4 w-4" />}>coffee, breakfast, wifi, outdoor seating</DetailRow>
        </div>
      </CardContent>
    </Card>
  );
}

interface DetailRowProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

function DetailRow({ icon, children }: DetailRowProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-muted-foreground">{icon}</span>
      <span>{children}</span>
    </div>
  );
}
