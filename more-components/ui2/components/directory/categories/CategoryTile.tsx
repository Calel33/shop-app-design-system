import type { FC, MouseEvent } from "react";
import type { Category } from "../types/directory.types";

export interface CategoryTileProps {
  category: Category;
  onNavigate?: (href: string) => void;
}

const CategoryTile: FC<CategoryTileProps> = ({ category, onNavigate }) => {
  const href = `/category/${category.slug}`;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!onNavigate) {
      return;
    }

    event.preventDefault();
    onNavigate(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="relative aspect-square cursor-pointer overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      aria-label={`Explore ${category.name} category, ${category.businessCount} businesses`}
    >
      <img
        src={category.imageUrl}
        alt={category.description || category.name}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <div className="text-sm/5 opacity-90">{category.businessCount} businesses</div>
        <div className="text-lg font-semibold">{category.name}</div>
      </div>
    </a>
  );
};

export default CategoryTile;
