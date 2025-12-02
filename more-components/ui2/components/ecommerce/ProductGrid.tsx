import React from 'react';

export interface SimpleProduct {
  image: string;
  title: string;
  description: string;
  price: number;
  badge?: string;
}

interface ProductGridProps {
  title?: string;
  products: SimpleProduct[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ title, products }) => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      {title && <h2 className="mb-6 text-xl font-semibold">{title}</h2>}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {products.map((p, idx) => (
          <div key={p.title + idx} className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1">
            <div className="relative">
              <img src={p.image} alt="" className="h-44 w-full object-cover transition duration-500 group-hover:scale-[1.05]" />
              {p.badge && <div className="absolute left-2 top-2 rounded-full bg-zinc-900/80 px-2 py-0.5 text-[10px] text-white">{p.badge}</div>}
            </div>
            <div className="p-3">
              <div className="text-sm font-medium">{p.title}</div>
              <div className="mt-1 text-xs text-zinc-600">{p.description}</div>
              <div className="mt-2 text-sm">${p.price}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
