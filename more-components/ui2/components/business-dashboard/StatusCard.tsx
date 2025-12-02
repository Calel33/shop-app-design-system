import { Clock } from 'lucide-react'

export function StatusCard() {
  return (
    <div className="border-l-4 border-amber-500 bg-white rounded-r-xl p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <Clock className="h-5 w-5 text-amber-600 mt-0.5" />
        <div>
          <div className="font-semibold">Pending Approval</div>
          <p className="text-sm text-slate-600">
            Your changes have been submitted and are awaiting review. You will be notified when approved.
          </p>
        </div>
      </div>
    </div>
  )
}
