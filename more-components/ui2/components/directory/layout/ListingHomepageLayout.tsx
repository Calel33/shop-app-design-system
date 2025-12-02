import type { FC } from "react";
import DirectoryHeader from "./DirectoryHeader";
import HeroSearchSection from "../hero/HeroSearchSection";
import CategoryGrid from "../categories/CategoryGrid";
import QuickFiltersBar from "./QuickFiltersBar";
import { mockCategories, mockStats, mockFilterOptions, mockTrendingBusinesses, mockNewBusinesses, mockVerifiedBusinesses, mockCurrentLocation } from "../mockData";
import LocationBanner from "../shared/LocationBanner";
import TrendingSection from "../business/TrendingSection";
import NewBusinessesShowcase from "../business/NewBusinessesShowcase";
import VerifiedCarousel from "../business/VerifiedCarousel";

export interface ListingHomepageLayoutProps {}

const ListingHomepageLayout: FC<ListingHomepageLayoutProps> = () => {
  const handleSearch = (data: { query: string; location: string }) => {
    const params = new URLSearchParams({ q: data.query, location: data.location });
    const url = `/search?${params.toString()}`;
    console.info("Navigate to", url);
  };

  return (
    <div className="min-h-dvh bg-slate-50">
      <DirectoryHeader />
      <main id="main">
        <HeroSearchSection stats={mockStats} onSearch={handleSearch} />
        <QuickFiltersBar filters={mockFilterOptions} />
        <LocationBanner location={mockCurrentLocation} />
        <CategoryGrid categories={mockCategories} />
        <TrendingSection businesses={mockTrendingBusinesses} />
        <NewBusinessesShowcase businesses={mockNewBusinesses} />
        <VerifiedCarousel businesses={mockVerifiedBusinesses} />
      </main>
    </div>
  );
};

export default ListingHomepageLayout;
