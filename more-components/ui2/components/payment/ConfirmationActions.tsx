import React, { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import type { ConfirmationActionsProps } from './types';

/**
 * ConfirmationActions - Action buttons for payment confirmation
 * 
 * Provides primary (download receipt) and secondary (dismiss) action buttons.
 * Handles loading states and supports async download operations.
 * 
 * @example
 * ```tsx
 * <ConfirmationActions
 *   onDownload={handleDownload}
 *   onDismiss={handleDismiss}
 *   downloadLabel="Download Receipt"
 *   dismissLabel="Dismiss"
 * />
 * ```
 */
export const ConfirmationActions: React.FC<ConfirmationActionsProps> = ({
  onDownload,
  onDismiss,
  isDownloading = false,
  downloadLabel = 'Download Receipt',
  dismissLabel = 'Dismiss',
  className = '',
}) => {
  const [internalLoading, setInternalLoading] = useState(false);

  const handleDownload = async () => {
    if (!onDownload || isDownloading || internalLoading) return;

    setInternalLoading(true);
    try {
      await Promise.resolve(onDownload());
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setInternalLoading(false);
    }
  };

  const loading = isDownloading || internalLoading;

  return (
    <div className={`w-full space-y-2 ${className}`}>
      {onDownload && (
        <button
          onClick={handleDownload}
          disabled={loading}
          className={`
            w-full py-2 px-4
            bg-secondary hover:bg-secondary/90
            disabled:bg-secondary/60 disabled:cursor-not-allowed
            text-secondary-foreground font-medium rounded-md
            transition-colors duration-200
            flex items-center justify-center gap-2
            focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background
          `}
          aria-label={loading ? 'Downloading receipt' : downloadLabel}
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Downloading...</span>
            </>
          ) : (
            <>
              <Download className="w-4 h-4" />
              <span>{downloadLabel}</span>
            </>
          )}
        </button>
      )}

      <button
        onClick={onDismiss}
        disabled={loading}
        className={`
          w-full py-2 px-4
          bg-muted hover:bg-muted/80
          disabled:bg-muted/60 disabled:cursor-not-allowed
          text-foreground font-medium rounded-md
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-muted-foreground/40 focus:ring-offset-2 focus:ring-offset-background
        `}
        aria-label={dismissLabel}
      >
        {dismissLabel}
      </button>
    </div>
  );
};
