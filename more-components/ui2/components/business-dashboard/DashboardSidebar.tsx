import { BarChart3, Edit, Settings, HelpCircle, MapPinned } from 'lucide-react'

const NAV = [
  { key: 'dashboard', label: 'Dashboard', icon: BarChart3 },
  { key: 'manage', label: 'Manage Listing', icon: Edit, active: true },
  { key: 'analytics', label: 'Analytics', icon: BarChart3 },
  { key: 'settings', label: 'Settings', icon: Settings },
  { key: 'help', label: 'Help & Support', icon: HelpCircle },
]

export function DashboardSidebar() {
  return (
    <nav aria-label="Sidebar" className="h-full flex flex-col">
      <div className="px-6 py-5 border-b border-slate-200 flex items-center gap-3">
        <div className="h-9 w-9 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-700">
          <MapPinned className="h-5 w-5" />
        </div>
        <div className="font-semibold">LocalBiz Directory</div>
      </div>
      <ul className="p-2">
        {NAV.map((item) => {
          const Icon = item.icon
          const active = !!item.active
          return (
            <li key={item.key}>
              <button
                className={
                  'w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ' +
                  (active
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-700 hover:bg-slate-100')
                }
                aria-current={active ? 'page' : undefined}
              >
                <Icon className="h-4 w-4" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
