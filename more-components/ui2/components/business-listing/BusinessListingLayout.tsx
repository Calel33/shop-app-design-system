import type { BusinessListingLayoutProps } from "../types/business-listing.types";

const BusinessListingLayout = ({
  header,
  breadcrumb,
  hero,
  main,
  sidebar,
}: BusinessListingLayoutProps) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-[1280px] items-center px-4 py-4 sm:px-6 lg:px-8">
          {header}
        </div>
      </header>
      <main className="mx-auto w-full max-w-[1280px] px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8" aria-label="Breadcrumb">
          {breadcrumb}
        </div>
        <div className="space-y-8">
          {hero}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_400px]">
            <div className="space-y-8">{main}</div>
            <aside className="space-y-6" aria-label="Business extra information">
              {sidebar}
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BusinessListingLayout;
