import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/ui/Checkbox';

interface BulkActionsBarProps {
  selectedCount: number;
  totalCount: number;
  onSelectAll: (checked: boolean) => void;
  className?: string;
}

export function BulkActionsBar({ 
  selectedCount, 
  totalCount, 
  onSelectAll, 
  className 
}: BulkActionsBarProps) {
  const allSelected = selectedCount === totalCount && totalCount > 0;

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <Checkbox
        checked={allSelected}
        onChange={(e) => onSelectAll(e.target.checked)}
        label={allSelected ? 'Deselect All' : 'Select All'}
      />
      {selectedCount > 0 && (
        <span className="text-small text-muted-foreground">
          {selectedCount} selected
        </span>
      )}
    </div>
  );
}

