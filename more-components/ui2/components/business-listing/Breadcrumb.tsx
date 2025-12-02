import type { BreadcrumbProps } from "../types/business-listing.types";

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          if (isLast) {
            return (
              <li key={item.label} aria-current="page" className="font-medium text-slate-700">
                {item.label}
              </li>
            );
          }

          return (
            <li key={item.href ?? `${item.label}-${index}`} className="flex items-center gap-1">
              <a
                href={item.href ?? "#"}
                className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
              >
                {item.label}
              </a>
              <span className="text-slate-400">/</span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
