import { ReactNode } from 'react'
import { DashboardSidebar } from './DashboardSidebar'
import { DashboardHeader } from './DashboardHeader'

type Props = { sidebar?: ReactNode; headerRight?: ReactNode; children: ReactNode }

export function BusinessDashboardLayout({ sidebar, headerRight, children }: Props) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="flex min-h-screen">
        <aside className="hidden lg:block w-[280px] bg-white border-r border-slate-200">
          {sidebar ?? <DashboardSidebar />}
        </aside>
        <main className="flex-1 flex flex-col min-w-0">
          <DashboardHeader right={headerRight} />
          <div className="flex-1 min-h-0">{children}</div>
        </main>
      </div>
    </div>
  )
}
