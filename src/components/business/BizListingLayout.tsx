import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { BizListingForm } from '@/components/business/BizListingForm';

interface BizListingLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

export function BizListingLayout({ className, ...props }: BizListingLayoutProps) {
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
              <span>Last updated: Dec 15, 2024 • Version 3</span>
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

        <div className="w-full lg:w-[45%] bg-muted/40">
          {/* Preview column wired in next diff */}
        </div>
      </div>
    </div>
  );
}
