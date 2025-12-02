import type { FC, ReactNode } from "react";
import { Menu, Plus } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface DirectoryHeaderProps {
  brand?: { name: string; href?: string };
  links?: NavLink[];
  onMenuToggle?: () => void;
  cta?: { label: string; href?: string };
  rightSlot?: ReactNode;
}

const DirectoryHeader: FC<DirectoryHeaderProps> = ({
  brand = { name: "LocalConnect", href: "#" },
  links = [
    { label: "Browse Directory", href: "#" },
    { label: "Categories", href: "#" },
    { label: "About", href: "#" },
  ],
  onMenuToggle,
  cta = { label: "Add Your Business", href: "#" },
  rightSlot,
}) => {
  return (
    <header className="sticky top-0 z-[100] border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6">
        <a href={brand.href} className="text-2xl font-extrabold text-blue-600">
          {brand.name}
        </a>
        <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-slate-900">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          {rightSlot}
          <a
            href={cta.href}
            className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-600"
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
            {cta.label}
          </a>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 md:hidden"
          aria-label="Open menu"
          onClick={onMenuToggle}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
};

export default DirectoryHeader;
