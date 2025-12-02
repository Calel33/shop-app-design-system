import { useMemo, useState } from "react";

import type { BusinessListingProps } from "../types/business.types";

import BusinessHero from "./BusinessHero";
import HeaderNav from "./HeaderNav";
import LoyaltyBanner from "./LoyaltyBanner";
import MenuCategoryList from "./MenuCategoryList";
import MenuTabs from "./MenuTabs";
import NutritionLegend from "./NutritionLegend";
import ContactInfo from "./Sidebar/ContactInfo";
import Features from "./Sidebar/Features";
import HealthSafety from "./Sidebar/HealthSafety";
import Hours from "./Sidebar/Hours";
import QuickActions from "./Sidebar/QuickActions";

const BusinessListing = ({
  header,
  hero,
  loyalty,
  menu,
  menuTabs,
  nutritionLegend,
  quickActions,
  contact,
  hours,
  features,
  healthSafety,
}: BusinessListingProps) => {
  const firstEnabledTab = useMemo(
    () => menuTabs.find((tab) => !tab.disabled) ?? menuTabs[0],
    [menuTabs],
  );
  const [activeTabId, setActiveTabId] = useState(firstEnabledTab?.id ?? "");

  const activeTab = useMemo(
    () => menuTabs.find((tab) => tab.id === activeTabId) ?? firstEnabledTab,
    [activeTabId, firstEnabledTab, menuTabs],
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-[1280px] items-center px-4 py-4 sm:px-6 lg:px-8">
          <HeaderNav {...header} />
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1280px] px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="space-y-10">
            <BusinessHero {...hero} />
            <LoyaltyBanner {...loyalty} />

            <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <header className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                  {menu.title}
                </h2>
                {menu.subtitle ? (
                  <p className="mt-2 text-base text-slate-500">{menu.subtitle}</p>
                ) : null}
              </header>

              {menuTabs.length > 0 ? (
                <>
                  <MenuTabs tabs={menuTabs} activeTabId={activeTab?.id ?? ""} onChange={setActiveTabId} />
                  {activeTab ? <MenuCategoryList tab={activeTab} /> : null}
                </>
              ) : (
                <p className="text-center text-sm text-slate-500">Menu information is coming soon.</p>
              )}

              <NutritionLegend {...nutritionLegend} />
            </section>
          </div>

          <aside className="space-y-6" aria-label="Business sidebar information">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <QuickActions actions={quickActions} />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <ContactInfo {...contact} />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <Hours {...hours} />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <Features {...features} />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <HealthSafety {...healthSafety} />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default BusinessListing;
