import type { MenuBadgeVariant, MenuCategoryListProps, MenuItem } from "../types/business.types";

const badgeStyles: Record<MenuBadgeVariant, string> = {
  vegan: "bg-emerald-100 text-emerald-700",
  vegetarian: "bg-lime-100 text-lime-700",
  glutenFree: "bg-amber-100 text-amber-700",
  proteinPlus: "bg-blue-100 text-blue-700",
  warning: "bg-rose-100 text-rose-700",
  info: "bg-slate-100 text-slate-700",
};

const renderAction = (item: MenuItem) => {
  if (!item.action) {
    return null;
  }

  if (item.action.href) {
    return (
      <a
        href={item.action.href ?? "#"}
        onClick={item.action.onSelect}
        className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
      >
        {item.action.label}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={item.action.onSelect}
      disabled={item.action.disabled}
      className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-300"
    >
      {item.action.label}
    </button>
  );
};

const MenuCategoryList = ({ tab }: MenuCategoryListProps) => {
  return (
    <div
      id={`menu-panel-${tab.id}`}
      role="tabpanel"
      aria-labelledby={`menu-tab-${tab.id}`}
      className="space-y-16"
    >
      {tab.categories.map((category) => (
        <section key={category.id} className="space-y-6">
          <header className="space-y-2">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
              {category.title}
            </h3>
            {category.description ? (
              <p className="text-sm text-slate-600 sm:text-base">{category.description}</p>
            ) : null}
          </header>

          {category.items.length === 0 && category.emptyState ? (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
              <h4 className="text-lg font-semibold text-slate-700">{category.emptyState.title}</h4>
              {category.emptyState.description ? (
                <p className="mt-2 text-sm text-slate-500">{category.emptyState.description}</p>
              ) : null}
              {category.emptyState.actionLabel ? (
                <button
                  type="button"
                  className="mt-4 inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  {category.emptyState.actionLabel}
                </button>
              ) : null}
            </div>
          ) : null}

          <div className="grid gap-6 lg:grid-cols-2">
            {category.items.map((item) => (
              <article
                key={item.id}
                className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-emerald-300 hover:shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h4 className="text-lg font-semibold text-slate-900">{item.name}</h4>
                    {item.calorieRange ? (
                      <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
                        {item.calorieRange}
                      </span>
                    ) : null}
                  </div>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {item.badges?.map((badge) => (
                      <span
                        key={badge.id}
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${badgeStyles[badge.variant ?? "info"]}`}
                      >
                        {badge.label}
                      </span>
                    ))}
                    {item.priceLabel ? (
                      <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                        {item.priceLabel}
                      </span>
                    ) : null}
                  </div>
                  {renderAction(item)}
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default MenuCategoryList;
