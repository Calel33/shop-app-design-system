import type { ReactNode } from "react";

interface AdminListingLayoutProps {
  sidebar: ReactNode;
  header: ReactNode;
  filters: ReactNode;
  content: ReactNode;
  footer: ReactNode;
  detailPanel?: ReactNode;
  panelOpen?: boolean;
  onBackdropClick?: () => void;
}

const AdminListingLayout = ({
  sidebar,
  header,
  filters,
  content,
  footer,
  detailPanel,
  panelOpen = false,
  onBackdropClick,
}: AdminListingLayoutProps) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col xl:flex-row">
        <aside className="border-slate-200 bg-white xl:flex xl:w-[280px] xl:flex-shrink-0 xl:border-r">
          <div className="h-full w-full xl:min-h-screen">{sidebar}</div>
        </aside>
        <div className="flex-1 xl:min-h-screen">
          <div className="flex h-full flex-col">
            <header className="border-b border-slate-200 bg-white px-4 py-6 sm:px-6 lg:px-8">
              {header}
            </header>
            <section className="border-b border-slate-200 bg-slate-100/60 px-4 py-4 sm:px-6 lg:px-8">
              {filters}
            </section>
            <main className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
              {content}
            </main>
            <footer className="border-t border-slate-200 bg-white px-4 py-4 sm:px-6 lg:px-8">
              {footer}
            </footer>
          </div>
        </div>
      </div>
      {panelOpen && (
        <button
          type="button"
          aria-label="Close detail panel"
          onClick={onBackdropClick}
          className="fixed inset-0 z-30 h-full w-full cursor-pointer bg-slate-900/40"
        />
      )}
      {detailPanel}
    </div>
  );
};

export default AdminListingLayout;
