import { BizListingLayout } from '@/components/business/BizListingLayout';

export function BizListingPage() {
  return (
    <div className="space-y-4">
      <BizListingLayout lastUpdated={new Date('2024-12-15T00:00:00Z')} version={3} />
    </div>
  );
}
