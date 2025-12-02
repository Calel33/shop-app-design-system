import { Eye, Save } from 'lucide-react'

import type { ReactNode } from 'react'

export function DashboardHeader({ right }: { right?: ReactNode }) {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
      <div className="max-w-screen-2xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Manage Your Listing</h1>
        <div className="flex items-center gap-3">
          {right ?? (
            <>
              <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                <Eye className="h-4 w-4" />
                <span className="text-sm font-medium">Preview Live</span>
              </button>
              <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                <Save className="h-4 w-4" />
                <span className="text-sm font-medium">Save Changes</span>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
