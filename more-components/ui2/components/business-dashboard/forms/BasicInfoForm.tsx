import type { BusinessEditData } from '@/ui/components/types/business-dashboard.types'

type Props = {
  data: BusinessEditData
  categories: string[]
  onChange: (field: keyof BusinessEditData, value: unknown) => void
}

export function BasicInfoForm({ data, categories, onChange }: Props) {
  return (
    <div className="p-6 space-y-6">
      <div>
        <label className="block text-sm font-semibold text-slate-700">Business Name</label>
        <input
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={data.name}
          onChange={(e) => onChange('name', e.target.value)}
          placeholder="Business name"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700">Category</label>
        <select
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={data.category}
          onChange={(e) => onChange('category', e.target.value)}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700">Description</label>
        <textarea
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 h-24 resize-y focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={data.description}
          onChange={(e) => onChange('description', e.target.value)}
          placeholder="Describe your business"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700">Address</label>
        <input
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={data.address}
          onChange={(e) => onChange('address', e.target.value)}
          placeholder="Street, city"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700">Tags</label>
        <input
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={data.tags.join(', ')}
          onChange={(e) => onChange('tags', e.target.value.split(',').map((t) => t.trim()).filter(Boolean))}
          placeholder="comma,separated,tags"
        />
      </div>
    </div>
  )
}
