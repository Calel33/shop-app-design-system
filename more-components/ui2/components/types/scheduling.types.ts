export interface CalendarDate {
  year: number;
  month: number; // 1-12
  day: number; // 1-31
}

export interface Guest {
  name: string;
  avatar: string; // image URL
  role: string;
  badgeColor: 'indigo' | 'amber' | 'teal' | 'blue';
}

export interface Meeting {
  title: string;
  guests: Guest[];
  date: Date;
  startTime: string; // e.g., "09:30"
  endTime: string; // e.g., "10:00"
  timezone: string; // e.g., "UTC-5"
}
