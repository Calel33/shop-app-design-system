import type { FC } from "react";
import type { Business } from "../types/directory.types";

export interface NewBusinessCardProps {
  business: Business;
}

const NewBusinessCard: FC<NewBusinessCardProps> = ({ business }) => {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
      <img
        src={business.logoUrl || business.imageUrl}
        alt={`${business.name} logo`}
        className="mx-auto h-16 w-16 rounded-full border-2 border-emerald-500 object-cover"
      />
      <h4 className="mt-3 text-base font-semibold text-slate-900">{business.name}</h4>
      <p className="text-sm text-slate-600">{business.category}</p>
      <span className="mt-3 inline-block rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 px-2 py-1 text-xs font-semibold text-white">
        New This Week
      </span>
    </article>
  );
};

export default NewBusinessCard;
