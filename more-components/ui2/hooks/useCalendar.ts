import { useMemo } from 'react';

export interface UseCalendarOptions {
  year: number;
  month: number; // 1-12
  weekStartsOn?: 0 | 1; // 0=Sunday, 1=Monday
}

// Returns a matrix of weeks for the given month; empty days are 0
export function useCalendar({ year, month, weekStartsOn = 1 }: UseCalendarOptions) {
  return useMemo(() => {
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    const daysInMonth = lastDay.getDate();
    const firstWeekday = (firstDay.getDay() + 7 - weekStartsOn) % 7; // 0..6

    const weeks: number[][] = [];
    let day = 1;

    // Build up to 6 weeks for uniform grid
    for (let w = 0; w < 6; w++) {
      const week: number[] = [];
      for (let d = 0; d < 7; d++) {
        const cellIndex = w * 7 + d;
        const dateNum = cellIndex - firstWeekday + 1;
        if (dateNum < 1 || dateNum > daysInMonth) week.push(0);
        else week.push(dateNum);
      }
      weeks.push(week);
      day += 7;
    }

    return { weeks, daysInMonth };
  }, [year, month, weekStartsOn]);
}
