import type { QuickActionsProps } from "../../types/business.types";

const variantClasses: Record<NonNullable<QuickActionsProps["actions"][number]["variant"]>, string> = {
  primary:
    "bg-emerald-600 text-white shadow-sm hover:bg-emerald-700 focus-visible:ring-emerald-500",
  secondary:
    "bg-slate-100 text-slate-700 hover:bg-slate-200 focus-visible:ring-slate-400",
};

const QuickActions = ({ actions }: QuickActionsProps) => {
  return (
    <div className="grid gap-3">
      {actions.map((action) => {
        const variant = action.variant ?? "secondary";

        return (
          <a
            key={action.id}
            href={action.href ?? "#"}
            onClick={action.onClick}
            className={`inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variantClasses[variant]}`}
          >
            <action.icon className="h-5 w-5" aria-hidden="true" />
            <span>{action.label}</span>
          </a>
        );
      })}
    </div>
  );
};

export default QuickActions;
