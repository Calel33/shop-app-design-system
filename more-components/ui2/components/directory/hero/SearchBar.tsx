import type { FC, FormEvent } from "react";
import { MapPin, Search } from "lucide-react";

export interface SearchFormData {
  query: string;
  location: string;
}

export interface SearchBarProps {
  onSearch?: (data: SearchFormData) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = (formData.get("query") ?? "").toString().trim();
    const location = (formData.get("location") ?? "").toString().trim();

    if (!query || !location) {
      return;
    }

    onSearch?.({ query, location });
  };

  return (
    <form
      role="search"
      aria-label="Search businesses"
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-3xl flex-col gap-2 rounded-2xl bg-white p-2 shadow-xl sm:flex-row"
    >
      <div className="flex flex-1 items-center gap-2 rounded-xl border border-slate-200 px-3 py-2">
        <Search className="h-4 w-4 text-slate-500" aria-hidden="true" />
        <input
          name="query"
          placeholder="What are you looking for?"
          aria-label="What are you looking for?"
          className="w-full text-sm text-slate-900 outline-none placeholder:text-slate-400"
        />
      </div>
      <div className="flex min-w-[200px] items-center gap-2 rounded-xl border border-slate-200 px-3 py-2">
        <MapPin className="h-4 w-4 text-slate-500" aria-hidden="true" />
        <input
          name="location"
          placeholder="Springfield, IL"
          aria-label="Location"
          className="w-full text-sm text-slate-900 outline-none placeholder:text-slate-400"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        <Search className="h-4 w-4" aria-hidden="true" />
        <span>Search</span>
      </button>
    </form>
  );
};

export default SearchBar;
