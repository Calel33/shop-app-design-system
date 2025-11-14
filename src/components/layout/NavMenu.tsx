import { cn } from '@/lib/utils';

interface NavMenuItem {
  label: string;
  href: string;
  active?: boolean;
}

interface NavMenuProps {
  items: NavMenuItem[];
  className?: string;
  onItemClick?: (item: NavMenuItem) => void;
}

export function NavMenu({ items, className, onItemClick }: NavMenuProps) {
  return (
    <nav className={cn('flex items-center gap-6', className)}>
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={(e) => {
            if (onItemClick) {
              e.preventDefault();
              onItemClick(item);
            }
          }}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            item.active ? 'text-foreground' : 'text-muted-foreground'
          )}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

