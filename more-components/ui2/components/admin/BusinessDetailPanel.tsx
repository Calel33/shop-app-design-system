import { useEffect, useRef } from "react";
import { Calendar, Check, MapPin, Phone, Tag, User, X } from "lucide-react";
import type { BusinessListing } from "../types/admin.types";

interface BusinessDetailPanelProps {
  business: BusinessListing | null;
  isOpen: boolean;
  onClose: () => void;
}

const BusinessDetailPanel = ({ business, isOpen, onClose }: BusinessDetailPanelProps) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedElement = useRef<Element | null>(null);

  useEffect(() => {
    if (isOpen) {
      previouslyFocusedElement.current = document.activeElement;
      window.setTimeout(() => closeButtonRef.current?.focus(), 0);
    } else if (previouslyFocusedElement.current instanceof HTMLElement) {
      previouslyFocusedElement.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) {
        return;
      }

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!business) {
    return null;
  }

  return (
    <aside
      ref={panelRef}
      className={`fixed top-0 right-0 z-40 h-full w-full max-w-[400px] transform border-l border-slate-200 bg-white shadow-xl transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
      aria-labelledby="business-detail-title"
    >
      <div className="flex h-full flex-col">
        <header className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <div>
            <h2 id="business-detail-title" className="text-lg font-semibold text-slate-900">
              {business.name}
            </h2>
            <p className="text-sm text-slate-500">Detailed submission information</p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="rounded-full border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
            aria-label="Close details"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </header>
        <div className="flex-1 space-y-6 overflow-y-auto px-6 py-6">
          <section className="space-y-4">
            <img
              src={business.avatarUrl}
              alt={`${business.name} logo`}
              className="h-20 w-20 rounded-2xl object-cover"
            />
            {business.description && (
              <p className="text-sm leading-relaxed text-slate-600">{business.description}</p>
            )}
            <div className="flex flex-wrap gap-2">
              {business.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600"
                >
                  <Tag className="h-3 w-3" aria-hidden="true" />
                  {tag}
                </span>
              ))}
            </div>
          </section>
          <section className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
            <div className="flex items-center gap-3">
              <User className="h-4 w-4 text-slate-500" aria-hidden="true" />
              <div>
                <p className="font-semibold text-slate-900">{business.owner}</p>
                <p>{business.ownerEmail}</p>
                {business.ownerPhone && <p>{business.ownerPhone}</p>}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-slate-500" aria-hidden="true" />
              <span>{business.address}</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-4 w-4 text-slate-500" aria-hidden="true" />
              <span>Submitted {new Date(business.submittedAt).toLocaleString()}</span>
            </div>
            {business.ownerPhone && (
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-slate-500" aria-hidden="true" />
                <span>{business.ownerPhone}</span>
              </div>
            )}
          </section>
          {business.documents && business.documents.length > 0 && (
            <section className="space-y-3">
              <p className="text-sm font-semibold text-slate-900">Documents</p>
              <ul className="space-y-2 text-sm text-slate-600">
                {business.documents.map((doc) => (
                  <li
                    key={doc.id}
                    className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2"
                  >
                    <div>
                      <p className="font-medium text-slate-800">{doc.name}</p>
                      <p className="text-xs uppercase tracking-wide text-slate-400">
                        {doc.type} • Updated {doc.lastUpdated}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="rounded-md bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 transition hover:bg-blue-100"
                    >
                      View
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          )}
          <section className="space-y-3">
            <p className="text-sm font-semibold text-slate-900">Moderation Actions</p>
            <div className="grid gap-2">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                <Check className="h-4 w-4" aria-hidden="true" /> Approve submission
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg bg-amber-500/90 px-3 py-2 text-sm font-semibold text-white transition hover:bg-amber-600"
              >
                Request changes
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Reject submission
              </button>
            </div>
          </section>
        </div>
      </div>
    </aside>
  );
};

export default BusinessDetailPanel;
