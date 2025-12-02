import type { ReactNode } from 'react'

export function PreviewPanel({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-0 max-h-full overflow-auto bg-slate-100">
      {children}
    </section>
  )
}
