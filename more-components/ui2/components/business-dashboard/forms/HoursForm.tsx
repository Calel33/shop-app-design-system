import type { BusinessHours } from '@/ui/components/types/business-dashboard.types'

export function HoursForm({ data }: { data?: BusinessHours }) {
  return (
    <div className="p-6 text-sm text-slate-600">
      <div className="font-medium text-slate-800 mb-2">Hours</div>
      <p>Hours scheduler placeholder. Coming soon.</p>
      {data?.days?.length ? (
        <ul className="mt-3 space-y-1">
          {data.days.map((d) => (
            <li key={d.day} className="flex justify-between">
              <span>{d.day}</span>
              <span>{d.closed ? 'Closed' : `${d.open} - ${d.close}`}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
