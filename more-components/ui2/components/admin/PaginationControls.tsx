import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}

const PaginationControls = ({
  currentPage,
  totalPages,
  pageSize,
  totalItems,
  onPageChange,
}: PaginationControlsProps) => {
  const end = Math.min(currentPage * pageSize, totalItems);

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-slate-500">
        Showing <span className="font-semibold text-slate-900">{end}</span> of {totalItems} pending
        approvals
      </p>
      <nav className="flex items-center gap-2" aria-label="Pagination">
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:text-slate-300"
          aria-label="Previous page"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        </button>
        <ul className="flex items-center gap-1">
          {pages.map((page) => (
            <li key={page}>
              <button
                type="button"
                onClick={() => onPageChange(page)}
                aria-current={page === currentPage ? "page" : undefined}
                className={`inline-flex h-9 w-9 items-center justify-center rounded-lg text-sm font-semibold transition ${
                  page === currentPage
                    ? "bg-blue-600 text-white"
                    : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-100"
                }`}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:text-slate-300"
          aria-label="Next page"
        >
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </nav>
    </div>
  );
};

export default PaginationControls;
