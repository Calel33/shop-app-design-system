import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ActivityRecord } from './types';

interface ActivityTableProps {
  activities: ActivityRecord[];
  delay?: number;
}

export const ActivityTable: React.FC<ActivityTableProps> = ({ activities, delay = 0 }) => {
  const getStatusStyle = (status: ActivityRecord['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-emerald-100 text-emerald-700';
      case 'in-progress':
        return 'bg-blue-100 text-blue-700';
      case 'scheduled':
        return 'bg-amber-100 text-amber-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  const getStatusLabel = (status: ActivityRecord['status']) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'scheduled':
        return 'Scheduled';
      default:
        return status;
    }
  };

  return (
    <section 
      className="flex flex-col gap-6 opacity-0 animate-fade-in-up" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-medium tracking-tight">Recent Activity</h2>
        <button 
          onClick={() => console.log('View all activities clicked')}
          className="text-sm text-violet-600 hover:text-violet-700 flex items-center gap-1"
        >
          View all <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-lg border border-white/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-slate-50/50">
              <tr>
                <th className="py-4 px-6 text-left text-sm font-medium text-slate-600">User</th>
                <th className="py-4 px-6 text-left text-sm font-medium text-slate-600">Action</th>
                <th className="py-4 px-6 text-left text-sm font-medium text-slate-600">Time</th>
                <th className="py-4 px-6 text-left text-sm font-medium text-slate-600">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {activities.map((activity) => (
                <tr key={activity.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={activity.userAvatar}
                        className="w-8 h-8 rounded-xl object-cover"
                        alt={activity.userName}
                      />
                      <span className="text-sm font-medium text-slate-800">{activity.userName}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-slate-600">{activity.action}</td>
                  <td className="py-4 px-6 text-sm text-slate-500">{activity.timestamp}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(activity.status)}`}>
                      {getStatusLabel(activity.status)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
