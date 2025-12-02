import type { NutritionLegendProps } from "../types/business.types";

const variantStyles: Record<NutritionLegendProps["items"][number]["variant"], string> = {
  vegan: "bg-emerald-500",
  vegetarian: "bg-lime-500",
  glutenFree: "bg-amber-500",
  proteinPlus: "bg-blue-500",
  warning: "bg-rose-500",
  info: "bg-slate-500",
};

const NutritionLegend = ({ title, items }: NutritionLegendProps) => {
  return (
    <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            <span
              className={`h-3.5 w-3.5 rounded-full ${variantStyles[item.variant]}`}
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-semibold text-slate-700">{item.label}</p>
              {item.description ? (
                <p className="text-xs text-slate-500">{item.description}</p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NutritionLegend;
