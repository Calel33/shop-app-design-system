import type { FormTabType } from '@/ui/components/types/business-dashboard.types'

const TABS: { key: FormTabType; label: string }[] = [
  { key: 'basic', label: 'Basic Info' },
  { key: 'hours', label: 'Hours' },
  { key: 'photos', label: 'Photos' },
  { key: 'contact', label: 'Contact Details' },
]

type Props = {
  active: FormTabType
  onChange: (tab: FormTabType) => void
}

export function FormTabs({ active, onChange }: Props) {
  return (
    <div role="tablist" aria-label="Edit Tabs" className="border-b border-slate-200 bg-slate-50">
      <div className="px-6 flex gap-1">
        {TABS.map((t) => (
          <button
            key={t.key}
            role="tab"
            aria-selected={active === t.key}
            aria-controls={`panel-${t.key}`}
            className={
              'px-4 py-3 text-sm font-medium rounded-t-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ' +
              (active === t.key
                ? 'bg-white border-b-2 border-blue-600'
                : 'text-slate-600 hover:bg-slate-100')
            }
            onClick={() => onChange(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  )
}
