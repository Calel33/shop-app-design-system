import InfoCard from "./InfoCard";

import type { HoursDisplayProps, Weekday } from "../types/business-listing.types";

const weekOrder: Weekday[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const HoursDisplay = ({ title, icon, hours, currentDay }: HoursDisplayProps) => {
  return (
    <InfoCard title={title} icon={icon}>
      <dl className="grid grid-cols-1 gap-3 text-sm">
        {weekOrder.map((day) => {
          const entry = hours[day];
          const isCurrent = day === currentDay;
          const labelClasses = isCurrent ? "font-semibold text-green-600" : "text-slate-500";
          const timeClasses = isCurrent ? "font-semibold text-green-600" : "text-slate-700";

          let displayValue = "Closed";
          if (entry) {
            if (entry.isClosed || !entry.open || !entry.close) {
              displayValue = "Closed";
            } else {
              displayValue = `${entry.open} – ${entry.close}`;
            }
            if (entry.note) {
              displayValue = `${displayValue} (${entry.note})`;
            }
          }

          return (
            <div
              key={day}
              className={`flex items-center justify-between rounded-lg px-3 py-2 ${
                isCurrent ? "bg-green-50" : "bg-transparent"
              }`}
            >
              <dt className={labelClasses}>{day}</dt>
              <dd className={timeClasses}>{displayValue}</dd>
            </div>
          );
        })}
      </dl>
    </InfoCard>
  );
};

export default HoursDisplay;
