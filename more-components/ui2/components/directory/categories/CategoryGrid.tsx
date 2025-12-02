import type { FC } from "react";
import type { Category } from "../types/directory.types";
import CategoryTile from "./CategoryTile";

export interface CategoryGridProps {
  categories: Category[];
}

const CategoryGrid: FC<CategoryGridProps> = ({ categories }) => {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-16">
      <h2 className="text-3xl font-bold text-slate-900">Browse Categories</h2>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {categories.map((category) => (
          <CategoryTile key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
