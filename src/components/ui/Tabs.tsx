import React, { createContext, useContext } from 'react';
import { cn } from '@/lib/utils';

interface TabsContextValue {
  value: string;
  onValueChange: (value: string) => void;
}

const TabsContext = createContext<TabsContextValue | undefined>(undefined);

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
}

interface TabListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

export function Tabs({ value, onValueChange, className, children, ...props }: TabsProps) {
  return (
    <TabsContext.Provider value={{ value, onValueChange }}>
      <div className={cn('flex flex-col', className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function TabList({ className, children, ...props }: TabListProps) {
  return (
    <div
      className={cn(
        'flex border-b border-border bg-muted/60 rounded-t-lg',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function Tab({ value, className, children, ...props }: TabProps) {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error('Tab must be used within Tabs');
  }

  const isActive = context.value === value;

  return (
    <button
      type="button"
      onClick={() => context.onValueChange(value)}
      className={cn(
        'px-4 py-3 text-small font-medium border-b-2 -mb-px transition-colors whitespace-nowrap',
        isActive
          ? 'border-primary text-primary bg-background'
          : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-muted',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
