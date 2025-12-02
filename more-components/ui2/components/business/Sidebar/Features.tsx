import type { FeatureListProps } from "../../types/business.types";

const Features = ({ title, items }: FeatureListProps) => {
  return (
    <section aria-labelledby="business-features-heading" className="space-y-4">
      <h2 id="business-features-heading" className="text-lg font-semibold text-slate-900">
        {title}
      </h2>
      <ul className="space-y-3 text-sm text-slate-600">
        {items.map((item) => (
          <li key={item.id} className="flex items-center gap-3">
            <item.icon className="h-5 w-5 text-emerald-600" aria-hidden="true" />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Features;
