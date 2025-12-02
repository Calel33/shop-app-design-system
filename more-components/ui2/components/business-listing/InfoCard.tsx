import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

interface InfoCardProps {
  title: string;
  icon: LucideIcon;
  children: ReactNode;
  description?: string;
}

const InfoCard = ({ title, icon: Icon, children, description }: InfoCardProps) => {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
      <header className="mb-4 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-base font-semibold text-slate-900">{title}</h2>
          {description ? <p className="text-sm text-slate-500">{description}</p> : null}
        </div>
      </header>
      <div className="space-y-4 text-sm text-slate-600">{children}</div>
    </section>
  );
};

export default InfoCard;
