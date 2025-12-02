import type { BusinessEditData } from '@/ui/components/types/business-dashboard.types'

type Props = {
  data: BusinessEditData
  onChange: (field: keyof BusinessEditData, value: unknown) => void
}

export function ContactForm({ data, onChange }: Props) {
  return (
    <div className="p-6 space-y-6">
      <div>
        <label className="block text-sm font-semibold text-slate-700">Phone</label>
        <input
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={data.phone ?? ''}
          onChange={(e) => onChange('phone', e.target.value)}
          placeholder="(555) 123-4567"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700">Website</label>
        <input
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={data.website ?? ''}
          onChange={(e) => onChange('website', e.target.value)}
          placeholder="www.example.com"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700">Email</label>
        <input
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={data.email ?? ''}
          onChange={(e) => onChange('email', e.target.value)}
          placeholder="you@example.com"
        />
      </div>
    </div>
  )
}
