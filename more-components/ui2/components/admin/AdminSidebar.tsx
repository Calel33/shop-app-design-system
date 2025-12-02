import type { SidebarItem } from "@/ui/components/types/admin.types";
import { Fragment } from "react";

interface AdminSidebarProps {
  items: SidebarItem[];
  activeId?: string;
  onNavigate?: (id: string) => void;
}

function cx(...cls: Array<string | false | undefined>) {
  return cls.filter(Boolean).join(" ");
}

export default function AdminSidebar({ items, activeId, onNavigate }: AdminSidebarProps) {
  const sections: Array<SidebarItem["section"]> = ["Management", "Moderation", "Insights"];
  return (
    <aside
      className="w-80 shrink-0 bg-gradient-to-b from-background to-muted text-foreground border-r border-border min-h-screen"
      aria-label="Admin navigation sidebar"
    >
      <div className="px-6 py-5 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-gradient-to-r from-primary to-accent" aria-hidden />
          <div>
            <p className="text-sm text-muted-foreground">Admin</p>
            <h1 className="text-lg font-semibold">Directory Control</h1>
          </div>
        </div>
      </div>
      <nav className="p-4 space-y-6">
        {sections.map((section) => (
          <Fragment key={section}>
            <p className="px-2 text-xs font-medium text-muted-foreground">{section}</p>
            <ul className="mt-2 space-y-1">
              {items
                .filter((i) => i.section === section)
                .map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => onNavigate?.(item.id)}
                      className={cx(
                        "w-full flex items-center justify-between gap-3 rounded-md px-3 py-2 text-left transition",
                        "hover:bg-muted",
                        activeId === item.id && "bg-muted border border-primary"
                      )}
                      aria-current={activeId === item.id ? "page" : undefined}
                    >
                      <span className="flex items-center gap-2">
                        <item.icon className="h-4 w-4 text-foreground" />
                        <span className="text-sm">{item.label}</span>
                      </span>
                      {typeof item.badgeCount === "number" && (
                        <span className="inline-flex items-center rounded-full bg-primary/10 text-primary text-xs px-2 py-0.5">
                          {item.badgeCount}
                        </span>
                      )}
                    </button>
                  </li>
                ))}
            </ul>
          </Fragment>
        ))}
      </nav>
    </aside>
  );
}
