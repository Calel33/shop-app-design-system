import React from 'react';
import { cn } from '@/lib/utils';
import { Sun, Moon } from 'lucide-react';

interface ThemePreviewProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * ThemePreview Component
 * 
 * Displays content in both light and dark themes side-by-side for comparison.
 * Useful for showcasing components and ensuring they work well in both themes.
 * 
 * @param children - The content to preview in both themes
 * @param className - Additional CSS classes
 * 
 * @example
 * <ThemePreview>
 *   <Button variant="primary">Click me</Button>
 * </ThemePreview>
 */
export function ThemePreview({ children, className }: ThemePreviewProps) {
  return (
    <div className={cn('grid grid-cols-1 lg:grid-cols-2 gap-4', className)}>
      {/* Light Mode Preview */}
      <div className="border border-border rounded-lg overflow-hidden">
        <div className="bg-muted px-4 py-2 border-b border-border flex items-center gap-2">
          <Sun className="h-4 w-4 text-muted-foreground" />
          <span className="text-small font-medium text-muted-foreground">Light Mode</span>
        </div>
        <div className="p-6" style={{
          backgroundColor: 'hsl(90 33% 97%)',
        }}>
          {children}
        </div>
      </div>

      {/* Dark Mode Preview */}
      <div className="border border-border rounded-lg overflow-hidden">
        <div className="bg-muted px-4 py-2 border-b border-border flex items-center gap-2">
          <Moon className="h-4 w-4 text-muted-foreground" />
          <span className="text-small font-medium text-muted-foreground">Dark Mode</span>
        </div>
        <div className="p-6 dark" style={{
          backgroundColor: 'hsl(0 0% 0%)',
          /* Primary Colors */
          '--primary': '243 75% 74%',
          '--primary-foreground': '0 0% 0%',
          /* Secondary Colors */
          '--secondary': '173 80% 50%',
          '--secondary-foreground': '0 0% 0%',
          /* Accent Colors */
          '--accent': '43 96% 65%',
          '--accent-foreground': '0 0% 0%',
          /* Base Colors */
          '--background': '0 0% 0%',
          '--foreground': '0 0% 100%',
          /* Card Colors */
          '--card': '210 24% 13%',
          '--card-foreground': '0 0% 100%',
          /* Popover Colors */
          '--popover': '210 24% 13%',
          '--popover-foreground': '0 0% 100%',
          /* Muted Colors */
          '--muted': '0 0% 20%',
          '--muted-foreground': '0 0% 80%',
          /* Destructive Colors */
          '--destructive': '0 91% 71%',
          '--destructive-foreground': '0 0% 0%',
          /* Border & Input Colors */
          '--border': '0 0% 33%',
          '--input': '0 0% 100%',
          '--ring': '243 75% 74%',
          /* Chart Colors */
          '--chart-1': '243 75% 74%',
          '--chart-2': '173 80% 50%',
          '--chart-3': '43 96% 65%',
          '--chart-4': '330 81% 70%',
          '--chart-5': '142 76% 58%',
          /* Sidebar Colors */
          '--sidebar': '0 0% 0%',
          '--sidebar-foreground': '0 0% 100%',
          '--sidebar-primary': '243 75% 74%',
          '--sidebar-primary-foreground': '0 0% 0%',
          '--sidebar-accent': '43 96% 65%',
          '--sidebar-accent-foreground': '0 0% 0%',
          '--sidebar-border': '0 0% 100%',
          '--sidebar-ring': '243 75% 74%',
        } as React.CSSProperties}>
          {children}
        </div>
      </div>
    </div>
  );
}

/**
 * ThemeComparisonCard Component
 * 
 * A card wrapper for ThemePreview with a title and description.
 * 
 * @example
 * <ThemeComparisonCard title="Button Component" description="Primary button in both themes">
 *   <Button variant="primary">Click me</Button>
 * </ThemeComparisonCard>
 */
interface ThemeComparisonCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function ThemeComparisonCard({ 
  title, 
  description, 
  children, 
  className 
}: ThemeComparisonCardProps) {
  return (
    <div className={cn('space-y-3', className)}>
      <div>
        <h4 className="text-body font-semibold">{title}</h4>
        {description && (
          <p className="text-small text-muted-foreground">{description}</p>
        )}
      </div>
      <ThemePreview>{children}</ThemePreview>
    </div>
  );
}

