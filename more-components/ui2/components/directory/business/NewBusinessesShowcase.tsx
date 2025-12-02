import type { FC } from "react";
import type { Business } from "../types/directory.types";
import NewBusinessCard from "./NewBusinessCard";

export interface NewBusinessesShowcaseProps {
  businesses: Business[];
}

const NewBusinessesShowcase: FC<NewBusinessesShowcaseProps> = ({ businesses }) => {
  return (
    <section className="py-0">
      <div className="bg-gradient-to-br from-emerald-500 to-emerald-600">
        <div className="mx-auto max-w-[1600px] px-6 py-8">
          <h2 className="text-2xl font-bold text-white">New This Week</h2>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-[1600px] px-6 pb-16">
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {businesses.map((business) => (
              <NewBusinessCard key={business.id} business={business} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default NewBusinessesShowcase;
