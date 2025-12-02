import { Menu } from "lucide-react";
import { useState } from "react";

import type { HeaderNavProps } from "../types/business.types";

const HeaderNav = ({ brand, links, primaryAction }: HeaderNavProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((open) => !open);

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <a
        href={brand.href ?? "#"}
        className="text-xl font-bold tracking-tight text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        {brand.label}
      </a>

      <button
        type="button"
        className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 lg:hidden"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-controls="business-nav-menu"
      >
        <span className="sr-only">Toggle navigation</span>
        <Menu className="h-5 w-5" aria-hidden="true" />
      </button>

      <nav
        id="business-nav-menu"
        aria-label="Primary"
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } w-full flex-col gap-3 text-sm font-medium text-slate-600 lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-8`}
      >
        {links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            aria-label={link.ariaLabel ?? link.label}
            className="rounded-full px-4 py-2 transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        {primaryAction ? (
          <a
            href={primaryAction.href ?? "#"}
            target={primaryAction.external ? "_blank" : undefined}
            rel={primaryAction.external ? "noreferrer" : undefined}
            onClick={primaryAction.onClick}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            {primaryAction.icon ? (
              <primaryAction.icon className="h-4 w-4" aria-hidden="true" />
            ) : null}
            <span>{primaryAction.label}</span>
          </a>
        ) : null}
      </nav>
    </div>
  );
};

export default HeaderNav;
