import React from 'react';
import { Rocket, Users, TrendingUp, Heart, Clock } from 'lucide-react';
import { BISidebar } from './BISidebar';
import { BIHeader } from './BIHeader';
import { KPICard } from './KPICard';
import { RevenueChart } from './RevenueChart';
import { ActivityTable } from './ActivityTable';
import { KPIMetric, ActivityRecord, RevenueDataPoint } from './types';

interface BIDashboardProps {
  userName?: string;
  kpiMetrics?: KPIMetric[];
  revenueData?: RevenueDataPoint[];
  activities?: ActivityRecord[];
}

const defaultKPIMetrics: KPIMetric[] = [
  {
    title: 'Active Projects',
    value: 47,
    change: '18%',
    changeType: 'positive',
    icon: Rocket,
    gradientFrom: 'from-emerald-400',
    gradientTo: 'to-emerald-600',
    accentColor: 'text-emerald-600',
    description: '12 launched this quarter',
  },
  {
    title: 'Team Efficiency',
    value: '94%',
    change: '12%',
    changeType: 'positive',
    icon: Users,
    gradientFrom: 'from-blue-400',
    gradientTo: 'to-blue-600',
    accentColor: 'text-blue-600',
    description: 'Above target by 8%',
  },
  {
    title: 'Revenue Growth',
    value: '$2.4M',
    change: '24%',
    changeType: 'positive',
    icon: TrendingUp,
    gradientFrom: 'from-orange-400',
    gradientTo: 'to-orange-600',
    accentColor: 'text-orange-600',
    description: 'Quarterly increase',
  },
  {
    title: 'Client Satisfaction',
    value: '98.5%',
    change: '7%',
    changeType: 'positive',
    icon: Heart,
    gradientFrom: 'from-purple-400',
    gradientTo: 'to-purple-600',
    accentColor: 'text-purple-600',
    description: 'Based on 234 reviews',
  },
];

const defaultRevenueData: RevenueDataPoint[] = [
  { month: 'Jan', q3Value: 150000, q4Value: 180000 },
  { month: 'Feb', q3Value: 180000, q4Value: 220000 },
  { month: 'Mar', q3Value: 160000, q4Value: 190000 },
  { month: 'Apr', q3Value: 200000, q4Value: 250000 },
  { month: 'May', q3Value: 220000, q4Value: 280000 },
  { month: 'Jun', q3Value: 190000, q4Value: 240000 },
  { month: 'Jul', q3Value: 230000, q4Value: 290000 },
  { month: 'Aug', q3Value: 250000, q4Value: 310000 },
  { month: 'Sep', q3Value: 210000, q4Value: 270000 },
  { month: 'Oct', q3Value: 260000, q4Value: 330000 },
  { month: 'Nov', q3Value: 280000, q4Value: 350000 },
  { month: 'Dec', q3Value: 300000, q4Value: 380000 },
];

const defaultActivities: ActivityRecord[] = [
  {
    id: '1',
    userName: 'Alex Chen',
    userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    action: 'Completed Project Alpha',
    timestamp: '2 hours ago',
    status: 'completed',
  },
  {
    id: '2',
    userName: 'Maya Rodriguez',
    userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    action: 'Updated client proposal',
    timestamp: '4 hours ago',
    status: 'in-progress',
  },
  {
    id: '3',
    userName: 'James Wilson',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    action: 'Scheduled team meeting',
    timestamp: '6 hours ago',
    status: 'scheduled',
  },
];

export const BIDashboard: React.FC<BIDashboardProps> = ({
  userName = 'Sarah',
  kpiMetrics = defaultKPIMetrics,
  revenueData = defaultRevenueData,
  activities = defaultActivities,
}) => {
  return (
    <div className="min-h-screen flex opacity-0 animate-fade-in-up">
      <BISidebar />
      
      <main className="flex-1 flex flex-col gap-8 md:p-8 overflow-hidden pt-6 pr-6 pb-6 pl-6">
        <BIHeader userName={userName} notificationCount={3} />
        
        {/* KPI Cards Section */}
        <section 
          className="flex flex-col gap-6 opacity-0 animate-fade-in-up" 
          style={{ animationDelay: '200ms' }}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-medium tracking-tight">Key Performance Indicators</h2>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Clock className="w-4 h-4" />
              <span>Updated 5 minutes ago</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpiMetrics.map((metric, index) => (
              <KPICard 
                key={metric.title} 
                metric={metric} 
                delay={300 + (index * 100)} 
              />
            ))}
          </div>
        </section>

        {/* Analytics Section */}
        <section 
          className="flex flex-col gap-6 opacity-0 animate-fade-in-up" 
          style={{ animationDelay: '400ms' }}
        >
          <h2 className="text-xl font-medium tracking-tight">Business Analytics</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <RevenueChart data={revenueData} delay={600} />
          </div>
        </section>

        {/* Recent Activity */}
        <ActivityTable activities={activities} delay={700} />
      </main>
    </div>
  );
};
