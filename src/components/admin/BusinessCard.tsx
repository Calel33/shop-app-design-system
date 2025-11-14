import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Checkbox } from '@/components/ui/Checkbox';
import { MetaItem } from '@/components/ui/MetaItem';
import { Calendar, User, MapPin, Check, Edit, X } from 'lucide-react';

export interface BusinessCardData {
  id: string;
  name: string;
  category: string;
  address: string;
  imageUrl: string;
  ownerName: string;
  ownerEmail: string;
  submittedDate: string;
  priority: 'high' | 'normal';
}

interface BusinessCardProps {
  business: BusinessCardData;
  isSelected: boolean;
  onSelect: (id: string, selected: boolean) => void;
  onApprove: (id: string) => void;
  onRequestChanges: (id: string) => void;
  onReject: (id: string) => void;
  onViewDetails: (id: string) => void;
  className?: string;
}

export function BusinessCard({
  business,
  isSelected,
  onSelect,
  onApprove,
  onRequestChanges,
  onReject,
  onViewDetails,
  className,
}: BusinessCardProps) {
  return (
    <Card 
      className={cn(
        'overflow-hidden transition-all hover:shadow-md hover:-translate-y-0.5',
        className
      )}
    >
      {/* Header with Image and Info */}
      <div className="p-4 flex items-start gap-3 relative">
        <Checkbox
          checked={isSelected}
          onChange={(e) => onSelect(business.id, e.target.checked)}
          className="mt-0.5"
        />
        
        <img
          src={business.imageUrl}
          alt={business.name}
          className="w-16 h-16 rounded-lg object-cover bg-muted flex-shrink-0"
        />

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-foreground truncate">
            {business.name}
          </h3>
          <p className="text-small text-muted-foreground mb-2">
            {business.category}
          </p>
          <div className="flex flex-wrap gap-3">
            <MetaItem icon={<Calendar className="h-3.5 w-3.5" />}>
              {business.submittedDate}
            </MetaItem>
            <MetaItem icon={<User className="h-3.5 w-3.5" />}>
              {business.ownerName}
            </MetaItem>
          </div>
        </div>

        {/* Priority Badge */}
        <Badge 
          variant={business.priority === 'high' ? 'warning' : 'info'}
          className="absolute top-3 right-3 text-xs uppercase"
        >
          {business.priority === 'high' ? 'High Priority' : 'Normal'}
        </Badge>
      </div>

      {/* Details */}
      <div className="px-4 pb-4 space-y-3">
        <MetaItem icon={<MapPin className="h-4 w-4" />}>
          {business.address}
        </MetaItem>

        {/* Owner Info */}
        <div className="bg-muted/50 rounded-lg p-3">
          <p className="font-medium text-small text-foreground">
            {business.ownerName}
          </p>
          <p className="text-xs text-muted-foreground">
            {business.ownerEmail}
          </p>
        </div>

        {/* View Details Link */}
        <button
          onClick={() => onViewDetails(business.id)}
          className="text-small text-primary hover:underline"
        >
          View Full Details
        </button>
      </div>

      {/* Action Buttons */}
      <div className="px-4 pb-4 flex gap-2">
        <Button
          variant="success"
          size="sm"
          onClick={() => onApprove(business.id)}
          className="flex-1"
        >
          <Check className="h-4 w-4 mr-1" />
          Approve
        </Button>
        <Button
          variant="warning"
          size="sm"
          onClick={() => onRequestChanges(business.id)}
          className="flex-1"
        >
          <Edit className="h-4 w-4 mr-1" />
          Changes
        </Button>
        <Button
          variant="danger"
          size="sm"
          onClick={() => onReject(business.id)}
          className="flex-1"
        >
          <X className="h-4 w-4 mr-1" />
          Reject
        </Button>
      </div>
    </Card>
  );
}

