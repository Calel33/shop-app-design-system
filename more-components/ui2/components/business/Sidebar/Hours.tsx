import type { HoursProps, Weekday } from "../../types/business.types";

const dayOrder: Weekday[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Hours = ({ title, hours, currentDay }: HoursProps) => {
  return (
    <section aria-labelledby="business-hours-heading" className="space-y-4">
      <h2 id="business-hours-heading" className="text-lg font-semibold text-slate-900">
        {title}
      </h2>
      <ul className="space-y-2 text-sm">
        {dayOrder.map((day) => {
          const value = hours[day];
          const isActive = day === currentDay;
          const isClosed = value.closed;
          const timeLabel = isClosed ? "Closed" : `${value.open} – ${value.close}`;

          return (
            <li
              key={day}
              className={`flex items-center justify-between rounded-2xl px-3 py-2 ${
                isActive ? "bg-emerald-50" : ""
              }`}
            >
              <span className={`font-medium ${isActive ? "text-emerald-700" : "text-slate-500"}`}>
                {day}
              </span>
              <span
                className={`${
                  isClosed ? "text-rose-500" : isActive ? "text-emerald-700" : "text-slate-700"
                }`}
              >
                {timeLabel}
                {value.note ? (
                  <span className="ml-2 text-xs text-slate-400">{value.note}</span>
                ) : null}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Hours;
