import type { ReactNode } from 'react'

export function EditPanel({ children }: { children: ReactNode }) {
  return (
    <section className="bg-white border-r border-slate-200 min-h-0 max-h-full overflow-auto">
      {children}
    </section>
  )
}
