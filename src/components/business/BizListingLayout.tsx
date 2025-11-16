import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { BizListingForm } from '@/components/business/BizListingForm';
import { StatusCard } from '@/components/ui/StatusCard';
import { BizListingPreviewCard } from '@/components/business/BizListingPreviewCard';
import { Clock3 } from 'lucide-react';

interface BizListingLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  lastUpdated?: Date;
  version?: number;
}

export function BizListingLayout({ className, lastUpdated, version, ...props }: BizListingLayoutProps) {
  const displayDate = (lastUpdated ?? new Date()).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  const displayVersion = version ?? 1;

  return (
    <div
      className={cn(
        'flex h-full min-h-[calc(100vh-4rem)] flex-col rounded-xl border border-border bg-card shadow-sm',
        className
      )}
      {...props}
    >
      <header className="flex items-center justify-between border-b border-border px-6 py-4">
        <div>
          <h1 className="text-h2 font-semibold">Manage Your Listing</h1>
          <p className="text-small text-muted-foreground">
            Update how your business appears in the Belize Directory.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="muted" size="md">
            Preview Live
          </Button>
          <Button variant="primary" size="md">
            Save Changes
          </Button>
        </div>
      </header>

      <div className="flex flex-1 flex-col lg:flex-row overflow-hidden">
        <div className="w-full lg:w-[55%] border-b lg:border-b-0 lg:border-r border-border flex flex-col">
          <BizListingForm className="h-full" />

          <div className="flex items-center justify-between border-t border-border px-6 py-3 text-small text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>
                Last updated: {displayDate} • Version {displayVersion}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="muted" size="sm">
                Save Draft
              </Button>
              <Button variant="success" size="sm">
                Submit for Approval
              </Button>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[45%] border-t lg:border-t-0 lg:border-l border-border bg-muted/40">
          <div className="flex h-full flex-col gap-4 p-6 overflow-y-auto">
            <div>
              <h2 className="text-h4 font-semibold">Live Preview</h2>
              <p className="text-small text-muted-foreground">
                This is how customers will see your listing in the directory.
              </p>
            </div>

            <StatusCard
              variant="warning"
              title="Pending Approval"
              icon={<Clock3 className="h-4 w-4" aria-hidden="true" />}
            >
              Your changes are being reviewed by our team. You&apos;ll be notified once they&apos;re live.
            </StatusCard>

            <BizListingPreviewCard />
          </div>
        </div>
      </div>
    </div>
  );
}
