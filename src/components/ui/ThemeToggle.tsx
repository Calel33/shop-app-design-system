import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  variant?: 'switch' | 'button';
  showLabel?: boolean;
  className?: string;
}

/**
 * ThemeToggle Component
 * 
 * A component for toggling between light and dark themes.
 * 
 * @param variant - 'switch' for toggle switch UI, 'button' for button UI (default: 'switch')
 * @param showLabel - Whether to show the theme label text (default: false)
 * @param className - Additional CSS classes
 * 
 * @example
 * // Toggle switch
 * <ThemeToggle variant="switch" />
 * 
 * // Button with label
 * <ThemeToggle variant="button" showLabel />
 */
export function ThemeToggle({ 
  variant = 'switch', 
  showLabel = false,
  className 
}: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  if (variant === 'button') {
    return (
      <button
        onClick={toggleTheme}
        className={cn(
          'inline-flex items-center gap-2 rounded-md px-3 py-2',
          'bg-transparent hover:bg-muted',
          'text-foreground transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          className
        )}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        {isDark ? (
          <>
            <Sun className="h-5 w-5" />
            {showLabel && <span className="text-body">Light Mode</span>}
          </>
        ) : (
          <>
            <Moon className="h-5 w-5" />
            {showLabel && <span className="text-body">Dark Mode</span>}
          </>
        )}
      </button>
    );
  }

  // Switch variant
  return (
    <div className={cn('inline-flex items-center gap-3', className)}>
      {showLabel && (
        <span className="text-body text-muted-foreground">
          {isDark ? 'Dark' : 'Light'}
        </span>
      )}
      <button
        onClick={toggleTheme}
        className={cn(
          'relative inline-flex h-6 w-11 items-center rounded-full',
          'transition-colors duration-200 ease-in-out',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          isDark ? 'bg-primary' : 'bg-muted'
        )}
        role="switch"
        aria-checked={isDark}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        <span
          className={cn(
            'inline-flex h-5 w-5 items-center justify-center rounded-full',
            'bg-background shadow-lg',
            'transition-transform duration-200 ease-in-out',
            isDark ? 'translate-x-6' : 'translate-x-0.5'
          )}
        >
          {isDark ? (
            <Moon className="h-3 w-3 text-primary" />
          ) : (
            <Sun className="h-3 w-3 text-muted-foreground" />
          )}
        </span>
      </button>
    </div>
  );
}

