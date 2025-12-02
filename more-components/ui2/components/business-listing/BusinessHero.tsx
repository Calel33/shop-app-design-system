import type { BusinessHeroProps } from "../types/business-listing.types";

const BusinessHero = ({ gallery, details }: BusinessHeroProps) => {
  return (
    <section className="space-y-6">
      <div className="relative">{gallery}</div>
      <div className="-mt-20 rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-100 sm:p-8 lg:p-10">
        {details}
      </div>
    </section>
  );
};

export default BusinessHero;
