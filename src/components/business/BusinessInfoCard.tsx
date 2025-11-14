import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Info } from 'lucide-react';

export interface BusinessInfoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  addressLines: string[];
  phone: string;
  website: string;
  capacity: string;
}

export function BusinessInfoCard({
  addressLines,
  phone,
  website,
  capacity,
  className,
  ...props
}: BusinessInfoCardProps) {
  return (
    <Card className={cn('shadow-sm', className)} {...props}>
      <CardHeader className="flex flex-row items-center gap-2 pb-4">
        <CardTitle className="flex items-center gap-2 text-h4">
          <Info className="h-5 w-5 text-destructive" aria-hidden="true" />
          <span>Gym Information</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-small">
        <InfoRow label="Address">
          {addressLines.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </InfoRow>
        <InfoRow label="Phone">
          <a href={`tel:${phone}`} className="text-destructive underline-offset-2 hover:underline">
            {phone}
          </a>
        </InfoRow>
        <InfoRow label="Website">
          <a
            href={website}
            target="_blank"
            rel="noreferrer"
            className="text-destructive underline-offset-2 hover:underline"
          >
            {website.replace(/^https?:\/\//, '')}
          </a>
        </InfoRow>
        <InfoRow label="Class Capacity">{capacity}</InfoRow>
      </CardContent>
    </Card>
  );
}

interface InfoRowProps {
  label: string;
  children: React.ReactNode;
}

function InfoRow({ label, children }: InfoRowProps) {
  return (
    <div className="border-b border-border/60 pb-3 last:border-b-0 last:pb-0">
      <div className="mb-1 text-xs font-semibold text-foreground">{label}</div>
      <div className="text-small text-muted-foreground">{children}</div>
    </div>
  );
}
