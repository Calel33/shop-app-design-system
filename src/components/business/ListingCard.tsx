import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Business } from '@/data/mockData';
import { MapPin, Phone, Clock } from 'lucide-react';

interface ListingCardProps {
  business: Business;
  onClick?: () => void;
}

export function ListingCard({ business, onClick }: ListingCardProps) {
  return (
    <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={onClick}>
      {business.images.length > 0 && (
        <div className="aspect-video w-full overflow-hidden rounded-t-lg">
          <img
            src={business.images[0]}
            alt={business.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle>{business.name}</CardTitle>
            <CardDescription>{business.category}</CardDescription>
          </div>
          {business.featured && (
            <Badge variant="secondary">Featured</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-small text-muted-foreground mb-4 line-clamp-2">
          {business.description}
        </p>
        <div className="space-y-2 text-small">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{business.address}, {business.city}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>{business.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{business.hours}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {business.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-muted text-muted-foreground rounded text-small"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

