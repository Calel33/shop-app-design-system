import { useMemo, useRef } from "react";
import type { KeyboardEvent } from "react";

import type { MenuTab, MenuTabsProps } from "../types/business.types";

const MenuTabs = ({ tabs, activeTabId, onChange }: MenuTabsProps) => {
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const enabledTabs = useMemo(() => tabs.filter((tab) => !tab.disabled), [tabs]);

  const focusTab = (tabId: string) => {
    const node = tabRefs.current[tabId];
    if (node) {
      node.focus();
    }
  };

  const changeTab = (tab: MenuTab) => {
    if (!tab.disabled) {
      onChange(tab.id);
      focusTab(tab.id);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = enabledTabs.findIndex((tab) => tab.id === activeTabId);
    if (currentIndex === -1) {
      return;
    }

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      const next = enabledTabs[(currentIndex + 1) % enabledTabs.length];
      changeTab(next);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      const prev = enabledTabs[(currentIndex - 1 + enabledTabs.length) % enabledTabs.length];
      changeTab(prev);
    } else if (event.key === "Home") {
      event.preventDefault();
      changeTab(enabledTabs[0]);
    } else if (event.key === "End") {
      event.preventDefault();
      changeTab(enabledTabs[enabledTabs.length - 1]);
    }
  };

  return (
    <div
      role="tablist"
      aria-label="Menu categories"
      className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-1 sm:flex-row"
      onKeyDown={handleKeyDown}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeTabId;

        return (
          <button
            key={tab.id}
            ref={(node) => {
              tabRefs.current[tab.id] = node;
            }}
            type="button"
            role="tab"
            id={`menu-tab-${tab.id}`}
            aria-controls={`menu-panel-${tab.id}`}
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            disabled={tab.disabled}
            className={`flex-1 rounded-2xl px-4 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 sm:text-base ${
              isActive
                ? "bg-white text-emerald-600 shadow"
                : "text-slate-500 hover:text-emerald-600"
            } ${tab.disabled ? "opacity-50" : ""}`}
            onClick={() => changeTab(tab)}
          >
            <span className="flex flex-col gap-1">
              <span>{tab.label}</span>
              {tab.description ? (
                <span className="text-xs font-normal text-slate-400">{tab.description}</span>
              ) : null}
            </span>
            {tab.badgeLabel ? (
              <span className="ml-3 inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
                {tab.badgeLabel}
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
};

export default MenuTabs;
