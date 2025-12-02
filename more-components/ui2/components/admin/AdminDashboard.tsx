import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import MetricCard from "./MetricCard";
import BusinessApprovalQueue from "./BusinessApprovalQueue";
import ActivityFeed from "./ActivityFeed";
import SystemStatus from "./SystemStatus";
import type { ActivityItem, AdminMetric, BusinessSubmission, SidebarItem, SystemStatusEntry } from "@/ui/components/types/admin.types";

interface Props {
  sidebar: SidebarItem[];
  activeNavId?: string;
  metrics: AdminMetric[];
  submissions: BusinessSubmission[];
  categories: string[];
  activity: ActivityItem[];
  status: SystemStatusEntry[];
  onSearch?: (q: string) => void;
}

export default function AdminDashboard(props: Props) {
  const { sidebar, activeNavId, metrics, submissions, categories, activity, status, onSearch } = props;
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex">
        <AdminSidebar items={sidebar} activeId={activeNavId} onNavigate={(id) => console.log("nav", id)} />
        <main className="flex-1 min-w-0">
          <AdminHeader onSearch={onSearch} onAdd={() => console.log("add business")} />
          <div className="mx-auto max-w-[1400px] px-6 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <section className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {metrics.map((m) => (
                <MetricCard key={m.id} metric={m} />
              ))}
            </section>
            <section className="lg:col-span-2">
              <BusinessApprovalQueue items={submissions} categories={categories} />
            </section>
            <section className="space-y-6">
              <ActivityFeed items={activity} />
              <SystemStatus items={status} />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
