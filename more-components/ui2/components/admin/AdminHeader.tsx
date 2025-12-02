import { Bell, Plus, Search } from "lucide-react";
import { FormEvent } from "react";

interface AdminHeaderProps {
  onSearch?: (q: string) => void;
  onAdd?: () => void;
}

export default function AdminHeader({ onSearch, onAdd }: AdminHeaderProps) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const q = String(data.get("q") || "");
    onSearch?.(q);
  }

  return (
    <header className="sticky top-0 z-10 bg-background/80 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-3 flex items-center gap-4">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          Home / Admin / Dashboard
        </nav>
        <form onSubmit={handleSubmit} className="ml-auto relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            name="q"
            type="search"
            placeholder="Search businesses, owners, or IDs"
            className="w-full rounded-md border border-border bg-muted/50 pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
            aria-label="Search"
          />
        </form>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm hover:bg-muted transition"
            aria-label="Alerts"
          >
            <Bell className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={onAdd}
            className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-3 py-2 text-sm hover:opacity-90 transition"
          >
            <Plus className="h-4 w-4" /> Add Business
          </button>
        </div>
      </div>
    </header>
  );
}
