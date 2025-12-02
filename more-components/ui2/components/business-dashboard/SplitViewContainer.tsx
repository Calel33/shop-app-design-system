import type { ReactNode } from 'react'

export function SplitViewContainer({ children }: { children: ReactNode }) {
  return (
    <div className="h-[calc(100vh-72px)] max-h-[calc(100vh-72px)] overflow-hidden">
      <div className="h-full grid grid-cols-1 lg:grid-cols-[55%_45%]">
        {children}
      </div>
    </div>
  )
}
