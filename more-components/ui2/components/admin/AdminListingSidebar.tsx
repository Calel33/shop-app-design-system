import { Fragment } from "react";
import type { SidebarItem } from "../types/admin.types";

interface AdminListingSidebarProps {
  items: SidebarItem[];
  activeItemId: string;
  onSelect?: (item: SidebarItem) => void;
}

function cx(...cls: Array<string | false | undefined>) {
  return cls.filter(Boolean).join(" ");
}

const AdminListingSidebar = ({ items, activeItemId, onSelect }: AdminListingSidebarProps) => {
  const sections = items.reduce<Record<SidebarItem["section"], SidebarItem[]>>(
    (acc, item) => {
      acc[item.section] = acc[item.section] ? [...acc[item.section], item] : [item];
      return acc;
    },
    {
      Management: [],
      Moderation: [],
      Insights: [],
    }
  );

  return (
    <nav className="flex h-full flex-col gap-8 px-6 py-8">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Skyline Admin
        </span>
        <p className="mt-4 text-lg font-semibold text-slate-900">Directory Controls</p>
      </div>
      <div className="flex-1 space-y-8">
        {(Object.keys(sections) as Array<SidebarItem["section"]>).map((section) => {
          const sectionItems = sections[section];
          if (!sectionItems.length) {
            return null;
          }

          return (
            <Fragment key={section}>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  {section}
                </span>
                <ul className="mt-3 space-y-1">
                  {sectionItems.map((item) => {
                    const active = item.id === activeItemId;
                    return (
                      <li key={item.id}>
                        <button
                          type="button"
                          onClick={() => onSelect?.(item)}
                          className={cx(
                            "flex w-full items-center justify-between rounded-lg border border-transparent px-3 py-2 text-left text-sm font-medium transition",
                            active
                              ? "bg-blue-50 text-blue-700"
                              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                          )}
                          aria-current={active ? "page" : undefined}
                        >
                          <span className="flex items-center gap-3">
                            <item.icon className="h-4 w-4" aria-hidden="true" />
                            {item.label}
                          </span>
                          {typeof item.badgeCount === "number" && item.badgeCount > 0 && (
                            <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700">
                              {item.badgeCount}
                            </span>
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Fragment>
          );
        })}
      </div>
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
        <p className="font-semibold text-slate-900">Need Assistance?</p>
        <p className="mt-2 leading-relaxed">
          Reach out to the moderation team for high-priority approvals and compliance checks.
        </p>
      </div>
    </nav>
  );
};

export default AdminListingSidebar;
