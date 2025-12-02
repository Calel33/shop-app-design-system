# Scheduling Components

Interactive scheduling dashboard with calendar and meeting details.

## Components
- `SchedulingDashboard` – Main layout combining calendar and meeting card
- `CalendarCard` – Month navigation, date selection, quick ranges
- `MeetingCard` – Meeting details and guest actions
- `GuestList` – Guest list with badges

## Usage
```tsx
import { SchedulingDashboard } from '@/ui/components/scheduling';

export default function Page() {
  return <SchedulingDashboard />;
}
```

### Individual
```tsx
import { CalendarCard, MeetingCard } from '@/ui/components/scheduling';
import type { Meeting } from '@/ui/components/types/scheduling.types';

<CalendarCard year={2025} month={10} onChangeMonth={() => {}} onSelectDate={() => {}} />

const meeting: Meeting = {
  title: 'Design Review',
  guests: [],
  date: new Date(),
  startTime: '10:00',
  endTime: '10:30',
  timezone: 'UTC',
};
<MeetingCard meeting={meeting} />
```