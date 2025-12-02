import React, { useMemo, useState } from 'react';
import { CalendarCard } from './CalendarCard';
import { MeetingCard } from './MeetingCard';
import type { Meeting } from '../types/scheduling.types';

export interface SchedulingDashboardProps {
  initialDate?: Date;
}

export const SchedulingDashboard: React.FC<SchedulingDashboardProps> = ({ initialDate }) => {
  const init = initialDate ?? new Date();
  const [year, setYear] = useState(init.getFullYear());
  const [month, setMonth] = useState(init.getMonth() + 1);
  const [selected, setSelected] = useState<{ year: number; month: number; day: number } | null>({
    year: init.getFullYear(),
    month: init.getMonth() + 1,
    day: init.getDate(),
  });

  const meeting: Meeting = useMemo(
    () => ({
      title: 'Weekly Product Sync',
      guests: [
        { name: 'Ava Patel', avatar: 'https://i.pravatar.cc/80?img=1', role: 'PM', badgeColor: 'indigo' },
        { name: 'Liam Chen', avatar: 'https://i.pravatar.cc/80?img=2', role: 'Eng Lead', badgeColor: 'teal' },
        { name: 'Maya Lopez', avatar: 'https://i.pravatar.cc/80?img=3', role: 'Design', badgeColor: 'amber' },
      ],
      date: new Date(year, month - 1, selected?.day ?? init.getDate()),
      startTime: '09:30',
      endTime: '10:00',
      timezone: 'UTC',
    }),
    [year, month, selected]
  );

  return (
    <div className="min-h-[100dvh] bg-neutral-950 text-white">
      <header className="w-full sticky top-0 z-40 bg-neutral-950/70 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center">
          <span className="text-white font-semibold tracking-tight">Scheduler</span>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 order-2 lg:order-none">
            <CalendarCard
              year={year}
              month={month}
              selected={selected}
              onChangeMonth={(y, m) => {
                setYear(y);
                setMonth(m);
              }}
              onSelectDate={(y, m, d) => setSelected({ year: y, month: m, day: d })}
            />
          </div>
          <div className="lg:col-span-1">
            <MeetingCard meeting={meeting} onJoin={() => {}} onShare={() => {}} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SchedulingDashboard;
