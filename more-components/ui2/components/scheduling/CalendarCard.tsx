import React, { useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCalendar } from '@/ui/hooks/useCalendar';

export interface CalendarCardProps {
  year: number;
  month: number; // 1-12
  selected?: { year: number; month: number; day: number } | null;
  onChangeMonth: (year: number, month: number) => void;
  onSelectDate: (year: number, month: number, day: number) => void;
}

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const CalendarCard: React.FC<CalendarCardProps> = ({ year, month, selected, onChangeMonth, onSelectDate }) => {
  const { weeks } = useCalendar({ year, month, weekStartsOn: 1 });

  const header = useMemo(() => new Date(year, month - 1, 1).toLocaleString(undefined, { month: 'long', year: 'numeric' }), [year, month]);

  const prev = () => {
    const d = new Date(year, month - 2, 1);
    onChangeMonth(d.getFullYear(), d.getMonth() + 1);
  };
  const next = () => {
    const d = new Date(year, month, 1);
    onChangeMonth(d.getFullYear(), d.getMonth() + 1);
  };

  const isSelected = (d: number) => selected && d === selected.day && month === selected.month && year === selected.year;

  return (
    <section className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-lg p-5 md:p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-white font-medium tracking-tight">{header}</h3>
        <div className="flex items-center gap-2">
          <button className="p-1.5 rounded-md bg-white/10 ring-1 ring-white/15 hover:bg-white/15" aria-label="Previous month" onClick={prev}>
            <ChevronLeft size={16} />
          </button>
          <button className="p-1.5 rounded-md bg-white/10 ring-1 ring-white/15 hover:bg-white/15" aria-label="Next month" onClick={next}>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-7 gap-2 text-xs text-white/60">
        {WEEKDAYS.map((w) => (
          <div key={w} className="text-center">
            {w}
          </div>
        ))}
      </div>

      <div className="mt-2 grid grid-cols-7 gap-2">
        {weeks.map((week, wi) =>
          week.map((d, di) => (
            <button
              key={`${wi}-${di}`}
              disabled={!d}
              onClick={() => d && onSelectDate(year, month, d)}
              className={`h-9 rounded-md text-sm ring-1 ring-white/10 ${
                d ? 'bg-neutral-900/60 hover:bg-white/10 text-white' : 'bg-transparent text-transparent ring-0'
              } ${isSelected(d) ? 'bg-emerald-500 text-neutral-900 ring-0' : ''}`}
              aria-pressed={!!(d && isSelected(d))}
            >
              {d || ''}
            </button>
          ))
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        {[
          { label: 'Today', shift: 0 },
          { label: 'Yesterday', shift: -1 },
          { label: 'This Week', shift: 0 },
          { label: 'Next Week', shift: 7 },
        ].map((r, idx) => (
          <button
            key={idx}
            className="rounded-md px-2.5 py-1.5 bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/15"
            onClick={() => {
              const base = new Date();
              base.setDate(base.getDate() + r.shift);
              onChangeMonth(base.getFullYear(), base.getMonth() + 1);
              onSelectDate(base.getFullYear(), base.getMonth() + 1, base.getDate());
            }}
          >
            {r.label}
          </button>
        ))}
      </div>
    </section>
  );
};

export default CalendarCard;
