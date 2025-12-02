import type { BusinessHeaderProps } from "../types/business-listing.types";

const linkClasses =
  "text-sm font-medium text-slate-600 transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

const BusinessHeader = ({ brand, navLinks, primaryAction }: BusinessHeaderProps) => {
  return (
    <nav className="flex w-full items-center justify-between gap-4" aria-label="Primary">
      <a
        href={brand.href ?? "#"}
        className="text-xl font-semibold tracking-tight text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      >
        {brand.name}
      </a>
      <div className="flex items-center gap-6">
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} aria-label={link.ariaLabel ?? link.label} className={linkClasses}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {primaryAction ? (
          <a
            href={primaryAction.href}
            target={primaryAction.external ? "_blank" : undefined}
            rel={primaryAction.external ? "noreferrer" : undefined}
            className="inline-flex items-center gap-2 rounded-lg border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            {primaryAction.icon ? <primaryAction.icon className="h-4 w-4" aria-hidden="true" /> : null}
            <span>{primaryAction.label}</span>
          </a>
        ) : null}
      </div>
    </nav>
  );
};

export default BusinessHeader;
