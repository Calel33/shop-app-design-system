import React from "react";
import { ChevronRight, Bell, Search } from "lucide-react";

type Props = {
  onSearchFocus?: () => void;
};

export function TopBar({ onSearchFocus }: Props) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "/") {
        e.preventDefault();
        inputRef.current?.focus();
        onSearchFocus?.();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onSearchFocus]);
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:border-slate-800 dark:bg-slate-900/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-8 py-4">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <span>Management</span>
          <ChevronRight className="h-4 w-4" />
          <span className="font-semibold text-slate-900 dark:text-slate-100">Business Directory</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative w-80 max-w-[320px]">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              ref={inputRef}
              placeholder="Search businesses, owners, locations..."
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-9 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            />
          </div>
          <button aria-label="Notifications" className="relative rounded-lg bg-slate-100 p-2 text-slate-600 ring-1 ring-inset ring-slate-200 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700">
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 inline-block h-1.5 w-1.5 rounded-full bg-amber-400" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default TopBar;
